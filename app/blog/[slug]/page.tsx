import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  Tag
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock blog post data - in a real app, this would be fetched based on the slug
const getBlogPost = (slug: string) => {
  const posts = {
    'future-of-seo-ai-machine-learning-2025': {
      id: 1,
      title: 'The Future of SEO: AI and Machine Learning in 2025',
      excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing search engine optimization and what it means for digital marketers.',
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>The landscape of Search Engine Optimization (SEO) is rapidly evolving, and artificial intelligence (AI) and machine learning (ML) are at the forefront of this transformation. As we move into 2025, understanding these technologies and their impact on SEO strategies has become crucial for digital marketers and website owners.</p>
        
        <h2 id="ai-changing-search">How AI is Changing Search</h2>
        <p>Google's AI algorithms, including RankBrain and BERT, have fundamentally changed how search engines understand and process queries. These systems can now:</p>
        <ul>
          <li>Better understand user intent behind search queries</li>
          <li>Process natural language more effectively</li>
          <li>Provide more relevant search results</li>
          <li>Adapt to new search patterns in real-time</li>
        </ul>
        
        <h2 id="machine-learning">Machine Learning in Content Optimization</h2>
        <p>Machine learning algorithms are now capable of analyzing vast amounts of content data to identify patterns that lead to better search rankings. This includes:</p>
        <ul>
          <li>Content structure optimization</li>
          <li>Keyword density analysis</li>
          <li>User engagement prediction</li>
          <li>Content freshness scoring</li>
        </ul>
        
        <h2 id="voice-search">The Rise of Voice Search and AI Assistants</h2>
        <p>With the increasing popularity of voice assistants like Siri, Alexa, and Google Assistant, SEO strategies must adapt to conversational queries and featured snippets optimization.</p>
        
        <h2 id="preparing-future">Preparing for the AI-Driven Future</h2>
        <p>To stay competitive in the AI-driven SEO landscape, consider these strategies:</p>
        <ol>
          <li>Focus on user intent rather than just keywords</li>
          <li>Create comprehensive, high-quality content</li>
          <li>Optimize for featured snippets and voice search</li>
          <li>Leverage AI tools for content optimization</li>
          <li>Monitor and adapt to algorithm changes</li>
        </ol>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>The future of SEO lies in understanding and adapting to AI and machine learning technologies. By embracing these changes and focusing on user-centric strategies, businesses can maintain and improve their search visibility in the evolving digital landscape.</p>
      `,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['SEO', 'AI', 'Digital Marketing', 'Future Trends'],
      category: 'SEO',
      publishedAt: '2024-01-15',
      readTime: '8 min read',
      author: 'Sanjeev'
    }
  };
  
  return posts[slug as keyof typeof posts] || null;
};

const relatedPosts = [
  {
    title: 'Google Ads Optimization: Maximizing ROI in 2024',
    slug: 'google-ads-optimization-maximizing-roi-2024',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Digital Marketing'
  },
  {
    title: 'Building Scalable React Applications: Best Practices',
    slug: 'building-scalable-react-applications-best-practices',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Web Development'
  },
  {
    title: 'Content Marketing Strategy for Tech Startups',
    slug: 'content-marketing-strategy-tech-startups',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Digital Marketing'
  }
];

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-2">
                  By {post.author}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Share Section */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(shareUrl)}
                    >
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1 space-y-6"
              >
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6 text-center">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
                      alt="Sanjeev"
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="font-semibold mb-2">Sanjeev</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      SEO Specialist & Web Developer passionate about digital marketing and technology.
                    </p>
                    <Link href="/about">
                      <Button variant="outline" size="sm" className="w-full">
                        View Profile
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Quick Actions</h4>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Bookmark className="w-4 h-4 mr-2" />
                        Bookmark
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Table of Contents</h4>
                    <nav className="space-y-2 text-sm">
                      <a href="#introduction" className="block text-muted-foreground hover:text-primary">
                        Introduction
                      </a>
                      <a href="#ai-changing-search" className="block text-muted-foreground hover:text-primary">
                        How AI is Changing Search
                      </a>
                      <a href="#machine-learning" className="block text-muted-foreground hover:text-primary">
                        Machine Learning in Content
                      </a>
                      <a href="#voice-search" className="block text-muted-foreground hover:text-primary">
                        Voice Search & AI Assistants
                      </a>
                      <a href="#preparing-future" className="block text-muted-foreground hover:text-primary">
                        Preparing for the Future
                      </a>
                      <a href="#conclusion" className="block text-muted-foreground hover:text-primary">
                        Conclusion
                      </a>
                    </nav>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{relatedPost.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Important: generateStaticParams is required for static export of dynamic routes
export async function generateStaticParams() {
  // Return all slugs that exist in your blog
  return [
    { slug: 'future-of-seo-ai-machine-learning-2025' },
    { slug: 'google-ads-optimization-maximizing-roi-2024' },
    { slug: 'building-scalable-react-applications-best-practices' },
    { slug: 'content-marketing-strategy-tech-startups' },
  ];
}
