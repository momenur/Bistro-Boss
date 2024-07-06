import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex gap-4 text-black" data-aos="fade-up">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-lg font-semibold uppercase">{name}------------</h3>
        <p className="text-gray-700">{recipe}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p
          style={{ borderRadius: "0 200px 0px 200px" }}
          className="text-yellow-500 bg-black h-[30px] text-center text-sm p-1 rounded"
        >
          ${price}
        </p>
        <Link to={`/menu/${item._id}`}>
          <button
            style={{ borderRadius: "0 200px 0px 200px" }}
            className="bg-[#B6C7AA] text-xs px-4 py-2"
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
