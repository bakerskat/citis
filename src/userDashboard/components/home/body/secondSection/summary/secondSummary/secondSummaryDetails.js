import { MdOutlineCurrencyExchange } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { PiFileTextLight } from "react-icons/pi";
import { TbFileDollar, TbMailDollar } from "react-icons/tb";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { TbChartPie2 } from "react-icons/tb";

export const secondSummaryDetails2 = [
  {
    id: 1,
    name: "Transfer Money",
    path: "/payDashboard/accounts",
    icon: MdOutlineCurrencyExchange,
  },
  {
    id: 2,
    name: "View Statment",
    path: "",
    icon: PiFileTextLight,
  },
  {
    id: 3,
    name: "Lock/Unlock a Card",
    path: "",
    icon: SlLock,
  },
  {
    id: 4,
    name: "Pay a Bill",
    path: "/payDashboard/bills",
    icon: TbFileDollar,
  },
  {
    id: 5,
    name: "Send Money with zelle",
    path: "/payDashboard/zelle",
    icon: TbMailDollar,
  },
  {
    id: 6,
    name: "View All Services",
    path: "",
    icon: TfiLayoutGrid2,
  },
];

export const secondSummaryDetails3 = [
  {
    id: 1,
    name: "Transfer Money",
    path: "/payDashboard/accounts",
    icon: MdOutlineCurrencyExchange,
  },
  {
    id: 2,
    name: "View Statment",
    path: "",
    icon: PiFileTextLight,
  },
  {
    id: 3,
    name: "View Financial Resources center",
    path: "",
    icon: TbChartPie2,
  },

  {
    id: 4,
    name: "View All Services",
    path: "",
    icon: TfiLayoutGrid2,
  },
];
