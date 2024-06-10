import { useSelector } from "react-redux";

export default function DataInput({
  id,
  type = "text",
  label,
  inputData,
  setInputData,
}) {
  const { errorData } = useSelector((state) => state.error);
  const maxLength = id === "content" ? 30 : 8;

  const onChangeHandler = (value) => {
    setInputData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="relative">
      <input
        className="p-6 pb-px w-full text-base appearance-none outline-none
        border border-solid border-[#0a0426] rounded-md text-[#0a0426]
        hover:shadow-md peer"
        id={id}
        type={type}
        value={inputData}
        autoFocus={id === "category"}
        placeholder=""
        maxLength={maxLength}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <label
        className="absolute top-4 left-6 text-base select-none text-[#a1a1aa] cursor-text
        duration-150 transform
        origin-[0]
        -translate-y-3 scale-75
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor={id}
      >
        <div className="flex">
          {label}
          {errorData[id] && (
            <p className="cursor-text text-base text-red-700 select-none ">{`${
              type === "date" ? "를" : "을"
            } 제대로 입력해주세요.`}</p>
          )}
        </div>
      </label>

      {type !== "date" && (
        <span className="absolute top-1 right-6 text-[12px] select-none text-[#a1a1aa]">{`${
          (inputData + "").length
        }/${maxLength}`}</span>
      )}
    </div>
  );
}
