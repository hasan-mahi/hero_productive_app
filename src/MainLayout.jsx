import { Outlet, useNavigation } from "react-router";
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Footer/Footer";
import PageLoader from "./component/PageLoader/PageLoader";

function MainLayout() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <PageLoader />;
  }

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
