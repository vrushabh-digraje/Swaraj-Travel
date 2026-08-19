import { ArrowRightIcon } from "@/components/icons";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-gradient-to-r from-primary to-accent text-white shadow-md hover:shadow-lg",
  secondary: "bg-navy text-white hover:bg-navy/90",
  outline:
    "border-2 border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20",
  whatsapp: "bg-whatsapp text-white hover:bg-[#1ebe57]",
  white: "bg-white text-primary hover:bg-white/90",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-sm md:text-base",
  lg: "px-6 py-3.5 text-base md:text-lg",
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  ariaLabel,
  showArrow = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-shadow ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow ? <ArrowRightIcon className="h-4 w-4" /> : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
