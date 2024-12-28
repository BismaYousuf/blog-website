import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold text-[#313131] mb-4">Article Not Found</h2>
      <p className="text-[#6E6E6E] mb-8">Could not find the requested article.</p>
      <Link 
        href="/"
        className="text-[#313131] font-medium hover:opacity-70 transition-opacity"
      >
        Return to Articles
      </Link>
    </div>
  )
}

