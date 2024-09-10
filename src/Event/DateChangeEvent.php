<?php

namespace Xypp\LocalizeDate\Event;

use Carbon\Carbon;

class DateChangeEvent
{
    public Carbon $date;
    public function __construct(Carbon $date)
    {
        $this->date = $date;
    }
}