export interface IReturnedTime {
  currentTime: string;
}

export interface ITimeZoneStrategy {
  calculateTime(): string;
}