import { cls } from "../libs/client/utils";

interface InputProps {
  inputtype: string;
  inputname: string;
  restthing?: string;
}

export default function Input({
  inputtype,
  inputname,
  restthing = "",
}: InputProps) {
  return (
    <input
      className={cls(
        "bg-slate-200 rounded-md p-3 focus:bg-white focus:outline-2 focus:outline-violet-700 box-content",
        restthing
      )}
      type={inputtype}
      name={inputname}
    />
  );
}
