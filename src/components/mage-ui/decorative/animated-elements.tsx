"use client";
 
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
 
export interface CircleProps {
  height?: string;
  width?: string;
  bgColor?: string;
  borderRadius?: string;
}
 
interface LineProps {
  className?: string;
  animationDirection: "left" | "right";
  infiniteAnimation?: boolean;
}

interface AnimatedElementsProps {
  className?: string;
  variant?: "primary" | "secondary" | "mixed";
  animationDuration?: number;
  rows?: number;
}
 
function Circle({
  height = "h-6 md:h-8",
  width = "w-6 md:w-8",
  bgColor = "bg-primary",
  borderRadius = "rounded-full",
}: CircleProps) {
  return <div className={cn(height, width, borderRadius, bgColor)} />;
}
 
function LineOne({ className, animationDirection, infiniteAnimation = true }: LineProps) {
  const baseClass = "flex gap-2 md:gap-3 items-center";
  
  let animationClass;
  if (infiniteAnimation) {
    animationClass = animationDirection === "right" 
      ? "animate-marquee-right" 
      : "animate-marquee-left";
  } else {
    animationClass = animationDirection === "right" 
      ? "animate-in fade-in slide-in-from-right-full duration-1000 fill-mode-forwards" 
      : "animate-in fade-in slide-in-from-left-full duration-1000 fill-mode-forwards";
  }
  
  return (
    <div className={cn(baseClass, animationClass, className)}>
      <Circle bgColor="bg-primary-400" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle />
      <Circle bgColor="bg-secondary-400" />
      <Circle bgColor="bg-primary" />
      <Circle bgColor="bg-primary-300" />
      <Circle bgColor="bg-primary-500" borderRadius="rounded-br-full rounded-tl-full" />
      <Circle bgColor="bg-secondary-300" />
      <Circle height="h-4 md:h-6" width="w-4 md:w-6" bgColor="bg-primary-600" />
      <Circle bgColor="bg-secondary-500" borderRadius="rounded-t-full rounded-br-full" />
      <Circle bgColor="bg-primary-300" /> 
      <Circle bgColor="bg-secondary-400" />
      <Circle bgColor="bg-primary-200" />
      <Circle height="h-5 md:h-7" width="w-5 md:w-7" bgColor="bg-primary-400" />
    </div>
  );
}
 
function LineTwo({ className, animationDirection, infiniteAnimation = true }: LineProps) {
  const baseClass = "flex gap-2 md:gap-3 items-center";
  
  let animationClass;
  if (infiniteAnimation) {
    animationClass = animationDirection === "right" 
      ? "animate-marquee-right-slow" 
      : "animate-marquee-left-slow";
  } else {
    animationClass = animationDirection === "right" 
      ? "animate-in fade-in slide-in-from-right-full duration-1000 fill-mode-forwards" 
      : "animate-in fade-in slide-in-from-left-full duration-1000 fill-mode-forwards";
  }
  
  return (
    <div className={cn(baseClass, animationClass, className)}>
      <Circle bgColor="bg-primary-300" />
      <Circle bgColor="bg-primary-600" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle bgColor="bg-primary-500" height="h-8 md:h-10" width="w-8 md:w-10" />
      <Circle bgColor="bg-secondary-300" />
      <Circle bgColor="bg-primary-500" borderRadius="rounded-br-full rounded-tl-full" />
      <Circle bgColor="bg-primary-400" />
      <Circle bgColor="bg-secondary-500" borderRadius="rounded-t-full rounded-br-full" />
      <Circle bgColor="bg-primary-300" /> 
      <Circle height="h-3 md:h-4" width="w-3 md:w-4" bgColor="bg-primary-600" />
    </div>
  );
}
 
function LineThree({ className, animationDirection, infiniteAnimation = true }: LineProps) {
  const baseClass = "flex gap-2 md:gap-3 items-center";
  
  let animationClass;
  if (infiniteAnimation) {
    animationClass = animationDirection === "right" 
      ? "animate-marquee-right-fast" 
      : "animate-marquee-left-fast";
  } else {
    animationClass = animationDirection === "right" 
      ? "animate-in fade-in slide-in-from-right-full duration-1000 fill-mode-forwards" 
      : "animate-in fade-in slide-in-from-left-full duration-1000 fill-mode-forwards";
  }
  
  return (
    <div className={cn(baseClass, animationClass, className)}>
      <Circle bgColor="bg-secondary-500" borderRadius="rounded-t-full rounded-br-full" />
      <Circle bgColor="bg-primary-300" /> 
      <Circle bgColor="bg-secondary-400" />
      <Circle bgColor="bg-primary-200" />
      <Circle height="h-3 md:h-4" width="w-3 md:w-4" bgColor="bg-primary-600" />
      <Circle bgColor="bg-primary-400" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle />
      <Circle bgColor="bg-secondary-500" />
      <Circle bgColor="bg-primary-300" />
      <Circle bgColor="bg-primary-500" borderRadius="rounded-t-full rounded-br-full" />
    </div>
  );
}

// חוזר על הצבעים בהתאם לגוון שנבחר
function getColorsForVariant(variant: AnimatedElementsProps['variant']) {
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
 
export default function AnimatedElements({ 
  className,
  variant = "mixed",
  animationDuration = 15,
  rows = 3
}: AnimatedElementsProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // הוספת אנימציות marquee לסגנון הגלובלי
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes marquee-left {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-marquee-left {
        animation: marquee-left ${animationDuration}s linear infinite;
      }
      .animate-marquee-right {
        animation: marquee-right ${animationDuration}s linear infinite;
      }
      .animate-marquee-left-slow {
        animation: marquee-left ${animationDuration * 1.5}s linear infinite;
      }
      .animate-marquee-right-slow {
        animation: marquee-right ${animationDuration * 1.5}s linear infinite;
      }
      .animate-marquee-left-fast {
        animation: marquee-left ${animationDuration * 0.8}s linear infinite;
      }
      .animate-marquee-right-fast {
        animation: marquee-right ${animationDuration * 0.8}s linear infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [animationDuration]);

  if (!isVisible) {
    return null;
  }

  // יצירת מספר שורות לפי הפרמטר שהתקבל
  const renderRows = () => {
    const rowElements = [];
    
    for (let i = 0; i < rows; i++) {
      if (i % 3 === 0) {
        rowElements.push(
          <LineOne 
            key={`line1-${i}`} 
            animationDirection={i % 2 === 0 ? "right" : "left"} 
            className="my-2"
          />
        );
      } else if (i % 3 === 1) {
        rowElements.push(
          <LineTwo 
            key={`line2-${i}`} 
            animationDirection={i % 2 === 0 ? "right" : "left"} 
            className="my-2"
          />
        );
      } else {
        rowElements.push(
          <LineThree 
            key={`line3-${i}`} 
            animationDirection={i % 2 === 0 ? "right" : "left"} 
            className="my-2"
          />
        );
      }
    }
    
    return rowElements;
  };

  return (
    <div className={cn("relative w-full overflow-hidden py-2", className)}>
      <div className="flex flex-col items-center justify-center">
        {renderRows()}
      </div>
    </div>
  );
} 