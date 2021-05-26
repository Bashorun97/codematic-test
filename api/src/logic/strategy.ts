import { ITimeZoneStrategy} from '../utils/types';
import gmtTimeInMilliseconds from '../utils/gmtTimeInMilliseconds';

import offsets from '../offset';

class TimeZones {
  
  private timeZone: ITimeZoneStrategy;

  constructor(timeZone: ITimeZoneStrategy) {
    this.timeZone = timeZone;
    
  }

  public setTimeZoneStrategy(timeZone: ITimeZoneStrategy) {
    this.timeZone = timeZone;
  }

  public getTime() {
    return this.timeZone.calculateTime();
  }
}

class CVT implements ITimeZoneStrategy {
  public calculateTime(): string {
    const cvtTime = gmtTimeInMilliseconds.gmtTimeInMilliseconds(offsets.offsets.CVT);
    return cvtTime;
  } 
}

class GMT implements ITimeZoneStrategy {
  public calculateTime(): string {
    const gmtTime = gmtTimeInMilliseconds.gmtTimeInMilliseconds(offsets.offsets.GMT);
    return gmtTime;
  } 
}

class WAT implements ITimeZoneStrategy {
  public calculateTime(): string {
    const watTime = gmtTimeInMilliseconds.gmtTimeInMilliseconds(offsets.offsets.WAT);
    return watTime;
  } 
}

class CAT implements ITimeZoneStrategy {
  public calculateTime(): string {
    const catTime = gmtTimeInMilliseconds.gmtTimeInMilliseconds(offsets.offsets.CAT);
    return catTime;
  } 
}

class EAT implements ITimeZoneStrategy {
  public calculateTime(): string {
    const watTime = gmtTimeInMilliseconds.gmtTimeInMilliseconds(offsets.offsets.WAT);
    return watTime;
  } 
}

class MT implements ITimeZoneStrategy {
  public calculateTime(): string {
    const mtTime = gmtTimeInMilliseconds.gmtTimeInMilliseconds(offsets.offsets.MT);
    return mtTime;
  } 
}

export default {
  TimeZones,
  CVT,
  GMT,
  WAT,
  CAT,
  EAT,
  MT
};
