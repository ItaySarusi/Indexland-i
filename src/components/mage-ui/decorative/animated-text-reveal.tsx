"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import WaveReveal from "@/components/mage-ui/text/wave-reveal";
import React from "react";

export interface CircleProps {
  height?: string;
  width?: string;
  bgColor?: string;
  borderRadius?: string;
}

interface CylinderProps {
  text?: string;
  height?: string;
  width?: string;
  bgColor?: string;
}

interface AnimatedTextRevealProps {
  className?: string;
  keywords?: string[];
  direction?: "left" | "right";
  bgColor?: string;
}

function Circle({
  height = "h-6 md:h-8",
  width = "w-6 md:w-8",
  bgColor = "bg-primary",
  borderRadius = "rounded-full",
}: CircleProps) {
  return <div className={cn(height, width, borderRadius, bgColor)} />;
}

function Cylinder({
  text,
  height = "h-8 md:h-10",
  width = "w-auto",
  bgColor = "bg-white",
}: CylinderProps) {
  return (
    <div
      className={cn(
        "relative flex min-w-[100px] items-center justify-center rounded-full px-4",
        height,
        width,
        bgColor,
      )}
    >
      <WaveReveal
        className={cn("px-4 text-base font-bold text-backgroundDark md:text-xl")}
        text={text ?? ""}
        blur={false}
        direction="up"
        delay={200}
        duration="1000ms"
      />
    </div>
  );
}

export default function AnimatedTextReveal({ 
  className,
  keywords = ["Offices", "Investments", "Real Estate", "Tel Aviv", "Dubai"],
  direction = "right",
  bgColor = "bg-transparent"
}: AnimatedTextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // רנדור האנימציה רק אחרי שהקומפוננטה מוצגת בדף
    setIsVisible(true);
  }, []);

  if (!isVisible) {
    return null;
  }

  const animationClass = direction === "right" 
    ? "animate-in fade-in slide-in-from-right-96 fill-mode-forwards duration-1000" 
    : "animate-in fade-in slide-in-from-left-96 fill-mode-forwards duration-1000";

  return (
    <div className={cn("relative overflow-hidden py-4", bgColor, className)}>
      <div className={cn("flex items-center gap-3", animationClass)}>
        <Circle bgColor="bg-primary-400" borderRadius="rounded-t-full rounded-bl-full" />
        {keywords.map((keyword, index) => (
          <React.Fragment key={`item-${index}`}>
            <Cylinder
              text={keyword}
              bgColor={index % 2 === 0 ? "bg-white" : "bg-secondary-300"} 
            />
            {index < keywords.length - 1 && (
              <Circle 
                bgColor={`bg-primary-${300 + (index * 100) % 400}`} 
                height={`h-${4 + index % 4} md:h-${6 + index % 4}`}
                width={`w-${4 + index % 4} md:w-${6 + index % 4}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
} 