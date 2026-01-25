import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="pt-10">
      <h2 className="font-bold text-4xl text-center ">
        Transform your Look Today
      </h2>

      <p className="pt-5 text-[18px] text-center">
        Get 20% off your first order. Experience the luxury of premium quality
        hair extensions that look and feel natural.
      </p>

      {/* Shop Now */}
      <div className="mt-7 mb-2 w-fit h-max m-auto bg-green-900 shadow-2xs shadow-green-200 text-white px-10 py-3 rounded-full  transition duration-300 hover:bg-green-700 active:bg-green-700">
        <Link to="/products">Shop Now</Link>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-3">Want to make an Inquiry 📲 ?</p>

        <a
          href="https://wa.me/2348144969574?text=Hello%20I%20would%20like%20to%20make%20an%20inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-green-900 px-6 py-3 text-white font-medium hover:bg-green-700 transition"
        >
          💬 Message Us on WhatsApp
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
