<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    public function events()
    {
        return Event::all();
    }

    public function event($id)
    {
        return Event::find($id);
    }

    public function add_event(Request $request): array
    {
        $data = $request->post();
        if($request->only([
            'id',
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
            'phone',
            'api_token'
        ]))
        {   $find_admin = DB::table('admins')->where('api_token', '=', $data['api_token'])->select();
            if($find_admin)
            {
                $event = new Event();
                $event->type = $data['type'];
                $event->name = $data['name'];
                $event->preview = $data['preview'];
                $event->description = $data['description'];
                $event->date = $data['date'];
                $event->time = $data['time'];
                $event->place = $data['place'];
                $event->price = $data['price'];
                $event->full_name = $data['full_name'];
                $event->organization_name = $data['organization_name'];
                $event->phone = $data['phone'];
                $event->admin_id = $find_admin->value('id');
                $event->save();
                if($event->exists)
                {
                    $founded = DB::table('applications')->find($data['id']);
                    if(is_null($founded))
                    {
                        return [
                            "status_code" => 200,
                            "object" => Application::all(),
                        ];
                    }
                    if ($founded)
                    {
                        DB::table('applications')->delete($data['id']);
                    }
                    return [
                        "status_code" => 200,
                        "object" => Application::all(),
                    ];
                }
            }
            return [
                "status_code" => 404,
                "message" => "Could not find API_TOKEN",
            ];
            }
        return [
            "status_code" => 403,
            "message" => "Permission denied.",
            "error_with" => "POST request json"
        ];


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
                    "id" => $entity['id'],
                    "type" => $entity['type'],
                    "name" => $entity['name'],
                    "preview" => $entity['preview'],
                    "description" => $entity['description'],
                    "date" => $entity['date'],
                    "time" => $entity['time'],
                    "place" => $entity['place'],
                    "price" => $entity['price'],
                    "full_name" => $entity['full_name'],
                    "organization_name" => $entity['organization_name'],
                    "phone" => $entity['phone'],
                    "admin_id" => $entity['admin_id'],
                ]
            ];
        }
        return [
            "data" => [
                'error' => $entity['status_code'],
                'message' => "Could not send on event",
            ]
        ];

    }
}
