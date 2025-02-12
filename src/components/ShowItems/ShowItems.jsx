import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";

const ShowItems = ({ items, title }) => {
  return (
    <div className="pt-20 pb-16 ">
      <div className="grid grid-cols-2 gap-10 px-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-8" data-aos="zoom-in">
        <Link to={`/order/${title}`}>
          <button className="text-black bg-[#B6C7AA] border-t-0 border-b-4 border-s-0 border-e-0 btn btn-outline hover:text-white">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowItems;
