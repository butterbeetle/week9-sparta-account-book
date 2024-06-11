import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DataInput from "../components/DataInput";
import { resetInputData, setErrorData } from "../redux/slices/error.slice";
import {
  addRecordDataHandler,
  deleteRecordDataHandler,
  selectDataById,
  updateRecordDataHandler,
} from "../redux/slices/record.slice";

import { useState } from "react";
import useRecord from "../hooks/useRecord";
import formatDate from "../utils/formatDate";
import validateInput from "../utils/validateInput";
import useLoginStore from "../zustand/login.store";
import Modal from "./ui/Modal";
import Portal from "./ui/Portal";

const initialInputData = {
  date: formatDate(new Date()),
  category: "",
  amount: "",
  content: "",
};

const inputsData = [
  { id: "date", type: "date", label: "날짜", maxLength: 8 },
  { id: "category", type: "text", label: "항목", maxLength: 8 },
  { id: "amount", type: "text", label: "금액", maxLength: 8 },
  { id: "content", type: "text", label: "내용", maxLength: 30 },
];

export default function DataInputForm() {
  const { recordId } = useParams();
  const { createRecord, deleteRecord, updateRecord } = useRecord();
  const nav = useNavigate();
  const nickname = useLoginStore((state) => state.nickname);
  const userId = useLoginStore((state) => state.userId);

  const dispatch = useDispatch();

  const [inputData, setInputData] = useState(initialInputData);
  const [openModal, setOpenModal] = useState(false);

  const data = useSelector((state) => selectDataById(state, recordId));

  //TODO 에러로인해 주석처리 대신할 로직짜거나 페이지 나누는게 좋을듯?
  // useEffect(() => {
  //   if (recordId) {
  //     console.log(data);
  //     setInputData(data);
  //     dispatch(
  //       setErrorData({
  //         newErrorData: {
  //           date: false,
  //           category: false,
  //           amount: false,
  //           content: false,
  //         },
  //       })
  //     );
  //   }
  // }, [dispatch, recordId, data]);

  const isUpdate = recordId ?? false;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const validateErrors = validateInput(inputData);

    const newInputData = {
      ...inputData,
      createdBy: nickname,
      userId,
    };

    if (Object.values(validateErrors).some((error) => error)) {
      dispatch(setErrorData({ newErrorData: validateErrors }));
      return;
    }

    if (isUpdate) {
      updateRecord({ id: recordId, ...newInputData });
      dispatch(
        updateRecordDataHandler({ recordId, updatedData: newInputData })
      );
      nav("/", { replace: true });
    } else {
      createRecord(newInputData);
      dispatch(addRecordDataHandler({ newRecordData: newInputData }));
    }

    setInputData(initialInputData);
    dispatch(resetInputData());
  };

  const onDeleteHandler = () => {
    setOpenModal(true);
  };

  const onDeleteConfirmHandler = () => {
    deleteRecord(recordId);
    dispatch(deleteRecordDataHandler({ recordId }));
    nav("/", { replace: true });
  };
  // console.log("WHY", inputData);
  return (
    <form
      className="flex flex-col gap-2 p-2 bg-[#e2e8f0] rounded-2xl"
      onSubmit={onSubmitHandler}
    >
      {inputsData?.map(({ id, type, label, maxLength }) => (
        <DataInput
          key={id}
          id={id}
          type={type}
          label={label}
          inputData={inputData[id]}
          setInputData={setInputData}
          maxLength={maxLength}
        />
      ))}
      <button
        className="p-3 text-base font-bold text-white bg-[#0a0426] border-none rounded-lg cursor-pointer
      hover:bg-[#1c1c3b] hover:shadow-md active:bg-[#2c2c3b] active:shadow-inner"
        type="submit"
      >
        {isUpdate ? "수정" : "추가"}
      </button>
      {isUpdate && (
        <button
          className="p-3 text-base font-bold text-white bg-[#0a0426] border-none rounded-lg cursor-pointer
      hover:bg-[#1c1c3b] hover:shadow-md active:bg-[#2c2c3b] active:shadow-inner"
          onClick={onDeleteHandler}
          type="button"
        >
          삭제
        </button>
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
                    onClick={() => onDeleteConfirmHandler()}
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
    </form>
  );
}
