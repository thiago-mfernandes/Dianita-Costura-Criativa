export const titleOfSectionVariants = {
  offScreen: {
    y: 50,
    opacity: 0
  },
  onScreen: {
    y: 0,
    opacity: 1,
    type: 'spring',
    stiffness: 200,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 150,
      when: 'beforeChildren'
    }
  }
};
