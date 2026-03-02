import { useSpotlight } from '../../hooks/useSpotlight'

export default function SpotlightCard({ className = '', children, ...props }) {
  const { ref, onMouseMove } = useSpotlight()
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`sc-card spotlight-card ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
