import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../JS/Actions/authActions";
import Logo from "../components/shared/Logo";

export default function Register() {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(newUser, navigate));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50 px-4">

      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl border border-pink-100 p-8">

        {/* Logo */}
        <div className="flex justify-center">
          <Logo />
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Create your account 🚀
        </h2>

        <p className="text-center text-sm text-gray-500 mt-2 mb-6">
          Join us and start managing your cars
        </p>

        <form onSubmit={handleRegister} className="space-y-4">

          {/* First + Last name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm font-semibold text-pink-700">
                First Name
              </label>
              <input
                onChange={handleInputChange}
                name="firstName"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition"
                placeholder="John"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-pink-700">
                Last Name
              </label>
              <input
                onChange={handleInputChange}
                name="lastName"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold text-pink-700">
              Phone Number
            </label>
            <input
              onChange={handleInputChange}
              name="phone"
              type="number"
              required
              className="mt-2 w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition"
              placeholder="+216..."
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-pink-700">
              Email address
            </label>
            <input
              onChange={handleInputChange}
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-pink-700">
              Password
            </label>
            <input
              onChange={handleInputChange}
              name="password"
              type="password"
              required
              className="mt-2 w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 py-3 text-white font-bold shadow-lg hover:scale-[1.02] transition active:scale-95"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          You already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-pink-600 hover:text-pink-800"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}