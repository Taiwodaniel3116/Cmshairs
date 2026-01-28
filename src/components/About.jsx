import useScrollFadeIn from "../hooks/useScrollFadeIn";


export default function About() {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <>
    <section
      ref={ref}
    className={`w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* Image Container */}
        <div className="w-full h-100 rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
          <img
            src="/images/our-story.jpg"
            alt="Premium wig collection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl xl:text-5xl font-bold mb-6">
            About Our Brand
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a premium hair brand dedicated to providing high-quality,
            100% virgin human hair wigs designed to enhance confidence and
            beauty. Every wig is carefully selected and crafted to deliver
            a natural look, soft texture, and long-lasting durability.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Our wigs are suitable for everyday wear, special occasions,
            and professional styling. Whether you prefer sleek, curly,
            or voluminous looks, our collection is created to meet your
            unique style needs.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Customer satisfaction is at the heart of our business.
            From careful sourcing to reliable delivery, we ensure that
            every order meets the highest standard of quality and care.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              100% Virgin Human Hair
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Long-Lasting Quality
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Natural Look & Feel
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Trusted by Happy Customers
            </div>
          </div>
        </div>

      {/* </div> */}
    </section>
   </>
  );
}
