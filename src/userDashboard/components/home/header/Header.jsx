import FirstHeader from "./firstHeader/FirstHeader";
import SecondHeader from "./secondHeader/SecondHeader";

const Header = ({ main, link, nav }) => {
  return (
    <>
      <div className="bg-white">
        <FirstHeader main={main} link={link} />
        <SecondHeader nav={nav} main={main} />
      </div>
    </>
  );
};

export default Header;
