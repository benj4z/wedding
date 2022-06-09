export const miniTitleAnimation = {
  variants: {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  },
  transition: { duration: 0.8, delay: 0.01 },
};

export const signAnimation = {
  variants: {
    visible: { width: "100%" },
    hidden: { width: "0%" },
  },
  transition: { ease: 'easeInOut', duration: 1, delay: 0.45 }
};

export const titleAnimation = {
  variants: {
    visible: {opacity: 1, scale: 1},
    hidden: {opacity: 0, scale: 0.75},
  },
  transition: { ease: 'easeOut', duration: 0.35, delay: 0.75 }
}

export const imgAnimation = {
  variants: {
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: '75%'}
  },
  transition: { duration: 0.5, delay: 0.9 },
}
