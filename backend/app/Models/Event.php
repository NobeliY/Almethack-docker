<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'name',
        'preview',
        'description',
        'date',
        'time',
        'place',
        'price',
        'full_name',
        'organization_name',
        'phone',
    ];

    protected $hidden = [
      'created_at',
      'updated_at',
    ];

    public  function admin()
    {
        $this->belongsTo(Admin::class);
    }
}
