import clsx from "clsx";
import { useState } from "react";
import {
  AiFillExclamationCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";
import { ClipLoader } from "react-spinners";

const FormInput = ({
  formState,
  handleSubmit,
  handleChange,
  formSubmit,
  errorForm,
  errorMessage,
  loading,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white mt-7 customTablet1:box-shadow7 customTablet1:rounded-2xl text-customGray-400">
      <div className="px-4 py-2 customMiniTablet:px-12 customTablet1:px-4">
        {errorMessage && (
          <div className="flex items-center w-full gap-1 px-2 py-3 my-4 font-bold border-l-4 bg-customGray-1029 border-customRed-100 text-customGray-1066">
            <AiFillExclamationCircle
              size={25}
              className="mb-[2px] text-customRed-100"
            />
            {errorMessage}
          </div>
        )}
        <div className="w-full gap-3 space-y-4 customMiniTablet:flex customMiniTablet:space-y-0">
          <div className="w-full">
            <label
              className={clsx(
                "text-sm font-semibold ",
                errorForm.username ? "text-customRed-100" : ""
              )}
            >
              User ID
            </label>
            <input
              type="text"
              value={formState.username}
              name="username"
              onChange={handleChange}
              placeholder="User ID"
              className={clsx(
                "w-full border py-[11px] px-4 rounded-lg outline-none border-customGray-600 placeholder:text-customGray-200 placeholder:italic mt-[2px] transistion2 focus:ring-2 focus:ring-offset-1 focus:ring-black focus:ring-opacity-90  focus:bg-customBlue-400 focus:border-customBlue-500 font-extrabold text-customBlue-500 placeholder:font-medium",
                errorForm.username && "border-customRed-100"
              )}
            />
            {errorForm.username && (
              <p className="flex gap-2 mt-2 text-sm text-customRed-100">
                Enter a valid user ID.
              </p>
            )}
          </div>
          <div className="relative w-full">
            <label
              className={clsx(
                "text-sm font-semibold ",
                errorForm.password ? "text-customRed-100" : ""
              )}
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={formState.password}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className={clsx(
                "w-full border py-[11px] pl-4 pr-8 rounded-lg outline-none border-customGray-600 placeholder:font-medium placeholder:text-customGray-200 placeholder:italic mt-[2px]  transistion2 focus:ring-2 focus:ring-offset-1 focus:ring-black focus:ring-opacity-90  focus:bg-customBlue-400 focus:border-customBlue-500 font-extrabold text-customBlue-500",
                errorForm.password && "border-customRed-100"
              )}
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-0 h-full py-4 mt-6 right-2 text-customBlue-500"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </div>
            {errorForm.password && (
              <p className="flex gap-2 mt-2 text-sm text-customRed-100">
                Enter a valid password.
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 ">
          <button
            onClick={() => setIsChecked((prev) => !prev)}
            className={clsx(
              "flex items-center justify-center w-6 h-6 text-white border-2 rounded border-customBlue-500 ",
              isChecked && "bg-customBlue-500"
            )}
          >
            {isChecked && <FaCheck />}
          </button>
          <span className="text-xs">Remember User ID</span>
        </div>
        {isChecked && (
          <p className="text-[10px] my-1.5">
            Do not select if you are using a public computer.
          </p>
        )}

        <div className="flex justify-end customTablet1:block">
          <button
            disabled={loading}
            onClick={(e) => handleSubmit(e, formSubmit)}
            className={clsx(
              "w-full  customMiniTablet:w-1/2   customTablet1:w-full  py-2 my-5 font-extrabold text-white rounded-lg  transition-colors",
              loading
                ? "bg-customBlue-500 bg-opacity-40 cursor-not-allowed"
                : "bg-customBlue-500 hover:bg-customBlue-200"
            )}
          >
            {loading && <ClipLoader size={10} color="#fff" />}
            {loading ? "Loading.." : "Sign On"}
          </button>
        </div>
        <div className="flex justify-between text-sm">
          <p>
            <span className="underline text-customBlue-500">Register</span> /{" "}
            <span className="underline text-customBlue-500">Activate</span>{" "}
          </p>
          <p>
            Forgot{" "}
            <span className="underline text-customBlue-500">User ID</span> or{" "}
            <span className="underline text-customBlue-500">Password</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-1 py-4 mt-5 font-bold bg-customBlue-400 text-customBlue-500">
        <LuLayoutGrid size={25} />
        <p>Passwordless Sign ON</p>
      </div>
    </div>
  );
};

export default FormInput;
