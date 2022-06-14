import { NextPage } from "next";
import Back from "../../components/back";
import Label from "../../components/label";
import Input from "../../components/input";

const Signin: NextPage = () => {
  return (
    <>
      <Back text="로그인"></Back>
      <div className="w-full h-screen flex items-center justify-center px-3 box-border">
        <form className="flex flex-col w-full sm:w-96 2xl:w-1/3 box-border">
          <Label htmlfor="id" text="아이디"></Label>
          <Input inputname="id" inputtype="text"></Input>
          <Label htmlfor="bimil" text="비밀번호"></Label>
          <Input inputname="bimil" inputtype="password"></Input>
        </form>
      </div>
    </>
  );
};

export default Signin;
