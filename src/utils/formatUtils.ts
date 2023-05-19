const formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const toGBP = (input: string | number): string => {
  if (typeof input === "string") {
    return formatter.format(Number.parseInt(input, 10));
  }
  return formatter.format(input);
};
