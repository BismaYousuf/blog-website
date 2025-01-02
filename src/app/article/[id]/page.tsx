import { getArticleById } from '@/app/data/articles';
import { ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CommentsSection } from "@/components/comments-section"

type ArticlePageProps = {
  params: { id: string }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#313131] font-medium hover:opacity-70 transition-opacity mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Articles
        </Link>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#4B4B4B] font-medium">{article.category}</span>
          <span className="text-[#6E6E6E]">·</span>
          <span className="text-[#6E6E6E] font-medium">{article.date}</span>
          <span className="text-[#6E6E6E]">·</span>
          <span className="text-[#6E6E6E] font-medium">{article.readTime}</span>
        </div>

        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-[#313131] mt-4">
          {article.title}
        </h1>

        <div 
          className="prose prose-lg mt-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <CommentsSection articleId={article.id} comments={article.comments} />
      </div>
    </article>
  )
}

