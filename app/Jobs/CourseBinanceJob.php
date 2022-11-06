<?php

namespace App\Jobs;

use App\Models\Course;
use App\Services\Exchange\ExchangeService;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class CourseBinanceJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private static string $exchange = 'bin';
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {

            $courses = ExchangeService::binance();

            Course::query()
                ->where('exchange', self::$exchange)
                ->delete();

            foreach ($courses as $course) {

                Course::query()->create([
                    'exchange' => self::$exchange,
                    'name' => strtolower($course->symbol),
                    'value' => $course->askPrice,
                ]);
            }

        } catch (GuzzleException $exception) {

            Log::error(__METHOD__.' : '.$exception->getMessage().' '.$exception->getFile());

            $this->fail();
        }
    }
}
