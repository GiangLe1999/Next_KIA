import { carFees } from "@/data/single-car-page";

export const calculateFinalPrice = (
  registration: number,
  listPrice: number,
  tax: number,
  percent?: number
) => {
  const { phiDkyBienso, phiDuongbo, phiDkiem, phiDvu, thuchiho, bhTNDS } =
    carFees;

  const registrationFee = (registration * 1000000 * tax * 10) / 100;

  const finalPrice =
    listPrice * 1000000 +
    registrationFee +
    phiDkiem +
    phiDkyBienso +
    phiDuongbo +
    phiDvu +
    thuchiho +
    bhTNDS;

  if (percent) {
    return Math.round((finalPrice * percent) / 100 / 1000000);
  }

  return Math.round(finalPrice / 1000000);
};
