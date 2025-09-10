import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin)

export const smoothScrollTo = (target: string, offsetY: number = 100) => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: {
      y: target,
      offsetY: offsetY, // Account for sticky header
    },
    ease: 'power2.inOut',
  })
}

export const handleAnchorClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  callback?: () => void
) => {
  if (href.startsWith('#')) {
    e.preventDefault()
    const targetId = href.substring(1) // Remove '#'
    smoothScrollTo(`#${targetId}`)
    callback?.() // Optional callback for closing menus, etc.
  }
}

// Initialize global smooth scrolling
export const initSmoothScrolling = () => {
  // Disable CSS scroll-behavior to let GSAP handle it
  gsap.set(document.documentElement, {
    scrollBehavior: 'auto',
  })
}
