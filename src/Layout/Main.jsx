import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const isAuthentication =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="min-w-full text-black">
      {isAuthentication || <Navbar />}
      <div className="w-full bg-gradient-to-b from-gray-50 via-[#B6C7AA] to-gray-50">
        <div className="max-w-screen-xl mx-auto bg-gradient-to-b from-white via-[#B6C7AA] to-white">
          <Outlet />
        </div>
      </div>
      {isAuthentication || <Footer />}
    </div>
  );
};

export default Main;
