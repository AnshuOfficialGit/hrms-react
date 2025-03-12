import { Outlet } from "react-router-dom";
import Header from "../master/Header";
import Sidebar from "../master/Sidebar";
const AppLayout = () => {
  return (
    <>
     
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};
export default AppLayout;
