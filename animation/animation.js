const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
  initial: {
    y: 60,
    // x:20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
};


export {fadeIn}