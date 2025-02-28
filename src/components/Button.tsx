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
      className={`rounded-lg text-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 ${
        variation === "primary"
          ? "bg-primary hover:bg-primary/80"
          : variation === "secondary"
          ? "bg-secondary hover:bg-secondary/80"
          : "bg-transparent border border-gray-300 shadow-sm hover:bg-gray-50"
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
