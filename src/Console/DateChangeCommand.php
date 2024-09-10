<?php

namespace Xypp\LocalizeDate\Console;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Xypp\LocalizeDate\Event\DateChangeEvent;
use Xypp\LocalizeDate\Helper\CarbonZoneHelper;
use Illuminate\Events\Dispatcher;

class DateChangeCommand extends Command
{
    /**
     * @var string
     */
    protected $signature = 'xypp-localize-date:change';

    /**
     * @var string
     */
    protected $description = 'Scheduled to trigger event when date changed';
    protected CarbonZoneHelper $helper;
    public Dispatcher $events;

    public function __construct(CarbonZoneHelper $helper,Dispatcher $events)
    {
        parent::__construct();
        $this->helper = $helper;
        $this->events = $events;
    }

    public function handle()
    {
        $date = $this->helper->now();
        if ($date->hour == 0) {
            $this->info("Date changed to " . $date->toDateTimeString());
            $this->events->dispatch(new DateChangeEvent($date));
        }
    }
}