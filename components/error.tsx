import { UseFormRegisterReturn } from "react-hook-form";
import { cls } from "../libs/client/utils";

interface Msg {
  message?: string | undefined;
  restthing?: string;
}

export default function ErrorMsg({ message, restthing = "" }: Msg) {
  return <h3 className={cls("text-sm text-red-400", restthing)}>{message}</h3>;
}
