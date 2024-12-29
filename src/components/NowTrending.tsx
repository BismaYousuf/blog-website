"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Article {
  slug: string;
  image: string
  category: string
  date: string
  title: string
  description: string
  readTime: string
}

interface ShortRead {
  image: string
  title: string
  description: string
}

const articles: Article[] = [
  {
    slug: "first-exhibition",
    image: "/moral5.jpg",
    category: "Fantasy",
    date: "1 Month Ago",
    title: "First Exhibition",
    description: "First Exhibition marks a significant milestone in any artist's journey, representing a unique opportunity to showcase their work to the public for the first time. ",
    readTime: "30 Min Read"
  },
  {
    slug: "our-family",
    image: "/moral6.avif",
    category: "History",
    date: "4 Month Ago",
    title: "Our Family",
    description: "Our Family is a strong and loving unit where bonds are formed through shared experiences, unconditional support, and mutual care.",
    readTime: "12 Min Read"
  },
  {
    slug: "clever-fox",
    image: "/fox.jpg",
    category: "History",
    date: "2 Month Ago",
    title: "Clever Fox",
    description: "The Clever Fox is a symbol of intelligence, adaptability, and cunning. Known for its resourcefulness, the fox has long been a figure in folklore,",
    readTime: "20 Min Read"
  }
]

const shortReads: ShortRead[] = [
  {
    image: "/moral.jpg",
    title: "Akame Ga Kill: Season finale",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    image: "/moral2.jpg",
    title: "Naruto Uzumaki: Hidden Village",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    image: "/moral3.jpg",
    title: "Love juice Season Priemere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
]

export default function NowTrending() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Now Trending Section */}
        <div className="relative mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#313131] tracking-wide">
              Now Trending
            </h2>
          </div>

          {/* Trending Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {articles.map((article) => (
              <article key={article.slug} className="w-full max-w-[330px]">
                <div className="relative h-[254px] w-full mb-5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#4B4B4B] font-medium">{article.category}</span>
                    <span className="text-[#6E6E6E]">·</span>
                    <span className="text-[#6E6E6E] font-medium">{article.date}</span>
                  </div>
                  <h3 className="font-poppins text-lg font-bold text-[#313131]">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#6E6E6E] line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-[#6E6E6E] font-medium">
                      {article.readTime}
                    </span>
                    <Link 
                      href={`/blog/${article.slug}`} 
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#313131] hover:opacity-70 transition-opacity"
                    >
                      Read Full
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Short Reads Section */}
        <div className="relative mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-poppins text-2xl font-semibold text-[#0F1935]">
              Short Reads
            </h2>
          </div>

          {/* Short Read Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {shortReads.map((shortRead, index) => (
              <article key={index} className="flex flex-col gap-4">
                <div className="relative h-[144px] w-full">
                  <Image
                    src={shortRead.image}
                    alt={shortRead.title}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-poppins text-base font-medium text-[#020202] mb-2">
                    {shortRead.title}
                  </h3>
                  <p className="text-sm text-[#020202] opacity-50">
                    {shortRead.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
