"use client";
 
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
 
export interface CircleProps {
  height?: string;
  width?: string;
  bgColor?: string;
  borderRadius?: string;
}
 
interface LineProps {
  className?: string;
  direction?: "left" | "right";
  delay?: number;
}

interface AnimatedLineDecorProps {
  position?: "top" | "middle" | "bottom";
  className?: string;
  variant?: "primary" | "secondary" | "mixed";
  maxWidth?: string;
}
 
function Circle({
  height = "h-4 md:h-6",
  width = "w-4 md:w-6",
  bgColor = "bg-primary",
  borderRadius = "rounded-full",
}: CircleProps) {
  return <div className={cn(height, width, borderRadius, bgColor)} />;
}
 
function LineOne({ className, direction = "right", delay = 0 }: LineProps) {
  return (
    <div
      className={cn(
        className,
        direction === "right" 
          ? "animate-in fade-in slide-in-from-right-96 fill-mode-forwards" 
          : "animate-in fade-in slide-in-from-left-96 fill-mode-forwards",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Circle bgColor="bg-primary-400" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle />
      <Circle bgColor="bg-secondary-400" height="h-3 md:h-5" width="w-3 md:w-5" />
      <Circle bgColor="bg-primary" />
      <Circle bgColor="bg-primary-300" />
    </div>
  );
}
 
function LineTwo({ className, direction = "left", delay = 0 }: LineProps) {
  return (
    <div
      className={cn(
        className,
        direction === "right" 
          ? "animate-in fade-in slide-in-from-right-96 fill-mode-forwards" 
          : "animate-in fade-in slide-in-from-left-96 fill-mode-forwards",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Circle bgColor="bg-primary-300" />
      <Circle bgColor="bg-primary-600" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle bgColor="bg-primary-500" height="h-6 md:h-8" width="w-6 md:w-8" />
      <Circle bgColor="bg-secondary-300" />
      <Circle height="h-5 md:h-7" width="w-5 md:w-7" bgColor="bg-primary-400" />
    </div>
  );
}
 
function LineThree({ className, direction = "right", delay = 0 }: LineProps) {
  return (
    <div
      className={cn(
        className,
        direction === "right" 
          ? "animate-in fade-in slide-in-from-right-96 fill-mode-forwards" 
          : "animate-in fade-in slide-in-from-left-96 fill-mode-forwards",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Circle bgColor="bg-secondary-500" borderRadius="rounded-t-full rounded-br-full" />
      <Circle bgColor="bg-primary-300" /> 
      <Circle bgColor="bg-secondary-400" />
      <Circle bgColor="bg-primary-200" />
      <Circle height="h-3 md:h-4" width="w-3 md:w-4" bgColor="bg-primary-600" />
    </div>
  );
}

// חוזר על הצבעים בהתאם לגוון שנבחר
function getColorsForVariant(variant: AnimatedLineDecorProps['variant']) {
  if (variant === 'primary') {
    return {
      color1: 'bg-primary',
      color2: 'bg-primary-300',
      color3: 'bg-primary-400',
      color4: 'bg-primary-500',
      color5: 'bg-primary-600'
    };
  } else if (variant === 'secondary') {
    return {
      color1: 'bg-secondary',
      color2: 'bg-secondary-300',
      color3: 'bg-secondary-400',
      color4: 'bg-secondary-500',
      color5: 'bg-secondary-600'
    };
  } else {
    // mixed
    return {
      color1: 'bg-primary',
      color2: 'bg-secondary-300',
      color3: 'bg-primary-400',
      color4: 'bg-secondary-500',
      color5: 'bg-primary-600'
    };
  }
}
 
export default function AnimatedLineDecor({ 
  position = "middle", 
  className,
  variant = "mixed",
  maxWidth = "max-w-3xl"
}: AnimatedLineDecorProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // רנדור האנימציה רק אחרי שהקומפוננטה מוצגת בדף
    setIsVisible(true);
  }, []);

  const colors = getColorsForVariant(variant);
  
  // קלאסים משותפים לכל השורות
  const common = "flex gap-1 md:gap-2 items-center duration-1000 ease-in-out";
  
  // מיקום לפי position
  const positionClasses = {
    top: "absolute -top-12 left-0 right-0",
    middle: "absolute top-1/2 -translate-y-1/2 left-0 right-0",
    bottom: "absolute -bottom-12 left-0 right-0"
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn("relative w-full overflow-hidden", maxWidth, className)}>
      <div className={cn(positionClasses[position], "flex flex-col gap-1 md:gap-2 items-center justify-center py-2 z-0 opacity-80")}>
        <LineOne className={common} direction="right" delay={100} />
        <LineTwo className={common} direction="left" delay={200} />
        <LineThree className={common} direction="right" delay={300} />
      </div>
    </div>
  );
} 