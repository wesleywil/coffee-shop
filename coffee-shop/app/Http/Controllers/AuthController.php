<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request){
        $credentials = $request-> only('email', 'password');

        if(Auth::attempt($credentials)){
            //authentication passed...
            $user = Auth::user();
            $token = $user-> createToken('API Access')-> accessToken;
            return response()->json([
                'status'=> 'success',
                'message'=> 'Successfully Authenticated.',
                'access_token'=> $token,
                'token_type'=> 'Bearer',
            ]);
        }
        return response()->json([
            'status'=> 'error',
            'message'=> 'Invalid email or password'
        ],401);
    }
    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request){
        $user = Auth::user();
        $user -> tokens()-> delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out.',
        ]);
    }
}
