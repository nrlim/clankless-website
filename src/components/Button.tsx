import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-graphite disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-electric-cyan text-graphite hover:bg-electric-cyan/90 focus:ring-electric-cyan shadow-glow hover:shadow-glow",
    secondary: "bg-plasma-magenta text-white hover:bg-plasma-magenta/90 focus:ring-plasma-magenta shadow-glow-magenta hover:shadow-glow-magenta",
    outline: "border-2 border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-graphite focus:ring-electric-cyan",
    ghost: "text-soft-gray hover:text-electric-cyan hover:bg-electric-cyan/10 focus:ring-electric-cyan",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
