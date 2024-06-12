import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DataInput from "../../components/DataInput";
import { useToast } from "../../context/toast.context";
import useMe from "../../hooks/useMe";

const signUpDatas = [
  { id: "id", label: "아이디", minLength: 4, maxLength: 10 },
  {
    id: "password",
    type: "password",
    label: "비밀번호",
    minLength: 4,
    maxLength: 15,
  },
  {
    id: "nickname",
    label: "닉네임",
    minLength: 1,
    maxLength: 10,
  },
];

function SignUpPage() {
  const toast = useToast();
  const nav = useNavigate();
  const { signUp } = useMe();

  const [inputData, setInputData] = useState({});

  /**
   * 아이디맨
   * 123123
   * 니크네크임
   */
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log("SIGN-UP SUBMIT___");
    // console.log(inputData);
    try {
      // console.log("SUCCESS___");
      const {
        data: { message },
      } = await signUp(inputData);

      toast.createToast({
        id: uuidv4(),
        title: "Success",
        content: message,
        time: 3000,
        variant: "success",
      });
      nav("/login", { replace: true });
    } catch (error) {
      const { code, message, response } = error;
      console.log("SIGN UP ERROR___", code, message, response.data.message);
      toast.createToast({
        id: uuidv4(),
        title: code,
        content: response.data.message,
        time: 3000,
        variant: "error",
      });
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
