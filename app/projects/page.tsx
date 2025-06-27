'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ExternalLink, 
  Github, 
  Search, 
  Filter,
  Globe,
  Code,
  Palette,
  Shield
} from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-commerce SEO Campaign',
    description: 'Comprehensive SEO strategy that increased organic traffic by 300% for a fashion retailer. Implemented technical SEO, content optimization, and link building strategies.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'SEO',
    tech: ['SEO', 'Google Analytics', 'SEMrush', 'Content Strategy'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    results: ['300% increase in organic traffic', '150% boost in conversion rate', '50+ keywords in top 3 positions']
  },
  {
    id: 2,
    title: 'React Portfolio Dashboard',
    description: 'Modern admin dashboard built with React and TypeScript featuring data visualization, user management, and real-time analytics.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Web Development',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    results: ['Reduced admin tasks by 60%', 'Improved user experience', 'Real-time data insights']
  },
  {
    id: 3,
    title: 'Brand Identity Design System',
    description: 'Complete branding package for a tech startup including logo design, color palette, typography, and brand guidelines.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Design',
    tech: ['Figma', 'Adobe Illustrator', 'Brand Strategy', 'UI Design'],
    liveUrl: '#',
    githubUrl: null,
    featured: false,
    results: ['Increased brand recognition by 200%', 'Consistent visual identity', 'Professional brand presence']
  },
  {
    id: 4,
    title: 'Next.js Blog Platform',
    description: 'Full-stack blog platform with CMS functionality, SEO optimization, and responsive design built with Next.js and Supabase.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Web Development',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    results: ['100% Lighthouse score', 'Sub-second load times', 'SEO optimized content']
  },
  {
    id: 5,
    title: 'Google Ads Campaign Management',
    description: 'Managed Google Ads campaigns with $50K+ budget, achieving significant ROI improvements through strategic keyword targeting and ad optimization.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Digital Marketing',
    tech: ['Google Ads', 'Google Analytics', 'Keyword Research', 'A/B Testing'],
    liveUrl: '#',
    githubUrl: null,
    featured: false,
    results: ['400% ROI improvement', '60% reduction in CPC', '250% increase in conversions']
  },
  {
    id: 6,
    title: 'Cybersecurity Audit Tool',
    description: 'Web application security audit tool built to identify common vulnerabilities and provide security recommendations.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Cybersecurity',
    tech: ['Python', 'React', 'Security Testing', 'OWASP'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    results: ['Identified 95% of common vulnerabilities', 'Automated security reporting', 'Improved security posture']
  }
];

const categories = ['All', 'SEO', 'Web Development', 'Design', 'Digital Marketing', 'Cybersecurity'];

const categoryIcons = {
  'SEO': Search,
  'Web Development': Code,
  'Design': Palette,
  'Digital Marketing': Globe,
  'Cybersecurity': Shield,
  'All': Filter
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

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
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A showcase of my work across SEO, web development, design, and digital marketing. 
              Each project represents a unique challenge solved with creativity and technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 4).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                        {project.liveUrl && (
                          <Button size="sm" variant="secondary">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="secondary">
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge variant="outline">Featured</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {project.results && (
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-primary">Key Results:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {project.results.slice(0, 2).map((result, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">All Projects</h2>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = categoryIcons[category as keyof typeof categoryIcons];
                  return (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      {category}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="default">Featured</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3 flex-1 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tech.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <Button size="sm" variant="outline" className="flex-1">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Live
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button size="sm" variant="outline" className="flex-1">
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchTerm('');
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