<?php

use App\Http\Controllers\SiteController;
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
    return view('index');
});

Route::get('rub', function () {
    return view('rub');
});

Route::get('usdt', function () {
    return view('usdt');
});

Route::get('cashin', function () {
    return view('cashin');
});

Route::get('rub-cash', function () {
    return view('rub-cash');
});

Route::get('exchange', [SiteController::class, 'exchange'])->name('exchange');

Route::post('form', [SiteController::class, 'form'])->name('form');
