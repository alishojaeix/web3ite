"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Web3iteLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [theme, setTheme] = useState('void')
  
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsCommandPaletteOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSidebarOpen(false)
        setIsCommandPaletteOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-[#050608] text-[#fafafa] font-geist overflow-x-hidden">
      {/* Sticky Header */}
      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-[#ffffff]/[4%] bg-[#050608]/85 backdrop-blur-md">
        <div className="flex h-full items-center justify-between px-4 lg:px-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-[#b8bcc8] hover:text-[#fafafa] transition-colors"
              aria-label="Toggle navigation"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00d4ff] rounded-sm flex items-center justify-center">
                <span className="text-[#050608] font-bold text-sm">3D</span>
              </div>
              <span className="font-medium text-[#fafafa]">Web3ite</span>
            </Link>
          </div>

          {/* Search/Command Palette Trigger */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="hidden md:flex items-center w-80 gap-3 px-4 py-2 bg-[#0b0d10] border border-[#ffffff]/[8%] rounded-sm text-[#b8bcc8] hover:bg-[#111317] hover:border-[#ffffff]/[14%] transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="font-medium">Search templates...</span>
            <div className="ml-auto flex gap-1">
              <kbd className="px-1.5 py-0.5 bg-[#ffffff]/[4%] rounded text-[#7a808d] text-xs">⌘</kbd>
              <kbd className="px-1.5 py-0.5 bg-[#ffffff]/[4%] rounded text-[#7a808d] text-xs">K</kbd>
            </div>
          </button>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-[#b8bcc8] hover:text-[#fafafa] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
                <path d="m9.75 9.75 2.25 2.25 4.5-4.5" />
              </svg>
            </button>
            
            <button className="p-2 text-[#b8bcc8] hover:text-[#fafafa] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </button>
            
            <button className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#00d4ff] to-[#00e5ff] hover:from-[#00e5ff] hover:to-[#00d4ff] transition-all" />
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-y-0 left-0 z-40 w-72 border-r border-[#ffffff]/[4%] bg-[#0b0d10] pt-16 lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              <NavItem icon="home" label="Dashboard" href="/dashboard" active />
              <NavItem icon="template" label="Templates" href="/templates" />
              <NavItem icon="plus-circle" label="New Site" href="/create" />
              <NavItem icon="palette" label="Customize" href="/customize" />
              <NavItem icon="upload" label="Upload 3D" href="/upload" />
              <NavItem icon="activity" label="Analytics" href="/analytics" />
              <NavItem icon="settings" label="Settings" href="/settings" />
              <NavItem icon="help-circle" label="Help" href="/help" />
            </nav>
            
            {/* Quick Stats */}
            <div className="mt-auto p-4 border-t border-[#ffffff]/[4%]">
              <div className="rounded-sm bg-[#111317] p-4 border border-[#ffffff]/[4%]">
                <div className="text-xs text-[#7a808d] mb-1">Storage Used</div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-24 h-2 bg-[#ffffff]/[4%] rounded-full overflow-hidden">
                    <div className="w-16 h-full bg-[#00d4ff] rounded-full" />
                  </div>
                  <span className="text-xs font-medium">4.2GB / 10GB</span>
                </div>
                <div className="text-xs text-[#7a808d]">Expand soon</div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16 lg:pl-72 min-h-screen">
        <div className="p-4 lg:p-8 max-w-[1440px] mx-auto">
          {children}
        </div>
      </main>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isCommandPaletteOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#050608]/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
            onClick={() => setIsCommandPaletteOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-2xl bg-[#0b0d10] border border-[#ffffff]/[8%] rounded-sm shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-[#ffffff]/[4%]">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#b8bcc8]">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search templates, docs, commands..."
                    className="flex-1 bg-transparent border-none text-[#fafafa] placeholder-[#7a808d] focus:outline-none"
                    autoFocus
                  />
                  <div className="flex gap-1">
                    <kbd className="px-2 py-1 bg-[#ffffff]/[4%] rounded text-[#7a808d] text-xs">ESC</kbd>
                  </div>
                </div>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                <CommandPaletteSection title="Recent" items={[]} />
                <CommandPaletteSection title="Templates" items={[]} />
                <CommandPaletteSection title="Commands" items={[]} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

function NavItem({ icon, label, href, active = false }: any) {
  const iconMap: any = {
    home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m-6 0a2 2 0 11-4 0M9 21H6a2 2 0 01-2-2V5a2 2 0 012-2h3.5a2 2 0 010 4H5',
    template: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 000 4h8a2 2 0 100-4H9zm0 0V3m0 2h8',
    'plus-circle': 'M12 9v3m0 0v3m0-3H9m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    palette: 'M12 21a9 9 0 100-18 9 9 0 0018 18zM8 9H7a1 1 0 01-1-1V7a1 1 0 011-1h1zm4 0h1a1 1 0 011 1v1a1 1 0 01-1 1h-1zm4 0h1a1 1 0 01-1 1v1a1 1 0 01-1 1h-1z',
    upload: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 3.916M15 15l-3-3h-3m6 0l-3 3m3-3v6m-3-3l-3 3',
    activity: 'M3 3h7v7H3V3zm11 11h7v7h-7v-7zM3 14h7v7H3v-7zM14 14h7v7h-7v-7z',
    settings: 'M10.5 19.5 21 10.5M13.5 2 21 9.5M2 13.5l10.5-10.5M2 10.5l10.5 10.5',
    'help-circle': 'M9.75 9.75v4.5m0 0v4.5m0-4.5h4.5m-4.5-6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z'
  }
  
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition-all ${active
        ? 'bg-[#00d4ff]/[12%] text-[#00d4ff] border-l-2 border-[#00d4ff]'
        : 'text-[#b8bcc8] hover:bg-[#ffffff]/[4%] hover:text-[#fafafa]'
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
        <path d={iconMap[icon]} />
      </svg>
      <span>{label}</span>
    </Link>
  )
}

function CommandPaletteSection({ title, items }: { title: string, items: any[] }) {
  if (items.length === 0 && title === 'Recent') {
    return (
      <div className="p-4">
        <div className="text-xs text-[#7a808d] uppercase tracking-wider mb-3">{title}</div>
        <div className="text-sm text-[#b8bcc8]">Start typing to search...</div>
      </div>
    )
  }
  
  return (
    <div className="border-b border-[#ffffff]/[4%] last:border-b-0">
      <div className="px-4 py-2 bg-[#050608]/[60%]">
        <div className="text-xs font-medium text-[#7a808d] uppercase tracking-wider">{title}</div>
      </div>
      <div className="p-2">
        {/* Command items would go here */}
        <div className="text-sm text-[#b8bcc8] p-2 rounded-sm hover:bg-[#ffffff]/[4%] cursor-pointer">
          Search for "dashboard" → Go to Dashboard
        </div>
        <div className="text-sm text-[#b8bcc8] p-2 rounded-sm hover:bg-[#ffffff]/[4%] cursor-pointer">
          Create new template
        </div>
        <div className="text-sm text-[#b8bcc8] p-2 rounded-sm hover:bg-[#ffffff]/[4%] cursor-pointer">
          Open help center
        </div>
      </div>
    </div>
  )
}
