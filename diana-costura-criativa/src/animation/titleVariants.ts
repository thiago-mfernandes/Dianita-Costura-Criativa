export const titleVariants = {
  initial: {
    y: -30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.35,
      type: 'spring',
      stiffness: 300
    }
  }
};
