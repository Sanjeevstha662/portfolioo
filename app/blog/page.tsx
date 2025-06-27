'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  Search, 
  Tag,
  ArrowRight,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of SEO: AI and Machine Learning in 2025',
    excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing search engine optimization and what it means for digital marketers.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['SEO', 'AI', 'Digital Marketing', 'Future Trends'],
    category: 'SEO',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    featured: true,
    slug: 'future-of-seo-ai-machine-learning-2025'
  },
  {
    id: 2,
    title: 'Building Scalable React Applications: Best Practices',
    excerpt: 'Learn the essential patterns and practices for building maintainable and scalable React applications that can grow with your business.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'JavaScript', 'Web Development', 'Best Practices'],
    category: 'Web Development',
    publishedAt: '2024-01-10',
    readTime: '12 min read',
    featured: true,
    slug: 'building-scalable-react-applications-best-practices'
  },
  {
    id: 3,
    title: 'Cybersecurity Fundamentals for Web Developers',
    excerpt: 'Essential security practices every web developer should know to protect applications and user data from common threats.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Cybersecurity', 'Web Development', 'Security', 'Best Practices'],
    category: 'Cybersecurity',
    publishedAt: '2024-01-05',
    readTime: '10 min read',
    featured: false,
    slug: 'cybersecurity-fundamentals-web-developers'
  },
  {
    id: 4,
    title: 'Google Ads Optimization: Maximizing ROI in 2024',
    excerpt: 'Advanced strategies for optimizing Google Ads campaigns to achieve better performance and higher return on investment.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Google Ads', 'PPC', 'Digital Marketing', 'ROI'],
    category: 'Digital Marketing',
    publishedAt: '2024-01-01',
    readTime: '6 min read',
    featured: false,
    slug: 'google-ads-optimization-maximizing-roi-2024'
  },
  {
    id: 5,
    title: 'UI/UX Design Trends That Will Dominate 2024',
    excerpt: 'Discover the latest design trends and how to implement them effectively in your web projects for better user experience.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['UI/UX', 'Design', 'Trends', 'User Experience'],
    category: 'Design',
    publishedAt: '2023-12-28',
    readTime: '7 min read',
    featured: false,
    slug: 'ui-ux-design-trends-2024'
  },
  {
    id: 6,
    title: 'Content Marketing Strategy for Tech Startups',
    excerpt: 'How to create and execute a content marketing strategy that drives growth for technology startups and SaaS companies.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Content Marketing', 'Startups', 'Strategy', 'Growth'],
    category: 'Digital Marketing',
    publishedAt: '2023-12-25',
    readTime: '9 min read',
    featured: true,
    slug: 'content-marketing-strategy-tech-startups'
  }
];

const categories = ['All', 'SEO', 'Web Development', 'Digital Marketing', 'Design', 'Cybersecurity'];
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    return matchesCategory && matchesSearch && matchesTag;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on SEO, web development, digital marketing, 
              and the ever-evolving world of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                {blogPosts.length} Articles
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Weekly Updates
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="default">Featured</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(post.publishedAt).toLocaleDateString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">All Articles</h2>
            
            {/* Filters */}
            <div className="space-y-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground flex items-center">
                  Categories:
                </span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground flex items-center">
                  <Tag className="w-3 h-3 mr-1" />
                  Tags:
                </span>
                <Button
                  variant={selectedTag === '' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTag('')}
                >
                  All
                </Button>
                {allTags.slice(0, 8).map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                        {post.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="default">Featured</Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4 flex-1 flex flex-col">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchTerm('');
                    setSelectedTag('');
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}