import FirstPart from "./card/FirstPart";
// import Card1 from "../../../../../assets/home/card/Card1.jpg";
// import Card2 from "../../../../../assets/home/card/Card2.jpg";
// import Card3 from "../../../../../assets/home/card/Card3.jpg";
import Card1 from "@/assets/home/card/card1.jpg";
import Card2 from "@/assets/home/card/card2.jpg";
import Card3 from "@/assets/home/card/card3.jpg";

const ThirdCard = () => {
  return (
    <div>
      <FirstPart
        img={Card1}
        title="DIAMOND PREFERED®"
        name="Low Intro APR Plus No Annual Fee"
        info="Enjoy a Low Intro APR on Balance Transfers and Purchases with
            Diamond Preferred®."
        btn="Learn More"
      />
      <FirstPart
        img1={Card2}
        title="CITI® / AADVANTAGE® CREDIT CARDS"
        name="Explore Citi® / AAdvantage® Credit Cards"
        info="Whether you're a frequent flyer or first—time passenger, Citi has an airline rewards credit card to meet your travel needs."
        btn="Learn More"
      />
      <FirstPart
        img={Card3}
        title="CITI FINANCIAL PATHWAYS"
        name="A New Path Forward"
        info="Whether you’re new to budgets or a seasoned investor, we’ve got products and resources that can help."
        btn="Explore Now"
      />
    </div>
  );
};

export default ThirdCard;
