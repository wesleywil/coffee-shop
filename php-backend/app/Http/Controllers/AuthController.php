<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request){
        try{
            $validatedUser = Validator::make($request-> all(),[
                'email'=> 'required|email',
                'password'=> 'required'
            ]);

            if($validatedUser-> fails()){
                return response()-> json([
                    'status'=> false,
                    'message'=> 'validation error',
                    'errors'=> $validatedUser-> errors()
                ],401);
            }

            if(!Auth::attempt($request->only(['email','password']))){
                return response()->json([
                    'status'=> false,
                    'message'=> 'Email & Password does not match with our record.',
                ],401);
            }

            $user = User::where('email', $request-> email)-> first();

            return response()->json([
                'status'=> true,
                'message'=> 'User Logged In Successfully',
                'token'=> $user-> createToken("API TOKEN")-> plainTextToken
            ],200);
        }catch(\Throwable $th){
            return response()->json([
                'status'=> false,
                'message'=> $th-> getMessage()
            ],500);
        }
    }
    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request){
        $request -> user()-> currentAccessToken()->delete();
        return response()->json([
            'status'=> true,
            'message'=> 'User Logged Out Successfully'
        ],200);
    }
}
