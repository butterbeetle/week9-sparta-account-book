import clsx from "clsx";
import useRecord from "../hooks/useRecord";

export default function Calendar() {
  const { month: selectedMonth, selectMonth } = useRecord();

  return (
    <div className="p-4 bg-[#e2e8f0] rounded-2xl">
      <ul className="flex flex-wrap gap-2 justify-center items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
          <li
            className={clsx(
              `select-none cursor-pointer p-2 rounded-lg border-2 border-solid text-center 
              font-bold w-[15%] min-w-[60px] bg-[#fffafc] shadow-md
              active:bg-[#b1caeb]
              active:shadow-[inset_0_4px_4px_gray]`,
              {
                "bg-[#b1caeb]": +selectedMonth === +month,
              },
              {
                "shadow-[inset_0_4px_4px_black]": +selectedMonth === +month,
              }
            )}
            key={month}
            onClick={() => selectMonth(month)}
          >
            {month}월
          </li>
        ))}
      </ul>
    </div>
  );
}
