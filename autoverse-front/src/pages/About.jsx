const teams = [
  {
    name: "Michael Scott",
    title: "Co-Founder, Chief Architect",
    image:
      "https://plus.unsplash.com/premium_photo-1754211654507-e0a561f6b9c4?q=80&w=721&auto=format&fit=crop",
  },
  {
    name: "Chandler Rigs",
    title: "Co-Founder, Architect",
    image:
      "https://images.unsplash.com/photo-1754051486494-cfdbf29a589c?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Isabella Rodriguez",
    title: "Architect",
    image:
      "https://images.unsplash.com/photo-1754006320747-a90ba54b93cd?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Ava Wilson",
    title: "3D Artist",
    image:
      "https://images.unsplash.com/photo-1753828335589-8fee07cb4cec?q=80&w=687&auto=format&fit=crop",
  },
];

export default function About() {
  return (
    <section className="py-12 lg:py-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <header className="max-w-2xl space-y-2">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Our team
          </h3>
          <p className="text-balance text-gray-500 dark:text-gray-400 md:text-lg">
            We craft solutions that amplify key characteristics, achieving a
            harmonious balance of function and intent. Through careful analysis
            and collaborative engagement, our spaces transcend the conventional.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((member) => (
            <div
              key={member.name}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={`Picture of ${member.name}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
