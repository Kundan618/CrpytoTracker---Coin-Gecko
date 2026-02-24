export const formatPercentage = (num) => {
  if (num === null || num === undefined || isNaN(num)) return "N/A";
  return Number(num).toFixed(2) + "%";
};

export const formatCurrency = (num, currency) => {
  if (num === null || num === undefined || isNaN(num)) return "N/A";

  return num.toLocaleString(
    currency === "inr" ? "en-IN" : "en-US",
    {
      style: "currency",
      currency: currency === "inr" ? "INR" : "USD",
    }
  );
};