import { useState, useRef, useEffect } from "react";

const navigationLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#", label: "Marketplace" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

const Logo = () => (
  <a href="#" className="flex items-center space-x-2">
    {/* Simple SVG logo placeholder – swap with your own */}
    <svg className="size-8 text-indigo-600" viewBox="0 0 32 32" fill="currentColor">
      <rect width="32" height="32" rx="8" />
      <text x="7" y="23" fontSize="18" fill="white" fontWeight="bold">B</text>
    </svg>
    <span className="text-2xl font-bold tracking-tight text-gray-900">Bundui</span>
  </a>
);

// Hamburger / close animated iconc
const MenuIcon = ({ open }) => (
  <svg
    className="size-5 text-gray-700"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M4 12L20 12"
      className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
        open ? "translate-y-0 rotate-[315deg]" : "-translate-y-[7px]"
      }`}
    />
    <path
      d="M4 12H20"
      className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
        open ? "rotate-45" : ""
      }`}
    />
    <path
      d="M4 12H20"
      className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
        open ? "translate-y-0 rotate-[135deg]" : "translate-y-[7px]"
      }`}
    />
  </svg>
);

// Avatar dropdown
const AvatarMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        aria-label="Account menu"
        aria-expanded={open}
      >
        {/* Avatar circle */}
        <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white ring-2 ring-white select-none">
          JD
          {/* Online indicator */}
          <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-green-400 ring-2 ring-white" />
        </span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 z-50 mt-2 w-52 origin-top-right rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black/5 transition-all duration-200 ${
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* User info header */}
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="text-sm font-semibold text-gray-900">John Doe</p>
          <p className="text-xs text-gray-500 truncate">john@example.com</p>
        </div>

        <ul className="py-1.5 text-sm text-gray-700">
          {[
            {
              label: "Your Profile",
              href: "#",
              icon: (
                <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              ),
            },
            {
              label: "Settings",
              href: "#",
              icon: (
                <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
          ].map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-2.5 px-4 py-2 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="text-gray-400">{icon}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="border-t border-gray-100 py-1.5">
          <button
            onClick={() => {
              setOpen(false);
              alert("Logged out!");
            }}
            className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200 bg-white px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Left side */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              className="flex size-8 items-center justify-center rounded-md hover:bg-gray-100 transition-colors md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <MenuIcon open={mobileOpen} />
            </button>

            <Logo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 ml-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    link.active
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Show Sign In / Get Started only when not "logged in" – swap with your auth logic */}
            <a
              href="#"
              className="hidden sm:inline-flex text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#"
              className="hidden sm:inline-flex items-center rounded-lg bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
            >
              Register
            </a>

            {/* Avatar with dropdown */}
            <AvatarMenu />
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileOpen ? "max-h-64 pb-3" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-1">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  link.active
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-2">
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Sign In
              </a>
              <a href="#" className="rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-indigo-700">
                Register
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
