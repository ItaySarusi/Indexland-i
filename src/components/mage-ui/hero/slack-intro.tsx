"use client";
 
import { useEffect, useState } from "react";
 
import { cn } from "@/lib/utils";
import WaveReveal from "@/components/mage-ui/text/wave-reveal";
 
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
 
interface LineProps {
  className?: string;
  animationEnd: boolean;
}

interface SlackIntroProps {
  onAnimationComplete?: () => void;
}
 
function Circle({
  height = "h-8 md:h-16",
  width = "w-8 md:w-16",
  bgColor = "bg-primary",
  borderRadius = "rounded-full",
}: CircleProps) {
  return <div className={cn(height, width, borderRadius, bgColor)} />;
}
 
function Cylinder({
  text,
  height = "h-8 md:h-16",
  width = "w-24 md:w-48",
  bgColor = "bg-white",
}: CylinderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full",
        height,
        width,
        bgColor,
      )}
    >
      <WaveReveal
        className={cn("min-w-fit px-4 text-xl font-bold text-backgroundDark md:px-6 md:text-6xl")}
        text={text ?? ""}
        blur={false}
        direction="up"
        delay={200}
        duration="1000ms"
      />
    </div>
  );
}
 
function LineOne({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        animationEnd
          ? "animate-out fade-out slide-out-to-left-full duration-700"
          : "animate-in fade-in slide-in-from-right-full duration-500",
      )}
    >
      <Circle bgColor="bg-primary-400" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle />
      <Cylinder bgColor="bg-secondary-400" />
      <Cylinder bgColor="bg-primary" width="w-56 md:w-[300px]" />
      <Cylinder bgColor="bg-primary-300" />
    </div>
  );
}
 
function LineTwo({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        animationEnd
          ? "animate-out fade-out slide-out-to-right-full duration-700" 
          : "animate-in fade-in slide-in-from-left-full duration-700",
      )}
    >
      <Circle bgColor="bg-primary-300" />
      <Cylinder text="The World" width="w-64 md:w-[400px]" />
      <Circle bgColor="bg-primary-500" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle bgColor="bg-primary-600" />
      <Cylinder bgColor="bg-secondary-300" />
    </div>
  );
}
 
function LineThree({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        animationEnd
          ? "animate-out fade-out slide-out-to-left-full duration-700"
          : "animate-in fade-in slide-in-from-right-full duration-700",
      )}
    >
      <Cylinder bgColor="bg-primary-200" />
      <Circle bgColor="bg-secondary-500" borderRadius="rounded-t-full rounded-br-full" />
      <Circle bgColor="bg-primary-300" /> <Cylinder text="of Real Estate" width="w-64 md:w-[600px]" />
      <Circle bgColor="bg-secondary-400" />
      <Cylinder bgColor="bg-primary-200" />
    </div>
  );
}
 
function LineFour({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        animationEnd
          ? "animate-out fade-out slide-out-to-right-full duration-700"
          : "animate-in fade-in slide-in-from-left-full duration-700",
      )}
    >
      <Circle bgColor="bg-secondary-500" />
      <Cylinder text="In One Place" width="w-96 md:w-[700px]" />
      <Circle bgColor="bg-primary-600" borderRadius="rounded-t-full rounded-br-full" />
    </div>
  );
}
 
function LineFive({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        animationEnd
          ? "animate-out fade-out slide-out-to-left-full duration-700"
          : "animate-in fade-in slide-in-from-right-full",
      )}
    >
      <Cylinder bgColor="bg-secondary-300" />
      <Cylinder bgColor="bg-primary" width="w-32 md:w-[400px]" />
      <Circle bgColor="bg-primary-300" />
      <Cylinder bgColor="bg-secondary-500" />
    </div>
  );
}
 
export default function SlackIntro({ onAnimationComplete }: SlackIntroProps) {
  const [animationEnd, setAnimationEnd] = useState(false);
  const [visible, setVisible] = useState(true);

  // Start the exit animation after 1.5s
  useEffect(() => {
    const animationStartTimer = setTimeout(() => {
      setAnimationEnd(true);
    }, 1500);
    return () => clearTimeout(animationStartTimer);
  }, []);

  // When animationEnd becomes true, hide the loader after 0.5s
  useEffect(() => {
    if (!animationEnd) return;
    const animationEndTimer = setTimeout(() => {
      setVisible(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 500);
    return () => clearTimeout(animationEndTimer);
  }, [animationEnd, onAnimationComplete]);

  const common = "flex gap-1 md:gap-3 items-center fill-mode-forwards";
 
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-backgroundDark">
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-1 overflow-hidden py-4 md:gap-3",
        )}
      >
        <LineOne className={common} animationEnd={animationEnd} />
        <LineTwo className={common} animationEnd={animationEnd} />
        <LineThree className={common} animationEnd={animationEnd} />
        <LineFour className={common} animationEnd={animationEnd} />
        <LineFive className={common} animationEnd={animationEnd} />
      </div>
    </div>
  );
} 