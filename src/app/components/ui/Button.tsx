import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Button = ({
  leftImageSrc,
  children,
  onClick,
  className = "",
  ctaButton,
}: {
  leftImageSrc: string;
  children: React.ReactNode;
  onClick: () => void;
  className: string;
  ctaButton?: string;
}) => {
  return (
    <button
      className={`w-4/5 sm:w-3/4 text-sm text-semibold sm:text-md md:whitespace-nowrap bg-background flex items-center justify-between sm:px-2 px-4 py-2 bg-accent text-foreground rounded-lg hover:bg-accent-foreground hover:text-accent-foreground/80 transition-colors border border-accent-foreground ${className}`}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">
        <Icon icon={leftImageSrc} className="w-5 h-5" />
        <span>{children}</span>
      </span>
      <span className="ml-2 flex items-center sm:p-2 py-1 rounded-lg">
        <Icon icon={ctaButton || "mdi:arrow-right"} className="w-5 h-5" />
      </span>
    </button>
  );
};

export default Button;
