import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center", // Flex container to center text
        className
      )}
    >
      <span
        className="text-4xl font-bold bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%] animate-gradient-text bg-clip-text text-transparent"
      >
        {children}
      </span>
    </div>
  );
}
