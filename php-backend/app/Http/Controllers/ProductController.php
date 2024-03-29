<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;

use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();

        return response()->json([
            'data' => $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required|string',
            'image' => 'required|max:255',
            'price' => 'required|numeric',
            'category' => 'required|string',
        ]);

        if (Gate::allows('is_admin')) {
            // Create a new product with the validated data
            $product = new Product();
            $product->title = $validatedData['title'];
            $product->description = $validatedData['description'];
            $product->image = $validatedData['image'];
            $product->price = $validatedData['price'];
            $product->category = $validatedData['category'];
            $product->save();

            // Return a response indicating success
            return response()->json(['message' => 'Product created successfully!'], 201);
        }
        return response()->json([
            'status' => 401,
            'message' => 'Unauthorized'
        ], 401);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'error' => 'Product not found'
            ], 404);
        }
        return response()->json([
            'data' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required|string',
            'image' => 'required|max:255',
            'price' => 'required|numeric',
            'category' => 'required|string',
        ]);

        if (Gate::allows('is_admin')) {
            //Find the product by ID...
            $product = Product::find($id);

            if (!$product) {
                return response()->json([
                    'error' => 'Product not found'
                ], 404);
            }
            $product->title = $validatedData['title'];
            $product->description = $validatedData['description'];
            $product->image = $validatedData['image'];
            $product->price = $validatedData['price'];
            $product->category = $validatedData['category'];
            $product->save();

            // Return a response indicating success
            return response()->json([
                'success' => true,
                'message' => 'Product updated successfully.',
                'data' => $product
            ]);
        }
        return response()->json([
            'status' => 401,
            'message' => 'Unauthorized'
        ], 401);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (Gate::allows('is_admin')) {
            $product = Product::find($id);

            if ($product) {
                $product->delete();
                return response()->json(['message' => 'Product deleted successfully!']);
            } else {
                return response()->json(['message' => 'Product not found'], 404);
            }
        }
        return response()->json([
            'status' => 401,
            'message' => 'Unauthorized'
        ], 401);
    }
}