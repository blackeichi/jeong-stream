import { NextPage } from "next";
import Back from "../../components/back";
import Label from "../../components/label";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ErrorMsg from "../../components/error";
import useMutation from "../../libs/useMutation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useNotUser from "../../libs/useNotUser";

interface EnterForm {
  username?: string;
  password?: string;
}
interface MutationResult {
  ok: boolean;
  error?: string;
}
const Signin: NextPage = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<EnterForm>({
    mode: "onChange",
  });
  const user = useNotUser();
  const router = useRouter();
  const [signin, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/signin");
  const onValid = (signdata: EnterForm) => {
    if (loading) return;
    signin(signdata);
  };
  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    }
  }, [data, router]);
  return (
    <>
      <Back where="/enter" text="로그인"></Back>
      <div className="w-full h-screen flex flex-col justify-between items-center px-3 box-border pt-16">
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex flex-col w-full sm:w-96 2xl:w-1/3 box-border"
        >
          <Label htmlfor="id" text="아이디"></Label>
          <ErrorMsg message={errors.username?.message}></ErrorMsg>
          <Input
            register={register("username", {
              required: "아이디를 입력해주세요.",
            })}
            inputtype="text"
          ></Input>
          <Label htmlfor="bimil" text="비밀번호"></Label>
          <ErrorMsg message={errors.password?.message}></ErrorMsg>
          <Input
            register={register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
            inputtype="password"
          ></Input>
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
