import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
// import { cn } from "@/lib/utils";


interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-360 px-5 sm:px-6 lg:px-8 xl:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}