const gmtTimeInMilliseconds = (offset: number) => {
  const d: Date = new Date();
  const gmt = d.getTime() + (d.getTimezoneOffset() * 6000);
  const newDate = new Date(gmt + (3600000 * offset));
  return `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
};

export default {
  gmtTimeInMilliseconds
};