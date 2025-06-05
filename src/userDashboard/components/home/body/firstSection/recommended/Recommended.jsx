import { recommendedDetails } from "./recommendDetails";
import { GrTag } from "react-icons/gr";
import { GoChevronRight } from "react-icons/go";
import handCard from "../../../../../../assets/side-header-img/handCard.png";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  isClose,
  selectedModal,
} from "../../../../../redux/feature/modal/modalSlice";
import { Link } from "react-router-dom";

const Recommended = () => {
  const modal = useSelector(selectedModal);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="ml-1 border-2 rounded-lg border-customBlue-400">
        {modal && (
          <div className="flex items-start justify-between gap-5 p-4 customMiniTablet:justify-normal bg-customBlue-400 ">
            <div className="flex gap-5">
              <div className="w-[40px]">
                <img src={handCard} alt="" className="w-full " />
              </div>

              <div>
                <h3 className="font-extrabold text-[14px] text-customGray-400 mb-2">
                  Discover Citi Wealth Builder
                </h3>
                <p className="mb-2 text-customXST text-customGray-200">
                  Pay $0 advisory fee for the first 6 months after account
                  opening
                </p>
                <button className="px-6 py-1 font-bold text-white rounded-lg bg-customBlue-500 text-customXST hover:bg-customBlue-200 transistion">
                  Learn More
                </button>
              </div>
            </div>
            <button onClick={() => dispatch(isClose())}>
              <IoClose size={22} className="hover:text-customBlue-200" />
            </button>
          </div>
        )}
        <div className="py-5 bg-white">
          <h3 className="mb-6 ml-3 text-sm font-extrabold text-customGray-400">
            Explore Products
          </h3>
          <div className="flex items-center justify-center gap-4 customMiniTablet:gap-8 customMiniTablet:px-4 customXlg:px-0 customXlg:gap-11">
            {recommendedDetails.map((reco) => {
              const { name, icon } = reco;
              return (
                <div key={name} className="cursor-pointer group">
                  <Link to="/dashboard" reloadDocument>
                    <div className="flex justify-center  items-center relative transform left-[50%] -translate-x-[50%] text-[27px] text-center  w-[40px] h-[40px] rounded-[50%] leading-[40px] border border-customBlue-500 text-customBlue-500 group-hover:-translate-y-3 transistion2 group-hover:bg-customBlue-200 group-hover:text-white ">
                      {icon()}
                    </div>
                    <p className="mt-3 font-light text-customXST text-customBlue-500 group-hover:underline transistion2">
                      {name}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-2 flex items-center justify-between customTablet1:px-4 py-1.5 bg-customBlue-400 text-customBlue-500 group cursor-pointer">
          <div className="flex items-center gap-3 ">
            <GrTag size={26} />
            <p className="font-normal transistion group-hover:underline">
              View All Citi Offers for You
            </p>
          </div>
          <GoChevronRight size={35} />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
