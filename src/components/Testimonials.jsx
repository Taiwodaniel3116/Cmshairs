export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amaka O.",
      image: "/avatars/amaka.jpg",
      message:
        "The wig quality is absolutely amazing. It looks so natural and lasts long.",
    },
    {
      name: "Blessing A.",
      image: "/avatars/blessing.jpg",
      message:
        "Customer service was excellent and delivery was fast. I love my wig!",
    },
    {
      name: "Kemi T.",
      image: "/avatars/kemi.jpg",
      message:
        "This is my third time buying and I’m never disappointed. Highly recommended.",
    },
    {
      name: "Sade L.",
      image: "/avatars/sade.jpg",
      message:
        "Soft, full, and true to length. I get compliments every time I wear it.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden">
      <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="relative">
        {/* Marquee Track */}
        <div
          className="
            flex w-max gap-6
            animate-marquee
            hover:[animation-play-state:paused]
            max-md:[animation-play-state:paused]
          "
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[320px] shrink-0 rounded-xl bg-white p-6 shadow-sm border border-gray-200"
            >
              {/* Avatar */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">Verified Buyer</p>
                </div>
              </div>

              {/* Stars */}
              <div className="text-yellow-400 mb-2 text-sm">★★★★★</div>

              {/* Message */}
              <p className="text-gray-600 leading-relaxed text-sm">
                “{item.message}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
