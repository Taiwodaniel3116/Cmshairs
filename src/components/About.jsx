import useScrollSlideIn from "../hooks/useScrollSlideIn";

export default function AboutSection() {
  const imageAnim = useScrollSlideIn("left");
  const textAnim = useScrollSlideIn("right");

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
        
        {/* Image */}
        <div
          ref={imageAnim.ref}
          className={`w-full h-100 rounded-2xl overflow-hidden bg-gray-100 shadow-sm ${imageAnim.className}`}
        >
          <img
            src="/images/our-story.jpg"
            alt="Premium wig collection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          ref={textAnim.ref}
          className={textAnim.className}
        >
          <h2 className="text-4xl xl:text-5xl font-bold mb-6 text-center">
            About Our Brand
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a premium hair brand dedicated to providing high-quality,
            100% virgin human hair wigs designed to enhance confidence and
            beauty.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Each wig is carefully sourced and crafted to deliver a natural
            look, soft texture, and long-lasting durability.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our commitment to quality and customer satisfaction has earned
            the trust of happy clients across Nigeria.
          </p>
        </div>

      </div>
    </section>
  );
}
