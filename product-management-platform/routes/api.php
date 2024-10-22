<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\productController;

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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    // User routes
    Route::get('/logout', [AuthController::class, 'logout']);
      // Products routes
      Route::get('/products', [productController::class, 'index']);
      Route::post('/products-create', [productController::class, 'store']);
      Route::put('/products-edit/{id}', [productController::class, 'update']);
      Route::delete('/products-delete/{id}', [productController::class, 'destroy']);
});
