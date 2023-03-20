<?php

namespace App\Providers;

use App\Models\Reservation;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Validator::extend('not_on_same_day', function ($attribute, $value, $parameters, $validator) {
            $user_id = auth()->user()->id;
            $count = Reservation::where('user_id', $user_id)
                ->where('reserve_date', $value)
                ->count();

            return $count === 0;
        });
    }
}