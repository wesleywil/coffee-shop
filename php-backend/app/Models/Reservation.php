<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'user_id',
        'reserve_date',
        'status',
        'reserve_tables_id'
    ];

    public function reservationTable()
    {
        return $this->belongsTo(Reserve_table::class, 'reserve_tables_id');
    }

    public function contact()
    {
        return $this->belongsTo(User::class, 'user_id')->select('name', 'email');
    }
}