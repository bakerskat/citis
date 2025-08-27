// For verified Manually
export const bankDetails = [
  {
    id: 1,
    name: "Checking",
  },
  {
    id: 2,
    name: "Savings",
  },
];

// For verified Manually
export const routineNumber = {
  routing: "",
  account: "",
};

// for plaid
export const plaidRules = [
  {
    id: 1,
    title: "Connect effortlessly",
    info: "Plaid lets you securely connect your financial accounts in seconds",
  },
  {
    id: 2,
    title: "Secure",
    info: "Encryption helps protect your personal financial data",
  },
];

// all bank details info
import ChaseImg from "../../../../../../assets/allBanks/banks/chase/cs1.png";
import BankOfAmericaImg from "../../../../../../assets/allBanks/banks/bankofamerica/boa1.png";
import WellsFargoImg from "../../../../../../assets/allBanks/banks/wellsfargo/wf.png";
import CitiBankImg from "../../../../../../assets/allBanks/banks/citibank/cb1.png";
import UsBankImg from "../../../../../../assets/allBanks/banks/usbank/ub1.png";
import CharlesImg from "../../../../../../assets/allBanks/banks/charles/cl1.png";
import ChimeImg from "../../../../../../assets/allBanks/banks/chime/chi1.svg";
import CapitalOneImg from "../../../../../../assets/allBanks/banks/capitalone/co1.png";
import SofiImg from "../../../../../../assets/allBanks/banks/sofi/si1.png";
import BecuImg from "../../../../../../assets/allBanks/banks/becu/bec1.png";
import PncImg from "../../../../../../assets/allBanks/banks/pnc/pc1.png";
import FifthImg from "../../../../../../assets/allBanks/banks/fifth/fif2.svg";
import AlliantImg from "../../../../../../assets/allBanks/banks/alliant/all1.webp";
import TdImg from "../../../../../../assets/allBanks/banks/td/td1.png";
import RegionsImg from "../../../../../../assets/allBanks/banks/regions/rg1.png";
import CitizensImg from "../../../../../../assets/allBanks/banks/citizens/cz1.png";
import TruistImg from "../../../../../../assets/allBanks/banks/truist/tst1.svg";
import DiscoverImg from "../../../../../../assets/allBanks/banks/discover/dis1.svg";
import BmoImg from "../../../../../../assets/allBanks/banks/bmo/bo1.svg";
import KeyBankImg from "../../../../../../assets/allBanks/banks/keybank/kb1.png";
import FreedomImg from "../../../../../../assets/allBanks/banks/freedom/fcu2.png";
import OnpointImg from "../../../../../../assets/allBanks/banks/onpoint/op3.svg";
import DortImg from "../../../../../../assets/allBanks/banks/dort/dt1.png";
import Chase from "./plaid/bankAccount/Chase";
import BankOfAmerica from "./plaid/bankAccount/BankOfAmerica";
import WellsFargo from "./plaid/bankAccount/WellsFargo";
import CitiBank from "./plaid/bankAccount/CitiBank";
import UsBank from "./plaid/bankAccount/UsBank";
import CapitalOne from "./plaid/bankAccount/CapitalOne";
import Bmo from "./plaid/bankAccount/Bmo";
import Truist from "./plaid/bankAccount/Truist";
import Becu from "./plaid/bankAccount/Becu";
import Charles from "./plaid/bankAccount/Charles";
import Pnc from "./plaid/bankAccount/Pnc";
import Fifth from "./plaid/bankAccount/Fifth";
import Chime from "./plaid/bankAccount/Chime";
import Td from "./plaid/bankAccount/Td";
import Regions from "./plaid/bankAccount/Regions";
import Citizens from "./plaid/bankAccount/Citizens";
import Discover from "./plaid/bankAccount/Discover";
import Sofi from "./plaid/bankAccount/Sofi";
import KeyBank from "./plaid/bankAccount/KeyBank";
import Alliant from "./plaid/bankAccount/Alliant";
import Freedom from "./plaid/bankAccount/Freedom";
import Onpoint from "./plaid/bankAccount/Onpoint";
import Dort from "./plaid/bankAccount/Dort";

