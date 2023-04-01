<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Charge;

use App\Models\Order;

class PaymentController extends Controller
{
    public function payment(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $token = $request->input('token');
        $total = $request->input('total');
        $description = $request->input('description');

        //An payment object using the Stripe's api
        $payment = Charge::create([
            'total' => $total,
            'currency' => 'USD',
            'description' => $description,
            'source' => $token,
        ]);

        return response()->json([
            'message' => 'The payment was done, successfully!',
            'payment' => $payment
        ], 200);
    }
}