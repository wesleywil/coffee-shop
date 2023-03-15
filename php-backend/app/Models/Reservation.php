<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'user_id', 'reserve_date', 'status'
    ];

    public function reservationTable(){
        return $this->hasOne(Reservation_Table::class);
    }

    public function contact(){
        return $this-> belongsTo(User::class, 'user_id')-> select('name', 'email');
    }
}
