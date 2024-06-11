import useLoginStore from "../../zustand/login.store";

function MyPage() {
  const nickname = useLoginStore((state) => state.nickname);
  return (
    <div
      className="border-red-100 border-2 border-solid  rounded-md flex flex-col items-center p-4 gap-3
  bg-[#e2e8f0]"
    >
      <h1 className="text-2xl font-bold">내 프로필</h1>
      <div className="border-2 border-red-500 size-full">dd</div>
      <p>{nickname}</p>
    </div>
  );
}

export default MyPage;
