import { useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import formatAmount from "../utils/formatAmount";
import getRandomHexCode from "../utils/getRandomHexCode";

const TotalOutlayDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 12px;
  align-items: center;
  background-color: #e2e8f0;
  border-radius: 16px;
`;
const TotalOutlayDivH1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const TotalOutlayGraph = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
`;

const TotalOutlayColorDiv = styled.div`
  width: ${(props) => props.$width};
  height: 16px;
  background-color: ${(props) => props.$bgColor};
`;
const TotalOutlayLegendDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-weight: bold;
`;
const TotalOutlayLegend = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px;
  border-style: solid;
  border-color: black;
`;
const TotalOutlayLegendFlexDiv = styled.div`
  flex: 1 1 0%;
`;
const TotalOutlayLegendCategory = styled(TotalOutlayLegendFlexDiv)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  gap: 8px;
`;
const TotalOutlayLegendText = styled(TotalOutlayLegendFlexDiv)`
  text-align: end;
`;

export default function TotalOutlay() {
  const { selectedMonth, recordsData } = useSelector((state) => state.record);

  const filteredRecordsData = recordsData.filter(
    ({ date }) => +date.split("-")[1] === +selectedMonth
  );

  const totalAmount = filteredRecordsData.reduce(
    (acc, cur) => acc + +cur.amount,
    0
  );

  const categoryRecordsData = filteredRecordsData.reduce(
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
    <TotalOutlayDiv>
      <TotalOutlayDivH1>
        {selectedMonth}월 총 지출:{formatAmount(totalAmount)}
      </TotalOutlayDivH1>
      <TotalOutlayGraph>
        {items.map(([_, { amount, bgColor }]) => (
          <TotalOutlayColorDiv
            key={uuidv4()}
            $width={`${((amount / totalAmount) * 100).toFixed(2)}%`}
            $bgColor={bgColor}
          ></TotalOutlayColorDiv>
        ))}
      </TotalOutlayGraph>
      <TotalOutlayLegendDiv>
        {items.map(([category, { amount, bgColor }]) => (
          <TotalOutlayLegend key={uuidv4()}>
            <TotalOutlayLegendCategory>
              <TotalOutlayColorDiv
                $width={`16px`}
                $bgColor={bgColor}
              ></TotalOutlayColorDiv>
              <TotalOutlayLegendCategory>{category}</TotalOutlayLegendCategory>
            </TotalOutlayLegendCategory>
            <TotalOutlayLegendText>
              {formatAmount(+amount)}
            </TotalOutlayLegendText>
            <TotalOutlayLegendText>
              {((amount / totalAmount) * 100).toFixed(2)}%
            </TotalOutlayLegendText>
          </TotalOutlayLegend>
        ))}
      </TotalOutlayLegendDiv>
    </TotalOutlayDiv>
  );
}
