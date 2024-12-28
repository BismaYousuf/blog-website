'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: 'John Doe', content: 'Great article! Very informative.', date: '2024-12-15' },
    { id: 2, author: 'Jane Smith', content: 'I learned a lot from this. Thanks for sharing!', date: '2024-12-26' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && userName.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: userName.trim(),
        content: newComment.trim(),
        date: new Date().toISOString().split('T')[0],
      };
      setComments([...comments, comment]);
      setNewComment('');
      setUserName('');
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border rounded-md"
          rows={3}
          required
        />
        <Button type="submit">Post Comment</Button>
      </form>
    </div>
  )
}

