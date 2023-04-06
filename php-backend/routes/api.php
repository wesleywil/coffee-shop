<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ReserveTableController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Authentication API
Route::post('/login', [AuthController::class, 'authenticate']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
//Users API
Route::post('/register', [UserController::class, 'register']);

//Products API
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::middleware('auth:sanctum')->post('/products', [ProductController::class, 'store']);
Route::middleware('auth:sanctum')->put('/products/{id}', [ProductController::class, 'update']);
Route::middleware('auth:sanctum')->delete('/products/{id}', [ProductController::class, 'destroy']);

//Reservations API
Route::middleware('auth:sanctum')->get('/reservations', [ReservationController::class, 'index']);
Route::middleware('auth:sanctum')->get('/reservations/today', [ReservationController::class, 'getTodaysReservation']);
Route::middleware('auth:sanctum')->get('/reservations/{id}', [ReservationController::class, 'show']);
Route::middleware('auth:sanctum')->post('/reservations', [ReservationController::class, 'store']);
Route::middleware('auth:sanctum')->put('/reservations/{id}', [ReservationController::class, 'update']);
Route::middleware('auth:sanctum')->delete('/reservations/{id}', [ReservationController::class, 'destroy']);

//Tables API
Route::get('/tables', [ReserveTableController::class, 'index']);
Route::get('/tables/{id}', [ReserveTableController::class, 'show']);
Route::middleware('auth:sanctum')->post('/tables', [ReserveTableController::class, 'store']);
Route::middleware('auth:sanctum')->put('/tables/{id}', [ReserveTableController::class, 'update']);
Route::middleware('auth:sanctum')->delete('/tables/{id}', [ReserveTableController::class, 'destroy']);

//Orders API
Route::middleware('auth:sanctum')->post('/orders', [OrderController::class, 'store']);
Route::middleware('auth:sanctum')->get('/myorders/{reservationId}', [OrderController::class, 'getOrdersByReservationId']);
Route::middleware('auth:sanctum')->get('/orders/{id}', [OrderController::class, 'show']);

// Payments API
Route::middleware('auth:sanctum')->post('/payment', [PaymentController::class, 'payment']);