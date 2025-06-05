import clsx from "clsx";
import AdminLink from "../../../../../admin/AdminLink";
import { otpInfo } from "../../bankDetails";

const BankOtpControl = ({
  handleSelectedOtp,
  selectedOtp,
  handleSubmitOtp,
}) => {
  return (
    <>
      <AdminLink>
        <div className="flex justify-center w-full">
          <div className="w-full p-6 bg-white rounded-lg">
            <div className="space-y-2">
              {otpInfo.map((what) => (
                <p
                  key={what.id}
                  onClick={() => handleSelectedOtp(what)}
                  className={clsx(
                    selectedOtp.name === what.name &&
                      "text-customBlue-100 font-bold"
                  )}
                >
                  {what.name}
                </p>
              ))}
            </div>
            <button
              className="w-full py-2 mt-2 font-bold text-white rounded bg-customBlue-500"
              onClick={handleSubmitOtp}
            >
              Submit
            </button>
          </div>
        </div>
      </AdminLink>
    </>
  );
};

export default BankOtpControl;
