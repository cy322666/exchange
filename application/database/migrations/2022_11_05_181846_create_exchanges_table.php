<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exchanges', function (Blueprint $table) {
            $table->id();

            $table->integer('contact_id')->nullable();
            $table->integer('lead_id')->unique()->nullable();
            $table->string('lead_status')->default('Ждем оплату');
            $table->string('wallet')->nullable();
            $table->string('type_exchange')->nullable();
            $table->string('email')->nullable();
            $table->string('method_pay')->nullable();
            $table->float('send_cost')->nullable();
            $table->string('send_currency')->nullable();
            $table->float('need_cost')->nullable();
            $table->string('need_currency')->nullable();
            $table->float('exchange_rate')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exchanges');
    }
};
