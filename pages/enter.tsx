import { NextPage } from "next";
import Link from "next/link";
import Button from "../components/button";
import useNotUser from "../libs/useNotUser";

const Enter: NextPage = () => {
  useNotUser();
  return (
    <div className="bg-purple-600 w-full h-screen xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-semibold items-center flex flex-col justify-center gap-y-5">
      <div className="overflow-hidden relative grid grid-cols-3 gap-1 ">
        <div className="flex flex-col overflow-hidden whitespace-nowrap items-end text-purple-800 gap-y-2">
          <span>Fortnite VALORANT Fortnite VALORANT</span>
          <span>DJ 포크 얼터너티브 DJ 포크 얼터너티브</span>
          <span>라디오 게임 뉴스 라디오 게임 뉴스</span>
          <span>축구 농구 축구 농구</span>
          <span>온 가족 이용 가능 온 가족 이용 가능</span>
          <span>게임 뉴스 근력 운동 게임 뉴스 근력 운동</span>
          <span>교육 제과 교육 제과</span>
          <span>스탠드업 코미디 뮤지컬 스탠드업 코미디 뮤지컬</span>
        </div>
        <div className="whitespace-nowrap overflow-visible flex flex-col text-purple-800 gap-y-2 col-span-2 ">
          <div className="flex gap-1 ">
            <p className="text-gray-50">게임</p>
            <span>
              Call of Duty : Mobile Free Fire PUBG Mobile Mincraft Call of Duty
              : Mobile Free Fire PUBG Mobile Mincraft
            </span>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-50">음악</p>
            <span>
              일렉트로닉 펑크 어쿠스틱 레게 힙학 라디오 일렉트로닉 펑크 어쿠스틱
              레게 힙학 라디오
            </span>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-50">토크쇼</p>
            <span>역사 교육 라디오 게임 뉴스 역사 교육 라디오 게임 뉴스</span>
            <span>역사 교육 라디오 게임 뉴스 역사 교육 라디오 게임 뉴스</span>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-50">스포츠</p>
            <span>
              판타지 스포츠 농구 축구 유로 2020 판타지 스포츠 농구 축구 유로
              2020
            </span>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-50">여행 및 야외활동</p>
            <span>Call of Duty : Mobile Free Fire PUBG Mobile Mincraft</span>
            <span>Call of Duty : Mobile Free Fire PUBG Mobile Mincraft</span>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-50">Just Chatting</p>
            <span>뉴스 정신 건강 코스프레 뉴스 정신 건강 코스프레</span>
            <span>뉴스 정신 건강 코스프레 뉴스 정신 건강 코스프레</span>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-50">먹방</p>
            <span>소셜이팅 제과 요리 소셜이팅 제과 요리</span>
            <span>소셜이팅 제과 요리 소셜이팅 제과 요리</span>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-50">특별 이벤트</p>
            <span>스포츠 해설 스탠드업 코미디 스포츠 해설 스탠드업 코미디</span>
            <span>스포츠 해설 스탠드업 코미디 스포츠 해설 스탠드업 코미디</span>
          </div>
        </div>
        <div></div>
        <div className="w-full text-black md:mt-4 ">
          <span className="py-3">Twitch는 항상 새로운 방송으로 가득해요</span>
          <div className="gap-3 flex flex-col my-1 mx-2 md:flex-row md:my-12">
            <Link href="/profile/signin">
              <a className="w-full">
                <Button text="로그인" bgblack bgcolor="bg-purple-500"></Button>
              </a>
            </Link>
            <Link href="/profile/signup">
              <a className="w-full">
                <Button text="회원가입" bgcolor="bg-white"></Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enter;
