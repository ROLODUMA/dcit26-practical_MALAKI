function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition cursor-pointer";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
