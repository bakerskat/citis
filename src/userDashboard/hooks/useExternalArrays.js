import { useSelector } from "react-redux";
import {
  selectedCheckingAmount,
  selectedSavingAmount,
} from "../redux/feature/transaction/transactionSlice";
import { useContext } from "react";
import { GeneralContext } from "../context/generalValue/GeneralValueContext";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PiUser } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const useExternalArrays = () => {
  const checkingAmount = useSelector(selectedCheckingAmount);
  const savingAmount = useSelector(selectedSavingAmount);
  const { accountMoney, savingNav, checkingNav, checkingRouNum, countrtState } =
    useContext(GeneralContext);

  const accountAvailable = [
    {
      id: 1,
      bankName: `Checking:${checkingNav} $${checkingAmount.toLocaleString()} available`,
    },
    {
      id: 2,
      bankName: `Citi® Savings:${savingNav} $${savingAmount.toLocaleString()} available`,
    },
    {
      id: 3,
      bankName: accountMoney,
    },
  ];

  const formDetails1 = [
    {
      id: 1,
      label: `Checking-${checkingNav}`,
    },
    {
      id: 2,
      label: `Citi® Savings Account-${savingNav}`,
    },
    {
      id: 3,
      label: accountMoney,
    },
  ];

  const thirdCardDetails = [
    {
      id: 1,
      name: "In-Process & Completed",
      children: [
        {
          id: 2,
          label: `Checking-${checkingNav}`,
          info: "Looks like you don't have any recent activity",
        },
        {
          id: 3,
          label: `Citi® Savings Account-${savingNav}`,
          info: "Looks like you don't have any recent activity",
        },
      ],
    },
    {
      id: 4,
      name: "Scheduled",
      details: "Looks like you don't have any recent activity",
    },
    {
      id: 5,
      name: "Canceled",
      details: "Looks like you don't have any recent activity",
    },
  ];

  const accountInfoDetails = [
    {
      id: 1,
      name: "Account Number",
      info: `*******${checkingNav}`,
      icon: IoEyeOutline,
    },
    {
      id: 2,
      name: "Routine Number",
      info: checkingRouNum,
    },
    {
      id: 3,
      name: "Information For",
      info: countrtState,
      icon: AiOutlineInfoCircle,
    },
    {
      id: 4,
      name: "Fee Information",
      info: "Learn More",
      icon: AiOutlineInfoCircle,
    },
  ];

  const secondSummaryDetails1 = [
    {
      id: 1,
      name: `Checking-${checkingNav}`,
      path: "checking-accounts",
      body: "There are no checking transactions",
    },
    {
      id: 2,
      name: ` Savings Account-${savingNav}`,
      path: "savings-accounts",
      body: "There are no savings transactions",
    },
  ];

  const menuDetails1 = [
    {
      id: 1,
      label: "Accounts",
      checked: "Singled",
      children: [
        { id: 2, path: "/dashboard", element: "Overview" },
        {
          id: 3,
          path: "/dashboard/checking-accounts",
          element: `checking-${checkingNav}`,
        },
        {
          id: 4,
          path: "/dashboard/savings-accounts",
          element: `CitiSavi...${savingNav}`,
        },
      ],
    },
    {
      id: 5,
      label: "Payments & Transfers",
      children: [
        {
          id: 6,
          labels: "PAYMENTS",
          children: [
            {
              id: 7,
              path: "/payDashboard/accounts",
              element: "Payments Dashboard",
            },
            {
              id: 8,
              path: "/dashboard",
              element: "Payment & Transfer Activity",
            },
            { id: 9, path: "/payDashboard/bills", element: "Pay Bills" },
          ],
        },
        {
          id: 10,
          labels: "TRANSFER",
          children: [
            {
              id: 11,
              path: "/payDashboard/accounts",
              element: "Your Citi Accounts",
            },
            {
              id: 12,
              path: "/domestic/input",
              element: "Your External Accounts",
            },
            {
              id: 13,
              path: "/payDashboard/wires",
              element: "Wires & Transfers",
            },
            {
              id: 14,
              path: "/payDashboard/zelle",
              element: "Send Money with Zelle",
            },
          ],
        },
      ],
    },
    {
      id: 15,
      label: "Services",
      checked: "Singled",
      children: [
        { id: 16, path: "/banking-services", element: "Banking Services" },
        {
          id: 17,
          path: "/statements-document",
          element: "Statements & Document",
        },
        { id: 18, path: "/security-center", element: "Security Center" },
        {
          id: 19,
          path: "/fraud-scan-updates",
          element: "Fraud & Scan Updates",
        },
        {
          id: 20,
          path: "/financial-resource-center",
          element: "Financial Resource Center",
        },
      ],
    },
    {
      id: 21,
      label: "Explore Products",
      children: [
        {
          id: 22,
          labels: "CHECKING & SAVINGS",
          children: [
            { id: 23, path: "/banking-overview", element: "Banking Overview" },
            { id: 24, path: "/checking", element: "Checking" },
            { id: 25, path: "/savings", element: "Savings" },
            { id: 26, path: "/cds", element: "CDs" },
            { id: 27, path: "/iras", element: "IRAs" },
            { id: 28, path: "/rates", element: "Rates" },
            { id: 29, path: "/small-business", element: "Small Business" },
          ],
        },
        {
          id: 30,
          labels: "CREDIT CARDS",
          children: [
            {
              id: 31,
              path: "/view-all-credit-cards",
              element: "View All Credit Cards",
            },
            { id: 32, path: "/rewards", element: "Rewards" },
            { id: 33, path: "/balance-transfer", element: "Balance Transfer" },
            { id: 34, path: "/small-buiness", element: "Small Business" },
          ],
        },
        {
          id: 35,
          labels: "INVESTINGS",
          children: [
            {
              id: 36,
              path: "/self-directed-investing",
              element: "Self-Directed Investing",
            },
            { id: 37, path: "/guided-investing", element: "Guided Investing" },
            {
              id: 38,
              path: "/working-with-an-advisor",
              element: "Working with an Advisor",
            },
          ],
        },
        {
          id: 39,
          labels: "LENDING",
          children: [
            {
              id: 40,
              path: "/personal-installment-loan",
              element: "Personal Installment Loan",
            },
            { id: 41, path: "/morgages", element: "Mortgages" },
            { id: 42, path: "/home-equity", element: "Home Equity" },
            { id: 43, path: "/small-business", element: "Small Business" },
          ],
        },
        {
          id: 44,
          labels: "WEALTH MANAGEMENT",
          children: [
            {
              id: 45,
              path: "/citigold-private-client",
              element: "Citigold Private Client",
            },
            { id: 46, path: "/citigold", element: "Citigold" },
            {
              id: 47,
              path: "/find-wealth-team",
              element: "Find a Wealth Team",
            },
          ],
        },
      ],
    },
    {
      id: 48,
      label: "Rewards & Offers",
      checked: "Singled",
      children: [
        { id: 49, path: "/offers-for-you", element: "Offers for You" },
        { id: 50, path: "/citi-entertainment", element: "Citi Entertainment" },
        { id: 51, path: "/special-offers", element: "Special Offers" },
        {
          id: 52,
          path: "/explore-all-products-offers",
          element: "Explore All Products & Offers",
        },
      ],
    },
    {
      id: 52,
      labelss: "Profile",
      custtomLarge: "Large",
      icon: PiUser,
      children: [
        {
          id: 53,
          labels: "PROFILE",
          children: [
            {
              id: 54,
              path: "/user",
              element: "USER ID",
              side: "secure",
            },
            {
              id: 55,
              path: "/password",
              element: "Password",
              side: "secure",
            },
            {
              id: 56,
              path: "/contact-information",
              element: "Contact Information",
              side: "secure",
            },
            {
              id: 57,
              path: "/income-information",
              element: "Income Information",
              side: "secure",
            },
            {
              id: 58,
              path: "/employement-status",
              element: "Employement Status",
              side: "secure",
            },
            {
              id: 59,
              path: "/balance-benefits",
              element: "Balance & Benefits",
              side: "secure",
            },
          ],
        },
        {
          id: 60,
          labels: "SETTINGS",
          children: [
            {
              id: 61,
              path: "/account-alerts",
              element: "Account Alerts",
              side: "secure",
            },
            {
              id: 62,
              path: "",
              element: "More Settings",
            },
          ],
        },
      ],
    },
    {
      id: 63,
      labelss: "ATM/Branch",
      custtomLarge: "Large",
      icon: SlLocationPin,
    },
    {
      id: 60,
      label: "Open An Account",
    },
  ];

  const routineDetails = [
    {
      id: 1,
      name: "Account Number",
      info: `*******${savingNav}`,
      icon: IoEyeOutline,
    },
    {
      id: 2,
      name: "Routing Number",
      info: checkingRouNum,
    },
    {
      id: 3,
      name: "Information For",
      info: countrtState,
      icon: AiOutlineInfoCircle,
    },
  ];

  return {
    accountAvailable,
    formDetails1,
    thirdCardDetails,
    accountInfoDetails,
    secondSummaryDetails1,
    menuDetails1,
    routineDetails,
  };
};

export default useExternalArrays;
