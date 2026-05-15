import Link from 'next/link';
import Image from 'next/image';

interface ContentSectionProps {
  title: string;
  description: string;
  content: string;
  category: string;
  isReversed?: boolean;
  ctaText?: string;
  ctaHref?: string;
  image?: string;
}

export function ContentSection({
  title,
  description,
  content,
  category,
  isReversed = false,
  ctaText = 'Tudj meg többet',
  ctaHref = '/blog',
  image,
}: ContentSectionProps) {
  const textContent = (
    <div>
      <div className="text-accent font-bold text-lg mb-4 uppercase tracking-wider">{category}</div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{title}</h2>
      <p className="text-xl text-foreground/70 mb-8 leading-relaxed">{description}</p>
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-lg text-foreground/60 leading-relaxed whitespace-pre-wrap">{content}</p>
      </div>
      <Link
        href={ctaHref}
        className="inline-block px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
      >
        {ctaText}
      </Link>
    </div>
  );

  const visualElement = image ? (
    <div className="hidden lg:flex items-center justify-center">
      <div className="relative w-96 h-96 rounded-3xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  ) : (
    <div className="hidden lg:flex items-center justify-center">
      <div className="relative w-96 h-96">
        <div className="absolute inset-0 bg-accent/5 rounded-3xl" />
        <div className="absolute inset-12 border-2 border-accent/30 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-black text-accent/40 mb-4">
              {category.substring(0, 1)}
            </div>
            <p className="text-accent/50 font-semibold">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {isReversed ? (
            <>
              {visualElement}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {visualElement}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
