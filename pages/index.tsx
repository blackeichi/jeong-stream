import type { NextPage } from "next";
import { useRouter } from "next/router";
import useUser from "../libs/useUser";

const Home: NextPage = () => {
  const user = useUser();
  const router = useRouter();
  const onClickCreate = () => {
    router.replace("/create");
  };
  return (
    <div className="flex justify-center text-white">
      <div className="bg-black text-white fixed top-0 max-w-7xl w-full py-2 px-3 flex justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" bg-purple-600 w-6 h-6 box-content rounded-full p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <div
          onClick={() => onClickCreate()}
          className="text-gray-200 flex items-center gap-2 bg-zinc-600 p-2 px-3 rounded-3xl text-sm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1>생성</h1>
        </div>
      </div>
      <div className="py-20 px-4 bg-black w-full max-w-7xl">
        <div className="flex flex-col gap-4">
          <h1 className="mb-4 text-3xl font-semibold">팔로잉</h1>
          <h2 className="font-semibold">팔로우 중인 카테고리</h2>
          <div className="flex gap-2 flex-wrap">
            <div className=" overflow-hidden flex flex-col w-28">
              <div className="w-full h-36 bg-zinc-600"></div>
              <h3 className="text-sm">Hearthstone</h3>
            </div>
            <div className=" overflow-hidden flex flex-col w-28">
              <div className="w-full h-36 bg-zinc-600"></div>
              <h3 className="text-sm">Hearthstone</h3>
            </div>
            <div className=" overflow-hidden flex flex-col w-28">
              <div className="w-full h-36 bg-zinc-600"></div>
              <h3 className="text-sm">Hearthstone</h3>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mt-4">생방송 채널</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
