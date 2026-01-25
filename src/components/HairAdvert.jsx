import { Link } from "react-router-dom";
import { advert } from "../data/advert";

const HairAdvert = () => {
  return (
    <>
      <div className="pt-15 bg-green-50 pb-7">
        <h2 className="font-bold text-4xl text-center underline">
          BestSelling Styles
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8  mt-10">
          {advert.map((item) => (
            <div key={item.id}>
              <div className="pb-5 border-gray-200 border-2 shadow-2xl shadow-gray-300 h-full rounded-3xl bg-white">
                <div className=" rounded-3xl mx-2">
                  <img
                    className="w-38 h-40 m-auto mt-1 rounded-2xl hover:shadow-white shadow-2xl active:shadow-white"
                    src={item.image}
                  />
                </div>
                <p className="ml-3 pt-3 font-bold">{item.name}</p>
                <p className="ml-3 pt-2 text-[18px] font-bold text-green-900">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* View all products button */}
        <div className="mt-7 mb-2 w-fit h-max m-auto bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
          <Link to="/products">View All Products</Link>
        </div>
      </div>
    </>
  );
};

export default HairAdvert;
