import { Dispatch, SetStateAction } from "react";

interface props {
  text: string;
  state?: Dispatch<SetStateAction<boolean>>;
}

export default function Button({ text, state }: props) {
  return (
    <div>
      <button
        onClick={() => {
          state && state((prev) => !prev);
        }}
      >
        {text}
      </button>
    </div>
  );
}
