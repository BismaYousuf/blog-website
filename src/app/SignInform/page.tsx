'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  return (
    <div className=" w-full h-[830px] mt-[70px] relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/placeholder.png')`
        }}
      />

      {/* Form Container */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-[406px] space-y-6">
          {/* Email Input Group */}
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <span className="bg-gradient-to-r from-[#313131] to-black px-4 py-2 text-[9px] font-semibold tracking-wider text-white rounded-sm">
                Email
              </span>
            </div>
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-[46px] pl-24 bg-white/80 border-none text-sm text-[#313131] placeholder:text-[#313131]/70 placeholder:text-xs"
            />
          </div>

          {/* Password Input Group */}
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <span className="bg-gradient-to-r from-[#313131] to-black px-4 py-2 text-[9px] font-semibold tracking-wider text-white rounded-sm">
                Password
              </span>
            </div>
            <Input
              type="password"
              placeholder="Enter your password"
              className="h-[46px] pl-28 bg-white/80 border-none text-sm text-[#313131] placeholder:text-[#313131]/70 placeholder:text-xs"
            />
          </div>

          {/* Login Button */}
          <div className="flex justify-center pt-4">
            <Button
              className="w-[86px] h-[26px] bg-gradient-to-r from-[#313131] to-black hover:from-black hover:to-[#313131] text-white border-2 border-white text-sm rounded-[3px]"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

