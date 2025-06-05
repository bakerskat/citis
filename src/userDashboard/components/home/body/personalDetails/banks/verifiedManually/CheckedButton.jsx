import clsx from "clsx";

const CheckedButton = ({ options, handleAccounts, selected }) => {
  return (
    <div
      role="radiogroup"
      aria-label="Bank Accounts"
      className="flex gap-16 pl-2"
    >
      {options.map((bank) => (
        <div
          key={bank.id}
          onClick={() => handleAccounts(bank)}
          role="radio"
          aria-checked={selected.id === bank.id}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleAccounts(bank);
            }
          }}
          className="flex items-center gap-2"
        >
          <div className="border border-black rounded-full p-[3px] text-center mb-[1px]">
            <p
              className={clsx(
                "rounded-full w-[13px] h-[13px]",
                selected.id === bank.id ? "bg-customBlue-500" : ""
              )}
            ></p>
          </div>
          <h2
            className={clsx(
              selected.id === bank.id
                ? "text-customBlue-500 hover:underline"
                : "hover:text-customBlue-700 hover:underline"
            )}
          >
            {bank.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CheckedButton;
