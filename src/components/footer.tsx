"use client"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#313131] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="relative">
              <div className="font-['Croissant_One'] text-2xl relative">
                <div className="relative z-10">
               GATES
                </div>
              
              </div>
              <div className="w-24 h-16" /> {/* Spacer */}
            </div>

            {/* Description */}
            <p className="text-base leading-[38px] tracking-[0.677419px] max-w-lg opacity-90">
              Gates is a blog that focuses on Japanese art and anime. 
              They feature information on Otaku conventions and other 
              anime topics. Hear from famous anime filmmakers and 
              artists as well as plenty of news about the art of cartoon 
              creation in the Japanese culture.
            </p>
          </div>

          {/* Right Column - Newsletter */}
          <div className="lg:flex lg:justify-end">
            <div className="relative max-w-[406px] w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[46px] px-[120px] bg-[#FAFAFA]/80 text-[#313131] placeholder-[#313131]/70 text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white my-8" />

        {/* Copyright */}
        <div className="text-base tracking-[0.677419px] opacity-90">
          @copyright 2024 Gates
        </div>
      </div>
    </footer>
  )
}

