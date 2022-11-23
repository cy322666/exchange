<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    static float $default = 1.0;

    protected $fillable = [
        'name',
        'value',
        'exchange',
    ];
}
