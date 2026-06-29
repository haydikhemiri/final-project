import { ArrowUp10Icon, CloudyIcon, FingerprintIcon, LockOpenIcon } from "lucide-react";

const features = [
  {
    icon: CloudyIcon,
    title: "Instant deployment",
    description:
      "Deploy your applications with a single click. Automated workflows ensure your updates go live seamlessly and securely.",
  },
  {
    icon: LockOpenIcon,
    title: "Secure connections",
    description:
      "Enterprise-grade SSL certificates included with every plan. Keep your data and users safe with encrypted connections.",
  },
  {
    icon: ArrowUp10Icon,
    title: "Smart queuing",
    description:
      "Efficient task management with intelligent queuing systems. Process requests faster and handle peak loads effortlessly.",
  },
  {
    icon: FingerprintIcon,
    title: "Enhanced protection",
    description:
      "Multi-layered security with advanced threat detection and protection. Your infrastructure stays protected around the clock.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <header className="mx-auto max-w-2xl lg:text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            Features
          </span>
          <style>{`
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`}</style>

<h3
  className="mt-4 text-4xl font-bold sm:text-5xl lg:text-balance"
  style={{
    background: "linear-gradient(135deg, #9f1239 0%, #be185d 20%, #f43f5e 40%, #fda4af 50%, #f43f5e 60%, #be185d 80%, #9f1239 100%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "shimmer 4s linear infinite",
  }}
>
  Powerful tools to grow your business
</h3>
          <p className="mt-6 text-lg text-gray-500">
            Build faster with our comprehensive suite of features designed to help you scale and
            succeed in today's competitive market.
          </p>
        </header>

        {/* Feature grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <Icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-500">{description}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}