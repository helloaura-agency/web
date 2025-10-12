// Animation configurations and easing functions
export const animationConfig = {
  // Easing functions
  easing: {
    smooth: [0.25, 0.25, 0, 1] as [number, number, number, number],
    elastic: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  },

  // Duration presets
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
    verySlow: 1.2,
  },

  stagger: {
    fast: 0.1,
    normal: 0.15,
    slow: 0.2,
  },

  variants: {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },

  // Hover effects
  hover: {
    lift: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    glow: {
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 },
    },
    rotate: {
      rotate: 6,
      transition: { duration: 0.3 },
    },
  },

  // Button animations
  button: {
    tap: { scale: 0.95 },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
  },
};
