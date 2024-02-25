import {
  FaQuestion,
  FaRocketchat,
  FaSheetPlastic,
  FaWpforms,
} from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";

import { ROUTES } from "~/constants";
import { IMenuItem } from "~/types/menu";

export const menuData: IMenuItem[] = [
  // menu section
  {
    name: "Dashboard",
    href: ROUTES.dashboard,
    icon: <RxDashboard size={18} />,
    section: "menu",
  },
  {
    name: "Survey",
    icon: <FaSheetPlastic size={18} />,
    href: ROUTES.survey,
    section: "menu",
    dropdownItems: [
      {
        name: "Recently",
        href: ROUTES.recently,
      },
    ],
  },
  {
    name: "Question",
    href: ROUTES.question,
    icon: <FaQuestion size={18} />,
    section: "menu",
  },
  {
    name: "Form",
    href: ROUTES.form,
    icon: <FaWpforms size={18} />,
    section: "menu",
  },

  // helper section
  {
    name: "Support",
    icon: <FaRocketchat size={18} />,
    href: ROUTES.support,
    section: "helper",
  },
];
