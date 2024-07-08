import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../hooks/useCart";

const Details = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const { menuID } = useParams();
  console.log(menuID);
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetch(`https://server-bisto-boss.vercel.app/menu/${menuID}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  console.log(item);

  const handleAddCrat = () => {
    if (user && user.email) {
      const orderItem = {
        foodId: item?._id,
        name: item?.name,
        image: item?.image,
        price: item?.price,
        email: user.email,
      };
      fetch("https://server-bisto-boss.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      }).then((res) =>
        res.json().then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Food Added to Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      );
    } else {
      Swal.fire({
        title: "Please Login for Order Food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="min-h-screen pt-20">
      <SectionTitle
        subHeading="From 11.00am to 10.00pm"
        heading="Item Details"
      ></SectionTitle>
      <div className="grid max-w-6xl gap-8 px-4 py-12 mx-auto md:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <img
            src={item?.image}
            alt="Dish Image"
            width={800}
            height={600}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold">{item?.name}</h1>
            <p className="text-2xl font-semibold text-primary">
              ${item?.price}
            </p>
          </div>
          <div className="grid gap-2">
            <h2 className="text-xl font-semibold">Recipe</h2>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="text-muted-foreground">Salmon Filet</td>
                  <td>6 oz</td>
                </tr>
                <tr>
                  <td className="text-muted-foreground">Lemon Juice</td>
                  <td>2 tbsp</td>
                </tr>
                <tr>
                  <td className="text-muted-foreground">Dill</td>
                  <td>1 tbsp, chopped</td>
                </tr>
                <tr>
                  <td className="text-muted-foreground">Olive Oil</td>
                  <td>1 tbsp</td>
                </tr>
                <tr>
                  <td className="text-muted-foreground">Salt and Pepper</td>
                  <td>To taste</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid gap-2">
            <h2 className="text-xl font-semibold">Details</h2>
            <div className="grid gap-1">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Category:</span>
                <span className="uppercase">{item?.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Dietary:</span>
                <span>Gluten-free, Keto-friendly</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Prep Time:</span>
                <span>15 minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Cook Time:</span>
                <span>20 minutes</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground">
              Our grilled salmon is a delightful combination of fresh, flavorful
              fish and a tangy lemon dill sauce. Perfectly cooked to bring out
              the natural sweetness of the salmon, this dish is a must-try for
              seafood lovers.
            </p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => handleAddCrat(item)}
              size="lg"
              className="btn bg-[#B6C7AA] text-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
