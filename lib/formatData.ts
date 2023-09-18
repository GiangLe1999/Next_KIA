export const formatPrice = (rawPrice: number, withoutMultiply?: boolean) => {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  let formattedPrice;

  if (withoutMultiply) {
    formattedPrice = VND.format(rawPrice);
  } else {
    formattedPrice = VND.format(rawPrice * 1000000);
  }

  return formattedPrice.substring(0, formattedPrice.length - 1);
};
