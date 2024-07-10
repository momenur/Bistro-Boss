import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";
// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// React Rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import quote from "../../../assets/Home/quote.png";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("https://server-bisto.vercel.app/reviews");
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="px-4 py-2 bg-gray-100">
      <SectionTitle
        subHeading="what our client say"
        heading="testimonials"
      ></SectionTitle>
      <div className="mb-20">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="flex justify-center mb-2">
                <Rating
                  style={{ maxWidth: 150 }}
                  value={item.rating}
                  readOnly
                />
              </div>
              <div className="flex items-center justify-center">
                <img className="w-[100px] mb-8" src={quote} alt="" />
              </div>
              <div className="px-32">
                <p>{item.details}</p>
                <h3 className="mt-4 text-3xl text-center text-yellow-500">
                  {item.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
