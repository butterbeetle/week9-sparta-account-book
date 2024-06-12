import { useId, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import useRecord from "../hooks/useRecord";
import formatDate from "../utils/formatDate";
import useLoginStore from "../zustand/login.store";

export default function CreateRecordData() {
  // 커스텀 후끄
  const { createRecord } = useRecord();

  // zustand에 저장되어있는 유저 데이터
  const nickname = useLoginStore((state) => state.nickname);
  const userId = useLoginStore((state) => state.userId);

  // Id 설정
  const dateId = useId();
  const categoryId = useId();
  const amountId = useId();
  const contentId = useId();

  const inputRef = useRef([]);

  const createRecordDataHandler = () => {
    console.log("HOME CREATE RECORD___");
    //TODO 유효성 검사 해야함
    const newRecordData = {
      id: uuidv4(),
      userId,
      createdBy: nickname,
      date: inputRef.current[0].value,
      category: inputRef.current[1].value,
      amount: inputRef.current[2].value,
      content: inputRef.current[3].value,
    };
    console.log(newRecordData);
    // const validateErrors = validateInput(inputData);

    //TODO 에러 처리 생각
    createRecord(newRecordData);

    // 일단 초기화
    inputRef.current[0].value = formatDate(new Date(), "full");
    inputRef.current[1].value = "";
    inputRef.current[2].value = "";
    inputRef.current[3].value = "";
  };

  return (
    <div className="flex flex-col gap-2 p-2 bg-[#e2e8f0] rounded-2xl">
      <div className="relative">
        <input
          ref={(el) => (inputRef.current[0] = el)}
          className="p-6 pb-px w-full text-base appearance-none outline-none
                     border border-solid border-[#0a0426] rounded-md text-[#0a0426]
                     hover:shadow-md peer select-none"
          id={dateId}
          defaultValue={formatDate(new Date(), "full")}
          type="date"
        />
        <label
          className="absolute top-4 left-6 text-base select-none text-[#a1a1aa] cursor-text
                     duration-150 transform
                     origin-[0]
                     -translate-y-3 scale-75
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-3"
          htmlFor={dateId}
        >
          <div className="flex">
            {"날짜"}
            {/* {errorData[id] && (
            <p className="cursor-text text-base text-red-700 select-none ">{`${
              type === "date" ? "를" : "을"
            } 제대로 입력해주세요.`}</p>
          )} */}
          </div>
        </label>
      </div>

      <div className="relative">
        <input
          ref={(el) => (inputRef.current[1] = el)}
          className="p-6 pb-px w-full text-base appearance-none outline-none
                     border border-solid border-[#0a0426] rounded-md text-[#0a0426]
                     hover:shadow-md peer select-none"
          id={categoryId}
          defaultValue={""}
          placeholder=""
          type="text"
        />
        <label
          className="absolute top-4 left-6 text-base select-none text-[#a1a1aa] cursor-text
                     duration-150 transform
                     origin-[0]
                     -translate-y-3 scale-75
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-3"
          htmlFor={categoryId}
        >
          <div className="flex">
            {"항목"}
            {/* {errorData[id] && (
            <p className="cursor-text text-base text-red-700 select-none ">{`${
              type === "date" ? "를" : "을"
            } 제대로 입력해주세요.`}</p>
          )} */}
          </div>
        </label>
      </div>

      <div className="relative">
        <input
          ref={(el) => (inputRef.current[2] = el)}
          className="p-6 pb-px w-full text-base appearance-none outline-none
                     border border-solid border-[#0a0426] rounded-md text-[#0a0426]
                     hover:shadow-md peer select-none"
          id={amountId}
          defaultValue={""}
          placeholder=""
          type="text"
        />
        <label
          className="absolute top-4 left-6 text-base select-none text-[#a1a1aa] cursor-text
                     duration-150 transform
                     origin-[0]
                     -translate-y-3 scale-75
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-3"
          htmlFor={amountId}
        >
          <div className="flex">
            {"금액"}
            {/* {errorData[id] && (
            <p className="cursor-text text-base text-red-700 select-none ">{`${
              type === "date" ? "를" : "을"
            } 제대로 입력해주세요.`}</p>
          )} */}
          </div>
        </label>
      </div>

      <div className="relative">
        <input
          ref={(el) => (inputRef.current[3] = el)}
          className="p-6 pb-px w-full text-base appearance-none outline-none
                     border border-solid border-[#0a0426] rounded-md text-[#0a0426]
                     hover:shadow-md peer select-none"
          id={contentId}
          defaultValue={""}
          placeholder=""
          type="text"
        />
        <label
          className="absolute top-4 left-6 text-base select-none text-[#a1a1aa] cursor-text
                     duration-150 transform
                     origin-[0]
                     -translate-y-3 scale-75
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-3"
          htmlFor={contentId}
        >
          <div className="flex">
            {"내용"}
            {/* {errorData[id] && (
            <p className="cursor-text text-base text-red-700 select-none ">{`${
              type === "date" ? "를" : "을"
            } 제대로 입력해주세요.`}</p>
          )} */}
          </div>
        </label>
      </div>

      <button
        onClick={() => createRecordDataHandler()}
        className="p-3 text-base font-bold text-white bg-[#0a0426] border-none rounded-lg cursor-pointer
      hover:bg-[#1c1c3b] hover:shadow-md active:bg-[#2c2c3b] active:shadow-inner"
        type="button"
      >
        추가
      </button>
    </div>
  );
}