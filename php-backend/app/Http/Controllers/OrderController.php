<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

use App\Models\Order;
use App\Models\Reservation;
use App\Models\CartItem;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user_id = auth()->user()->id;

        $validatedData = $request->validate([
            'reserve_id' => 'required',
            'cart_items' => 'required|array',
            'cart_items.*.product_id' => 'required|integer',
            'cart_items.*.quantity' => 'required|integer|min:1',
        ]);

        $reservation = Reservation::find($validatedData['reserve_id']);

        $order = Order::create([
            'user_id' => $user_id,
            'reserve_id' => $validatedData['reserve_id'],
            'status' => 'placed',
        ]);

        $total = 0;

        foreach ($request->validatedData('cart_items') as $item) {
            $cartItem = new CartItem([
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
            ]);

            $total += $cartItem->product->price * $cartItem->quantity;
            $order->cartItems()->save($cartItem);
        }

        $order->total = $total;
        $order->toReservation()->associate($reservation);
        $order->save();

        return response()->json(['message' => 'Order created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}