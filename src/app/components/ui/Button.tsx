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
  className?: string;
  ctaButton?: string;
}) => {
  return (
    <button
      className={`group w-full flex items-center justify-between gap-2 rounded-xl border-2 border-primary bg-primary px-4 py-3 font-black text-background md:whitespace-nowrap hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">
        <Icon icon={leftImageSrc} className="w-5 h-5" />
        <span>{children}</span>
      </span>
      <span className="flex items-center transition-transform duration-300 group-hover:translate-x-1">
        <Icon icon={ctaButton || "mdi:arrow-right"} className="w-5 h-5" />
      </span>
    </button>
  );
};

export default Button;
