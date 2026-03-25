import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { getArticleSchema } from "@/lib/schema";
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
    title: `${post.title} | DarziDoor Blog`,
    description: post.excerpt,
    keywords: [post.keyword, "shalwar kameez", "tailor islamabad", "custom stitching"],
    authors: [{ name: "DarziDoor" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["DarziDoor"],
      url: `https://darzi-door.vercel.app/blog/${params.slug}`,
      images: [
        {
          url: "https://darzi-door.vercel.app/darzi-door.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://darzi-door.vercel.app/blog/${params.slug}`,
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = getArticleSchema(post);

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
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

          {/* eslint-disable-next-line react/no-danger */}
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
