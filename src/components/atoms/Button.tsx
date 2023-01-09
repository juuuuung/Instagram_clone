import { Dispatch, SetStateAction } from "react";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface props {
  text: string;
  state?: Dispatcher<boolean>;
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
