<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function add_admin(Request $request): array
    {
        $data = $request->post();
        $detect_admin = DB::table('admins')->select($data['api_token']);
        if ($detect_admin)
        {
            $new_admin = new Admin();
            $new_admin->name = $data['name'];
            $new_admin->login = $data['login'];
            $new_admin->password = md5($data['password']);
            $new_admin->fully_access = 0;
            $new_admin->api_token = Str::random(64);

            $new_admin->save();

            return  $this->return_info([
                'operation_type_successfully' => true,
                'object' => [
                    "status_code" => "200",
                    'operation_type' => 'adder',
                    "name" => $new_admin->name,
                    "login" => $new_admin->login,
                    "id" => $new_admin->id,
                    ]
            ]);
        }
        else
        {
            return $this->return_info([
                'operation_type_successfully' => false,
                'object' => [
                    'status_code' => 404
                ]
            ]);
        }
    }

    public function delete_admin(Request $request): array
    {
        $data = $request->post();
        $detect_admin = DB::table('admins')->select($data['api_token']);
        if ($detect_admin)
        {
            DB::table('admins')->where('login', '=', $data['login'])->delete();
            return [
                'status_code' => "200:1",
                'data' => [
                    'login' => $data['login']
                ]
            ];

        }
        return [
            "status_code" => 404,
            "message" => "Could not find api_token."
        ];

    }

    public function authorize_admin(Request $request): array
    {
        $data = $request->post();
        if ($this->check_request_requires($request, ['login', 'password']))
        {
            $admin = DB::table('admins')->select()->where('login', '=', $data['login'])->where('password', '=', md5($data['password']))->first();
            if ($admin)
            {
                return [
                    'status_code' => 200,
                    'object' => [
                        'id' => $admin->id,
                        'api_token'=> $admin->api_token,
                    ]
                ];
            }
            return [
                'status_code' => 404,
                'object' => [
                    'message' => "Incorrect login and password!"
                ]
            ];

        }
        return [
            "status_code" => 404,
            "message" => "POST error.",
        ];
    }

    public function get_all_application(Request $request): \Illuminate\Database\Eloquent\Collection|array
    {
        if($this->check_request_requires($request, ['api_token']))
        {
            if($this->find_administrator($request->api_token))
            {
                return Application::all();
            }
        }
        return $this->return_info([
            "operation_type_successfully" => 0,
            "object" => [
                "status_code" => 404,
                "message" => "Could not find API!"
            ],
        ]);
    }

    public function get_application(Request $request, $id): array
    {
        if($this->check_request_requires($request, ['api_token']))
        {
            if($this->find_administrator($request->api_token))
            {
                return Application::find($id);
            }
        }
        return $this->return_info([
            "operation_type_successfully" => 0,
            "object" => [
                "status_code" => 404,
            ],
        ]);
    }

    public function delete_application(Request $request): array
    {
        if($this->check_request_requires($request, [
            'api_token',
            'id',
        ]))
        {
            if($this->find_administrator($request->api_token))
            {
                DB::table('applications')->delete($request->id);
                return [
                    "status_code" => 200,
                    "object" =>  Application::all(),
                ];
            }
            return $this->return_info([
                "operation_type_successfully" => 0,
                "object" => [
                    "status_code" => 404,
                ]
            ]);
        }
        return [
          "status_code" => 404,
            "message" => "POST request error."
        ];
    }

    public function add_application(Request $request): array
    {
        if($this->check_request_requires($request, [
            'type',
            'name',
            'preview',
            'description',
            'date',
            'time',
            'place',
            'price',
            'full_name',
            'organization_name',
            'email',
            'phone',
        ]))
        {
            $application = new Application([
                'type' => $request->type,
                'name' => $request->name,
                'preview' => $request->preview,
                'description' => $request->description,
                'date' => $request->date,
                'time' => $request->time,
                'place' => $request->place,
                'price' => $request->price,
                'full_name' => $request->full_name,
                'organization_name' => $request->organization_name,
                'email' => $request->email,
                'phone' => $request->phone,
            ]);
            $application->save();
            if($application->exists)
            {
                return [
                    "status_code" => 200,
                    "object" => [
                        "id" => $application->id,
                    ],
                ];
            }
            return [
                "status_code" => 403,
            ];
        }
        return [
            "status_code" => 404,
            "message" => "POST request error."
        ];
    }

    private function check_request_requires(Request $request, $args): array
    {
        return $request->only($args);
    }

    private function find_administrator($api_token): bool
    {
        return DB::table('admins')->where('api_token', '=', $api_token)->exists();
    }

    private function return_info($data): array
    {
        $entity = $data['object'];
        if ($data['operation_type_successfully'])
        {
            return [
                "status_code" => $entity['status_code'],
                "data" => [
                    $entity['operation_type'] => true,
                    "name" => $entity['name'],
                    "login" => $entity['login'],
                    "id" => $entity['id'],
                ]
            ];
        }
        return [
            "data" => [
                'error' => $entity['status_code'],
                'message' => "Could not find API",
            ]
        ];

    }

}
