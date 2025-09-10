'use client'
import Link from 'next/link'
import type { Route } from 'next'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'
import { useState, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import {
  smoothScrollTo,
  handleAnchorClick,
  initSmoothScrolling,
} from '@/lib/smooth-scroll'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

// Navigation routes configuration
const navigationRoutes = [
  { href: '/', label: 'Home', type: 'route' },
  { href: '/timeline', label: 'Timeline', type: 'route' },
  { href: '/roadmap', label: 'Roadmap', type: 'route' },
  { href: '/in-kind-donations', label: 'In-kind Donations', type: 'route' },
  // { href: '/about', label: 'About', type: 'route' },
] as const

const actionRoutes = [
  {
    href: '/contact',
    label: 'Contact Us',
    type: 'route' as 'route' | 'anchor',
    variant: 'secondary',
  },
  {
    href: '/#pledge',
    label: 'Pledge Now',
    type: 'anchor' as 'route' | 'anchor',
    variant: 'default',
  },
] as const

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Check if a route is currently active
  const isActiveRoute = (href: string) => {
    return pathname === href
  }

  // Handle anchor link clicks with mobile menu close
  const handleHeaderAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    handleAnchorClick(
      e,
      href.startsWith('/#') ? href.substring(1) : href,
      () => {
        setMobileOpen(false) // Close mobile menu if open
      }
    )
  }

  // GSAP animations
  useGSAP(() => {
    // Initialize global smooth scrolling
    initSmoothScrolling()

    // Initial entrance animation
    const tl = gsap.timeline()

    // Animate header sliding down from top
    tl.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
      // Stagger animate nav items
      .fromTo(
        [logoRef.current, navRef.current, ctaRef.current],
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      )
  }, [])

  // Mobile menu animation
  useGSAP(() => {
    if (mobileMenuRef.current) {
      if (mobileOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }
        )
      }
    }
  }, [mobileOpen])

  // Handle scroll-based hide/show with GSAP
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      // Set background blur state
      setIsScrolled(scrollTop > 50)

      // Hide/show header based on scroll direction
      if (scrollTop > lastScrollY && scrollTop > 100) {
        // Scrolling down & past threshold - hide header
        if (isVisible) {
          setIsVisible(false)
          gsap.to(headerRef.current, {
            y: -100,
            duration: 0.3,
            ease: 'power2.inOut',
          })
        }
      } else if (scrollTop < lastScrollY || scrollTop <= 100) {
        // Scrolling up or near top - show header
        if (!isVisible) {
          setIsVisible(true)
          gsap.to(headerRef.current, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          })
        }
      }

      setLastScrollY(scrollTop)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isVisible])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-950/90 text-foreground shadow-lg backdrop-blur-xl border-b border-border/50'
          : 'bg-white/70 dark:bg-gray-950/70 text-foreground backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center">
          <Link href="/" className="flex items-center group">
            <img
              src="/logo-light.png"
              alt="Global Sikhs Logo"
              className="h-14 w-auto md:h-16 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-8 text-base font-medium text-foreground/80"
        >
          {navigationRoutes.map((route) => {
            const isActive = isActiveRoute(route.href)
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`transition-all duration-300 relative py-2 px-1 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'hover:text-primary hover:scale-105'
                }`}
              >
                {route.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full shadow-sm" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right side actions */}
        <div ref={ctaRef} className="flex items-center gap-4">
          {actionRoutes.map((action) => (
            <Button
              key={action.href}
              variant={action.variant as 'outline' | 'default'}
              asChild
              size="lg"
              className={`font-semibold transition-all duration-300 ${
                action.variant === 'default'
                  ? 'hidden lg:inline-flex bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg hover:scale-105'
                  : 'hidden md:inline-flex hover:scale-105'
              }`}
            >
              <Link
                href={
                  action.type === 'route' ? (action.href as Route) : action.href
                }
                onClick={
                  action.type === 'anchor'
                    ? (e) => handleHeaderAnchorClick(e, action.href)
                    : undefined
                }
              >
                {action.label}
              </Link>
            </Button>
          ))}

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div ref={mobileMenuRef} className="lg:hidden px-6 pb-6">
          <div className="rounded-xl border border-border/50 bg-white/95 dark:bg-gray-950/95 text-foreground backdrop-blur-xl p-4 space-y-3 shadow-xl">
            {navigationRoutes.map((route) => {
              const isActive = isActiveRoute(route.href)
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary'
                      : 'hover:bg-accent/60 hover:translate-x-1'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {route.label}
                </Link>
              )
            })}

            {/* Separator */}
            <div className="h-px bg-border/50 my-4" />

            {actionRoutes.map((action) => {
              const isActive =
                action.type === 'route' && isActiveRoute(action.href)
              return (
                <Link
                  key={action.href}
                  href={
                    action.type === 'route'
                      ? (action.href as Route)
                      : action.href
                  }
                  className={`block px-4 py-3 rounded-lg text-center font-semibold shadow-md transition-all duration-300 ${
                    action.variant === 'default'
                      ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
                      : isActive
                      ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary'
                      : 'bg-accent/60 hover:bg-accent/80'
                  }`}
                  onClick={
                    action.type === 'anchor'
                      ? (e) => handleHeaderAnchorClick(e, action.href)
                      : () => setMobileOpen(false)
                  }
                >
                  {action.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
