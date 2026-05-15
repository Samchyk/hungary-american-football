import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { blogArticles } from '@/lib/blog-data';
import { slugify, findArticleBySlug, getRelatedArticles } from '@/lib/blog-utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: slugify(article.title),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = findArticleBySlug(slug, blogArticles);

  if (!article) {
    return {
      title: 'Nem található',
    };
  }

  return {
    title: `${article.title} - Amerikai Futball Blog`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = findArticleBySlug(slug, blogArticles);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, blogArticles, 3);

  return (
    <main>
      <Header />

      {/* Article Header */}
      <section className="py-16 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-accent font-bold text-lg mb-4 uppercase tracking-wider">
            {article.category}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            {article.title}
          </h1>
          <p className="text-xl text-foreground/70">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="w-full h-96 relative rounded-lg mb-12 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none mb-16">
            <div className="text-lg leading-relaxed whitespace-pre-wrap text-foreground/80">
              {article.content}
            </div>
          </div>

          {/* Category Tag */}
          <div className="py-8 border-y border-border flex items-center justify-between">
            <div className="flex gap-2">
              <span className="text-sm font-semibold text-foreground/50">Kategória:</span>
              <Link
                href={`/blog?category=${article.category}`}
                className="text-accent font-bold hover:opacity-80 transition-opacity"
              >
                {article.category}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Hasonló Cikkek</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => {
                const relatedSlug = slugify(relatedArticle.title);
                return (
                  <Link
                    key={relatedArticle.title}
                    href={`/blog/${relatedSlug}`}
                    className="group"
                  >
                    <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all hover:shadow-lg">
                      {/* Image */}
                      <div className="w-full h-48 relative overflow-hidden bg-accent/10">
                        <Image
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="text-accent text-sm font-bold mb-2 uppercase tracking-wider">
                          {relatedArticle.category}
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3 mb-4">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="text-accent text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                          Olvas tovább
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Több cikket szeretnél olvasni?</h3>
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Vissza a Blog-hoz
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
