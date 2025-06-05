import { Link } from "react-router-dom";

const ShareData = ({ bankName, handleTheFinal, siteLink }) => {
  return (
    <div className="bg-white p-7 text-customGray-400">
      <h2 className="font-bold text-lg mb-4">
        Information-sharing terms and conditions
      </h2>

      <ul className="list-disc pl-3 space-y-6 ">
        <li>
          You authorize and direct {bankName} to share information about
          yourself, your {bankName} relationship and your accounts at {bankName}{" "}
          with Plaid (a “third party”) and, with any apps and websites (“third
          parties”) with which you’ve consented to allow Plaid to share your
          information.
        </li>
        <li>
          You should use caution and ensure that the privacy and security of
          your information is appropriately protected by them and other third
          parties with whom you share your information.
        </li>
        <li>
          Use of your information by Plaid or a specific app/site is governed by
          your agreement with them, not by {bankName}.
        </li>
        <li>
          You can always sign in to your{" "}
          <Link to={siteLink} className="text-customBlue-1035 underline">
            Security Center
          </Link>{" "}
          to view and, if you choose, submit a request to Plaid to revoke your
          consent with specific apps/sites.
        </li>
      </ul>
      <div onClick={handleTheFinal} className="mt-7 space-x-4 flex">
        <button className="px-12 text-white font-semibold py-3 rounded-xl bg-customBlue-500">
          Share my data
        </button>
      </div>
    </div>
  );
};

export default ShareData;
