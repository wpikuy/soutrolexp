<?php namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Dataset;

class Kernel extends ConsoleKernel {

	/**
	 * The Artisan commands provided by your application.
	 *
	 * @var array
	 */
	protected $commands = [
		'App\Console\Commands\Inspire',
	];

	/**
	 * Define the application's command schedule.
	 *
	 * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
	 * @return void
	 */
	protected function schedule(Schedule $schedule)
	{
		$schedule->command('inspire')
				 ->hourly();
		$schedule->call(function (){
			$keys = [
					'machine_1_source_1_voltage',
					'machine_1_source_1_current',
					'machine_1_source_1_state',
			];
			foreach ($keys as $key){
				$dataSet = Dataset::where('key', '=', $key)->firstOrFail();
				$dataSet->value = mt_rand(0, 1000);
				$dataSet->save();
			}
		})->cron('* * * * *');
	}

}
