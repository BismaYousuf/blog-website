import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { articles } from "@/app/data/articles"

export default function NewAndTrendy() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-8">
          <h2 className="font-poppins text-2xl font-semibold text-[#313131] tracking-wide">
            New & Trendy
          </h2>
          <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-[#D6D6D6] rounded">
            <div className="absolute left-0 w-5 h-0.5 bg-[#313131] rounded" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-12">
          {articles.map((article) => (
            <article key={article.id} className="relative group">
              <div className="relative h-[382px] w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#4B4B4B] font-medium">{article.category}</span>
                    <span className="text-[#6E6E6E]">·</span>
                    <span className="text-[#6E6E6E] font-medium">{article.date}</span>
                  </div>

                  <h3 className="font-poppins text-2xl font-bold text-[#313131] mt-2">
                    {article.title}
                  </h3>

                  <p className="text-[#6E6E6E] mt-2 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[#6E6E6E] font-medium">
                      {article.readTime}
                    </span>
                    <Link 
                      href={`/article/${article.id}`}
                      className="inline-flex items-center gap-2 text-[#313131] font-bold hover:opacity-70 transition-opacity"
                    >
                      Read Full
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

