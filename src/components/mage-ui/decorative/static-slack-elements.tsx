"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface CircleProps {
  height?: string;
  width?: string;
  bgColor?: string;
  borderRadius?: string;
  glow?: boolean;
  shadow?: boolean;
  gradient?: boolean;
}

interface CylinderProps {
  height?: string;
  width?: string;
  bgColor?: string;
  glow?: boolean;
  shadow?: boolean;
  gradient?: boolean;
}

interface LineProps {
  className?: string;
  style?: React.CSSProperties;
}

interface StaticSlackElementsProps {
  className?: string;
  variant?: "primary" | "secondary" | "mixed";
  type?: "full" | "minimal" | "compact" | "scattered";
  direction?: "horizontal" | "vertical";
  scrollEffect?: "parallax" | "float" | "none";
  enhancedStyle?: boolean;
}

function Circle({
  height = "h-6 md:h-10",
  width = "w-6 md:w-10",
  bgColor = "bg-primary",
  borderRadius = "rounded-full",
  glow = true,
  shadow = true,
  gradient = true,
}: CircleProps) {
  // צבע של ההילה בהתאם לצבע הרקע
  const glowColor = bgColor.includes("primary") 
    ? "after:bg-primary/30" 
    : bgColor.includes("secondary") 
      ? "after:bg-secondary/30" 
      : "after:bg-white/30";
  
  // סוג הגרדיאנט בהתאם לצבע הרקע
  const gradientClass = gradient
    ? bgColor.includes("primary")
      ? "bg-gradient-to-br from-primary-300 to-primary-600"
      : bgColor.includes("secondary")
        ? "bg-gradient-to-br from-secondary-300 to-secondary-600"
        : "bg-gradient-to-br from-gray-100 to-gray-300"
    : bgColor;

  const shadowClass = shadow ? "shadow-lg" : "";
  const glowClass = glow 
    ? "relative after:absolute after:inset-0 after:blur-xl after:-z-10 after:scale-150 after:opacity-50 after:rounded-full" 
    : "";

  return (
    <div 
      className={cn(
        "relative overflow-visible",
        height, width, borderRadius, 
        gradient ? gradientClass : bgColor,
        shadowClass,
        glow ? glowClass : "",
        glow ? glowColor : ""
      )} 
    >
      {/* שכבת זוהר פנימית */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/30 opacity-70" />
    </div>
  );
}

function Cylinder({
  height = "h-6 md:h-10",
  width = "w-16 md:w-32",
  bgColor = "bg-white",
  glow = true,
  shadow = true,
  gradient = true,
}: CylinderProps) {
  // צבע של ההילה בהתאם לצבע הרקע
  const glowColor = bgColor.includes("primary") 
    ? "after:bg-primary/30" 
    : bgColor.includes("secondary") 
      ? "after:bg-secondary/30" 
      : "after:bg-white/30";
  
  // סוג הגרדיאנט בהתאם לצבע הרקע
  const gradientClass = gradient
    ? bgColor.includes("primary")
      ? "bg-gradient-to-br from-primary-300 to-primary-600"
      : bgColor.includes("secondary")
        ? "bg-gradient-to-br from-secondary-300 to-secondary-600"
        : "bg-gradient-to-br from-white to-gray-100"
    : bgColor;

  const shadowClass = shadow ? "shadow-lg" : "";
  const glowClass = glow 
    ? "relative after:absolute after:inset-0 after:blur-xl after:-z-10 after:scale-[1.2] after:opacity-50 after:rounded-full" 
    : "";

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full overflow-visible",
        height, width, 
        gradient ? gradientClass : bgColor,
        shadowClass,
        glow ? glowClass : "",
        glow ? glowColor : ""
      )}
    >
      {/* שכבת זוהר פנימית */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/40 opacity-80" />
      {/* שכבת הדגשה חיצונית */}
      <div className="absolute -inset-[0.5px] rounded-full border border-white/30" />
    </div>
  );
}

function LineOne({ className, style }: LineProps) {
  return (
    <div className={cn(className)} style={style}>
      <Circle bgColor="bg-primary-400" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle bgColor="bg-primary" />
      <Cylinder bgColor="bg-secondary-400" />
      <Cylinder bgColor="bg-primary" width="w-32 md:w-64" />
      <Cylinder bgColor="bg-primary-300" />
    </div>
  );
}

function LineTwo({ className, style }: LineProps) {
  return (
    <div className={cn(className)} style={style}>
      <Circle bgColor="bg-primary-300" />
      <Cylinder width="w-40 md:w-80" />
      <Circle bgColor="bg-primary-500" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle bgColor="bg-primary-600" />
      <Cylinder bgColor="bg-secondary-300" />
    </div>
  );
}

function LineThree({ className, style }: LineProps) {
  return (
    <div className={cn(className)} style={style}>
      <Cylinder bgColor="bg-primary-200" />
      <Circle bgColor="bg-secondary-500" borderRadius="rounded-t-full rounded-br-full" />
      <Circle bgColor="bg-primary-300" /> 
      <Cylinder width="w-36 md:w-72" />
      <Circle bgColor="bg-secondary-400" />
      <Cylinder bgColor="bg-primary-200" />
    </div>
  );
}

function LineFour({ className, style }: LineProps) {
  return (
    <div className={cn(className)} style={style}>
      <Circle bgColor="bg-secondary-500" />
      <Cylinder width="w-52 md:w-96" />
      <Circle bgColor="bg-primary-600" borderRadius="rounded-t-full rounded-br-full" />
    </div>
  );
}

