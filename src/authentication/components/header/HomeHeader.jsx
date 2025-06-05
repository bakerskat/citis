import Header from "../../../userDashboard/components/home/header/Header";
import { menuDetails2 } from "../../../userDashboard/components/home/header/secondHeader/menu/menuDetails";

const HomeHeader = () => {
  return (
    <div>
      <Header main="home" link="/personalBanking" nav={menuDetails2} />
    </div>
  );
};

export default HomeHeader;
