import { useRef } from 'react'

export function useSpotlight() {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return { ref, onMouseMove }
}
