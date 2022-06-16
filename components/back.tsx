import Link from "next/link";

interface BackProps {
  text: string;
  where: string;
}

export default function Back({ text, where }: BackProps) {
  return (
    <div className="flex px-4 py-2 w-full items-center justify-start font-bold box-border fixed">
      <Link href={where}>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 mr-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </a>
      </Link>
      <h1>{text}</h1>
    </div>
  );
}
