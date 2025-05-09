function calculateCost(type, tier, hours) {
  const rates = {
    basic: 10,
    premium: 15,
    executive: 20
  };

  if (type === "individual") {
    return rates[tier] * hours;
  } else if (type === "team") {
    return 25 * hours;
  }

  return 0;
}

module.exports = { calculateCost };
