export const formatPrice = (rawPrice: number) => {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const formattedPrice = VND.format(rawPrice * 1000000);

  return formattedPrice.substring(0, formattedPrice.length - 1);
};
