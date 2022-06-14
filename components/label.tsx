import { cls } from "../libs/client/utils";

interface LabelProps {
  text: string;
  htmlfor: string;
}

export default function Label({ text, htmlfor }: LabelProps) {
  return (
    <label className="text-sm sm:text-base font-semibold" htmlFor={htmlfor}>
      {text}
    </label>
  );
}
