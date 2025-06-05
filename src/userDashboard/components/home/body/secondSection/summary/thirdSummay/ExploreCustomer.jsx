import { CiCreditCard2 } from "react-icons/ci";

const ExploreCustomer = () => {
  return (
    <>
      <div className="items-center justify-between block px-4 pt-4 pb-2 text-center customMiniTablet:pt-10 customXlg:flex customXlg:py-11 customXlg:pl-14 card text-customBlue-500">
        <div className="items-center gap-16 text-center customXlg:flex ">
          <CiCreditCard2
            size={30}
            className="w-full mb-5 customXlg:w-max customXlg:mb-0"
          />
          <p className="font-light text-customGray-400">
            Explore all the benefits of being a Citibank<sup>&reg;</sup>{" "}
            customer
          </p>
        </div>
        <button className="font-bold text-customXST">Learn More</button>
      </div>
    </>
  );
};

export default ExploreCustomer;
