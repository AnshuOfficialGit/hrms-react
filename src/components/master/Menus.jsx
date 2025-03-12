const Menus = [
  {
    title: "Dashboard",
    icon: "zmdi zmdi-home",
    path: "/",
    children: [],
  },
  {
    title: "Client Management",
    icon: "zmdi zmdi-graduation-cap",
    path: "/clients",
    children: [],
  },
  {
    title: "Configuation",
    icon: "zmdi zmdi-apps",
    path: "",
    children: [
      { title: "Offers", path: "/offers" },
      { title: "Feature", path: "/feature" },
      { title: "Plan", path: "/plan" },
    ],
  },
];
export default Menus; // Make sure this is the default export
