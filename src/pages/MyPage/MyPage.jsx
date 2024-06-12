import { useMutation } from "@tanstack/react-query";
import { useId, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import api from "../../api/api";
import useLoginStore from "../../zustand/login.store";

function MyPage() {
  const nav = useNavigate();
  const { mutateAsync: updateUserInfo } = useMutation({
    mutationFn: ({ token, data }) => api.auth.updateUserInfo(token, data),
  });

  const { isLoggedIn, nickname, avatar, clearuser } = useLoginStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      nickname: state.nickname,
      avatar: state.avatar,
      clearUser: state.clearUser,
    }))
  );

  const [file, setFile] = useState();

  const inputRef = useRef(null);
  const nickNameId = useId();

  const onChangeHandler = (e) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const onClickHandler = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    await updateUserInfo({
      token,
      data: { avatar: file, nickname: inputRef.current.value },
    });
    nav("/");
  };
  return (
    <div
      className="border-red-100 border-2 border-solid  rounded-md flex flex-col items-center p-4 gap-3
  bg-[#e2e8f0]"
    >
      <h1 className="text-2xl font-bold">내 프로필</h1>
      <div className="border-2 border-red-500 size-[200px] aspect-square rounded-full flex items-center justify-center">
        <img
          className="rounded-full size-full hover:shadow-md"
          src={avatar ? avatar : "http://via.placeholder.com/640x480"}
          alt="profile"
        ></img>
      </div>
      <input type="file" onChange={(e) => onChangeHandler(e)} />
      <div className="relative">
        <input
          ref={(el) => (inputRef.current = el)}
          className="p-6 pb-px w-full text-base appearance-none outline-none
                     border border-solid border-[#0a0426] rounded-md text-[#0a0426]
                     hover:shadow-md peer select-none"
          id={nickNameId}
          defaultValue={nickname}
          minLength={1}
          maxLength={10}
        />
        <label
          className="absolute top-4 left-6 text-base select-none text-[#a1a1aa] cursor-text
                     duration-150 transform
                     origin-[0]
                     -translate-y-3 scale-75
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                     peer-focus:scale-75 peer-focus:-translate-y-3"
          htmlFor={nickNameId}
        >
          <div className="flex">
            {"닉네임"}
            {/* {errorData[id] && (
            <p className="cursor-text text-base text-red-700 select-none ">{`${
              type === "date" ? "를" : "을"
            } 제대로 입력해주세요.`}</p>
          )} */}
          </div>
        </label>
      </div>
      <button
        onClick={() => onClickHandler()}
        className="p-3 text-base font-bold text-white bg-[#0a0426] border-none rounded-lg cursor-pointer
      hover:bg-[#1c1c3b] hover:shadow-md active:bg-[#2c2c3b] active:shadow-inner  w-full"
        type="button"
      >
        수정
      </button>
    </div>
  );
}

export default MyPage;
