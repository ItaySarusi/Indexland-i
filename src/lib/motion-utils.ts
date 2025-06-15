import { Variants } from 'framer-motion';

// Custom easing functions for smooth animations
export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  soft: [0.16, 1, 0.3, 1] as const,
  inOutSoft: [0.4, 0, 0.2, 1] as const,
  back: [0.34, 1.56, 0.64, 1] as const,
  expo: [0.19, 1, 0.22, 1] as const,
  quart: [0.25, 1, 0.5, 1] as const,
};

// Animation durations
export const durations = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
};

// Common fade animations
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  },
};

// Scale animations
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.soft,
    }
  },
};

export const scaleInSoft: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: durations.slower,
      ease: easings.smooth,
    }
  },
};

// Stagger animations for containers
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    }
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: durations.fast,
    ease: easings.soft,
  }
};

export const hoverLift = {
  y: -5,
  transition: {
    duration: durations.fast,
    ease: easings.soft,
  }
};

// Button animations
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easings.soft,
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: easings.soft,
    }
  },
};

// Card animations
export const cardVariants: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easings.soft,
    }
  },
};

// Section animations
export const sectionVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.slower,
      ease: easings.smooth,
    }
  },
};

// Text animations
export const textVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    }
  },
};

// Helper function to create custom animations
export const createAnimation = (
  initial: Record<string, any>,
  animate: Record<string, any>,
  duration: number = durations.normal,
  easing: readonly number[] = easings.smooth,
  delay: number = 0
): Variants => ({
  initial,
  animate: {
    ...animate,
    transition: {
      duration,
      ease: easing,
      delay,
    }
  },
});

// Viewport animation options
export const viewportOptions = {
  once: true,
  margin: "-100px 0px",
  amount: 0.3,
} as const; 