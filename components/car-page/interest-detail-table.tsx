import { formatPrice } from "@/lib/formatData";
import { FC } from "react";

interface Props {
  interestArr: number[];
  remainArr: number[];
  originalPaidMonthly: number;
  lengthArr: number[];
}

const InterestDetailTable: FC<Props> = ({
  interestArr,
  remainArr,
  originalPaidMonthly,
  lengthArr,
}): JSX.Element => {
  return (
    <table className="price-table interest-table w-full !mb-0">
      <thead>
        <tr>
          <td>Số kỳ trả</td>
          <td>Dư nợ đầu kỳ</td>
          <td>Gốc phải trả (VNĐ)</td>
          <td>Lãi phải trả (VNĐ)</td>
          <td>Gốc + Lãi (VNĐ)</td>
        </tr>
      </thead>

      <tbody>
        {lengthArr.map((row, index) => (
          <tr key={row}>
            <td>{row}</td>
            <td>{formatPrice(remainArr[index], true)}</td>
            <td>{formatPrice(originalPaidMonthly, true)}</td>
            <td>{formatPrice(interestArr[index], true)}</td>
            <td>
              {formatPrice(originalPaidMonthly + interestArr[index], true)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InterestDetailTable;
