import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | DarziDoor`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen py-16 px-6">
        <article className="max-w-2xl mx-auto">
          <p className="font-inter text-text-muted text-xs mb-4">{post.date}</p>
          <h1 className="font-playfair text-green text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="font-inter text-text-muted text-base italic mb-10 border-l-4 border-gold pl-4">
            {post.excerpt}
          </p>

          <div
            className="font-inter text-text-primary text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
