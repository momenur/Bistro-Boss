import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle";
import AdminGraph from "../AdminHome/AdminGraph/AdminGraph";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mb-24">
      <SectionTitle subHeading="This Is You" heading="Dashboard" />
      <div className="flex flex-col gap-8">
        <div className="flex items-center">
          <AdminGraph />
          <div className="flex gap-4">
            <div className="bg-gradient-to-r from-[#F6E6CB] via-[#B6C7AA] to-[#B6C7AA] h-[100px] w-full flex justify-center items-center">
              <div className="w-full px-24">
                <h1 className="text-3xl font-bold">
                  Total Added Items: {cart.length}
                </h1>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#B6C7AA] via-[#B6C7AA] to-[#F6E6CB] h-[100px] flex w-full justify-center items-center">
              <div className="w-full px-24">
                <h1 className="w-full text-3xl font-bold">
                  Total Added Items: {cart.length}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#B6C7AA] via-[#B6C7AA] to-[#F6E6CB] h-[100px] flex w-full justify-between px-10 items-center">
            <div className="">
              <h1 className="w-full text-3xl font-bold">
                TOTAL AMOUNT: ${totalPrice}
              </h1>
            </div>
            <Link to="/dashboard/payment">
              <button className="size-24 bg-[#B6C7AA] py-3 px-6 text-black font-semibold">
                PAY NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-16 p-6 bg-[#B6C7AA]">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src={user.photoURL}
            alt=""
          />
          <div className="flex flex-col gap-1">
            <p>Your Name</p>
            <h1 className="text-5xl font-semibold uppercase">
              {user.displayName}
            </h1>
            <p>User Email: {user.email}</p>
            <p className="text-blue-700">
              Well Come{" "}
              <span className="text-xl font-bold text-red-500 uppercase">
                {user.displayName}
              </span>{" "}
              to Bistro Boss Restaurants. Our Food Quality Is Best
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
