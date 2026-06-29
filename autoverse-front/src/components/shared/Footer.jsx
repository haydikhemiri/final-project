import { useState, useEffect } from "react";

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

const Logo = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      className="flex items-center space-x-2 group"
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex size-8 items-center justify-center rounded-md bg-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <span className="text-sm font-bold text-white">B</span>
      </div>

      <span
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: hovered ? "#60a5fa" : "#2563eb",
          transition: "all 0.3s ease",
          letterSpacing: hovered ? "0.05em" : "0",
        }}
      >
        Bundui
      </span>
    </a>
  );
};

const AnimatedTagline = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p
      className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-sm font-medium text-transparent"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "all 0.8s ease",
        animation: visible ? "pulse 3s ease-in-out infinite" : "none",
      }}
    >
      Transform your body, transform your life. Join the FitCore family today.
    </p>
  );
};

const programs = [
  { label: "Strength Training", href: "/programs" },
  { label: "HIIT Classes", href: "/programs" },
  { label: "Yoga & Wellness", href: "/programs" },
  { label: "Personal Training", href: "/programs" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Trainers", href: "/trainers" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export default function FooterSection() {
  const [email, setEmail] = useState("");

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: translateY(0);
              filter: brightness(1);
            }
            50% {
              transform: translateY(-2px);
              filter: brightness(1.25);
            }
            100% {
              transform: translateY(0);
              filter: brightness(1);
            }
          }
        `}
      </style>

      <footer className="py-12">
        <div className="container mx-auto space-y-6 px-4">
          <div className="grid gap-8 md:grid-cols-4">

            {/* Brand */}
            <div className="space-y-4">
              <Logo />
              <AnimatedTagline />
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <h3 className="relative inline-block text-lg font-bold text-blue-600 dark:text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-500">
                Programs
              </h3>

              <ul className="space-y-2">
                {programs.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-sm text-gray-500 transition-all duration-300 hover:translate-x-1 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="relative inline-block text-lg font-bold text-blue-600 dark:text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-500">
                Company
              </h3>

              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-sm text-gray-500 transition-all duration-300 hover:translate-x-1 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="relative inline-block text-lg font-bold text-blue-600 dark:text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-500">
                Newsletter
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Stay updated with fitness tips and offers.
              </p>

              <div className="flex overflow-hidden rounded-xl border border-blue-200 transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 dark:border-blue-800">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-1 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none dark:bg-gray-900 dark:text-white"
                />

                <button
                  type="button"
                  className="flex shrink-0 items-center gap-1.5 bg-gradient-to-r from-blue-500 to-sky-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-sky-600"
                >
                  <span className="hidden lg:inline">Subscribe</span>
                  <span className="inline lg:hidden">
                    <SendIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-700 lg:mt-10" />

          <div className="text-center text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Bundui. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}