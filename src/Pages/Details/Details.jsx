import { useParams } from "react-router-dom";

const Details = () => {
  const { menuID } = useParams();
  console.log(menuID);

  return (
    <div className="min-h-screen pt-20">
      <h1>Hello</h1>
    </div>
  );
};

export default Details;
