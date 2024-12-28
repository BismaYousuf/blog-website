'use server';

import { addCommentToArticle, getArticleById } from "@/app/data/articles";

export async function addComment(articleId: string, comment: { author: string; content: string },) {
  try {
    // Wait for the comment to be added
    await addCommentToArticle(articleId, comment, ); // Added the third argument

    // Fetch the updated article
    const article = await getArticleById(articleId);

    // Safely retrieve the last comment
    if (Array.isArray(article?.comments) && article.comments.length > 0) {
      const newComment = article.comments[article.comments.length - 1];
      return { success: true, comment: newComment };
    } else {
      return { success: false, error: 'No comments found' };
    }
  } catch (error) {
    // Type guard to check if error is an instance of Error
    const errorMessage = error instanceof Error ? error.message : 'Failed to add comment';
    return { success: false, error: errorMessage };
  }
}
