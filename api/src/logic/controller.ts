import timeZoneStrategy from './strategy';
import offsets from '../offset';
import ApiError from '../utils/errors';

export default class TimeZoneController {
  async displayTime(timeZone: string) {
    if (timeZone in offsets.offsets && timeZone in timeZoneStrategy) {
      const timeZoneContext = new timeZoneStrategy.TimeZones(new timeZoneStrategy[timeZone]());
      return timeZoneContext.getTime();
    }
    throw new ApiError(`Timezone doesn't exist`, 404);
  }
}