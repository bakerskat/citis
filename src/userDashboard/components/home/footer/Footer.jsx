import FirstPart from "./firstpart/FirstPart";
import SecondPart from "./secondpart/SecondPart";
import Citi from "../../../../assets/footer/citiredesign-footer.svg";

const Footer = () => {
  return (
    <div className="bg-customGray-400  text-white text-xs  ">
      <div className="customXlg:container customXlg:mx-auto px-[1rem]  customTablet1:px-[5.2rem]">
        <FirstPart />
        <SecondPart />
      </div>
      <div className="ml-1 customTablet1:ml-8">
        <img src={Citi} alt="" />
      </div>
    </div>
  );
};

export default Footer;
