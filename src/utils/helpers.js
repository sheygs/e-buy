// adds comma(s) to number
const formatPrice = (price) =>
  `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

const truncate = (words, limit = 12) =>
  words.length > limit ? `${words.slice(0, limit)}...` : words;

export { truncate, formatPrice };
