import Link from 'next/link';
import Image from 'next/image';
import { blogArticles } from '@/lib/blog-data';
import { slugify } from '@/lib/blog-utils';

export function BlogPreview() {
  const featuredArticles = blogArticles.slice(0, 3);
  const previewImages = [
    '/images/blog-preview-1.jpg',
    '/images/blog-preview-2.jpg',
    '/images/blog-preview-3.jpg',
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-accent font-bold text-lg mb-4 uppercase tracking-wider">Blog</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Legfrissebb Cikkek</h2>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Tanulj a legjobb szakértőktől az amerikai futball összes aspektusáról.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article, index) => {
            const slug = slugify(article.title);
            return (
              <Link
                key={article.title}
                href={`/blog/${slug}`}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all hover:shadow-lg">
                  {/* Image */}
                  <div className="w-full h-48 relative overflow-hidden bg-accent/10">
                    <Image
                      src={previewImages[index]}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-accent text-sm font-bold mb-2 uppercase tracking-wider">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
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

        {/* View all link */}
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-lg"
          >
            Összes cikk megtekintése
          </Link>
        </div>
      </div>
    </section>
  );
}
