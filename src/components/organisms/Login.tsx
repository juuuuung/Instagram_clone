export default function Login() {
  return (
    <div>
      <div>
        <img alt="d" src="img/login/login_banner.png" />
      </div>
      <div>
        <div>
          <div>
            <img alt="d" src="img/logo.png" />
          </div>
          <div>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input type="password" placeholder="비밀번호" />
          </div>
          <div>
            <button>로그인</button>
          </div>
          <div className="or"></div>
          <div>
            <button>Facebook으로 로그인</button>
          </div>
          <div>비밀번호를 잊으셨나요?</div>
        </div>
      </div>
    </div>
  );
}
