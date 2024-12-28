import { Article, Comment } from "@/app/types/article"

export const articles: Article[] = [
  {
    id: "attack-on-titans",
    image: "/img1.png",
    category: "Fantasy",
    date: "1 Month Ago",
    title: "Attack On Titans",
    description: "Attack on Titans is a gripping fantasy story set in a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans. Protected by massive walls.",
    readTime: "5 Min Read",
    content: `
      <p>Attack on Titans is a gripping fantasy story set in a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans. Protected by massive walls, humans fight for survival against these mysterious predators. The narrative delves into themes of freedom, sacrifice, and the clash between fear and hope. With intense action, intricate storytelling, and deep emotional layers, its a tale of resilience and uncovering hidden truths about humanitys past and future.</p>
      <p>
      Attack on Titans is a dark fantasy saga set in a dystopian world where humanity teeters on the edge of extinction, confined within colossal walls to protect themselves from the relentless Titans—giant humanoid creatures that devour humans. The story follows Eren Yeager, Mikasa Ackerman, and Armin Arlert as they join the fight to uncover the Titans' origins and reclaim their freedom.

      With stunning action sequences, emotionally charged storytelling, and a complex web of political intrigue, betrayal, and hidden truths, the narrative explores themes of survival, freedom, sacrifice, and the moral ambiguities of war. It a tale that challenges the boundaries of courage and humanitys will to endure against overwhelming odds</p>
    `,
    comments: [
      {
        id: "1",
        author: "John Doe",
        content: "Great article! I learned a lot about CSS Grid.",
        createdAt: "2023-06-01T12:00:00Z"
      }
    ]
  },
  {
    id: "horror-story",
    image: "/img2.png",
    category: "Fantasy",
    date: "1 Month Ago",
    title: "Horror Story",
    description: "Horror Story delves into the chilling and suspenseful world of the unknown, where fear lurks in every shadow and the line between reality and nightmare blurs.",
    readTime: "1 Min Read",
    content: `
      <p>Horror Story is a spine-chilling tale set in a world where the familiar turns terrifying, and the unknown grips every moment with dread. It follows a group of unsuspecting characters who are drawn into an escalating series of strange and unexplainable events. Isolated in a remote, foreboding location, they face sinister forces that challenge their sanity and survival.

      As the story unfolds, long-buried secrets resurface, unraveling a dark and haunting backstory that ties the characters to the horrors they face. Tension builds with every twist, plunging them into a relentless nightmare where fear, betrayal, and desperation reign.

      With its atmospheric setting, vivid descriptions, and pulse-pounding suspense, Horror Story immerses readers in a gripping exploration of human resilience and the battle between light and shadow. Perfect for fans of psychological terror, supernatural elements, and nail-biting twists, its a tale that lingers long after the final page.</p>
    `,
    comments: []
  }
]

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id)
}

// export function addCommentToArticle(articleId: string, newComment: Omit<Comment, "id" | "createdAt">, comment: Omit<Comment, 'id' | 'createdAt'>): void {
//   const article = articles.find(a => a.id === articleId)
//   if (article) {
//     article.comments.push({
//       ...comment,
//       id: Date.now().toString(),
//       createdAt: new Date().toISOString(),
//       author: "",
//       content: ""
//     })
//   }
// }



export function addCommentToArticle(
  articleId: string,
  newComment: Omit<Comment, "id" | "createdAt">
): void {
  const article = articles.find(a => a.id === articleId);
  if (article) {
    article.comments.push({
      ...newComment, // Use the author and content from the provided newComment
      id: Date.now().toString(), // Generate a unique ID
      createdAt: new Date().toISOString(), // Add the current timestamp
    });
  }
}


