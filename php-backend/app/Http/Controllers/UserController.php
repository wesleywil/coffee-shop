<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request){
        try{
            //Validated
            $validatedUser = Validator::make($request-> all(),[
                'name'=> 'required',
                'email'=>'required|email|unique:users,email',
                'password'=>'required'
            ]);

            if($validatedUser->fails()){
                return response()->json([
                    'status'=> false,
                    'message'=> 'validation error',
                    'errors'=>$validatedUser->users()
                ],401);
            }

            $user = User::create([
                'name'=>$request -> name,
                'email'=> $request->email,
                'password'=> Hash::make($request->password),
                'admin'=> false 
            ]);

            return response()->json([
                'status'=> true,
                'message'=>'User Created Successfully',
                'token'=> $user-> createToken("API TOKEN")-> plainTextToken
            ],200);
            
        }catch(\Thowable $th){
            return response()->json([
                'status' => false,
                'message'=> $th-> getMessage()
            ],500);
        }
    }
}
