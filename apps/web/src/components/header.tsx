'use client'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className=" top-0 z-50 py-2 w-full transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? undefined : 'transparent',
        borderBottom: isScrolled ? undefined : 'none',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        ...(isScrolled && {
          backgroundColor: 'hsl(var(--background) / 0.95)',
          borderBottomWidth: '1px',
          borderBottomColor: 'hsl(var(--border))',
        }),
      }}
    >
      <div
        className="container mx-auto flex h-16 items-center justify-between px-4"
        style={{ backgroundColor: 'transparent' }}
      >
        {/* NGO Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/gobalsikhs-logo-landing.svg"
            alt="Global Sikhs Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Navigation Links */}

        {/* Mobile menu and theme toggle */}
        <div className="flex items-center space-x-2">
          {/* Mobile navigation can be added here later if needed */}
        </div>
      </div>
    </header>
  )
}
