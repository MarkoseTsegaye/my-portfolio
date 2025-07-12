import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Button = ({
  leftImageSrc,
  leftImageAlt = "Button Image",
  children,
  onClick,
  className = "",
}: {
  leftImageSrc: string;
  leftImageAlt: string;
  children: React.ReactNode;
  onClick: () => void;
  className: string;
}) => {
  return (
    <button
      className={`w-2/3 sm:w-full bg-background flex items-center justify-between px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent-foreground hover:text-accent-foreground/80 transition-colors border border-accent-foreground ${className}`}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">
        
        <span>{children}</span>
      </span>
      <span className="ml-2 flex items-center bg-accent-foreground p-2 text-foreground rounded-lg">
        <Icon icon="mdi:arrow-right" className="w-5 h-5" />
      </span>
    </button>
  );
};

export default Button;
