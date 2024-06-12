import { useId, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Modal from "../../components/ui/Modal";
import Portal from "../../components/ui/Portal";
import { useToast } from "../../context/toast.context";
import useMe from "../../hooks/useMe";
import useRecord from "../../hooks/useRecord";

export default function RecordDetailPage() {
  const [openModal, setOpenModal] = useState(false);
  const nav = useNavigate();
  // 커스텀 후끄
  const { deleteRecord, updateRecord } = useRecord();
  const toast = useToast();

  // zustand에 저장되어있는 유저 데이터
  const { user } = useMe();

  // 미리 받아온 데이터
  const {
    id: recordId,
    date,
    category,
    content,
    amount,
    userId: recordUserId,
  } = useLoaderData();

  // Id 설정
  const dateId = useId();
  const categoryId = useId();
  const amountId = useId();
  const contentId = useId();

  const inputRef = useRef([]);

  const updateRecordDataHandler = () => {
    // console.log("RECORD DETAIL UPDATE___");
    const category = inputRef.current[1].value;
    const amount = inputRef.current[2].value;
    const content = inputRef.current[3].value;

    if (!category || !amount || !content) {
      toast.createToast({
        id: uuidv4(),
        title: "무언가 비어있습니다.",
        content: "항목, 금액, 내용은 필수 사항 입니다!!",
        time: 3000,
        variant: "error",
      });
      return null;
    }

    if (category.length > 6) {
      toast.createToast({
        id: uuidv4(),
        title: "항목을 확인해주세요.",
        content: "항목은 6자내로 입력해주세요!!",
        time: 3000,
        variant: "error",
      });
      return null;
    }

    if (isNaN(amount) || +amount < 0) {
      toast.createToast({
        id: uuidv4(),
        title: "금액을 확인해주세요.",
        content: "올바른 금액을 입력해주세요!!",
        time: 3000,
        variant: "error",
      });
      return null;
    }

    if (+amount > 1e10) {
      toast.createToast({
        id: uuidv4(),
        title: "금액을 확인해주세요.",
        content: "이렇게 많은 돈을 사용했을리가 없잖아..!!",
        time: 3000,
        variant: "error",
      });
      return null;
    }

    if (content.length > 30) {
      toast.createToast({
        id: uuidv4(),
        title: "내용을 확인해주세요.",
        content: "내용은 30자내로 입력해주세요!!",
        time: 3000,
        variant: "error",
      });
      return null;
    }

    const newRecordData = {
      id: recordId,
      userId: user.userId,
      createdBy: user.nickname,
      date: inputRef.current[0].value,
      category: inputRef.current[1].value,
      amount: inputRef.current[2].value,
      content: inputRef.current[3].value,
    };

    // console.log(newRecordData);
    // const validateErrors = validateInput(inputData);

    // const newInputData = {
    //   ...inputData,
    //   createdBy: nickname,
    // };

    // if (Object.values(validateErrors).some((error) => error)) {
    //   dispatch(setErrorData({ newErrorData: validateErrors }));
    //   return;
    // }

    // if (isUpdate) {
    //TODO input data 유효성 검사 해야함
    //TODO 에러 처리 생각
    updateRecord(newRecordData);
    nav("/", { replace: true });
  };

  const deleteRecordDataHandler = () => {
    // console.log("RECORD DETAIL DELETE___");
    //TODO 에러 처리 생각
    deleteRecord(recordId);
    nav("/", { replace: true });
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
          defaultValue={date}
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
          defaultValue={category}
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
          defaultValue={amount}
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
          defaultValue={content}
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

      {user.id === recordUserId && (
        <>
          <button
            onClick={() => updateRecordDataHandler()}
            className="p-3 text-base font-bold text-white bg-[#0a0426] border-none rounded-lg cursor-pointer
hover:bg-[#1c1c3b] hover:shadow-md active:bg-[#2c2c3b] active:shadow-inner"
            type="button"
          >
            수정
          </button>
          <button
            onClick={() => setOpenModal(true)}
            className="p-3 text-base font-bold text-white bg-[#0a0426] border-none rounded-lg cursor-pointer
hover:bg-[#1c1c3b] hover:shadow-md active:bg-[#2c2c3b] active:shadow-inner"
            type="button"
          >
            삭제
          </button>
        </>
      )}
      {openModal && (
        <Portal>
          <Modal onClose={() => setOpenModal(false)}>
            <div
              className="flex font-bold flex-col justify-center rounded-md
        bg-white h-[200px] divide-y-2 divide-solid"
            >
              <div className="flex justify-center items-center w-[400px] h-full">
                정말로 삭제하시겠습니까?
              </div>
              <div
                className="flex justify-center items-center size-full 
          divide-x-2 divide-solid"
              >
                <div className="flex justify-center items-center w-1/2 h-full">
                  <button
                    className="size-full hover:bg-gray-100 rounded-bl-md 
                active:bg-gray-200 active:shadow-inner"
                    onClick={() => deleteRecordDataHandler()}
                  >
                    네
                  </button>
                </div>
                <div className="flex justify-center items-center w-1/2 h-full">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="size-full hover:bg-gray-100 rounded-br-md 
                active:bg-gray-200 active:shadow-inner"
                  >
                    아니요
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </Portal>
      )}
    </div>
  );
}
