interface props {
  src: string;
}

export default function Image({ src }: props) {
  return <img src={`img/${src}`} alt="" />;
}
