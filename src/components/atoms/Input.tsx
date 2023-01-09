interface props {
  type: string;
  placeholder: string;
}

export default function Input({ type, placeholder }: props) {
  return <input type={type} placeholder={placeholder} />;
}
