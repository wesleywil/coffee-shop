<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Reservation;

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

    public function reservation()
    {
        return $this->hasOne(Reservation::class, 'reserve_tables_id');
    }
}