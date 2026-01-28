import { Link } from "react-router-dom";
import { advert } from "../data/advert";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const HairAdvert = () => {
  const {ref, isVisible} = useScrollFadeIn();

  return (
    <>
      <div
       ref={ref}      
      className={`pt-23 bg-green-50 pb-7
        transition-all duration-700 ease-out 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-bold text-4xl text-center underline xl:text-5xl">
          BestSelling Styles
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  mt-10">
          {advert.map((item) => (
            <div key={item.id}>
              <div className="pb-5 border-gray-200 border-2 shadow-2xl shadow-gray-300 h-full rounded-3xl bg-white  md:mx-3 xl:mx-5">

                <div className=" rounded-3xl mx-2">
                  <img
                    className="w-38 h-40 m-auto mt-1 rounded-2xl hover:shadow-white shadow-2xl active:shadow-white md:w-fit md:h-fit"
                    src={item.image}
                  />
                </div>
                <p className="ml-3 pt-3 font-bold">{item.name}</p>
                <p className="ml-3 pt-2 text-[18px] font-bold text-green-900">
                  #{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* View all products button */}
        <div className="mt-7 mb-2 w-fit h-max m-auto bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-4 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700 xl:px-20">
          <Link to="/products">View All Products</Link>
        </div>
      </div>
    </>
  );
};

export default HairAdvert;
