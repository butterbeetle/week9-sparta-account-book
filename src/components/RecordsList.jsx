import { useState } from "react";
import { Link } from "react-router-dom";
import useRecord from "../hooks/useRecord";
import formatAmount from "../utils/formatAmount";

export default function RecordsList() {
  // const records = useLoaderData();
  const { records, recordDatasByMonth, month } = useRecord();

  const [sortedType, setSortedType] = useState("date");
  const [sortedDateOrder, setSortedDateOrder] = useState("desc");
  const [sortedAmountOrder, setSortedAmountOrder] = useState("desc");

  // console.log(records);

  const dateClickHandler = () => {
    setSortedType("date");
    setSortedDateOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const amountClickHandler = () => {
    setSortedType("amount");
    setSortedAmountOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const filteredRecordsData = recordDatasByMonth
    .filter(({ date }) => +date.split("-")[1] === +month)
    .sort((a, b) => {
      if (sortedType === "date") {
        if (sortedDateOrder === "desc") {
          return new Date(a.date) - new Date(b.date);
        } else {
          return new Date(b.date) - new Date(a.date);
        }
      } else {
        if (sortedAmountOrder === "desc") {
          return a.amount - b.amount;
        } else {
          return b.amount - a.amount;
        }
      }
    });

  return (
    <div className="h-full p-3 min-h-[400px] bg-[#e2e8f0] rounded-2xl">
      {filteredRecordsData?.length > 0 ? (
        <div>
          <div className="flex gap-2 justify-end p-0  pb-2">
            <button
              className="text-sm px-1 py-[2px] font-bold text-[#6b7280] bg-[#fffafc] border-none rounded-md
            cursor-pointer hover:bg-[#d2dff0] hover:shadow-md active:bg-[#a9bbd3] active:shadow-inner"
              onClick={() => dateClickHandler()}
            >
              날짜순{sortedDateOrder === "desc" ? "▲" : "▼"}
            </button>
            <button
              className="text-sm px-1 py-[2px] font-bold text-[#6b7280] bg-[#fffafc] border-none rounded-md
            cursor-pointer hover:bg-[#d2dff0] hover:shadow-md active:bg-[#a9bbd3] active:shadow-inner"
              onClick={() => amountClickHandler()}
            >
              가격순{sortedAmountOrder === "desc" ? "▲" : "▼"}
            </button>
          </div>
          <ul
            className="flex flex-col gap-2 max-h-[400px] overflow-y-auto
          p-2 pr-4 "
          >
            {filteredRecordsData.map(
              ({ id, date, category, amount, content, createdBy }) => (
                <Link key={id} to={`/records/${id}`}>
                  <li
                    className="flex justify-between items-center p-3 rounded-md border-1 text-sm
                   border-[#d1d5db] bg-[#fffafc] shadow-md hover:shadow-lg hover:bg-[#d2dff0] hover:border-[#acb0b6]
                   active:shadow-inner
                  "
                  >
                    <div className="flex relative flex-1 flex-col gap-2 text-[#1f2937]">
                      <div className="flex gap-1 items-baseline font-bold text-[#6b7280]">
                        <p>{date}</p>
                        <p className="text-xs">(by {createdBy})</p>
                      </div>
                      <div className="flex font-bold text-[#1a334e] w-fit max-w-[250px] gap-2">
                        [{category}]
                        <p className="flex-1 line-clamp-1 text-[#3b82f6]">
                          {content}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#3b82f6] font-bold text-xs">
                      {formatAmount(+amount)}
                    </p>
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[400px] font-bold text-3xl">
          지출이 없습니다.
        </div>
      )}
    </div>
  );
}
