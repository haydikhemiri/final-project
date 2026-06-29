const SendIcon = () => (
  <svg
    className="size-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22 11 13 2 9l20-7z" />
  </svg>
);

const images = [
  {
    src: "https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=600&auto=format&fit=crop",
    alt: "Modern mountain house with stone and glass exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=600&auto=format&fit=crop",
    alt: "Dubai skyline at sunset with luxury properties",
  },
  {
    src: "https://images.unsplash.com/photo-1667718297886-64ed2c454bcd?q=80&w=600&auto=format&fit=crop",
    alt: "Modern waterfront property with palm trees",
  },
];

export default function CTASection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-5xl px-4">

        {/* Badge */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950 px-3.5 py-1 text-sm font-medium text-amber-700 dark:text-amber-300">
            ✦ Get Started
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl lg:leading-[3.5rem]">
            Your Vistaing journey starts{" "}
            <span
              className="font-serif italic font-normal"
              style={{
                background:
                  "linear-gradient(135deg, #92400e 0%, #b45309 35%, #d97706 65%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              right now
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-balance text-gray-500 dark:text-gray-400">
            Book a free 30 min call and see how we turn property views into
            serious buyers
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #92400e, #d97706)",
            }}
          >
            <SendIcon />
            Get Started
          </a>
        </div>

        {/* Property Images Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}