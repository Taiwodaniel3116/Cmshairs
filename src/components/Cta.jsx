import { Link } from "react-router-dom";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const Cta = () => {
    const {ref, isVisible} = useScrollFadeIn();
  
  return (
    <div 
     ref={ref} 
    className={`pt-10 pb-15
    transition-all duration-700 ease-out bg-green-50
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <h2 className="font-bold text-4xl text-center m-auto w-[10ch] md:w-[20ch] xl:text-5xl">
        Shop Your Perfect Wig 
        <span className="animate-bounce">🛒</span>
      </h2>

      <p className="pt-5 text-[18px] text-center m-auto md:w-[50ch] xl:w-[55ch] xl:text-[20px]">
        {/* Get 20% off your first order. Experience the luxury of premium quality
        hair extensions that look and feel natural. */}
        Discover premium, natural-looking wigs designed to fit your style, comfort, and confidence. Whether you’re looking for everyday elegance or a bold new look, our collection is carefully crafted to help you feel beautiful and secure.
      </p>

      {/* Shop Now */}
      <div className="mt-7 mb-2 w-fit h-max m-auto bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700 xl:px-20 xl:py-4">
        <Link to="/products">Shop Now</Link>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-3">Need help choosing ?</p>

        <a
          href="https://wa.me/2348144969574?text=Hello%20CMSHAIRS%20I%20would%20like%20to%20make%20an%20Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-green-900 px-6 py-3 text-white font-medium hover:bg-green-700 transition xl:px-20 xl:py-4"
        >
          💬 Reach us on Whatsapp
        </a>
      </div>

      {/* <div className="mt-8 text-center">
        <p className="text-gray-600 mb-3">OR</p>
        <a
          href="09027396272"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-green-900 px-6 py-3 text-white font-medium hover:bg-green-700 transition"
        >
          📞 Call Us
        </a>
      </div> */}
    </div>
  );
};
export default Cta;

// bg-linear-to-b from-emerald-500/90 to-emerald-500/80