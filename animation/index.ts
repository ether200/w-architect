export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.5, 0.01, 0.99],
    },
  },
};
