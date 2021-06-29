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


Route::any('/admin/{any}', [App\Http\Controllers\FrontEnd::class, 'index'])->where('any', '^(?!api).*$');
Route::any('/organizer/{any}', [App\Http\Controllers\FrontEnd::class, 'index'])->where('any', '^(?!api).*$');
