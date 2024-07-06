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
      <p className="text-yellow-500 bg-black h-[30px] p-1 rounded">${price}</p>
    </div>
  );
};

export default MenuItem;
