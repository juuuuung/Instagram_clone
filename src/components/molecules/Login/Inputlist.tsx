import Input from "../../atoms/Input";

export default function Inputlist() {
  return (
    <div>
      <Input type="password" placeholder="비밀번호" />
      <Input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
    </div>
  );
}
