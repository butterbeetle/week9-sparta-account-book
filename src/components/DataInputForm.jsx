import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DataInput from "../components/DataInput";
import { resetInputData, setErrorData } from "../redux/slices/error.slice";
import {
  addRecordDataHandler,
  deleteRecordDataHandler,
  selectDataById,
  updateRecordDataHandler,
} from "../redux/slices/record.slice";

import { useEffect, useState } from "react";
import formatDate from "../utils/formatDate";
import validateInput from "../utils/validateInput";
import Modal from "./ui/Modal";
import Portal from "./ui/Portal";

const initialInputData = {
  date: formatDate(new Date()),
  category: "",
  amount: "",
  content: "",
};

const inputsData = [
  { id: "date", type: "date", label: "날짜" },
  { id: "category", type: "text", label: "항목" },
  { id: "amount", type: "text", label: "금액" },
  { id: "content", type: "text", label: "내용" },
];

export default function DataInputForm() {
  const { recordId } = useParams();
  const nav = useNavigate();

  const dispatch = useDispatch();

  const [inputData, setInputData] = useState(initialInputData);
  const [openModal, setOpenModal] = useState(false);

  const data = useSelector((state) => selectDataById(state, recordId));

  useEffect(() => {
    if (recordId) {
      setInputData(data);
      dispatch(
        setErrorData({
          newErrorData: {
            date: false,
            category: false,
            amount: false,
            content: false,
          },
        })
      );
    }
  }, [dispatch, recordId, data]);

  const isUpdate = recordId ?? false;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const validateErrors = validateInput(inputData);

    if (Object.values(validateErrors).some((error) => error)) {
      dispatch(setErrorData({ newErrorData: validateErrors }));
      return;
    }

    if (isUpdate) {
      dispatch(updateRecordDataHandler({ recordId, updatedData: inputData }));
      nav("/", { replace: true });
    } else {
      dispatch(addRecordDataHandler({ newRecordData: inputData }));
    }

    setInputData(initialInputData);
    dispatch(resetInputData());
  };

  const onDeleteHandler = () => {
    setOpenModal(true);
  };

  const onDeleteConfirmHandler = () => {
    dispatch(deleteRecordDataHandler({ recordId }));
    nav("/", { replace: true });
  };

  return (
    <form
      className="flex flex-col gap-2 p-2 bg-[#e2e8f0] rounded-2xl"
      onSubmit={onSubmitHandler}
    >
      {inputsData.map(({ id, type, label }) => (
        <DataInput
          key={id}
          id={id}
          type={type}
          label={label}
          inputData={inputData[id]}
          setInputData={setInputData}
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
            <ModalDiv>
              <ModalTextDiv>정말로 삭제하시겠습니까?</ModalTextDiv>
              <ModalButtonMainDiv>
                <ModalButtonDiv>
                  <ModalButton
                    onClick={() => onDeleteConfirmHandler()}
                    className="size-full"
                    $left={true}
                  >
                    네
                  </ModalButton>
                </ModalButtonDiv>
                <ModalButtonDiv>
                  <ModalButton
                    onClick={() => setOpenModal(false)}
                    className="size-full"
                    $left={false}
                  >
                    아니요
                  </ModalButton>
                </ModalButtonDiv>
              </ModalButtonMainDiv>
            </ModalDiv>
          </Modal>
        </Portal>
      )}
    </form>
  );
}

const ModalDiv = styled.div`
  display: flex;
  font-weight: bold;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  background-color: #ffffff;
  height: 200px;
`;

const ModalTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
`;

const ModalButtonMainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: 2px solid #e5e7eb;
`;

const ModalButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  &:first-child {
    border-right: 2px solid #e5e7eb;
  }
`;

const ModalButton = styled.button`
  width: 100%;
  height: 100%;
  transition: background-color 0.3s;

  border-bottom-left-radius: ${(props) => props.$left && "8px"};
  border-bottom-right-radius: ${(props) => !props.$left && "8px"};

  &:hover {
    background-color: #e5e7eb;
  }

  &:active {
    color: #ffffff;
    background-color: #333333;
  }
`;
