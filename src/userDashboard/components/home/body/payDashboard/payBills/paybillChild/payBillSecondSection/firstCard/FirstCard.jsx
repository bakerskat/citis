import QuickLinks from "../../../../accounts/secondSection/childrenComponent/firstPart/QuickLinks";
import { quickLinksPayBill } from "../../../payBillsDetails";

const FirstCard = () => {
  return (
    <div>
      <QuickLinks quickLinks={quickLinksPayBill} name="payee" />
    </div>
  );
};

export default FirstCard;
