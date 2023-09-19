import { Dispatch, FC, SetStateAction } from "react";
import { formatPrice } from "@/lib/formatData";
import Swal from "sweetalert2";
import BtnWithIcon from "../btn-with-icon";

interface Props {
  chosePercent: string;
  setChosePercent: Dispatch<SetStateAction<string>>;
  choseLength: string;
  setChoseLength: Dispatch<SetStateAction<string>>;
  choseInterest: string;
  setChoseInterest: Dispatch<SetStateAction<string>>;
  choseKind: string;
  setChoseKind: Dispatch<SetStateAction<string>>;
  borrowedMoney: number;
  originalPaidMonthly: number;
  interestTotal: number;
  showInterestTable: boolean;
  setShowInterestTable: Dispatch<SetStateAction<boolean>>;
}

const percentArr = [10, 20, 30, 40, 50, 60, 70, 80];

const unitClasses = "w-1/3 block text-xs text-right";

const calRowClasses = "flex justify-between py-2 border-b border-[#eee] gap-2";

const calRowPriceClasses = "text-lg font-bold text-secondary";

const CalInterestForm: FC<Props> = ({
  chosePercent,
  setChosePercent,
  choseLength,
  setChoseLength,
  choseInterest,
  setChoseInterest,
  choseKind,
  setChoseKind,
  borrowedMoney,
  originalPaidMonthly,
  interestTotal,
  showInterestTable,
  setShowInterestTable,
}): JSX.Element => {
  const totalPayment = borrowedMoney + interestTotal;
  const realPaidMonthy =
    originalPaidMonthly +
    (originalPaidMonthly * Number(choseInterest)) / 100 / Number(choseLength);

  const showInterestTableHandler = () => {
    if (borrowedMoney > 0) {
      setShowInterestTable(!showInterestTable);
    } else {
      Swal.fire({
        icon: "error",
        title: "Không hợp lệ!",
        text: "Vui lòng kiểm tra Phiên bản xe và Số tiền mà cần vay",
        confirmButtonColor: "#C4161C",
      });
    }
  };

  return (
    <div className="calculate-price-table">
      <h4 className="calculate-price-table-title">TÍNH LÃI TRẢ GÓP</h4>

      <div className="pt-4 pb-5 text-textColor">
        {/* Place */}
        <div className="calculate-price-table-control">
          <label htmlFor="percent">Số tiền vay :</label>
          <select
            id="percent"
            value={chosePercent}
            onChange={(e) => setChosePercent(e.target.value)}
          >
            <option value={"0"}>Số tiền vay</option>
            {percentArr.map((percent) => (
              <option key={percent} value={percent}>
                {percent} %
              </option>
            ))}
          </select>
        </div>

        {/* Number of years */}
        <div className="calculate-price-table-control">
          <label htmlFor="length">Thời gian vay :</label>

          <div className="flex items-center gap-1">
            <input
              type="number"
              value={choseLength}
              className="border-none !p-0"
              min={0}
              id="length"
              onChange={(e) => setChoseLength(e.target.value)}
            />
            <span className={unitClasses}>năm</span>
          </div>
        </div>

        {/* Interest */}
        <div className="calculate-price-table-control">
          <label htmlFor="interest">Lãi suất vay :</label>

          <div className="flex items-center gap-1">
            <input
              type="number"
              value={choseInterest}
              min={0}
              onChange={(e) => setChoseInterest(e.target.value)}
              className="border-none !p-0"
              id="interest"
            />
            <span className={unitClasses}>% / năm</span>
          </div>
        </div>

        {/* Kind */}
        <div className="calculate-price-table-control">
          <label htmlFor="percent">Loại hình vay :</label>
          <select
            id="percent"
            value={choseKind}
            onChange={(e) => setChoseKind(e.target.value)}
          >
            <option value="descend">Trả lãi theo dư nợ giảm dần</option>
            <option value="linear">Trả lãi chia đều</option>
          </select>
        </div>

        {/* Calculator */}
        <div className={calRowClasses}>
          <span>Số tiền vay</span>
          <span className={calRowPriceClasses}>
            {formatPrice(borrowedMoney, true)}VNĐ
          </span>
        </div>

        {choseKind === "linear" && (
          <div className={calRowClasses}>
            <span>Số tiền hàng tháng phải trả</span>
            <span className={calRowPriceClasses}>
              {formatPrice(realPaidMonthy, true)}VNĐ
            </span>
          </div>
        )}

        <div className={calRowClasses}>
          <span>Tổng số tiền lãi phải trả</span>
          <span className={calRowPriceClasses}>
            {formatPrice(interestTotal, true)}VNĐ
          </span>
        </div>

        <div className={calRowClasses}>
          <span>Tổng số tiền phải trả</span>
          <span className={calRowPriceClasses}>
            {formatPrice(totalPayment, true)}VNĐ
          </span>
        </div>

        <div>
          <BtnWithIcon
            customClasses="!bg-secondary !border-secondary text-white hover:!text-secondary ml-auto mt-6 font-bold text-sm"
            content={showInterestTable ? "ẨN BẢNG CHI TIẾT" : "XEM CHI TIẾT"}
            onClick={showInterestTableHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CalInterestForm;
