import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import CommentSection from '@/components/commentSectionofblod'

// This would typically come from a database or API
const articles = [
  {
    slug: "first-exhibition",
    image: "/moral5.jpg",
    category: "Fantasy",
    date: "1 Month Ago",
    title: "First Exhibition",
    description: "First Exhibition marks a significant milestone in any artist's journey...",
    readTime: "30 Min Read"
  },
  {
    slug: "our-family",
    image: "/moral6.avif",
    category: "Fantasy",
    date: "1 Month Ago",
    title: "Our Family",
    description: "Our Family is a strong and loving unit where bonds are formed through shared experiences...",
    readTime: "30 Min Read"
  },
  {
    slug: "clever-fox",
    image: "/fox.jpg",
    category: "Fantasy",
    date: "1 Month Ago",
    title: "Clever Fox",
    description: "The Clever Fox is a symbol of intelligence, adaptability, and cunning...",
    readTime: "30 Min Read"
  }
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-8 text-[#313131] hover:text-[#4B4B4B] transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Article
      </Link>
      <article>
        <div className="mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#4B4B4B] font-medium">{article.category}</span>
            <span className="text-[#6E6E6E]">·</span>
            <span className="text-[#6E6E6E] font-medium">{article.date}</span>
          </div>
          <h1 className="font-poppins text-3xl md:text-4xl font-bold text-[#313131]">
            {article.title}
          </h1>
          <p className="text-[#6E6E6E]">
            {article.description}
          </p>
          <div className="pt-4">
            <span className="text-sm text-[#6E6E6E] font-medium">
              {article.readTime}
            </span>
          </div>
        </div>
      </article>
      <CommentSection />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { slug: article.slug }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return { props: { params } }
}
