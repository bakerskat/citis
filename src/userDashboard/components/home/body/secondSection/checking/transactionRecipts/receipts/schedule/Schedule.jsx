import { AiOutlineCalendar } from "react-icons/ai";
import { PiFileTextLight } from "react-icons/pi";

const Schedule = () => {
  return (
    <div>
      <div className="mb-10 customXlg:hidden">
        <div className="flex items-center gap-2 font-extrabold text-customBlue-300">
          <span className="text-customBlue-500">
            <PiFileTextLight size={30} />
          </span>
          <span>View Last Statement</span>
        </div>
      </div>
      <div>
        <h3 className="mb-1 text-customGray-400">
          Schedule Payments & Transfers
        </h3>
        <div className="my-10 font-light text-center text-customXST2 text-customGray-200">
          <AiOutlineCalendar
            size={48}
            className="w-full mb-4 text-customBlue-500"
          />
          You have no payments or transfer schedule
        </div>
        <div className="px-0 space-y-3 leading-6 customXlg:px-4 text-customXST2 text-customGray-200">
          <p>
            Please be aware that some transactions would not be displayed
            immediately. You can rest easy knowing that Citi&apos;s online Bill
            Payment Promises is behind every payment you make.
            <span className="underline text-customBlue-500">Learn More</span>
          </p>
          <p>
            Please note: Any Citi credit card payment made on a weekend or
            holiday will be credited as the day you make it. However, it will
            not be posted for up to two weekdays.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
