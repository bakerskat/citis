const FirstSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-16 space-y-5 customXlg:mb-0 customXlg:block text-customGray-400">
      <h2 className="text-[23px] customXlg:text-[27px] font-bold">
        Zelle® . Fast. Secure. Easy.
      </h2>
      <p className="relative text-sm italic text-center customXlg:text-base customMiniTablet:text-start">
        Zelle is a secure and easy way to send and receive money typically
        within minutes.
      </p>
      <p className="relative font-light  customMiniTablet:w-[350px] customXlg:w-full pb-6 customXlg:pb-0 px-5  customMiniTablet:px-0">
        Both sender and receiver must have a bank account in the U.S. to use{" "}
        <span className="italic">Zelle</span> . Transactions typically occur in
        minutes when the recipient&apos;s email address or U.S. mobile number us
        already enrolled with <span className="italic">Zelle</span>.
      </p>
      <button className="w-[50%]   customMiniTablet:w-[25%] text-white font-bold customXlg:w-[50%] bg-customBlue-500 py-3 rounded-xl ">
        Enroll
      </button>
    </div>
  );
};

export default FirstSection;
