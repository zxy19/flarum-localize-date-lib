import app from 'flarum/forum/app';
import { _serverDateChangeAt, _toServerTimezone } from '../common';

export function toServerTimezone(time: any) {
  return _toServerTimezone(app, time);
}
export function serverDateChangeAt() {
  return _serverDateChangeAt(app);
}