const formatAmount = (amount: number) => {
  return Intl.NumberFormat('en-IN', {}).format(amount);
};

export {formatAmount};
