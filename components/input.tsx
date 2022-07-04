import { UseFormRegisterReturn } from "react-hook-form";
import { cls } from "../libs/client/utils";

interface InputProps {
  inputtype: string;
  restthing?: string;
  register?: UseFormRegisterReturn;
}

export default function Input({
  inputtype,
  restthing = "",
  register,
  ...rest
}: InputProps) {
  return (
    <input
      className={cls(
        "bg-slate-200 rounded-md p-3 focus:bg-white focus:outline-2 focus:outline-violet-700 box-content",
        restthing
      )}
      type={inputtype}
      {...register}
      {...rest}
    />
  );
}
