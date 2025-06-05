import { BiMessageDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi"; // Feather Icons
import { BsTelephoneInbound } from "react-icons/bs"; // Bootstrap Icons

export const securityDetails = [
  {
    id: 1,
    labels: "Choose a delivery method",
  },
  {
    id: 2,
    label: "Text message",
    body: "A text message has been sent to your phone.",
    icon: BiMessageDetail,
  },
  {
    id: 3,
    label: "Phone Call",
    body: "You will receive a phone call shortly.",
    icon: FiPhoneCall,
  },
  {
    id: 4,
    label: "I'd rather call in for my code",
    body: "A number has been sent to your phone. Please call it to retrieve your code.",
    icon: BsTelephoneInbound,
  },
];
