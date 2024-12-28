"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HeroForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="relative w-full h-[830px] mt-[70px]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/placeholder.png')] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/placeholder.png')`,
        }}
      />
      
      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-[406px] space-y-6 px-4"
        >
          {/* Name Input */}
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <div className="bg-gradient-to-r from-[#313131] to-black px-6 py-2">
                <span className="text-[9px] font-semibold tracking-wider text-white">
                  NAME
                </span>
              </div>
            </div>
            <Input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="h-[46px] pl-24 bg-white/80 placeholder:text-[#313131]/70 placeholder:text-sm focus:ring-0 border-0"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <div className="bg-gradient-to-r from-[#313131] to-black px-6 py-2">
                <span className="text-[9px] font-semibold tracking-wider text-white">
                  EMAIL
                </span>
              </div>
            </div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="h-[46px] pl-24 bg-white/80 placeholder:text-[#313131]/70 placeholder:text-sm focus:ring-0 border-0"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <div className="bg-gradient-to-r from-[#313131] to-black px-6 py-2">
                <span className="text-[9px] font-semibold tracking-wider text-white">
                  PASSWORD
                </span>
              </div>
            </div>
            <Input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="h-[46px] pl-28 bg-white/80 placeholder:text-[#313131]/70 placeholder:text-sm focus:ring-0 border-0"
            />
          </div>
          <div className="flex justify-center pt-4">
            <Button
              className="w-[86px] h-[26px] bg-gradient-to-r from-[#313131] to-black hover:from-black hover:to-[#313131] text-white border-2 border-white text-sm rounded-[3px]"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

