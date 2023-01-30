interface props {
  text: string;
}

export default function Button({ text }: props) {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}
