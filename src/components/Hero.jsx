import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        className="pl-3 pt-20 pb-7 h-max bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cms-hero.jpg')" }}
      >
        <span className="bg-green-900 text-white px-6 py-4 rounded-full text-xs font-semibold">
          New Collection 2026
        </span>

        <h1 className="font-bold text-7xl/18 pt-10 pb-6 text-gray-100 ">
          Premium Quality Hair Extensions
        </h1>
        <p className="text-gray-100 text-[19px]">
          Transform your look with our luxurious collection of 100% human hair
          wigs and extensions. Ethically sourced, expertly crafted.
        </p>
        <div className="mt-7 mb-2 w-fit h-max bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-4 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
          <Link to="/products">Shop Now →</Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
