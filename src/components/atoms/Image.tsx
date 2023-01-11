interface props {
  src: string;
}

export default function Image({ src }: props) {
  return (
    <div>
      <img src={`img/${src}`} alt="" />
    </div>
  );
}
