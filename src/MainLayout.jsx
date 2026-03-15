import { Outlet } from "react-router";
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
