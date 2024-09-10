# Localize Date Lib

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/xypp/flarum-localize-date-lib.svg)](https://packagist.org/packages/xypp/flarum-localize-date-lib) [![Total Downloads](https://img.shields.io/packagist/dt/xypp/flarum-localize-date-lib.svg)](https://packagist.org/packages/xypp/flarum-localize-date-lib)

A [Flarum](http://flarum.org) extension. Datezone configure and date event lib

## Installation

As normal user, You will never have to install the extension manually.

## Develop

### Frontend

The timezone will be serialized to forum model on attribute `xypp.localize-date.timezone`.

You can use our export function to get some value

- toServerTimezone
- serverDateChangeAt

### Backend

Use IOC to get the helper `CarbonZoneHelper`

```php

$newCarbonObj = $helper->z($carbonObj);//set timezone to the carbon object

$now = $helper->now();//get current time in target timezone

```

Event `DateChangeEvent` will trigger in 00:xx:xx every day.

It's not guaranteed that the event will be triggered at exactly which minute or second.

## Links

- [Packagist](https://packagist.org/packages/xypp/flarum-localize-date-lib)
- [GitHub](https://github.com/zxy19/flarum-localize-date-lib)
