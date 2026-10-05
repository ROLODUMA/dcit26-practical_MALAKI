function Loader() {
  return (
    <div className="flex min-h-60 items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        <p className="text-gray-600 dark:text-gray-300">
          Loading users...
        </p>
      </div>
    </div>
  );
}

export default Loader;
