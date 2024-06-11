import { Link } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

export default function Header() {
  const { isLoggedIn, nickname } = useLoginStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      nickname: state.nickname,
      setUser: state.setUser,
      clearUser: state.clearUser,
    }))
  );

  const logOut = useLoginStore((state) => state.clearUser);
  // console.log(user, isError, isLoading);
  return (
    <header className="border-b-2 p-3 bg-[#e6eef8] select-none h-14 ">
      <div className="max-w-[1080px] flex justify-between mx-auto items-center">
        <div className="flex items-center gap-4">
          <Link className="text-xl font-bold" to="/">
            가계부
          </Link>
        </div>
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
            <Link to="/my">
              <img
                className="rounded-full size-8 hover:shadow-md"
                src="http://via.placeholder.com/640x480"
                alt="profile"
              ></img>
            </Link>
            <Link to="/my">
              <p className="font-bold hover:underline cursor-pointer">
                {nickname}
              </p>
            </Link>
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
