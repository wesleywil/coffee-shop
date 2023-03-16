<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;

use App\Models\Reservation;
use App\Models\Reserve_table;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservations = $this->when(Gate::allows('is_admin'), function () {
            return Reservation::all();
        })->otherwise(function () {
            return Reservation::where('user_id', auth()->user()->id)->get();
        });

        return response()->json([
            'data' => $reservations
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $user_id = auth()->user()->id;

        $validatedData = $request->validate([
            'table_number' => 'required',
            'reserve_date' => 'required|date',
            'table_id' => 'required|exists:reservation_tables,id,status,available',
        ]);

        //Retrieve the selected table
        $table = Reserve_table::find($validatedData['table_id']);
        $table->status = 'occupied';
        $table->save();

        //Create a new reservation
        $reservation = Reservation::create([
            'user_id' => $user_id,
            'reserve_date' => $validatedData['reserve_date'],
            'status' => 'pending',
        ]);

        // Associate the seleted table with the reservation
        $reservation->reservationTable()->associate($table);
        $reservation->save();

        //Return a response
        return response()->json([
            'message' => 'Reservation created successfully.',
            'reservation' => $reservation,
        ], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reservation = $this->when(Gate::allows('is_admin'), function () use ($id) {
            return Reservation::with('reservationTable:id,seats')->find($id);
        })->otherwise(function () use ($id) {
            return Reservation::with('reservationTable:id,seats')->where('user_id', auth()->user()->id)->find($id);
        });
        if (!$reservation) {
            return response()->json([
                'error' => 'Reservation not found'
            ], 404);
        }
        return response()->json([
            'reservation' => $reservation,
            'table' => $reservation->reservationTable,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $user_id = auth()->user()->id;

        $validatedData = $request->validate([
            'reserve_date' => 'required',
            'status' => 'required'
        ]);

        //Find the reserve by ID...
        $reserve = Reservation::find($id);

        if (!$reserve) {
            return response()->json([
                'error' => 'Reservation not found'
            ], 404);
        }
        if ($validatedData['status'] == 'closed') {
            $reserveTable = $reserve->reservationTable;
            if ($reserveTable) {
                $reserveTable->status = 'available';
                $reserveTable->save();
            }
        }
        $reserve->reserve_date = $validatedData['reserve_date'];
        $reserve->status = $validatedData['status'];
        $reserve->save();

        // Return a response indicating success
        return response()->json([
            'success' => true,
            'message' => 'Reservation updated successfully.',
            'data' => $reserve
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reserve = Reservation::find($id);

        if ($reserve) {
            $reserve->delete();
            return response()->json(['message' => 'Reservation deleted successfully!']);
        } else {
            return response()->json(['message' => 'Reservation not found'], 404);
        }
    }
}