"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage, Language } from "@/lib/language-context";
import Button from "@/components/ui/Button";
import Image from "next/image";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

interface HeroGeometricProps {
    title: string | Record<Language, string>;
    subtitle: string | Record<Language, string>;
    primaryActionLabel?: string | Record<Language, string>;
    primaryActionHref?: string;
    secondaryActionLabel?: string | Record<Language, string>;
    secondaryActionHref?: string;
    imageUrl?: string;
    variant?: "default" | "centered" | "image-right";
}

function HeroGeometric({
    title,
    subtitle,
    primaryActionLabel,
    primaryActionHref,
    secondaryActionLabel,
    secondaryActionHref,
    variant = "default",
}: HeroGeometricProps) {
    const { language, t } = useLanguage();
    const getLocalizedText = (text: string | Record<Language, string>): string => {
        if (typeof text === "string") {
            return text;
        }
        return t(text);
    };
    const titleText = getLocalizedText(title);
    const subtitleText = getLocalizedText(subtitle);
    const primaryLabel = primaryActionLabel ? getLocalizedText(primaryActionLabel) : "";
    const secondaryLabel = secondaryActionLabel ? getLocalizedText(secondaryActionLabel) : "";

    // Neon button styles
    const neonButtonClass =
        "relative glass-btn animate-scale-in font-semibold text-lg px-8 py-3 transition-all duration-300 rounded-lg shadow-neon hover:shadow-neon-hover hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary bg-primary text-textPrimary border border-primary";
    const neonOutlineButtonClass =
        "relative glass-btn animate-scale-in font-semibold text-lg px-8 py-3 transition-all duration-300 rounded-lg border-2 border-secondary shadow-neon-outline hover:shadow-neon-outline-hover hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary bg-secondary text-textPrimary";

    const renderContent = () => (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-neon">
                {titleText}
            </h1>
            <p className="mb-8 text-xl md:text-2xl font-normal text-textSecondary drop-shadow-neon-soft">
                {subtitleText}
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6 rtl:space-x-reverse">
                {primaryActionLabel && primaryActionHref && (
                    <Button href={primaryActionHref} size="lg" className={neonButtonClass}>
                        {primaryLabel}
                    </Button>
                )}
                {secondaryActionLabel && secondaryActionHref && (
                    <Button href={secondaryActionHref} variant="outline" size="lg" className={neonOutlineButtonClass}>
                        {secondaryLabel}
                    </Button>
                )}
            </div>
        </div>
    );

    // עדכון צבעי הרקע והצורות הדקורטיביות עם ניגודיות גבוהה
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-backgroundDark dark:bg-backgroundDark">
            {/* רקע גרדיאנט עדין עם opacity נמוך לניגודיות */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 blur-2xl" />
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-primary/10" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
                <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-secondary/10" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
                <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-primary/20" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
                <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-secondary/20" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
                <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-primary/30" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
            </div>
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center min-h-screen">
                {renderContent()}
            </div>
            {/* שכבת רקע נוספת להעמקת הניגודיות */}
            <div className="absolute inset-0 bg-gradient-to-t from-backgroundDark via-transparent to-backgroundDark/90 pointer-events-none" />
        </div>
    );
}

// Neon shadow styles (Tailwind CSS custom classes)
// Add the following to your global CSS (e.g., globals.css):
/*
.shadow-neon {
  box-shadow: 0 0 16px 2px theme('colors.primary'), 0 0 32px 4px theme('colors.primary');
}
.shadow-neon-hover {
  box-shadow: 0 0 32px 8px theme('colors.primary'), 0 0 64px 16px theme('colors.primary');
}
.shadow-neon-outline {
  box-shadow: 0 0 8px 2px theme('colors.secondary');
}
.shadow-neon-outline-hover {
  box-shadow: 0 0 24px 8px theme('colors.secondary');
}
.drop-shadow-neon {
  filter: drop-shadow(0 0 8px theme('colors.primary'));
}
.drop-shadow-neon-soft {
  filter: drop-shadow(0 0 4px theme('colors.primary'));
}
.border-primary {
  border-color: theme('colors.primary');
}
.focus\:ring-primary:focus {
  --tw-ring-color: theme('colors.primary');
}
*/

export { HeroGeometric }
