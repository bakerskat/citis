import SpendAndSaveCard from "./card/SpendAndSaveCard";
import { spendDetails } from "./card/spendDetails";

const SpendAndSave = () => {
  return (
    <div className="p-4  customXlg:w-1/2 card">
      <h3 className="mb-2 font-bold text-customXST2 text-customGray-400">
        Ways to Save
      </h3>
      <div className="mb-2 space-y-3">
        {spendDetails.map((spend) => (
          <SpendAndSaveCard spend={spend} key={spend.id} />
        ))}
      </div>
    </div>
  );
};

export default SpendAndSave;
