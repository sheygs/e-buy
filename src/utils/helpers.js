function formatPrice(price) {
  // adds comma(s) to number
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

const truncate = (words, limit = 16) => {
  return words.length > limit ? `${words.slice(0, limit)}...` : words;
};

export { truncate, formatPrice };
