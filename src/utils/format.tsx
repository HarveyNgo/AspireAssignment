const formatAmount = (amount: number) => {
  return Intl.NumberFormat('en-IN', {
    // style: 'currency',
    // currency: 'EUR',
  }).format(amount);
  // return currencyFormatter.format(Math.round(amount) / 100);
};

export {formatAmount};
