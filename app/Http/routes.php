<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::get('/update', 'Datacontroller@update');
Route::get('/fetch', 'Datacontroller@fetch');
Route::get('/rand', 'Datacontroller@rand');
Route::get('/editor', function(){
	return view('edit');
});
Route::get('/view', function(){
	return view('view');
});