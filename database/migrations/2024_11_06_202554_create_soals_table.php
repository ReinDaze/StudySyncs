<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSoalsTable extends Migration
{
    public function up()
    {
        Schema::create('soals', function (Blueprint $table) {
            $table->id();
            $table->string('soal');
            $table->string('jawaban_1');
            $table->string('jawaban_2');
            $table->string('jawaban_3');
            $table->string('gaya_belajar_1')->default('Kinestetik'); // Kinestetik, Visual, Auditori
            $table->string('gaya_belajar_2')->default('Visual'); // Kinestetik, Visual, Auditori
            $table->string('gaya_belajar_3')->default('Auditori'); // Kinestetik, Visual, Auditori
            $table->integer('nilai_jawaban_1')->default(0);
            $table->integer('nilai_jawaban_2')->default(0);
            $table->integer('nilai_jawaban_3')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('soals');
    }
}