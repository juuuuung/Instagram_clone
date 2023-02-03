interface props {
  src: string;
}

export default function Image({ src }: props) {
  return <img src={`img/${src}`} alt="" />;
  // return <h3>인스타</h3>;
}
