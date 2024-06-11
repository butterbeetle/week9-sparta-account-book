import { Link } from "react-router-dom";
import useLoginStore from "../zustand/login.store";

export default function Header() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const nickname = useLoginStore((state) => state.nickname);
  const logOut = useLoginStore((state) => state.clearUser);

  //TODO https://teamsparta.notion.site/React-5-f1d81428746740e5ae356cf965c737d5 헤더네비게잇
  return (
    <header className="border-b-2 p-3 bg-[#e6eef8] select-none">
      <div className="max-w-[1080px] flex justify-between mx-auto items-center">
        <Link className="text-xl font-bold" to="/">
          가계부
        </Link>
        {!isLoggedIn && (
          <Link
            className="border-2 p-1 cursor-pointer text-xs
             bg-[#1f4e78] hover:bg-[#336fa2] hover:shadow-md active:bg-[#163a5d]
              text-white rounded-md"
            to="/login"
          >
            로그인
          </Link>
        )}
        {isLoggedIn && (
          <div className="flex text-xs gap-2 items-center">
            <img
              className="rounded-full size-8"
              src="http://via.placeholder.com/640x480"
              alt="profile"
            ></img>
            <p className="font-bold">{nickname}</p>
            <div
              onClick={logOut}
              className="border-2 p-1 cursor-pointer 
            bg-[#1f4e78] hover:bg-[#336fa2] hover:shadow-md active:bg-[#163a5d]
             text-white rounded-md"
            >
              로그아웃
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
