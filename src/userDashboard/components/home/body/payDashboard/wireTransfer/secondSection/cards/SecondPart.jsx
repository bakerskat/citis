import DidYouKnow from "../../../accounts/secondSection/childrenComponent/secondPart/DidYouKnow";
import scanner from "../../../../../../../../assets/payDashboard/wire/wire1.svg";

const SecondPart = () => {
  return (
    <div>
      <DidYouKnow
        img={scanner}
        manage="You can Move Money on the Go with the Citi Mobile App"
        details="Scan the QR code with the camera on your mobile device to download or open the Citi Mobile App for both ios and Android"
      />
    </div>
  );
};

export default SecondPart;
