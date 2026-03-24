import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogPreview() {
  const latest = posts.slice(0, 3);

  return (
    <section id="blog" className="bg-surface py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold">
            From Our Blog
          </h2>
          <p className="font-urdu text-gold text-2xl md:text-3xl leading-loose mt-1" dir="rtl" lang="ur">
            ہمارے بلاگ سے
          </p>
          <p className="font-inter text-text-muted text-base mt-4">
            Tailoring tips, fabric guides & stitching advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-bg rounded-xl p-7 flex flex-col gap-4 border-t-4 border-gold hover:shadow-md transition-shadow"
            >
              <p className="font-inter text-text-muted text-xs">{post.date}</p>
              <h3 className="font-playfair text-green text-lg font-semibold leading-snug group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <p className="font-inter text-text-muted text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <span className="font-inter text-gold text-sm font-medium mt-auto">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="font-inter text-green border-2 border-green text-sm font-medium px-7 py-3 rounded-full inline-flex items-center hover:bg-green hover:text-white transition-colors min-h-[48px]"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
