

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amaka O.",
      message:
        "The wig quality is absolutely amazing. It looks so natural and lasts long.",
    },
    {
      name: "Blessing A.",
      message:
        "Customer service was excellent and delivery was fast. I love my wig!",
    },
    {
      name: "Kemi T.",
      message:
        "This is my third time buying and I’m never disappointed. Highly recommended.",
    },
    {
      name: "Sade L.",
      message:
        "Soft, full, and true to length. I get compliments every time I wear it.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="relative">
        {/* Marquee Track */}
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-75 shrink-0 rounded-xl bg-white p-6 shadow-sm border border-gray-200"
            >
              <p className="text-gray-600 mb-4 leading-relaxed">
                “{item.message}”
              </p>
              <div className="text-yellow-400 mb-2">★★★★★</div>


              <div className="font-semibold text-sm">
                — {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
