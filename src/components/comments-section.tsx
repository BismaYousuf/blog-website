'use client'

import { useState } from 'react'
import { Comment } from '@/app/types/article'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { addComment } from '@/app/article/actions'

interface CommentsSectionProps {
  articleId: string
  comments: Comment[]
}

export function CommentsSection({ articleId, comments }: CommentsSectionProps) {
  const [newComments, setNewComments] = useState<Comment[]>(comments)
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (author.trim() && content.trim()) {
      const result = await addComment(articleId, { author, content })
      if (result.success && result.comment) { // Check if result.comment is defined
        setNewComments([...newComments, result.comment])
        setAuthor('')
        setContent('')
      }
    }
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-[#313131] mb-6">Comments</h2>
      {newComments.map((comment) => (
        <div key={comment.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold text-[#313131]">{comment.author}</p>
          <p className="text-[#6E6E6E] text-sm mb-2">
            {new Date(comment.createdAt).toLocaleDateString()}
          </p>
          <p className="text-[#313131]">{comment.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-8">
        <Input
          type="text"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mb-4"
          required
        />
        <Textarea
          placeholder="Your Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-4"
          required
        />
        <Button type="submit">Post Comment</Button>
      </form>
    </div>
  )
}