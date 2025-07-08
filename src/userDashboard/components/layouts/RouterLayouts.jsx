import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Layouts from "./Layouts";
import Dashboard from "../../pages/Dashboard";
import UserId from "../../pages/headerPages/UserId";
import Password from "../../pages/headerPages/Password";
import ContactInformation from "../../pages/headerPages/ContactInformation";
import IncomeInformation from "../../pages/headerPages/IncomeInformation";
import EmployementStatus from "../../pages/headerPages/EmployementStatus";
import BalanceBenefits from "../../pages/headerPages/BalanceBenefits";
import AccountAlerts from "../../pages/headerPages/AccountAlerts";
import MoreSettings from "../../pages/headerPages/MoreSettings";
import CheckingAccounts from "../../pages/accountsPage/CheckingAccounts";
import SavingsAccount from "../../pages/accountsPage/SavingsAccount";
import Summary from "../../pages/accountsPage/Summary";
import NotFound from "../../pages/NotFound";
import PayDashboard from "../../pages/payDashboard/PayDashboard";
import Accounts from "../../pages/payDashboard/Accounts";
import WiresTransfer from "../../pages/payDashboard/WiresTransfer";
import Zelle from "../../pages/payDashboard/Zelle";
import PayBills from "../../pages/payDashboard/PayBills";
import Addfunds from "../../pages/addfunds/Addfunds";
import YourExternalAccounts from "../../pages/payments&transfer/YourExternalAccounts";
import ConfirmTransfer from "../../pages/payments&transfer/ConfirmTransfer";
import EditForms from "../home/body/addFunds/form/EditForms";
import RequireAuth from "../../../authentication/RequireAuth";
import RedirectAuth from "../../../authentication/RedirectAuth";
import Home from "../../../authentication/Home";
import VerifiedForm from "../../../authentication/components/body/card/firstCard/secondPart/form/VerifiedForm";
import VerifyGuard from "../../../authentication/VerifyGuard";
import Register from "../../../authentication/components/body/card/firstCard/secondPart/form/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RedirectAuth />}>
        <Route path="/personalBanking" element={<Home />} />
        {/* <Route path="register" element={<Register />} /> */}
      </Route>
      <Route element={<VerifyGuard />}>
        <Route path="/verify" element={<VerifiedForm />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          {/* for the main Dashboard */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Summary />} />
            <Route path="checking-accounts" element={<CheckingAccounts />} />
            <Route path="savings-accounts" element={<SavingsAccount />} />
          </Route>
          {/* for transfer, wire and paydashboard */}
          <Route path="payDashboard" element={<PayDashboard />}>
            <Route path="accounts" element={<Accounts />} />
            <Route path="bills" element={<PayBills />} />
            <Route path="zelle" element={<Zelle />} />
            <Route path="wires" element={<WiresTransfer />} />
          </Route>

          {/* For add funds */}
          <Route path="fundtransfer" element={<Addfunds />} />

          {/* For User Profile */}
          <Route path="user" element={<UserId />} />
          <Route path="password" element={<Password />} />
          <Route path="contact-information" element={<ContactInformation />} />
          <Route path="income-information" element={<IncomeInformation />} />
          <Route path="employement-status" element={<EmployementStatus />} />
          <Route path="balance-benefits" element={<BalanceBenefits />} />
          <Route path="account-alerts" element={<AccountAlerts />} />
          <Route path="more-settings" element={<MoreSettings />} />

          {/* For Payments and Transfer */}
          <Route path="domestic/input" element={<YourExternalAccounts />} />
          <Route path="domestic/input/editTransfer" element={<EditForms />} />
          <Route path="confirmTransFer" element={<ConfirmTransfer />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default router;
