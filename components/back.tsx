interface BackProps {
  text: string;
}

export default function Back({ text }: BackProps) {
  return (
    <div className="flex px-4 py-2 w-full items-center justify-start font-bold box-border fixed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 mr-5 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <h1>{text}</h1>
    </div>
  );
}
