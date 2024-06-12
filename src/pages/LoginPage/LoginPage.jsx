import { useEffect, useId, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "../../context/toast.context";
import useMe from "../../hooks/useMe";

function LoginPage() {
  const toast = useToast();
  const nav = useNavigate();
  const { isLoggedIn, logIn, logInUser } = useMe();

  const inputRef = useRef([]);
  const userId = useId();
  const passwordId = useId();

  useEffect(() => {
    if (isLoggedIn) nav("/", { replace: true });
  }, [nav, isLoggedIn]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const loginUserInfo = {
      id: inputRef.current[0].value,
      password: inputRef.current[1].value,
    };

    // console.log("LOGIN SUBMIT___");
    try {
      const { data } = await logIn(loginUserInfo);
      // console.log(data);
      localStorage.setItem("token", JSON.stringify(data.accessToken));
      toast.createToast({
        id: uuidv4(),
        title: "Success",
        content: "로그인에 성공하였습니다.",
        time: 3000,
        variant: "success",
      });

      logInUser(data);
      nav("/", { replace: true });
    } catch (error) {
      const { code, message, response } = error;
      // console.log("LOGIN ERROR___", code, message, response.data.message);
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
      <h1 className="text-xl font-bold">로그인</h1>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="flex flex-col gap-3 w-full"
      >
        <div className="relative">
          <input
            ref={(el) => (inputRef.current[0] = el)}
            className="p-6 pb-px w-full text-base appearance-none outline-none
                     border border-solid border-[#0a0426] rounded-md text-[#0a0426]
                     hover:shadow-md peer select-none"
            id={userId}
            defaultValue={""}
            placeholder=""
            minLength={4}
            maxLength={10}
          />
          <label
            className="absolute top-4 left-6 text-base select-none text-[#a1a1aa] cursor-text
                     duration-150 transform
                     origin-[0]
                     -translate-y-3 scale-75
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-3"
            htmlFor={userId}
          >
            <div className="flex">{"아이디"}</div>
          </label>
        </div>

        <div className="relative">
          <input
            ref={(el) => (inputRef.current[1] = el)}
            className="p-6 pb-px w-full text-base appearance-none outline-none
                     border border-solid border-[#0a0426] rounded-md text-[#0a0426]
                     hover:shadow-md peer select-none"
            id={passwordId}
            defaultValue={""}
            placeholder=""
            type="password"
            minLength={4}
            maxLength={15}
          />
          <label
            className="absolute top-4 left-6 text-base select-none text-[#a1a1aa] cursor-text
                     duration-150 transform
                     origin-[0]
                     -translate-y-3 scale-75
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-3"
            htmlFor={passwordId}
          >
            <div className="flex">{"비밀번호"}</div>
          </label>
        </div>

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
