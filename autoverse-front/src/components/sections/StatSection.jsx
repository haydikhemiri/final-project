const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44M" },
  { id: 2, name: "Assets under holding", value: "$20 trillion" },
  { id: 3, name: "New users annually", value: "46K+" },
];

export default function StatSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <dl className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20 py-8 px-6 text-center"
            >
              <dd
                className="text-4xl font-bold tracking-tight md:text-5xl"
                style={{
                  background:
                    "linear-gradient(135deg, #92400e 0%, #d97706 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </dd>

              <dt className="mt-2 text-sm font-medium text-amber-800/70 dark:text-amber-300/70">
                {stat.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}