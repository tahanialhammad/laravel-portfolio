<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/projects', function(){
//     return App\Models\Project::with('user')->latest()->get();
// });

Route::get('/projects', 'App\Http\Controllers\ProjectsController@index');
Route::post('/projects', 'App\Http\Controllers\ProjectsController@store');






Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
