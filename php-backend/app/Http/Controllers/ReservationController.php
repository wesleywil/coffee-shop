<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservations = Reservation::all();

        return response()->json([
            'data'=>$reservations
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $user_id = auth()->user()->id;

        $validatedData = $request -> validate([
            'table_number' => 'required',
            'reserve_date' => 'required',
            'status' => 'required', 
        ]);

        // Create new reservation
        $reserve = new Reservation();
        $reserve -> table_number = $validatedData['table_number'];
        $reserve -> reserve_date = $validatedData['reserve_date'];
        $reserve -> status = $validatedData['status'];
        $reserve -> user_id = $user_id;
        $reserve -> save();

        return response()->json(['message'=> 'Reservatino was created with success!']);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reserve = Reservation::find($id);

        if(!$reserve){
            return response()->json([
                'error'=> 'Reservation not found'
            ],404);
        }
        return response()->json([
            'data' => $reserve
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $user_id = auth()->user()->id;

        $validatedData = $request -> validate([
            'table_number' => 'required',
            'reserve_date' => 'required',
            'status' => 'required'
        ]);

        //Find the reserve by ID...
        $reserve = Reservation::find($id);

        if(!$reserve){
            return response()->json([
                'error'=> 'Reservation not found'
            ],404);
        }
        
        $reserve -> table_number = $validatedData['table_number'];
        $reserve -> reserve_date = $validatedData['reserve_date'];
        $reserve -> status = $validatedData['status'];
        $reserve -> save();

        // Return a response indicating success
        return response()->json([
            'success'=> true,
            'message'=> 'Reservation updated successfully.',
            'data'=> $reserve
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reserve = Reservation::find($id);

        if($reserve){
            $reserve->delete();
            return response()->json(['message'=> 'Reservation deleted successfully!']);
        }else{
            return response()->json(['message'=> 'Reservation not found'],404);
        }
    }
}
