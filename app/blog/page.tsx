import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { blogArticles } from '@/lib/blog-data';
import { slugify } from '@/lib/blog-utils';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - Amerikai Futball',
  description: 'Olvasd el a legújabb cikkeket az amerikai futballról.',
};

// Group articles by category
function groupByCategory(articles: typeof blogArticles) {
  const grouped = articles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {} as Record<string, typeof blogArticles>);

  return grouped;
}

export default function BlogPage() {
  const groupedArticles = groupByCategory(blogArticles);
  const categories = Object.keys(groupedArticles).sort();

  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="py-16 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Amerikai Futball <span className="text-accent">Blog</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Fedezd fel az amerikai futball történetét, szabályait, edzési módszereit és még sok mást.
          </p>
        </div>
      </section>

      {/* Articles by Category */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-20">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">{category}</h2>
                <div className="w-16 h-1 bg-accent rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedArticles[category].map((article) => {
                  const slug = slugify(article.title);
                  return (
                    <Link
                      key={article.title}
                      href={`/blog/${slug}`}
                      className="group"
                    >
                      <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all hover:shadow-lg h-full flex flex-col">
                        {/* Image */}
                        <div className="w-full h-48 relative overflow-hidden bg-accent/10">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="text-accent text-sm font-bold mb-3 uppercase tracking-wider">
                            {article.category}
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2 flex-grow">
                            {article.title}
                          </h3>
                          <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
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
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
