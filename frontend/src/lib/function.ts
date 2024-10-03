export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Pad with a leading zero if seconds are less than 10
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  return `${minutes}:${formattedSeconds}`;
}