export const allBankInfoDetails = [
  {
    name: "Chase",
    img: ChaseImg,
    componet: Chase,
    children: [
      {
        name: "Chase Checking",
      },
      {
        name: "Chase Savings",
      },
    ],
  },
  {
    name: "Bank Of America",
    img: BankOfAmericaImg,
    componet: BankOfAmerica,
    children: [
      {
        name: "Bank Of America Checking",
      },
      {
        name: "Bank Of America Savings",
      },
    ],
  },
  {
    name: "Wells Fargo",
    img: WellsFargoImg,
    componet: WellsFargo,
    children: [
      {
        name: "Wells Fargo Checking",
      },
      {
        name: "Wells Fargo Savings",
      },
    ],
  },
  {
    name: "Citibank Online",
    img: CitiBankImg,
    componet: CitiBank,
    children: [
      {
        name: "Citibank Online Checking",
      },
      {
        name: "Citibank Online Savings",
      },
    ],
  },
  {
    name: "Freedom Credit Union",
    img: FreedomImg,
    componet: Freedom,
    children: [
      {
        name: "Freedom Credit Union Checking",
      },
      {
        name: "Freedom Credit Union Savings",
      },
    ],
  },
  {
    name: "U.S. Bank",
    img: UsBankImg,
    componet: UsBank,
    children: [
      {
        name: "U.S. Bank Checking",
      },
      {
        name: "U.S. Bank Savings",
      },
    ],
  },
  {
    name: "Capital One",
    img: CapitalOneImg,
    componet: CapitalOne,
    children: [
      {
        name: "Capital One Checking",
      },
      {
        name: "Capital One Savings",
      },
    ],
  },
  {
    name: "PNC",
    img: PncImg,
    componet: Pnc,
    children: [
      {
        name: "PNC Checking",
      },
      {
        name: "PNC Savings",
      },
    ],
  },

  {
    name: "Dort Financial Credit Union",
    img: DortImg,
    componet: Dort,
    children: [
      {
        name: "Dort Financial Credit Union Checking",
      },
      {
        name: "Dort Financial Credit Union Savings",
      },
    ],
  },
  {
    name: "Truist",
    img: TruistImg,
    componet: Truist,
    children: [
      {
        name: "Truist Checking",
      },
      {
        name: "Truist Savings",
      },
    ],
  },
  {
    name: "TD Bank",
    img: TdImg,
    componet: Td,
    children: [
      {
        name: "TD Bank Checking",
      },
      {
        name: "TD Bank Savings",
      },
    ],
  },
  {
    name: "Discover Bank",
    img: DiscoverImg,
    componet: Discover,
    children: [
      {
        name: "Discover Bank Checking",
      },
      {
        name: "Discover Bank Savings",
      },
    ],
  },
  {
    name: "SoFi",
    img: SofiImg,
    componet: Sofi,
    children: [
      {
        name: "SoFi Checking",
      },
      {
        name: "SoFi Savings",
      },
    ],
  },
  {
    name: "Chime",
    img: ChimeImg,
    componet: Chime,
    children: [
      {
        name: "Chime Checking",
      },
      {
        name: "Chime Savings",
      },
    ],
  },

  {
    name: "Becu",
    img: BecuImg,
    componet: Becu,
    children: [
      {
        name: "Becu Checking",
      },
      {
        name: "Becu Savings",
      },
    ],
  },

  {
    name: "Alliant Credit Union",
    img: AlliantImg,
    componet: Alliant,
    children: [
      {
        name: "Alliant Credit Union Checking",
      },
      {
        name: "Alliant Credit Union Savings",
      },
    ],
  },
  {
    name: "Charles Schwab",
    img: CharlesImg,
    componet: Charles,
    children: [
      {
        name: "Charles Schwab Checking",
      },
      {
        name: "Charles Schwab Savings",
      },
    ],
  },

  {
    name: "Regions Bank",
    img: RegionsImg,
    componet: Regions,
    children: [
      {
        name: "Regions Bank Checking",
      },
      {
        name: "Regions Bank Savings",
      },
    ],
  },
  {
    name: "Citizens Bank",
    img: CitizensImg,
    componet: Citizens,
    children: [
      {
        name: "Citizens Bank Checking",
      },
      {
        name: "Citizens Bank Savings",
      },
    ],
  },

  {
    name: "BMO (US)",
    img: BmoImg,
    componet: Bmo,
    children: [
      {
        name: "BMO (US) Checking",
      },
      {
        name: "BMO (US) Savings",
      },
    ],
  },
  {
    name: "KeyBank",
    img: KeyBankImg,
    componet: KeyBank,
    children: [
      {
        name: "KeyBank Checking",
      },
      {
        name: "KeyBank Savings",
      },
    ],
  },
  {
    name: "Fifth Third Bank",
    img: FifthImg,
    componet: Fifth,
    children: [
      {
        name: "Fifth Third Bank Checking",
      },
      {
        name: "Fifth Third Bank Savings",
      },
    ],
  },
  {
    name: "OnPoint Commumity Credit Union",
    img: OnpointImg,
    componet: Onpoint,
    children: [
      {
        name: "OnPoint Commumity Credit Union Checking",
      },
      {
        name: "OnPoint Commumity Credit Union Savings",
      },
    ],
  },

  // {
  //   name: "Betterment",
  //   img: BettermentImg,
  //   componet: Betterment,
  //   children: [
  //     {
  //       name: "Betterment - Checking",
  //     },
  //     {
  //       name: "Betterment - Savings",
  //     },
  //   ],
  // },

  // {
  //   name: "Navy Federal",
  //   img: NavyFederalImg,
  //   componet: NavyFederal,
  //   children: [
  //     {
  //       name: "Navy Federal - Checking",
  //     },
  //     {
  //       name: "Navy Federal - Savings",
  //     },
  //   ],
  // },
  // {
  //   name: "Schools First FCU",
  //   img: SchoolFirstImg,
  //   componet: SchoolFirst,
  //   children: [
  //     {
  //       name: "Schools First FCU - Checking",
  //     },
  //     {
  //       name: "Schools First FCU - Savings",
  //     },
  //   ],
  // },

  // {
  //   name: "American Express",
  //   img: AmericaExpressImg,
  //   componet: AmericaExpress,
  //   children: [
  //     {
  //       name: "American Express - Checking",
  //     },
  //     {
  //       name: "American Express - Savings",
  //     },
  //   ],
  // },

  // {
  //   name: "Huntington Bank",
  //   img: HuntingtonImg,
  //   componet: Huntington,
  //   children: [
  //     {
  //       name: "Huntington Bank - Checking",
  //     },
  //     {
  //       name: "Huntington Bank - Savings",
  //     },
  //   ],
  // },

  // {
  //   name: "Golden 1 Credit Union",
  //   img: Golden1Img,
  //   componet: Golden1,
  //   children: [
  //     {
  //       name: "Golden 1 Credit Union - Checking",
  //     },
  //     {
  //       name: "Golden 1 Credit Union - Savings",
  //     },
  //   ],
  // },

  // {
  //   name: "USAA",
  //   img: UsaaImg,
  //   componet: Usa,
  //   children: [
  //     {
  //       name: "USAA - Checking",
  //     },
  //     {
  //       name: "USAA - Savings",
  //     },
  //   ],
  // },
];

