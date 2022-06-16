import { cls } from "../libs/client/utils";

interface ButtonProps {
  bgblack?: boolean;
  large?: boolean;
  text: string;
  bgcolor: string;
}

export default function Button({
  bgcolor,
  text,
  large = false,
  bgblack = false,
}: ButtonProps) {
  return (
    <button
      className={cls(
        "transition ease-in-out 1s hover:bg-purple-400 focus:bg-purple-400 focus:outline-none  text-sm w-full rounded-md px-4 font-medium ",
        large ? "py-3" : "py-2",
        bgblack ? "text-gray-50" : "text-black",
        bgcolor
      )}
    >
      {text}
    </button>
  );
}
