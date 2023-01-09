import Image from "../../atoms/Image";
import Text from "../../atoms/Text";

export default function Adlist() {
  return (
    <div>
      <Text text="앱을 다운로드하세요." />
      <div>
        <Image src="login/ad/google.png" />
        <Image src="login/ad/micro.png" />
      </div>
    </div>
  );
}