// form submit
export const bankDetailsInfo = {
  username: "",
  password: "",
};
// For Admin confirmarion
export const whatToShowDetails = [
  {
    id: 1,
    name: "Loading",
    body: "Loading...",
  },
  {
    id: 2,
    name: "Wrong Info",
    body: "The Username and password is incorrect",
  },
  {
    id: 3,
    name: "Send Otp",
    body: "",
  },
];

export const otpInfo = [
  {
    id: 1,
    name: "Loading",
    body: "Loading...",
  },
  {
    id: 2,
    name: "wrong",
    body: "The code you entered is incorrect. Please try again.",
  },
  {
    id: 3,
    name: "otp",
    body: "Your external account has been successfully linked.",
  },
];

// Wells Fargo Nav Details
export const navDetails = [
  {
    id: 1,
    name: "Customer Service",
  },
  {
    id: 2,
    name: "ATMs/Locations",
  },
  {
    id: 3,
    name: "Espanol",
  },
];
export const navyDetails = [
  {
    id: 1,
    name: "ARMY",
  },
  {
    id: 2,
    name: "MARINE CORPS",
  },
  {
    id: 3,
    name: "NAVY",
  },
  {
    id: 4,
    name: "AIR FORCE",
  },
  {
    id: 5,
    name: "SPACE FORCE",
  },
  {
    id: 6,
    name: "COAST GUARD",
  },
  {
    id: 7,
    name: "VETERANS",
  },
];

import { IoLocationSharp } from "react-icons/io5";
import { VscCallIncoming } from "react-icons/vsc";

export const navDetails1 = [
  {
    id: 1,
    name: "Routine Number:256074974",
  },
  {
    id: 2,
    name: "Locations",
    icon: IoLocationSharp,
  },
  {
    id: 3,
    name: "Contact US",
    icon: VscCallIncoming,
  },
];

// OTP OPTIONS

export const otpOptions = [
  {
    id: 1,
    name: "Text message",
  },
  {
    id: 2,
    name: "Phone call",
  },
];

// KeyBanks
export const keyNavDetails = [
  {
    id: 1,
    name: "Contact Us",
  },
  {
    id: 2,
    name: "Open a New Account",
  },
];

// Fifth Third
export const FifthNavDetails = [
  {
    id: 1,
    name: "Customer Service",
  },
  {
    id: 2,
    name: "Branch & ATM Locator",
  },
];

// Citizens Info
export const selectionLogin = [
  {
    id: 1,
    name: "Personal/Small Business",
  },
  {
    id: 2,
    name: "Commercial",
  },
];

export const footerInfo = [
  {
    id: 1,
    name: "Company",
    children: [
      {
        id: 2,
        name: "About Us",
      },
      {
        id: 3,
        name: "Careers",
      },
      {
        id: 4,
        name: "Community",
      },
    ],
  },
  {
    id: 5,
    name: "Help",
    children: [
      {
        id: 6,
        name: "Contact Us",
      },
    ],
  },
  {
    id: 7,
    name: "Resources",
    children: [
      {
        id: 8,
        name: "Branch Locator",
      },
    ],
  },
];
