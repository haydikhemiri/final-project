import { useState } from "react";

const Building2 = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/>
  </svg>
);
const Phone = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const Mail = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const Clock = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const infoCards = [
  { icon: <Building2 />, label: "Location:", value: "123 Maple Lane, Springfield, IL 62704" },
  { icon: <Phone />,    label: "Call us:",   value: "+1 (555) 987-6543" },
  { icon: <Mail />,     label: "Email us:",  value: "contact@ourcompany.com" },
  { icon: <Clock />,    label: "Business Hours:", value: "Tuesday to Saturday, 9 AM - 5 PM" },
];

const subjects = [
  "Web Development",
  "Mobile Development",
  "Figma Design",
  "REST API",
  "FullStack Project",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim())  e.lastName  = "Required";
    if (!form.email.includes("@")) e.email  = "Invalid email";
    if (!form.subject)           e.subject  = "Required";
    if (form.message.trim().length < 2) e.message = "Too short";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const { firstName, lastName, email, subject, message } = form;
    window.location.href = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;
  };

  const set = (k) => (ev) => {
    setForm((f) => ({ ...f, [k]: ev.target.value }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const inputCls = (k) =>
    `w-full rounded-md border px-3 py-2 text-sm bg-white dark:bg-gray-900 outline-none transition-colors ${
      errors[k]
        ? "border-red-400 focus:ring-2 focus:ring-red-300"
        : "border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
    }`;

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-rose-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 min-h-screen">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-6 max-w-3xl space-y-4 lg:mb-10">
          <h3 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Get Connect With Us
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            Stay in touch with us for updates, support, and valuable insights. We're here to help
            you every step of the way!
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Info cards */}
         <div className="order-2 md:order-1 flex flex-col gap-5">
  {infoCards.map(({ icon, label, value }) => (
    <div
      key={label}
      className="group rounded-2xl border border-pink-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-300/40 dark:bg-gray-900 dark:border-pink-900"
    >
      <div className="mb-3 flex items-center gap-3 text-pink-600">
        <div className="rounded-full bg-pink-100 p-2 group-hover:bg-pink-200 transition">
          {icon}
        </div>
        <span className="font-bold text-gray-900 dark:text-white text-sm">
          {label}
        </span>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 pl-10">
        {value}
      </div>
    </div>
  ))}
</div>

          {/* Form card */}
<div className="order-1 md:order-2 rounded-3xl bg-white border border-pink-200 shadow-2xl p-8 dark:bg-gray-900 dark:border-pink-900">

  <form onSubmit={handleSubmit} className="grid gap-7">

    {/* First + Last name */}
    <div className="flex flex-col gap-5 md:flex-row">

      {/* Firstname */}
      <div className="w-full flex flex-col gap-2">
        <label className="text-sm font-bold text-pink-700 dark:text-pink-300">
          Firstname
        </label>
        <input
          className={inputCls("firstName")}
          placeholder="Leopoldo"
          value={form.firstName}
          onChange={set("firstName")}
        />
        {errors.firstName && (
          <span className="text-xs text-red-400">{errors.firstName}</span>
        )}
      </div>

      {/* Lastname */}
      <div className="w-full flex flex-col gap-2">
        <label className="text-sm font-bold text-pink-700 dark:text-pink-300">
          Lastname
        </label>
        <input
          className={inputCls("lastName")}
          placeholder="Miranda"
          value={form.lastName}
          onChange={set("lastName")}
        />
        {errors.lastName && (
          <span className="text-xs text-red-400">{errors.lastName}</span>
        )}
      </div>

    </div>

              {/* Email */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-bold text-pink-700 dark:text-pink-300">
    Email
  </label>

  <input
    type="email"
    className={`${inputCls("email")} rounded-xl bg-pink-50/50 border-pink-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all duration-300`}
    placeholder="contact@bundui.com"
    value={form.email}
    onChange={set("email")}
  />

  {errors.email && (
    <span className="text-xs text-red-400">{errors.email}</span>
  )}
</div>

{/* Subject */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-bold text-pink-700 dark:text-pink-300">
    Subject
  </label>

  <select
    className={`${inputCls("subject")} rounded-xl bg-pink-50/50 border-pink-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all duration-300`}
    value={form.subject}
    onChange={set("subject")}
  >
    <option value="">Select a subject</option>
    {subjects.map((s) => (
      <option key={s} value={s}>
        {s}
      </option>
    ))}
  </select>

  {errors.subject && (
    <span className="text-xs text-red-400">{errors.subject}</span>
  )}
</div>
            {/* Message */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-bold text-pink-700 dark:text-pink-300">
    Message
  </label>

  <textarea
    rows={5}
    placeholder="Your message..."
    className={`${inputCls("message")} resize-none rounded-xl bg-pink-50/50 border-pink-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all duration-300`}
    value={form.message}
    onChange={set("message")}
  />

  {errors.message && (
    <span className="text-xs text-red-400">{errors.message}</span>
  )}
</div>

{/* Submit Button */}
<button
  type="submit"
  className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold py-3 text-sm shadow-lg shadow-pink-300/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-pink-400/60 active:scale-95"
>
  Send Message 💌
</button>

</form>
</div>

        </div>
      </div>
    </section>
  );
}   