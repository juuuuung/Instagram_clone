import Image from "../../atoms/Image";
import Text from "../../atoms/Text";

export default function Adlist() {
  return (
    <div className="ad">
      <Text text="앱을 다운로드하세요." />
      <div className="ad-image">
        <Image src="login/ad/google.png" />
        <Image src="login/ad/micro.png" />
      </div>
    </div>
  );
}
