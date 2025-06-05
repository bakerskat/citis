import { quickLinks } from "../../../thirdCardDetails";
import QuickLinks from "./QuickLinks";

const FirstPart = () => {
  return (
    <QuickLinks quickLinks={quickLinks} manage="Manage External Accounts" />
  );
};

export default FirstPart;
