<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Reservation;
use App\Models\CartItem;

class Order extends Model
{
    protected $fillable = [
        'reserve_id',
        'total',
        'status'
    ];

    public function toReservation()
    {
        return $this->belongsTo(Reservation::class, 'reserve_id');
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }
}