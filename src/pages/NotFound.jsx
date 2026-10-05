import { Link } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h1 className="mb-4 text-6xl font-bold text-red-600">
        404
      </h1>

      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        Page Not Found
      </h2>

      <p className="mb-8 text-gray-600 dark:text-gray-300">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
