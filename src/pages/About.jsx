function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          About
        </h1>

        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The Team Directory App is a React application created for a
          laboratory activity.
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          It demonstrates React components, props, state management,
          effects, React Router, reusable components, searching,
          favorites, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default About;
