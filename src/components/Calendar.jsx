import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { monthSelectHandler } from "../redux/slices/record.slice";

const Calendarli = styled.li`
  padding: 8px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  text-align: center;
  font-weight: bold;
  width: 15%;
  min-width: 60px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#d2dff0" : "#fffafc"};
  color: ${({ $isSelected }) => ($isSelected ? "gray" : "black")};
  cursor: pointer;
`;

export default function Calendar() {
  const dispatch = useDispatch();
  const { selectedMonth } = useSelector((state) => state.record);

  return (
    <div className="p-4 bg-[#e2e8f0] rounded-2xl">
      <ul className="flex flex-wrap gap-2 justify-center items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
          <Calendarli
            key={month}
            $isSelected={selectedMonth == month ? true : undefined}
            onClick={() => dispatch(monthSelectHandler(month))}
          >
            {month}월
          </Calendarli>
        ))}
      </ul>
    </div>
  );
}
