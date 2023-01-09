import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

export default function Signup() {
  return (
    <div>
      <div>
        <Image src="logo.png" />
      </div>
      <Text text="친구들의 사진과 동영상을 보려면 가입하세요." />
      <Button text="Facebook으로 로그인" />
    </div>
  );
}
