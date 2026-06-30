import { Link } from "react-router-dom";

const Logo = () => (
  <Link
    to="/"
    className="flex items-center space-x-2 text-inherit no-underline"
  >
    <div className="size-8 rounded-md bg-indigo-600 flex items-center justify-center">
      <span className="text-white font-bold text-sm">A</span>
    </div>
    <span className="text-2xl font-bold text-gray-900 dark:text-white">
      AutoVerse
    </span>
  </Link>
);

export default Logo;