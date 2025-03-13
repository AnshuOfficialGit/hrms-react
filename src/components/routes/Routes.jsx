import { lazy } from "react";

const componentMapping = {
  Dashboard: lazy(() => import("../../pages/dashboard/Dashboard")),
  Clients: lazy(() => import("../../pages/client/ClientList")),
  OfferList: lazy(() => import("../../pages/Configuration/offer/OfferList")),
  FeatureList: lazy(() =>
    import("../../pages/Configuration/feature/FeatureList")
  ),
  PlanList: lazy(() => import("../../pages/Configuration/plan/PlanList")),
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
  {
    path: "/feature",
    component: "FeatureList",
  },
  {
    path: "/plan",
    component: "PlanList",
  },
];

export { routesConfig, componentMapping };
