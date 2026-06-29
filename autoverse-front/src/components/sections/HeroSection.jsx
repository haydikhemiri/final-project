import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">

          {/* Text content */}
          <header className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
              🚀 Launch Faster
              <ArrowUpRight className="size-3.5 text-gray-400" />
            </span>

            {/* Heading */}
            <style>{`
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`}</style>

<h1 className="my-4 text-4xl font-bold text-balance leading-tight text-gray-900 dark:text-gray-300 md:text-5xl lg:leading-14">
  All-in-One Platform for{" "}
  <span
    style={{
      background: "linear-gradient(135deg, #9f1239 0%, #be185d 20%, #f43f5e 40%, #fda4af 50%, #f43f5e 60%, #be185d 80%, #9f1239 100%)",
      backgroundSize: "200% auto",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      animation: "shimmer 4s linear infinite",
    }}
  >
    Managing Your SaaS
  </span>
</h1>

            {/* Subtext */}
            <p className="mb-8 text-balance text-gray-500 lg:text-lg">
              Streamline operations, track metrics, and scale your SaaS business with ease.
              Everything you need, in one powerful dashboard.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="https://app.yoursaas.com/signup"
                className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="https://app.yoursaas.com/demo"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </header>

          {/* Hero image */}
          <img
            src="https://images.unsplash.com/photo-1748723594319-142e211b46a9?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dashboard interface of the SaaS platform"
            className="aspect-square w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}