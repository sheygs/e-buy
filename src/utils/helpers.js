function formatCurrency(amount, currency) {
  return removeDecimalSpaces(
    amount.toLocaleString("en-US", {
      style: "currency",
      currency,
    })
  );
}

function removeDecimalSpaces(string) {
  return string.split(".")[0];
}

const truncate = (words, limit = 15) => {
  return words.length > limit ? `${words.slice(0, limit)}...` : words;
};

export { truncate, formatCurrency };
