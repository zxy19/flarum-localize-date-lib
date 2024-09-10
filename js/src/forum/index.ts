import app from 'flarum/forum/app';
import { _serverDateChangeAt, _toServerTimezone } from '../common';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'


app.initializers.add('xypp/flarum-localize-date-lib', () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
})

export function toServerTimezone(time: any) {
  return _toServerTimezone(app, time);
}
export function serverDateChangeAt() {
  return _serverDateChangeAt(app);
}