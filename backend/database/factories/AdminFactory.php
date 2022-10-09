<?php

namespace Database\Factories;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends Factory<Admin>
 */
class AdminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name,
            'login' => Str::random(),
            'password' => md5(fake()->password),
            'fully_access' => 0,
            'remember_token' => Str::random(10),
            'api_token' => Str::random(64),
            'created_at' => now(),
        ];
    }
}
