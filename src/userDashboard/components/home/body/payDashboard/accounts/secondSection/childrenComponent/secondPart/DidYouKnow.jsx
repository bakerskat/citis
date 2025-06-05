import { GoChevronRight } from "react-icons/go";

const DidYouKnow = ({ img, manage, details, activity }) => {
  return (
    <div className="px-6 pt-4 pb-8 card2 text-customGray-900">
      <h4 className="mb-[2px] text-customXST ">DID YOU KNOW?</h4>
      <h1 className="font-bold capitalize ">{manage}</h1>
      <div>
        <div className="my-4">
          <img src={img} alt="" />
        </div>
        <p className="text-sm font-light text-customGray-400">{details}</p>
      </div>
      {activity && (
        <div className="mt-5 linkBtn">
          <span>{activity}</span>
          <GoChevronRight />
        </div>
      )}
    </div>
  );
};

export default DidYouKnow;
