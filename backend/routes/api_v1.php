<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\AdminController, App\Http\Controllers\Api\V1\EventController;

//Event requests
Route::get("/events", [EventController::class, "events"])->name("events");
Route::get('/events/get/{id}', [EventController::class, "event", "id"])->name("found_event");

//Admin requests
// Admin add, delete and authorization
Route::post('/admin/add', [AdminController::class, "add_admin"])->name("add_administrator");
Route::post('/admin/delete', [AdminController::class, "delete_admin"])->name("delete_administrator");
Route::post('/admin/auth', [AdminController::class, "authorize_admin"])->name("authorization_admin");
//Application add, get, delete
Route::post('/admin/add/application', [AdminController::class, "add_application"]);
Route::post('/admin/get/applications', [AdminController::class, "get_all_application"])->name("get_all_applications_for_submitting");
Route::post('/admin/get/applications/{id}', [AdminController::class, "get_application"])->name("get_application_with_id");
Route::post('/admin/delete/application', [AdminController::class, "delete_application"]);
// The application was sent correctly and approved
Route::post('/admin/add/events', [EventController::class, "add_event"])->name("add_event");
