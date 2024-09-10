<?php

/*
 * This file is part of xypp/flarum-localize-date-lib.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Xypp\LocalizeDate;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/locale'),
    (new Extend\Settings)
        ->default("xypp.localize-date.timezone", "UTC")
        ->serializeToForum("xypp.localize-date.timezone", "xypp.localize-date.timezone"),
    (new Extend\Console())
        // ->command(Console\DateChangeCommand::class)
        ->schedule(Console\DateChangeCommand::class, function ($event) {
            $event->hourly();
        }),
];
