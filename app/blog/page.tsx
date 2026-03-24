import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tailoring Tips & Guides | DarziDoor Blog",
  description:
    "Expert advice on shalwar kameez stitching, fabric guides, and tailoring tips for Islamabad & Rawalpindi.",
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-green text-4xl font-bold mb-4">
            DarziDoor Blog
          </h1>
          <p className="font-inter text-text-muted text-base mb-12">
            Tailoring guides, fabric tips, and stitching advice for Islamabad & Rawalpindi.
          </p>

          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-green/10 pb-8 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group">
                  <p className="font-inter text-text-muted text-xs mb-2">{post.date}</p>
                  <h2 className="font-playfair text-green text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-inter text-text-muted text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="font-inter text-gold text-sm font-medium mt-3 inline-block">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
