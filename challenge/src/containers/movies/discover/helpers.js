export function truncateText(text) {
  if (!text) {
    return '';
  }

  const words = text.split(' ');

  if (words.length <= 20) {
    return text;
  }

  const slicedContent = words.slice(0, 20);
  return `${slicedContent.join(' ')}...`;
}
