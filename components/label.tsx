import { cls } from "../libs/utils";

interface LabelProps {
  text: string;
  htmlfor: string;
  restthing?: string;
}

export default function Label({ text, htmlfor, restthing = "" }: LabelProps) {
  return (
    <label
      className={cls("text-sm sm:text-base font-semibold py-1 pt-3", restthing)}
      htmlFor={htmlfor}
    >
      {text}
    </label>
  );
}
