<?php

// app/Models/Soal.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soal extends Model
{
    use HasFactory;

    protected $table = 'soals'; // Tentukan tabel sebagai "soals"
    protected $fillable = [
        'soal', 'jawaban_1', 'jawaban_2', 'jawaban_3', 
        'gaya_belajar_1', 'gaya_belajar_2', 'gaya_belajar_3'
    ];

}
