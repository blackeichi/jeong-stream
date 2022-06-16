import { NextPage } from "next";
import Back from "../../components/back";
import Label from "../../components/label";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "next/link";
import { useState } from "react";

const Signup: NextPage = () => {
  const [method, setMethod] = useState<"email" | "phone">("phone");
  const onPhoneClick = () => setMethod("phone");
  const onEmailClick = () => setMethod("email");
  return (
    <>
      <Back where="/enter" text="회원가입"></Back>
      <div className="w-full h-screen flex flex-col justify-between items-center px-3 box-border pt-16">
        <form className="select-none flex flex-col w-full sm:w-96 2xl:w-1/3 box-border">
          {method === "phone" ? (
            <>
              {" "}
              <Label htmlfor="email" text="전화번호"></Label>
              <div className="flex items-center">
                <div className="w-10 box-content p-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png" />
                </div>
                <div className="flex justify-center relative w-full">
                  <Input
                    inputname="phone"
                    inputtype="tel"
                    restthing="pl-12 w-full"
                  ></Input>
                  <Label
                    restthing="absolute left-3 text-sm p-0"
                    text="+82"
                    htmlfor="phone"
                  ></Label>
                </div>
              </div>
              <div>
                <span className="text-xs text-slate-600">
                  전화번호를 인증해야 합니다.
                </span>
                <div
                  onClick={onEmailClick}
                  className="text-purple-600 flex gap-2 p-1 cursor-pointer w-fit active:bg-purple-200 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <h2 className="text-xs">이메일 사용</h2>
                </div>
              </div>
            </>
          ) : null}
          {method === "email" ? (
            <>
              {" "}
              <Label htmlfor="email" text="이메일"></Label>
              <Input inputname="email" inputtype="email"></Input>
              <div>
                <span className="text-xs text-slate-600">
                  이메일 계정을 인증해야 합니다.
                </span>
                <div
                  onClick={onPhoneClick}
                  className="text-purple-600 flex gap-2 p-1 cursor-pointer w-fit active:bg-purple-200 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <h2 className="text-xs">전화번호 사용</h2>
                </div>
              </div>
            </>
          ) : null}
          <Label htmlfor="id" text="아이디"></Label>
          <Input inputname="id" inputtype="text"></Input>
          <Label htmlfor="bimil" text="비밀번호"></Label>
          <Input inputname="bimil" inputtype="password"></Input>
          <Label htmlfor="birth" text="생년월일"></Label>
          <Input inputname="birth" inputtype="text"></Input>
          <span className="text-xs py-4">
            계정을 생성하기 위하여 다음에 동의하여 주시기 바랍니다.
          </span>
          <div className="text-xs md:text-sm pb-4 flex items-center gap-2">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              value="true"
              name="service"
            />
            <label htmlFor="service">
              Twitch의 서비스 약관에 동의하여 주시기 바랍니다.
            </label>
          </div>
          <div className="text-xs md:text-sm pb-4 flex items-center gap-2">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              value="true"
              name="personal"
            />
            <label className="w-fit" htmlFor="personal">
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
