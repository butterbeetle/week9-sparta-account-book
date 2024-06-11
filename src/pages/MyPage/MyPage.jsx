import { useState } from "react";
import { Link } from "react-router-dom";
import DataInput from "../../components/DataInput";
import useLoginStore from "../../zustand/login.store";

function MyPage() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const nickname = useLoginStore((state) => state.nickname);

  const [inputData, setInputData] = useState({ nickname });

  const onChangeHandler = (e) => {
    setInputData(e.target.value);
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
          src="http://via.placeholder.com/640x480"
          alt="profile"
        ></img>
      </div>
      <DataInput
        id={"nickname"}
        label={"닉네임"}
        inputData={inputData["nickname"]}
        setInputData={setInputData}
        minLength={1}
        maxLength={10}
      />
      <Link to="/" className="w-full">
        <button
          className="p-3 text-base font-bold text-white bg-[#0a0426] border-none rounded-lg cursor-pointer
      hover:bg-[#1c1c3b] hover:shadow-md active:bg-[#2c2c3b] active:shadow-inner  w-full"
          type="button"
        >
          수정
        </button>
      </Link>
    </div>
  );
}

export default MyPage;
