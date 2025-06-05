import QuickLinks from "../../../accounts/secondSection/childrenComponent/firstPart/QuickLinks";
import { wireQuickLinks } from "../../wireDetails";

const FirstPart = () => {
  return (
    <div>
      <QuickLinks
        quickLinks={wireQuickLinks}
        manage="All Transfer Activity"
        name="wire"
      />
    </div>
  );
};

export default FirstPart;
