import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useRecord from "../hooks/useRecord";
import formatAmount from "../utils/formatAmount";
import getRandomHexCode from "../utils/getRandomHexCode";

const TotalOutlayColorDiv = styled.div`
  width: ${(props) => props.$width};
  height: 24px;
  background-color: ${(props) => props.$bgColor};
`;

export default function TotalOutlay() {
  const { month: selectedMonth, recordDatasByMonth } = useRecord();

  const totalAmount = recordDatasByMonth.reduce(
    (acc, cur) => acc + +cur.amount,
    0
  );

  const categoryRecordsData = recordDatasByMonth.reduce(
    (acc, { category, amount }) => {
      if (acc[category]) {
        acc[category].amount += +amount;
      } else {
        acc[category] = { amount: +amount, bgColor: getRandomHexCode() };
      }
      return acc;
    },
    {}
  );

  const sortedData = Object.entries(categoryRecordsData).sort(
    (a, b) => b[1].amount - a[1].amount
  );

  const items =
    sortedData.length < 5
      ? sortedData
      : sortedData.slice(0, 3).concat([
          [
            "기타",
            sortedData.slice(3).reduce(
              (acc, cur) => {
                acc.amount += cur[1].amount;
                acc.bgColor = acc.bgColor || cur[1].bgColor;
                return acc;
              },
              { amount: 0, bgColor: "" }
            ),
          ],
        ]);

  return (
    <div className="flex gap-2 flex-col p-3 items-center bg-[#e2e8f0] rounded-xl">
      <h1 className="text-[20px] font-bold">
        {selectedMonth}월 총 지출:{formatAmount(totalAmount)}
      </h1>
      <div className="flex w-full h-[20px] items-end">
        {items.map(([_, { amount, bgColor }]) => (
          <TotalOutlayColorDiv
            key={uuidv4()}
            $width={`${((amount / totalAmount) * 100).toFixed(2)}%`}
            $bgColor={bgColor}
          ></TotalOutlayColorDiv>
        ))}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2 font-bold">
        {items.map(([category, { amount, bgColor }]) => (
          <div
            className="w-full flex items-center justify-center border-b-2 border-solid border-black gap-2 "
            key={uuidv4()}
          >
            <div className="flex-1 line-clamp-1 gap-2 flex items-end h-full">
              <TotalOutlayColorDiv
                $width={`16px`}
                $bgColor={bgColor}
              ></TotalOutlayColorDiv>
              <div className="flex-1 line-clamp-1 gap-2 flex">{category}</div>
            </div>
            <div className="flex-1 text-end">{formatAmount(+amount)}</div>
            <div className="flex-1 text-end">
              {((amount / totalAmount) * 100).toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
