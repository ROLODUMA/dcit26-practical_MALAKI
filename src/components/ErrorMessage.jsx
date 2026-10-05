function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className="rounded-lg border border-red-300 bg-red-100 p-4 text-red-700">
      <p className="font-semibold">Error</p>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
