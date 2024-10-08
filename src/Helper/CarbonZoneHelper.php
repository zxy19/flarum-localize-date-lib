<?php

namespace Xypp\LocalizeDate\Helper;

use Carbon\Carbon;
use Flarum\Settings\SettingsRepositoryInterface;

class CarbonZoneHelper
{
    private SettingsRepositoryInterface $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    public function z(Carbon $carbon)
    {
        return $carbon->setTimezone($this->settings->get('xypp.localize-date.timezone') ?: 'UTC');
    }
    public function now(): Carbon
    {
        return $this->z(Carbon::now());
    }
}