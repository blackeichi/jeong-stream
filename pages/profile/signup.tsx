import { NextPage } from "next";
import Back from "../../components/back";
import Label from "../../components/label";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "next/link";

const Signup: NextPage = () => {
  return (
    <>
      <Back where="/enter" text="회원가입"></Back>
      <div className="w-full h-screen flex flex-col justify-between items-center px-3 box-border pt-16">
        <form className="flex flex-col w-full sm:w-96 2xl:w-1/3 box-border">
          <Label htmlfor="id" text="아이디"></Label>
          <Input inputname="id" inputtype="text"></Input>
          <Label htmlfor="bimil" text="비밀번호"></Label>
          <Input inputname="bimil" inputtype="password"></Input>
          <Label htmlfor="birth" text="생년월일"></Label>
          <Input inputname="birth" inputtype="text"></Input>
          <span className="text-xs py-4">
            계정을 생성하기 위하여 다음에 동의하여 주시기 바랍니다.
          </span>
          <div className="flex items-center text-xs md:text-sm pb-4 gap-2">
            <input
              className="w-4 h-4"
              type="checkbox"
              value="true"
              name="service"
            />
            <label htmlFor="service">
              Twitch의 서비스 약관에 동의하여 주시기 바랍니다.
            </label>
          </div>
          <div className="flex items-center text-xs md:text-sm pb-4 gap-2">
            <input
              className="w-7 h-7"
              type="checkbox"
              value="true"
              name="personal"
            />
            <label htmlFor="personal">
              개인정보 수집항목, 이용목적, 보유기간이 설명되어 있는 Twitch의
              개인정보 처리방침을 읽고 이해하였습니다.
            </label>
          </div>
          <Button text="로그인" bgcolor="bg-slate-200" large={true}></Button>
        </form>
        <div className="sm:w-96 2xl:w-1/3 h-1/3 flex flex-col justify-center text-xs md:text-sm">
          <span>
            상호명: TwitchInteractive, Inc. | 대표자: Emmett Shear, CEO | 주소:
            350 Bush St, Suite 200, San Francisco, California, 94104, USA |
            전화번호: 070-8984-5697 | 호스팅 서비스 제공자 : Amazon Web
            Services, Inc.
          </span>
          <span className="cursor-pointer pt-4 font-semibold text-purple-600 text-xs md:text-sm ">
            지원팀에 문의하기 | 판매약관 | 사업자정보
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
