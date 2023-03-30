<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Reserve_table extends Model
{
    protected $fillable = [
        'seats',
        'status'
    ];

    protected static function booted()
    {
        static::retrieved(function ($table) {
            if ($table->reservation && $table->reservation->reserve_date < date('Y-m-d')) {
                $table->update(['status' => 'available']);
                $table->reservation->update(['status' => 'closed']);
            }
        });
    }

}