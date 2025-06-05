import yelloMan from "../../../../../../../../../assets/payDashboard/payBills/billftuser.svg";
import FormLink from "./FormLink";

const FirstCard = () => {
  return (
    <FormLink
      ready="Ready to Pay Bills"
      header="Get Started by adding bill payee."
      add="Add a Bill Payee"
      choose="Choose a Payee Below to Pay a Bill"
      img={yelloMan}
    />
  );
};

export default FirstCard;
