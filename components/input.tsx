import { cls } from "../libs/client/utils";

interface InputProps {
  inputtype: string;
  inputname: string;
}

export default function Input({ inputtype, inputname }: InputProps) {
  return (
    <input
      className="bg-slate-200 rounded-md p-3 focus:bg-white focus:outline-2 focus:outline-violet-700 box-content"
      type={inputtype}
      name={inputname}
    />
  );
}
