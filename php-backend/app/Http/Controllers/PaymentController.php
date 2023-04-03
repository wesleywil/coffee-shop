<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Charge;
use Exception;


use App\Models\Order;

class PaymentController extends Controller
{
    public function payment(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $validatedData = $request->validate([
            'token' => 'required',
            'order_id' => 'required|integer',
            'description' => 'required|string',
        ]);

        $token = $validatedData['token'];
        $order_id = $validatedData['order_id'];
        $description = $validatedData['description'];

        $order = Order::find($order_id);

        if (!$order) {
            return response()->json([
                'error' => 'Order not found',
            ], 404);
        }

        $amount = $order->total * 100;

        try {
            $payment = Charge::create([
                'amount' => $amount,
                'currency' => 'USD',
                'description' => $description,
                'source' => $token['id'],
            ]);

            return response()->json([
                'message' => 'Payment successful',
                'payment' => $payment,
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error' => 'Payment failed',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

}