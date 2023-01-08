interface props {
  text: string;
}

export default function Text({ text }: props) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
