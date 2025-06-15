export function formatTime(timeInSeconds: number) {
  const minutes = Math.floor(timeInSeconds / 60);
  let seconds: number | string = Math.floor(timeInSeconds % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
