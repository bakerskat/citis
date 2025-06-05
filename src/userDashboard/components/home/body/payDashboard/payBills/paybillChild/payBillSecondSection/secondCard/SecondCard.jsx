import DidYouKnow from "../../../../accounts/secondSection/childrenComponent/secondPart/DidYouKnow";
import yelloGirl from "../../../../../../../../../assets/payDashboard/payBills/billsDidYouKnow.svg";

const SecondCard = () => {
  return (
    <div>
      <DidYouKnow
        img={yelloGirl}
        manage="You can manage your Bill Pay Alerts"
        details="Stay on top of your payments by signing up for bill pay alerts or editing your current alerts."
        activity="Sign Up or Edit"
      />
    </div>
  );
};

export default SecondCard;
