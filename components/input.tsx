import { cls } from "../libs/client/utils";

interface InputProps {
  inputtype: string;
  inputname: string;
}

export default function Input({ inputtype, inputname }: InputProps) {
  return <input type={inputtype} name={inputname} />;
}
