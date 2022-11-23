<?php

namespace App\Console\Commands;

use App\Jobs\CourseGarantexJob;
use Illuminate\Console\Command;

class GetCourseGarantex extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'exchange:garantex';

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
        CourseGarantexJob::dispatch();

        return Command::SUCCESS;
    }
}
