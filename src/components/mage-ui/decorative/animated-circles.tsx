"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface CircleProps {
  height?: string;
  width?: string;
  bgColor?: string;
  borderRadius?: string;
  animationDelay?: number;
  animationType?: "pulse" | "bounce" | "float";
}

interface AnimatedCirclesProps {
  className?: string;
  variant?: "primary" | "secondary" | "mixed";
  density?: "low" | "medium" | "high";
  size?: "small" | "medium" | "large";
  pattern?: "scattered" | "grid" | "diagonal";
}

function Circle({
  height = "h-6",
  width = "w-6",
  bgColor = "bg-primary",
  borderRadius = "rounded-full",
  animationDelay = 0,
  animationType = "pulse",
}: CircleProps) {
  // מנפה את ה-animation לפי הסוג
  const animationClass = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    float: "animate-float"
  }[animationType];
  
  return (
    <div 
      className={cn(height, width, borderRadius, bgColor, animationClass)}
      style={{ animationDelay: `${animationDelay}ms` }}
    />
  );
}

// חוזר על הצבעים בהתאם לגוון שנבחר
function getColorsForVariant(variant: AnimatedCirclesProps['variant']) {
  if (variant === 'primary') {
    return [
      'bg-primary',
      'bg-primary-300',
      'bg-primary-400',
      'bg-primary-500',
      'bg-primary-600'
    ];
  } else if (variant === 'secondary') {
    return [
      'bg-secondary',
      'bg-secondary-300',
      'bg-secondary-400',
      'bg-secondary-500',
      'bg-secondary-600'
    ];
  } else {
    // mixed
    return [
      'bg-primary',
      'bg-secondary-300',
      'bg-primary-400',
      'bg-secondary-500',
      'bg-primary-600'
    ];
  }
}

function generateCircles(
  count: number, 
  colors: string[], 
  size: AnimatedCirclesProps['size'], 
  pattern: AnimatedCirclesProps['pattern']
) {
  const circles = [];
  const animations = ['pulse', 'bounce', 'float'];
  
  // מגדירים את הגדלים לפי קטגוריה
  const sizeMap = {
    small: ['h-2 w-2', 'h-3 w-3', 'h-4 w-4'],
    medium: ['h-4 w-4', 'h-6 w-6', 'h-8 w-8'],
    large: ['h-8 w-8', 'h-12 w-12', 'h-16 w-16']
  };
  
  const sizes = sizeMap[size || 'medium'];
  
  // יוצר את העיגולים לפי תבנית
  for (let i = 0; i < count; i++) {
    const colorIndex = i % colors.length;
    const sizeIndex = i % sizes.length;
    const animationIndex = i % animations.length;
    
    // מיקום שונה לפי התבנית
    let style = {};
    
    if (pattern === 'grid') {
      const gridSize = Math.ceil(Math.sqrt(count));
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      style = { 
        top: `${(row * 100) / (gridSize - 1)}%`, 
        left: `${(col * 100) / (gridSize - 1)}%` 
      };
    } else if (pattern === 'diagonal') {
      const offset = (i * 100) / (count - 1);
      style = { top: `${offset}%`, left: `${offset}%` };
    } else { // scattered
      const top = Math.floor(Math.random() * 80 + 10); // 10-90%
      const left = Math.floor(Math.random() * 80 + 10); // 10-90%
      style = { top: `${top}%`, left: `${left}%` };
    }
    
    circles.push(
      <div key={i} className="absolute" style={style}>
        <Circle 
          bgColor={colors[colorIndex]}
          height={sizes[sizeIndex].split(' ')[0]}
          width={sizes[sizeIndex].split(' ')[1]}
          animationDelay={i * 300}
          animationType={animations[animationIndex] as CircleProps['animationType']}
          borderRadius={i % 4 === 0 ? "rounded-xl" : "rounded-full"}
        />
      </div>
    );
  }
  
  return circles;
}

export default function AnimatedCircles({ 
  className,
  variant = "mixed",
  density = "medium",
  size = "medium",
  pattern = "scattered"
}: AnimatedCirclesProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colors = getColorsForVariant(variant);
  
  // מספר העיגולים לפי צפיפות
  const circleCount = {
    low: 6,
    medium: 12,
    high: 20
  }[density];

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn("relative w-full h-full min-h-[120px]", className)}>
      {generateCircles(circleCount, colors, size, pattern)}
    </div>
  );
} 