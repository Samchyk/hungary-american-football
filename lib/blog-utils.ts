/**
 * Convert a title to a URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

/**
 * Find a blog article by slug
 */
export function findArticleBySlug(slug: string, articles: any[]) {
  return articles.find(article => slugify(article.title) === slug);
}

/**
 * Get related articles (same category, excluding current)
 */
export function getRelatedArticles(currentArticle: any, articles: any[], count: number = 3) {
  return articles
    .filter(
      article =>
        article.category === currentArticle.category &&
        article.title !== currentArticle.title
    )
    .slice(0, count);
}
