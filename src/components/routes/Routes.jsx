import { lazy } from "react";

const componentMapping = {
  Dashboard: lazy(() => import("../../pages/dashboard/Dashboard")),
  Clients: lazy(() => import("../../pages/client/ClientList")),
  OfferList: lazy(() => import("../../pages/Configuration/offer/OfferList")),
 
};

const routesConfig = [
  {
    path: "/",
    component: "Dashboard",
  },
  {
    path: "/clients",
    component: "Clients",
  },
  {
    path: "/offers",
    component: "OfferList",
  },
 
];

export { routesConfig, componentMapping };
