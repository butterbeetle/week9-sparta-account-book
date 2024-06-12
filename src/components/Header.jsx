import { Link } from "react-router-dom";
import useMe from "../hooks/useMe";

export default function Header() {
  const { user, isLoggedIn, logOutUser } = useMe();

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
                src={
                  user.avatar
                    ? user.avatar
                    : "http://via.placeholder.com/640x480"
                }
                alt="profile"
              ></img>
            </Link>
            <Link to="/my">
              <p className="font-bold hover:underline cursor-pointer">
                {user.nickname}
              </p>
            </Link>
            <div
              onClick={logOutUser}
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
