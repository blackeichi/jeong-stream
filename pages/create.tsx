import { NextPage } from "next";
import { useRouter } from "next/router";

const Create: NextPage = () => {
  const router = useRouter();
  const onClickCreate = () => {
    router.replace("/");
  };
  return (
    <div className="flex justify-center text-white">
      <div className="bg-black text-white fixed top-0 w-full max-w-7xl py-2 px-3 flex justify-between items-center">
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
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <h1>시청하기</h1>
        </div>
      </div>
    </div>
  );
};

export default Create;
