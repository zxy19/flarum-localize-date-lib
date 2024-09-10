import AdminApplication from "flarum/admin/AdminApplication";
import ForumApplication from "flarum/forum/ForumApplication";

/**
 * convert time to server timezone
 * @param time Time format accept by dayjs
 * @returns dayjs object
 */
export function _toServerTimezone(app: ForumApplication | AdminApplication, time: any): any {
    const timezone = app.forum.attribute<string>("xypp.localize-date.timezone");
    return dayjs(time).tz(timezone);
}
/**
 * Get the time when server date will change in local timezone.
 * @returns dayjs object
 */
export function _serverDateChangeAt(app: ForumApplication | AdminApplication) {
    const timezone = app.forum.attribute<string>("xypp.localize-date.timezone");
    return dayjs.tz("00:00:00", timezone);
}