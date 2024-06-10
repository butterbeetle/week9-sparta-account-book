import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b-2 p-3 bg-[#e6eef8]">
      <div className="max-w-[1080px] flex justify-between mx-auto items-center">
        <Link className="text-xl font-bold" to="/">
          가계부
        </Link>
        <Link to="/login">로그인</Link>
      </div>
    </header>
  );
}
