const ExternalFormObj = ({ all, handleSelectedAccount }) => {
  const { id, bankName, account, accountType, cardNumeber } = all;

  return (
    <>
      {!cardNumeber && (
        <div
          className="px-4 py-2 text-customGray-400 hover:underline hover:text-customBlue-500 "
          onClick={() => handleSelectedAccount(id)}
        >
          {bankName && <p>{bankName}</p>}
          {account && (
            <div className="flex gap-2">
              <h3 className="">Bank Account: {account.slice(-4)}</h3>
              <p className="">({accountType})</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ExternalFormObj;
