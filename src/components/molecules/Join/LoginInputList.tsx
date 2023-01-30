export default function LoginInputList() {
  return (
    <div className="inputlist">
      <input
        onChange={(e) => {
          onChangeFunc(e, "userId");
        }}
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={(e) => {
          onChangeFunc(e, "userPw");
        }}
        type="password"
        placeholder="비밀번호"
      />
    </div>
  );
}
