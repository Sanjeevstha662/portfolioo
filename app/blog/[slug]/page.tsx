// app/blog/[slug]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Metadata } from 'next';
import DOMPurify from 'isomorphic-dompurify'; // ✅ Use this in SSR environments like Netlify

type Params = { slug: string };

// Blog post data
const getBlogPost = (slug: string) => {
  const posts = {
    'future-of-seo-ai-machine-learning-2025': {
      id: 1,
      title: 'The Future of SEO: AI and Machine Learning in 2025',
      excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing search engine optimization and what it means for digital marketers.',
      content: `
        <h2>Introduction</h2>
        <p>The landscape of SEO is rapidly evolving. AI and ML are at the forefront...</p>
      `,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['SEO', 'AI', 'Digital Marketing'],
      category: 'SEO',
      publishedAt: '2024-01-15',
      readTime: '8 min read',
      author: 'Sanjeev',
    },
  };

  return posts[slug as keyof typeof posts] || null;
};

// ✅ Correct Metadata Generator
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// ✅ Main Page Component
export default function BlogPost({ params }: { params: Params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {post.publishedAt}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </span>
          <Badge>{post.category}</Badge>
        </div>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-lg mb-8 object-cover"
        />

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

// ✅ Generate static params
export async function generateStaticParams() {
  return [
    { slug: 'future-of-seo-ai-machine-learning-2025' },
  ];
}
