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
    <nav className="top-0 w-full h-[13px] bg-white/50 backdrop-blur-sm z-50 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative">
          <div className="font-['Croissant_One'] text-[#313131] relative">
            <div className="relative z-10 top-4">
              GATES BLOGS
            </div>
          
          </div>
          <div className="w-12 h-10" /> {/* Spacer */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="relative text-sm text-[#313131] tracking-wider hover:opacity-70 transition-opacity"
          >
            <span>Home</span>
            <div className="absolute -bottom-1 left-0 w-[37px] h-0.5 bg-[#313131] rounded" />
          </Link>
       
          <Link 
            href="/Signupform" 
            className="text-sm font-medium text-[#313131] tracking-wider hover:opacity-70 transition-opacity"
          >
            Signup
          </Link>
          <Link 
            href="/SignInform" 
            className="text-sm font-medium text-[#313131] tracking-wider hover:opacity-70 transition-opacity"
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
                  className="text-lg text-[#313131] hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/Signupform" 
                  className="text-lg text-[#313131] hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
                <Link 
                  href="/SignInform" 
                  className="text-lg text-[#313131] hover:opacity-70 transition-opacity"
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

