import { Skeleton } from "antd";

const FormCard3 = ({ formd, handleAllBankInfo, loading }) => {
  return (
    <div
      onClick={() => handleAllBankInfo(formd.id)}
      className="px-5 mt-4 font-semibold "
    >
      {loading ? (
        <Skeleton active paragraph={{ rows: 2 }} />
      ) : (
        <>
          <h3>{formd.bankName}</h3>
          {formd.account && (
            <div className="flex gap-2">
              <h3 className="text-sm customMiniTablet:text-base">
                Bank Account:{formd.account.slice(-4)}
              </h3>
              <p className="text-sm customMiniTablet:text-base">
                ({formd.accountType})
              </p>
            </div>
          )}
          {formd.cardNumeber && (
            <h3 className="text-sm customMiniTablet:text-base">
              Card:{formd.cardNumeber.slice(-4)}
            </h3>
          )}
        </>
      )}
    </div>
  );
};

export default FormCard3;
