<?php

namespace Database\Factories;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends Factory<Admin>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "type" => fake()->name(),
            "name" => fake()->jobTitle(),
            "preview" =>fake()->realText(50),
            "description" => fake()->realText(),
            "date" => fake()->date(),
            "time" => fake()->time(),
            "place" => fake()->address(),
            "price" => fake()->randomDigit(),
            "full_name" => fake()->lastName.' '.fake()->name,
            "organization_name" => fake()->name(),
            "phone" => fake()->phoneNumber,
        ];
    }
}
