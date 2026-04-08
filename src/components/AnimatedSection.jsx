import useScrollAnimation from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '', animation = 'slide-up' }) {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const animationClass = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
  }[animation] || 'animate-slide-up'

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? animationClass : 'opacity-0'
      } transition-all duration-700`}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
