import {
  ICON_SIZE_BIG,
  URL_BRANCH,
  URL_CITY,
  URL_LOGIN,
  URL_ORDER,
  URL_PRODUCTTYPE,
  URL_STAFF,
  URL_VOUCHER,
} from "@/utils/constraint.jsabout";

import {
  Archive,
  BellSimple,
  GearSix,
  Graph,
  Lifebuoy,
  ListNumbers,
  ShoppingBag,
  UsersFour,
  Wallet,
} from "phosphor-react";

export const sidebarTab = [
  {
    icon: <BellSimple size={ICON_SIZE_BIG} />,
    label: "Activity",
    link: "/",
    position: "header",
    option: {
      count: 10,
    },
  },
  {
    icon: <ShoppingBag size={ICON_SIZE_BIG} />,
    label: "Customer",
    link: "/",
    position: "body",
    role: ["admin"],
  },
  {
    icon: <ListNumbers size={ICON_SIZE_BIG} />,
    label: "Order",
    link: URL_ORDER,
    position: "body",
    // role: ["admin", ""],
  },
  {
    icon: <UsersFour size={ICON_SIZE_BIG} />,
    label: "Employee",
    link: URL_STAFF,
    position: "body",
    role: ["admin"],
  },
  {
    icon: <Graph size={ICON_SIZE_BIG} />,
    label: "City",
    link: URL_CITY,
    position: "body",
    role: ["admin"],
  },
  {
    icon: <Graph size={ICON_SIZE_BIG} />,
    label: "Branch",
    link: URL_BRANCH,
    position: "body",
    role: ["admin"],
  },
  {
    icon: <Wallet size={ICON_SIZE_BIG} />,
    label: "Voucher",
    link: URL_VOUCHER,
    position: "body",
    role: ["admin", "customer"],
  },

  {
    icon: <Archive size={ICON_SIZE_BIG} />,
    label: "Product Type",
    link: URL_PRODUCTTYPE,
    position: "body",
    role: ["admin"],
  },
  {
    icon: <ShoppingBag size={ICON_SIZE_BIG} />,
    label: "Store",
    link: "/customer/store",
    position: "body",
    role: ["customer"],
  },
  {
    icon: <GearSix size={ICON_SIZE_BIG} />,
    label: "Setting",
    link: URL_STAFF,
    position: "footer",
  },
  {
    icon: <Lifebuoy size={ICON_SIZE_BIG} />,
    label: "Help",
    link: URL_STAFF,
    position: "footer",
  },
  {
    // icon: <Clock size={ICON_SIZE_BIG} />,
    label: "History",
    link: URL_STAFF,
    position: "sub",
  },
  {
    // icon: <SignOut size={ICON_SIZE_BIG} />,
    label: "Logout",
    link: URL_LOGIN,
    position: "sub",
    callback: () => {
      sessionStorage.clear();
    },
  },
];
