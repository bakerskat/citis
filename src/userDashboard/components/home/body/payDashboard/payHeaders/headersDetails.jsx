import { MdOutlineCurrencyExchange } from "react-icons/md";
import { TbFileDollar } from "react-icons/tb";
import { PiMoneyLight } from "react-icons/pi";
import { RiExchangeDollarLine } from "react-icons/ri";

export const payHeadersDetails = [
  {
    id: 1,
    bottomHeader:
      "Quickly and easily transfer money between your Citi accounts or between your Citi and external banks accounts",
    path: "/payDashboard/accounts",
    element: "Transfer Between Accounts",
    icon: MdOutlineCurrencyExchange,
  },
  {
    id: 2,
    bottomHeader:
      "Whether your're paying your electric bill or sending a paper check to your babysitter, this is the place. You can also add new payees and view upcoming bills and payment history",
    path: "/payDashboard/bills",
    element: "Pay Your Bills",
    icon: TbFileDollar,
  },
  {
    id: 3,
    bottomHeader:
      "Send and request money with almost anyone with a US bank account",
    path: "/payDashboard/zelle",
    element: "Send Money with Zelle®",
    icon: PiMoneyLight,
  },
  {
    id: 4,
    bottomHeader:
      "Send money to payees in the U.S. or overseas using Wire Transfers. Send money domestically with the instant Payment service. Get started by simply adding a payee.",
    path: "/payDashboard/wires",
    element: "Wires & Transfers ",
    icon: RiExchangeDollarLine,
  },
];
