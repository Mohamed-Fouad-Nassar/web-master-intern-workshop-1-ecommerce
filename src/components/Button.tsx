type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  size?: "sm" | "md" | "lg";
  variation?: "primary" | "secondary" | "third";
};

export default function Button({
  children,
  className,
  size = "md",
  variation = "primary",
  ...props
}: TButtonProps) {
  return (
    <button
      className={`rounded-full text-center cursor-pointer ${
        variation === "primary"
          ? "bg-primary"
          : variation === "secondary"
          ? "bg-secondary"
          : "bg-transparent border border-gray-300"
      } ${
        size === "sm"
          ? "py-1 px-3 text-sm"
          : size === "md"
          ? "py-2 px-4 text-base"
          : "py-3 px-6 text-lg"
      } ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
