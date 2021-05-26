const gmtTimeInMilliseconds = (offset: number) => {
  let d: Date = new Date();
  let gmt = d.getTime() + (d.getTimezoneOffset() * 6000);
  let newDate = new Date(gmt + (3600000 * offset));
  return `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
}

export default {
  gmtTimeInMilliseconds
}