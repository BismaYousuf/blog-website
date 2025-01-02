"use client"

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-screen mt-[70px]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-[url('/placeholder.png')]"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/placeholder.png')"
        }}
      />

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4">
        {/* Main Content */}
        <div className="pt-[230px] max-w-xl">
          <h1 className="font-['Varela'] text-4xl md:text-6xl lg:text-[85px] leading-tight tracking-[3px] text-white mb-6">
            Welcome to BISMA BLOG
          </h1>
          <p className="font-poppins text-base md:text-lg text-[#FAFAFA] opacity-70 mb-10 max-w-[550px]">
          This blog is a collection of short stories and serialized tales. Dive into enchanting fantasy worlds where magic reigns supreme, or step into shadowy corners filled with unearthly horrors. New stories every week!
          </p>

          {/* Subscribe Form */}
          <div className="relative max-w-[406px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[46px] px-[120px] bg-[#FAFAFA]/80 text-[#313131] placeholder-[#313131]/70 text-sm focus:outline-none"
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#313131] to-black px-4 py-1.5">
              <span className="text-[9px] font-semibold tracking-wider text-[#FAFAFA]">
                SUBSCRIBE
              </span>
            </button>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#313131] rotate-90" />
          </div>
        </div>

        {/* Category Menu */}
        <div className="absolute bottom-16 right-4 space-y-3 text-right">
          {['Action', 'Comedy', 'Drama', 'Military', 'Fantasy'].map((category, index) => (
            <div key={category} className="flex items-center justify-end gap-2">
              <span className={`font-poppins text-base tracking-wider ${
                index === 4 ? 'text-white' : 'text-white'
              }`}>
                {category}
              </span>
              {index === 4 && (
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
