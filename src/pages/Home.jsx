import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import HairAdvert from "../components/HairAdvert";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Cta from "../components/Cta";

const Home = ({ totalQuantity, cartItems }) => {
  const links = [
    { label: "Products", to: "/products" },
    { label: "Cart", to: "/cart" },
    { label: "checkout", to: "/checkout" },
  ];

  return (
    <>
      <NavBar links={links} totalQuantity={totalQuantity} />

      <div className="">
        {/* Hero Section */}
        <Hero />

        {/* About */}
        <About/>

        {/* Best Selling Styles */}
        <HairAdvert />

        {/* Testimonials */}
        <Testimonials/>

        {/* FAQ Section*/}
        <Faq />

        {/* Transform Your Look Today */}
        <Cta />

        {/* Contact */}
        {/* <Contact/> */}

        {/* Footer */}
        <div className="mb-0 pb-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
