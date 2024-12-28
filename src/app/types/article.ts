export interface Comment {
    id: string
    author: string
    content: string
    createdAt: string
  }
  
  export interface Article {
    id: string
    image: string
    category: string
    date: string
    title: string
    description: string
    readTime: string
    content: string
    comments: Comment[]
  }
  
  