export const trimString = (input: string): string => {
  const maxCharacters = 50;
  if (input.length > maxCharacters) {
    const words = input.substring(0, maxCharacters).split(" ");
    const lastIndex = words.length - 1;
    const truncatedString = words.slice(0, lastIndex).join("") + "...";
    return truncatedString;
  }
  return input;
};