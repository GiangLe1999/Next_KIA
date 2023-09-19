import { carFees } from "@/data/single-car-page";
import { formatPrice } from "@/lib/formatData";
import { CarLineType } from "@/types";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  lines?: CarLineType[];
  choseCarLine: string;
  setChoseCarLine: Dispatch<SetStateAction<string>>;
  registration: number;
  currentListPrice: number;
  currentLine: CarLineType;
  carNameArr?: string[];
  isInstallmentPage?: boolean;
  choseCarName: string;
  setChoseCarName: Dispatch<SetStateAction<string>>;
}

const FinalPriceFrom: FC<Props> = ({
  lines,
  choseCarLine,
  setChoseCarLine,
  registration,
  currentListPrice,
  currentLine,
  carNameArr,
  isInstallmentPage,
  choseCarName,
  setChoseCarName,
}): JSX.Element => {
  const currentTax = Number(currentLine?.tax);
  const currentRegistrationFee =
    (registration * 1000000 * currentTax * 10) / 100 || 0;

  const { phiDkyBienso, phiDuongbo, phiDkiem, phiDvu, thuchiho, bhTNDS } =
    carFees;

  const currentTotal =
    currentListPrice +
    currentRegistrationFee +
    phiDkiem +
    phiDkyBienso +
    phiDuongbo +
    phiDvu +
    thuchiho +
    bhTNDS;

  return (
    <div className="calculate-price-table h-fit">
      <h4 className="calculate-price-table-title">TÍNH PHÍ LĂN BÁNH</h4>

      <form className="pt-4 pb-2 text-primary">
        {/* Place */}
        <div className="calculate-price-table-control">
          <label htmlFor="place">Chọn nơi :</label>
          <select id="place" value="hcm">
            <option value="hcm">Hồ Chí Minh</option>
          </select>
        </div>

        {/* Car name */}
        {isInstallmentPage && (
          <div className="calculate-price-table-control">
            <label htmlFor="carName">Dòng xe :</label>
            <select
              className="flex-1"
              id="carName"
              value={choseCarName}
              onChange={(e) => setChoseCarName(e.target.value)}
            >
              <option value="">Chọn dòng xe</option>
              {carNameArr?.map((name, index) => (
                <option value={name} key={index}>
                  {name.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Car line */}
        <div className="calculate-price-table-control">
          <label htmlFor="carLine">Phiên bản :</label>
          <select
            id="carLine"
            value={choseCarLine}
            onChange={(e) => setChoseCarLine(e.target.value)}
          >
            <option value="">Chọn phiên bản</option>
            {lines?.map((line, index) => (
              <option value={line.name} key={index}>
                {line.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {choseCarLine ? (
        <>
          <ul className="space-y-2 text-sm pb-3 border-b border-[#eee] components-price-list">
            <li>
              Giá niêm yết :
              <span>{formatPrice(currentListPrice, true)} VNĐ</span>
            </li>

            <li>
              Phí trước bạ :
              <span>{formatPrice(currentRegistrationFee, true)} VNĐ</span>
            </li>

            <li>
              Phí đăng ký biển số xe :
              <span>{formatPrice(phiDkyBienso, true)} VNĐ</span>
            </li>

            <li>
              Phí sử dụng đường bộ :
              <span>{formatPrice(phiDuongbo, true)} VNĐ</span>
            </li>

            <li>
              Phí cấp giấy chứng nhận đăng kiểm :
              <span>{formatPrice(phiDkiem, true)} VNĐ</span>
            </li>

            <li>
              Khoảng thu, chi hộ khách hàng :
              <span>{formatPrice(thuchiho, true)} VNĐ</span>
            </li>

            <li>
              Phí dịch vụ đăng ký :<span>{formatPrice(phiDvu, true)} VNĐ</span>
            </li>
          </ul>

          <p className="flex justify-between my-3">
            Tổng dự toán
            <span className="text-xl font-bold text-secondary block text-right">
              {formatPrice(currentTotal, true)} VNĐ
            </span>
          </p>
        </>
      ) : (
        <p className="text-sm italic">
          Vui lòng chọn dòng xe và nơi đăng ký để dự toán chi phí.
        </p>
      )}
    </div>
  );
};

export default FinalPriceFrom;
