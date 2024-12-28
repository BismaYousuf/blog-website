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
    description: "First Exhibition marks a significant milestone in any artist's journey, representing a unique opportunity to showcase their work to the public for the first time. This pivotal moment is often filled with a mix of excitement, nervousness, and pride as the artist presents their creations to a wider audience. The exhibition serves as a platform for the artist to share their vision, technique, and artistic voice with the world. It's not just about displaying artwork; it's about telling a story, conveying emotions, and inviting viewers to engage with the pieces on a deeper level. The preparation for a first exhibition involves careful curation, thoughtful presentation, and often, a reflection on the artist's journey and growth. It's a celebration of creativity and a stepping stone towards establishing oneself in the art world. The feedback and reactions received during this exhibition can be invaluable, providing insights and motivation for future artistic endeavors. Whether held in a small gallery, a community space, or even virtually, a first exhibition is a memorable and transformative experience in an artist's career.",
    readTime: "30 Min Read"
  },
  {
    slug: "our-family",
    image: "/moral6.avif",
    category: "Fantasy",
    date: "1 Month Ago",
    title: "Our Family",
    description: "Our Family is a strong and loving unit where bonds are formed through shared experiences, unconditional support, and mutual care. Every family has its own unique dynamics, traditions, and values that shape its identity. In our family, we cherish togetherness, celebrating both the small moments and the major milestones that bring us closer.Through laughter, challenges, and unconditional love, our family has become a source of strength and comfort. We support each other in times of joy and sorrow, and each member contributes their individual personality, talents, and energy to create a warm and welcoming environment.Our family is not just about those we are related to by blood, but also those who we choose to call family—friends, mentors, and others who enrich our lives. It’s a place where memories are made, lessons are learned, and we all grow together, building a legacy of love and togetherness.",
    readTime: "30 Min Read"
  },
  {
    slug: "clever-fox",
    image: "/fox.jpg",
    category: "Fantasy",
    date: "1 Month Ago",
    title: "Clever Fox",
    description: "The Clever Fox is a symbol of intelligence, adaptability, and cunning. Known for its resourcefulness, the fox has long been a figure in folklore, representing quick thinking and the ability to navigate challenging situations with grace and wit.With sharp instincts and a keen sense of observation, the clever fox outsmarts predators and rivals alike. Its agility, stealth, and ability to think ahead make it a master at evading danger and finding solutions, whether in the wild or in metaphorical situations.In many cultures, the clever fox is also a symbol of trickery, often portrayed as outwitting others to achieve its goals. Whether used as a metaphor for someone with quick wit or as a symbol of wisdom in nature, the clever fox embodies the power of strategy, cleverness, and survival.",
    readTime: "30 Min Read"
  },
  // ... other articles
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

