export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  
  export const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }
  
  export const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }
  
  export const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  export const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  }
  
  
 