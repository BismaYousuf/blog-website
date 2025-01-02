"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-md z-50 px-4 py-2 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/logoo.png" 
            alt="Bisma Blog Logo" 
            className="h-12 w-auto object-contain"
          />
        
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-sm font-medium text-[#313131] hover:text-red-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/Signupform" 
            className="text-sm font-medium text-[#313131] hover:text-red-600 transition-colors"
          >
            Signup
          </Link>
          <Link 
            href="/SignInform" 
            className="text-sm font-medium text-[#313131] hover:text-red-600 transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link 
                  href="/" 
                  className="text-lg text-[#313131] hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/Signupform" 
                  className="text-lg text-[#313131] hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Signup
                </Link>
                <Link 
                  href="/SignInform" 
                  className="text-lg text-[#313131] hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
