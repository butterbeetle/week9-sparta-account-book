import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import DataInput from "../../components/DataInput";
import { useToast } from "../../context/toast.context";
import formatDate from "../../utils/formatDate";
import uuid from "../../utils/uuid";
import useLoginStore from "../../zustand/login.store";

const initialInputData = {
  date: formatDate(new Date()),
  category: "",
  amount: "",
  content: "",
};

const loginDatas = [
  { id: "id", label: "아이디", minLength: 4, maxLength: 10 },
  {
    id: "password",
    type: "password",
    label: "비밀번호",
    minLength: 4,
    maxLength: 15,
  },
];

function LoginPage() {
  const toast = useToast();
  const nav = useNavigate();
  const { mutateAsync: LogIn } = useMutation({
    mutationFn: (loginUserInfo) => api.auth.logIn(loginUserInfo),
  });
  const [loginUserInfo, setLoginUserInfo] = useState(initialInputData);
  const setUser = useLoginStore((state) => state.setUser);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log("LOGIN SUBMIT___");
    try {
      const { data } = await LogIn(loginUserInfo);
      localStorage.setItem("token", JSON.stringify(data.accessToken));
      //TODO https://teamsparta.notion.site/React-5-f1d81428746740e5ae356cf965c737d5 Query string(선택) 한번 더 보기
      toast.createToast({
        id: uuid(),
        title: "Success",
        content: "로그인에 성공하였습니다.",
        time: 3000,
        variant: "success",
      });

      setUser(data);
      nav("/", { replace: true });
    } catch (error) {
      const { code, message, response } = error;
      console.log("LOGIN ERROR___", code, message, response.data.message);
      toast.createToast({
        id: uuid(),
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
            inputData={loginUserInfo[id]}
            setInputData={setLoginUserInfo}
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
