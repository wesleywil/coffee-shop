<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request){
        //Validate the request data
        $validatedData = $request->validate([
            'name'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|min:6',
        ]);

        //Create the new user
        $user = new User();
        $user->name = $validatedData['name'];
        $user->email = $validatedData['email'];
        $user->password = bcrypt($validatedData['password']);
        $user->admin = false; // Set the admin property to false
        $user->save();

        // Generate a token for the new user
        $token = $user-> createToken('API Token')-> accessToken;

        // Return a JSON response with the token
        return response()->json([
            'status'=> 'success',
            'token'=>$token
        ]);
    }
}
