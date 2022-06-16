import { NextPage } from "next";
import Back from "../../components/back";
import Label from "../../components/label";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "next/link";

const Signin: NextPage = () => {
  return (
    <>
      <Back where="/enter" text="로그인"></Back>
      <div className="w-full h-screen flex flex-col justify-between items-center px-3 box-border pt-16">
        <form className="flex flex-col w-full sm:w-96 2xl:w-1/3 box-border">
          <Label htmlfor="id" text="아이디"></Label>
          <Input inputname="id" inputtype="text"></Input>
          <Label htmlfor="bimil" text="비밀번호"></Label>
          <Input inputname="bimil" inputtype="password"></Input>
          <Link href="/profile/signup">
            <a className="text-purple-600 font-semibold text-xs py-3 cursor-pointer w-fit focus:outline-1 focus:outline-violet-600">
              아이디가 없으신가요?
            </a>
          </Link>
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

export default Signin;
