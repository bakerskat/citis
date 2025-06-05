import FormLink from "../../../payBills/paybillChild/payBillFirstSection/firstCard/FormLink";
import yellowMan from "../../../../../../../../assets/payDashboard/wire/wire2.svg";

const SecondCard = () => {
  return (
    <div>
      <FormLink
        ready="Ready to Send a Wire or Transfer?"
        header="You're just two steps away! Get started by adding a payee."
        add="Add a Person/Business Payee"
        choose="Choose a Payee to Make a Transfer"
        img={yellowMan}
      />
    </div>
  );
};

export default SecondCard;
