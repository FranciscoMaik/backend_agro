export const addMinutes = (minutes: number) =>
  new Date(new Date().getTime() + minutes * 60 * 1000);
