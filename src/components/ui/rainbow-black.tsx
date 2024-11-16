import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowBlack({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl px-8 py-2 font-medium text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // Glass effect styles
        "bg-white/10 backdrop-blur-md",

        // Add a border to enhance the glass effect
        "[background-clip:padding-box,border-box] [background-origin:border-box] border border-white/20",

        // Before pseudo-element for the contained gradient
        "before:absolute before:inset-[2px] before:rounded-xl before:-z-10 before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:animate-rainbow before:opacity-40 before:[filter:blur(8px)]",

        // Overlay to darken the button slightly
        "after:absolute after:inset-0 after:rounded-xl after:-z-20 after:bg-black/10 after:dark:bg-white/10",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
