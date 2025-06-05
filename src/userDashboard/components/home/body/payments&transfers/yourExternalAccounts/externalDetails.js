export const externalNavLinks = [
  {
    id: 1,
    name: "Pay & Transfer",
    path: "/payDashboard/accounts",
  },
  {
    id: 2,
    name: "View/Manage Activity",
    path: "",
  },
  {
    id: 3,
    name: "Manage Bills, Payees & Accounts",
    path: "/payDashboard/bills",
  },
  {
    id: 4,
    name: "Add an External Account",
    path: "",
  },
];

import { BsBank } from "react-icons/bs";
import { PiUserLight } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";

export const externalProfile = [
  {
    id: 1,
    icon: BsBank,
    name: "Select Bank",
  },
  {
    id: 2,
    icon: PiUserLight,
    name: "Log in to Account",
  },
  {
    id: 3,
    icon: FaCheck,
    name: "Confirm Details",
  },
];

export const frequency = [
  {
    id: 1,
    bankName: "Weekly",
  },
  {
    id: 2,
    bankName: "Bi-weekly",
  },
  {
    id: 3,
    bankName: "Monthly",
  },
];
