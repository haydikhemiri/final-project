import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../JS/Actions/authActions";
import Loading from "../components/UI/Loading";
import Logo from "../components/shared/Logo";

export default function Login() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.AuthReducer.load);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user, navigate));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-orange-50 px-4">

      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl border border-pink-100 p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900">
          Welcome back 👋
        </h2>

        <p className="text-center text-sm text-gray-500 mt-2 mb-8">
          Sign in to continue to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

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
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-pink-700">
                Password
              </label>

              <a
                href="#"
                className="text-xs font-semibold text-pink-500 hover:text-pink-700"
              >
                Forgot password?
              </a>
            </div>

            <input
              onChange={handleInputChange}
              name="password"
              type="password"
              required
              minLength={6}
              className="mt-2 w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <div>
            {loading ? (
              <Loading />
            ) : (
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 py-3 text-white font-bold shadow-lg hover:scale-[1.02] transition active:scale-95"
              >
                Sign in
              </button>
            )}
          </div>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/register"
            className="font-bold text-pink-600 hover:text-pink-800"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}