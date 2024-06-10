import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import DataInput from "../../components/DataInput";

const signUpDatas = [
  { id: "userId", label: "아이디", minLength: 4, maxLength: 10 },
  {
    id: "password",
    type: "password",
    label: "비밀번호",
    minLength: 4,
    maxLength: 15,
  },
  {
    id: "name",
    label: "닉네임",
    minLength: 1,
    maxLength: 10,
  },
];

function SignUpPage() {
  const { mutateAsync: SignUp } = useMutation({
    mutationFn: (data) => api.auth.signUp(data),
  });
  const [inputData, setInputData] = useState({});

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("SIGN-UP SUBMIT___");
    console.log(inputData);
    try {
      await SignUp(inputData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="border-red-100 border-2 border-solid  rounded-md flex flex-col items-center p-4 gap-3
    bg-[#e2e8f0]"
    >
      <h1 className="text-xl font-bold">회원가입</h1>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="flex flex-col gap-3 w-full"
      >
        {signUpDatas.map(({ id, type, label, minLength, maxLength }) => (
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
          회원가입
        </button>
      </form>
      <div className="text-xs flex gap-2">
        이미 가입하셨나요?
        <Link to="/login" className="underline cursor-pointer">
          로그인
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
