import formatAmount from "../utils/formatAmount";

export default function RecordCard({
  date,
  createdBy,
  category,
  content,
  amount,
}) {
  return (
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
          <p className="flex-1 line-clamp-1 text-[#3b82f6]">{content}</p>
        </div>
      </div>
      <p className="text-[#3b82f6] font-bold text-xs">
        {formatAmount(+amount)}
      </p>
    </li>
  );
}