function LineFive({ className, style }: LineProps) {
  return (
    <div className={cn(className)} style={style}>
      <Cylinder bgColor="bg-secondary-300" />
      <Cylinder bgColor="bg-primary" width="w-24 md:w-48" />
      <Circle bgColor="bg-primary-300" />
      <Cylinder bgColor="bg-secondary-500" />
    </div>
  );
}

// מחזירה דוגמא של 1-2 שורות בלבד
function MinimalView({ scrollOffset = 0 }: { scrollOffset?: number }) {
  const common = "flex gap-3 md:gap-5 items-center w-full justify-between";
  
  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full">
      <LineOne 
        className={common} 
        style={{ transform: `translateX(${scrollOffset * 0.05}px)` }} 
      />
      <LineThree 
        className={common} 
        style={{ transform: `translateX(${-scrollOffset * 0.03}px)` }} 
      />
    </div>
  );
}

// מחזירה דוגמא של 3 שורות צפופות
function CompactView({ scrollOffset = 0 }: { scrollOffset?: number }) {
  const common = "flex gap-3 md:gap-5 items-center w-full justify-between";
  
  return (
    <div className="flex flex-col gap-3 md:gap-4 w-full">
      <LineTwo 
        className={common} 
        style={{ transform: `translateX(${-scrollOffset * 0.04}px)` }} 
      />
      <LineFive 
        className={common} 
        style={{ transform: `translateX(${scrollOffset * 0.02}px)` }} 
      />
      <LineOne 
        className={common} 
        style={{ transform: `translateX(${-scrollOffset * 0.03}px)` }} 
      />
    </div>
  );
}

// מחזירה שורה אחת ארוכה עם כל האלמנטים
function HorizontalScatteredView({ scrollOffset = 0 }: { scrollOffset?: number }) {
  return (
    <div 
      className="flex items-center gap-3 md:gap-5 w-full justify-between" 
      style={{ transform: `translateX(${scrollOffset * 0.04}px)` }}
    >
      <Circle bgColor="bg-primary-400" borderRadius="rounded-t-full rounded-bl-full" />
      <Cylinder bgColor="bg-secondary-300" width="w-20 md:w-40" />
      <Circle bgColor="bg-primary-300" /> 
      <Cylinder bgColor="bg-secondary-400" />
      <Circle bgColor="bg-primary-600" />
      <Cylinder bgColor="bg-primary-200" />
      <Circle bgColor="bg-secondary-500" borderRadius="rounded-t-full rounded-br-full" />
      <Cylinder bgColor="bg-primary" width="w-28 md:w-56" />
      <Circle bgColor="bg-primary-300" />
      <Cylinder bgColor="bg-secondary-500" />
    </div>
  );
}

export default function StaticSlackElements({ 
  className,
  type = "full",
  direction = "horizontal",
  scrollEffect = "parallax",
  enhancedStyle = true
}: StaticSlackElementsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (scrollEffect !== "none" && containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        
        // Simplified scroll calculation to prevent getting stuck
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
          setScrollY(scrollProgress * 100);
        }
      }
    };
    
    // Throttle scroll events to improve performance
    const throttledHandleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => handleScroll(), 16); // ~60fps
    };
    
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollEffect]);

  if (!isVisible) {
    return null;
  }

  // תוספת קלאס לפי כיוון התצוגה
  const directionClass = direction === "horizontal" 
    ? "flex-row items-center justify-between" 
    : "flex-col items-start justify-center";
  
  const common = "flex gap-3 md:gap-5 items-center w-full justify-between py-2";
  
  // בחירת תצוגה לפי סוג
  switch (type) {
    case "minimal":
      return (
        <div 
          ref={containerRef} 
          className={cn(
            "relative w-full overflow-hidden py-5 backdrop-blur-sm", 
            enhancedStyle && "bg-gradient-to-r from-white/5 to-transparent rounded-xl",
            className
          )}
        >
          <MinimalView scrollOffset={scrollY} />
        </div>
      );
    case "compact":
      return (
        <div 
          ref={containerRef} 
          className={cn(
            "relative w-full overflow-hidden py-5 backdrop-blur-sm", 
            enhancedStyle && "bg-gradient-to-r from-white/5 to-transparent rounded-xl",
            className
          )}
        >
          <CompactView scrollOffset={scrollY} />
        </div>
      );
    case "scattered":
      return (
        <div 
          ref={containerRef} 
          className={cn(
            "relative w-full overflow-hidden py-5 backdrop-blur-sm", 
            enhancedStyle && "bg-gradient-to-r from-white/5 to-transparent rounded-xl",
            className
          )}
        >
          <HorizontalScatteredView scrollOffset={scrollY} />
        </div>
      );
    case "full":
    default:
      return (
        <div 
          ref={containerRef} 
          className={cn(
            "relative w-full overflow-hidden py-5 backdrop-blur-sm", 
            enhancedStyle && "bg-gradient-to-r from-white/5 to-transparent rounded-xl",
            className
          )}
        >
          <div className={cn("flex gap-3 md:gap-5 py-2", directionClass)}>
            {direction === "horizontal" ? (
              <HorizontalScatteredView scrollOffset={scrollY} />
            ) : (
              <>
                <LineOne 
                  className={common} 
                  style={{ transform: `translateX(${scrollY * 0.05}px)` }} 
                />
                <LineTwo 
                  className={common} 
                  style={{ transform: `translateX(${-scrollY * 0.03}px)` }} 
                />
                <LineThree 
                  className={common} 
                  style={{ transform: `translateX(${scrollY * 0.04}px)` }} 
                />
              </>
            )}
          </div>
        </div>
      );
  }
}