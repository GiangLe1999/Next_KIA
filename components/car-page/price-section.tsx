"use client";

import { useFetchCarLines } from "@/hooks/useFetchCarLines";
import { calculateFinalPrice } from "@/lib/calculatePrice";
import { getCarRegistration } from "@/lib/fetchData";
import { CarLineType } from "@/types";
import { FC, useEffect, useState } from "react";
import CalInterestForm from "./calculate-interest-form";
import InterestDetailTable from "./interest-detail-table";
import FinalPriceFrom from "./final-price-form";
import { BiSolidPhoneIncoming } from "react-icons/bi";

interface Props {
  name?: string;
  lines?: CarLineType[];
  registration?: number;
  carNameArr?: string[];
  isInstallmentPage?: boolean;
}

const PriceSection: FC<Props> = ({
  name,
  lines,
  registration,
  carNameArr,
  isInstallmentPage,
}): JSX.Element => {
  const [choseCarLine, setChoseCarLine] = useState("");
  const [chosePercent, setChosePercent] = useState("0");
  const [choseLength, setChoseLength] = useState("5");
  const [choseInterest, setChoseInterest] = useState("7");
  const [choseKind, setChoseKind] = useState("descend");
  const [choseCarName, setChoseCarName] = useState("");
  const [choseCarData, setChoseCarData] = useState({
    registration: 0,
  });
  const [showInterestTable, setShowInterestTable] = useState(false);

  let currentLine = lines?.find(
    (line) => line.name === choseCarLine
  ) as CarLineType;

  let currentListPrice = currentLine?.price * 1000000;

  const allCarLines = useFetchCarLines();

  let carLines = [] as CarLineType[];

  if (isInstallmentPage && choseCarName) {
    carLines = allCarLines.find((item) => item.name === choseCarName)
      ?.carLines as CarLineType[];
    currentLine = carLines.find(
      (line) => line.name === choseCarLine
    ) as CarLineType;
    currentListPrice = currentLine?.price * 1000000;
  }

  const borrowedMoney = (Number(chosePercent) * currentListPrice) / 100 || 0;

  const originalPaidMonthly = borrowedMoney / (Number(choseLength) * 12);

  const lengthArr = Array.from(
    { length: Number(choseLength) * 12 },
    (_, i) => i + 1
  );

  let interestTotal = 0;
  let interestArr = [];
  let remainArr = [borrowedMoney];
  if (choseKind === "descend") {
    for (let i = 0; i < lengthArr.length; i++) {
      const interestMonthly = Math.round(
        (remainArr[i] * (Number(choseInterest) / 100)) / 12
      );
      interestArr.push(interestMonthly);
      remainArr[i + 1] = remainArr[i] - originalPaidMonthly;
    }
    interestTotal = interestArr.reduce((acc, cur) => acc + cur, interestTotal);
  } else if (choseKind === "linear") {
    interestTotal =
      ((originalPaidMonthly * Number(choseInterest)) / 100) *
      Number(choseLength) *
      12;

    for (let i = 0; i < lengthArr.length; i++) {
      remainArr[i + 1] = remainArr[i] - originalPaidMonthly;
      interestArr.push((originalPaidMonthly * Number(choseInterest)) / 100);
    }
  }

  const fetchCarDataByName = async () => {
    const carData = (await getCarRegistration(choseCarName)) as {
      registration: number;
    };
    setChoseCarData(carData);
  };

  useEffect(() => {
    fetchCarDataByName();
    setChoseCarLine("");
  }, [choseCarName]);

  return (
    <div>
      <section id="giaxe">
        {/* Table 1 */}
        {!isInstallmentPage && (
          <>
            <div className="postContent my-6 overflow-hidden">
              <h2>Giá xe</h2>
            </div>

            <table className="car-price-table">
              <thead>
                <tr>
                  <td className="table-title" colSpan={5}>
                    Bảng giá Kia {name}
                  </td>
                </tr>

                <tr className="table-group-heading">
                  <td>Dòng Xe</td>
                  <td>Giá Niêm Yết</td>
                  <td>Ưu Đãi</td>
                  <td>Giá Lăn Bánh</td>
                  <td>Trả Trước 20%</td>
                </tr>
              </thead>
              <tbody>
                {lines?.map((line) => (
                  <tr key={line.name} className="table-group-content">
                    <td>{line.name}</td>
                    <td>
                      {line.price >= 1000
                        ? `1 tỷ ${line.price - 1000}`
                        : line.price}{" "}
                      Triệu
                    </td>
                    <td>
                      <span className="flex items-center text-red-700 justify-center">
                        <BiSolidPhoneIncoming size={18} className="mr-1" />{" "}
                        0962.334.807
                      </span>
                    </td>
                    <td>
                      {calculateFinalPrice(
                        registration || 0,
                        line.price,
                        Number(line.tax)
                      )}
                      &nbsp;Triệu
                    </td>
                    <td>
                      {" "}
                      {calculateFinalPrice(
                        registration || 0,
                        line.price,
                        Number(line.tax),
                        20
                      )}{" "}
                      Triệu
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        <div className="grid grid-cols-2 gap-6 max-[890px]:grid-cols-1 mt-8">
          {/* Table 2 */}
          <FinalPriceFrom
            lines={isInstallmentPage ? carLines : lines}
            choseCarLine={choseCarLine}
            setChoseCarLine={setChoseCarLine}
            registration={
              isInstallmentPage
                ? (choseCarData?.registration as number)
                : (registration as number)
            }
            currentLine={currentLine}
            currentListPrice={currentListPrice}
            carNameArr={carNameArr}
            isInstallmentPage={isInstallmentPage}
            choseCarName={choseCarName}
            setChoseCarName={setChoseCarName}
          />

          {/* Table 3 */}
          <CalInterestForm
            chosePercent={chosePercent}
            setChosePercent={setChosePercent}
            choseLength={choseLength}
            setChoseLength={setChoseLength}
            choseInterest={choseInterest}
            setChoseInterest={setChoseInterest}
            choseKind={choseKind}
            setChoseKind={setChoseKind}
            borrowedMoney={borrowedMoney}
            originalPaidMonthly={originalPaidMonthly}
            interestTotal={interestTotal}
            showInterestTable={showInterestTable}
            setShowInterestTable={setShowInterestTable}
          />
        </div>

        {showInterestTable && (
          <InterestDetailTable
            interestArr={interestArr}
            remainArr={remainArr}
            originalPaidMonthly={originalPaidMonthly}
            lengthArr={lengthArr}
          />
        )}
      </section>
    </div>
  );
};

export default PriceSection;
