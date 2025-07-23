import AdminLink from "../../../../../admin/AdminLink";
import { whatToShowDetails } from "../../bankDetails";
import clsx from "clsx";

const BankControl = ({
  handleSelectedId,
  selectedPath,
  handleSelectSubmit,
  setNextPass,
  setNextLoad,
}) => {
  const newButton = () => {
    handleSelectSubmit();
    setNextPass(false);
    setNextLoad(false);
  };

  return (
    <>
      <AdminLink>
        <div className="flex justify-center w-full">
          <div className="w-full p-6 bg-white rounded-lg">
            <div className="space-y-2">
              {whatToShowDetails.map((what) => (
                <p
                  key={what.id}
                  onClick={() => handleSelectedId(what)}
                  className={clsx(
                    selectedPath.name === what.name &&
                      "text-customBlue-100 font-bold"
                  )}
                >
                  {what.name}
                </p>
              ))}
            </div>
            <button
              className="w-full py-2 mt-2 font-bold text-white rounded bg-customBlue-500"
              onClick={newButton}
            >
              Submit
            </button>
          </div>
        </div>
      </AdminLink>
    </>
  );
};

export default BankControl;
