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
}