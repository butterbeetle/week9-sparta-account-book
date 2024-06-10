import { useState } from "react";
import { Link } from "react-router-dom";
import DataInput from "../../components/DataInput";
import formatDate from "../../utils/formatDate";

const initialInputData = {
  date: formatDate(new Date()),
  category: "",
  amount: "",
  content: "",
};

const loginDatas = [
  { id: "email", type: "email", label: "이메일", minLength: 4, maxLength: 10 },
  {
    id: "password",
    type: "password",
    label: "비밀번호",
    minLength: 4,
    maxLength: 15,
  },
];

function LoginPage() {
  const [inputData, setInputData] = useState(initialInputData);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("SUBMIT___");
  };

  return (
    <div
      className="border-red-100 border-2 border-solid  rounded-md flex flex-col items-center p-4 gap-3
    bg-[#e2e8f0]"
    >
      <h1 className="text-xl font-bold">로그인</h1>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="flex flex-col gap-3 w-full"
      >
        {loginDatas.map(({ id, type, label, minLength, maxLength }) => (
          <DataInput
            key={id}
            id={id}
            type={type}
            label={label}
            inputData={inputData[id]}
            setInputData={setInputData}
            minLength={minLength}
            maxLength={maxLength}
          />
        ))}
        <button
          className="p-3 text-base font-bold text-white bg-[#0a0426] border-none rounded-lg cursor-pointer
      hover:bg-[#1c1c3b] hover:shadow-md active:bg-[#2c2c3b] active:shadow-inner"
          type="submit"
        >
          로그인
        </button>
      </form>
      <div className="text-xs flex gap-2">
        처음 오셨나요?
        <Link to="/signup" className="underline cursor-pointer">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
