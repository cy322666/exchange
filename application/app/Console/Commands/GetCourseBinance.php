<?php

namespace App\Console\Commands;

use App\Jobs\CourseBinanceJob;
use Illuminate\Console\Command;

class GetCourseBinance extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'exchange:binance';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        CourseBinanceJob::dispatch();

        return Command::SUCCESS;
    }
}
