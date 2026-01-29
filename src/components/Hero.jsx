import { Link } from "react-router-dom";
// import useScrollFadeIn from "../hooks/useScrollFadeIn";

const Hero = () => {
  // const { ref, isVisible } = useScrollFadeIn();

  return (
    <>
      <div
        className={`pl-3 pt-20 pb-9 h-max bg-cover bg- bg-center bg-no-repeat md:pl-10 md:pb-20 xl:pb-30 
          transition-all duration-700 ease-out 
`}
        style={{ backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),  url('/images/cms-hero.jpg')" }}
      >
        <span className="bg-green-900 text-white py-4 px-6 rounded-full text-xs font-semibold xl:px-9 ">
          New Collection 2026
        </span>

        <h1 className="text-6xl w-[3ch] font-bold sm:text-7xl/18 pt-10 pb-6 text-gray-100 md:w-[5ch] xl:w-[15ch] animate-zoom-in">
          Premium Quality Hair Extensions
        </h1>
        <p className="text-gray-100 text-[19px] md:w-[50ch] xl:w-[55ch] animate-zoom-in">
          Transform your look with our luxurious collection of 100% human hair
          wigs and extensions. Ethically sourced, expertly crafted.
        </p>

        <div className="flex gap-2 sm:gap-4">
          <div className="mt-7 mb-2 w-fit h-max bg-green-900 shadow-2xs shadow-yellow-200 text-white px-6 py-4 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700 cursor-pointer">
            <Link to="/products">Shop Now →</Link>
          </div>
          
          <button className="mt-7 mb-2 w-fit h-max bg-green-900 shadow-2xs shadow-yellow-200 text-white px-6 py-4 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700 cursor-pointer sm:px-10">Send a DM 💬</button>
        </div>
      </div>
    </>
  );
};

export default Hero;

        // ref={ref}

    // ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}