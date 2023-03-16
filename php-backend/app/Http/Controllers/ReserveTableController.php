<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;

use App\Models\Reserve_table;

class ReserveTableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tables = Reserve_table::all();

        return response()->json([
            'data' => $tables
        ], 201);
    }

    /**
     * Store a newly created resource in storage.
     */public function store(Request $request)
    {
        $validatedData = $request->validate([
            'seats' => 'required',
        ]);

        if (Gate::allows('is_admin')) {
            $reserveTable = Reserve_table::create([
                'seats' => $validatedData['seats'],
                'status' => 'available',
            ]);

            $response = [
                'message' => 'Table created successfully!',
                'reserve_table' => $reserveTable
            ];

            return response()->json($response, 201);
        }

        return response()->json([
            'status' => 401,
            'message' => 'Unauthorized',
        ], 401);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $table = Reserve_table::find($id);

        return response()->json([
            'data' => $table
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'seats' => 'required',
            'status' => 'required',
        ]);


        if (Gate::allows('is_admin')) {
            $table = Reserve_table::find($id);

            if ($table) {
                $table->seats = $validatedData['seats'];
                $table->status = $validatedData['status'];
                $table->save();

                $response = [
                    'message' => 'Table Updated Successfully!',
                    'reserve_table' => $table
                ];

                return response()->json($response, 201);
            }
            $response = [
                'status' => '404',
                'message' => 'Table Does not Exist',
            ];

            return response()->json($response, 404);

        }

        $response = [
            'status' => 401,
            'message' => 'Unauthorized!',
        ];

        return response()->json($response, 401);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (Gate::allows('is_admin')) {
            $table = Reserve_table::find($id);

            if ($table) {
                $table->delete();
                $response = [
                    'message' => 'Table Deleted Successfully!',
                    'reserve_table' => $table
                ];

                return response()->json($response, 201);
            }
            $response = [
                'status' => '404',
                'message' => 'Table Does not Exist',
            ];

            return response()->json($response, 404);

        }

        $response = [
            'status' => 401,
            'message' => 'Unauthorized!',
        ];

        return response()->json($response, 401);



    }
}