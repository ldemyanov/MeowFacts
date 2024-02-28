export const formatDate = (input: string): string => {
  const date = new Date(input);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Europe/Moscow",
  };
  return date.toLocaleString("ru-RU", options);
}