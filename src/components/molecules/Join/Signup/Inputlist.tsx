import Input from "../../../atoms/Input";
export default function Inputlist() {
  return (
    <div className="inputlist">
      <Input type="text" placeholder="휴대폰 번호 또는 이메일 주소" />
      <Input type="text" placeholder="성명" />
      <Input type="text" placeholder="사용자 이름" />
      <Input type="text" placeholder="비밀번호" />
    </div>
  );
}
