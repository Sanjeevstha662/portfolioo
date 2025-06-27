'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Code, 
  PenTool, 
  BarChart3, 
  Shield, 
  Palette,
  Globe,
  Megaphone,
  Database,
  Smartphone
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Digital Marketing & SEO',
    icon: Search,
    color: 'text-green-500',
    description: 'Driving organic growth and online visibility',
    skills: [
      { name: 'SEO Optimization', level: 95, tools: ['SEMrush', 'Ahrefs', 'Google Analytics'] },
      { name: 'Google Ads', level: 90, tools: ['Google Ads', 'Keyword Planner', 'Google Tag Manager'] },
      { name: 'Content Marketing', level: 88, tools: ['HubSpot', 'WordPress', 'Canva'] },
      { name: 'Social Media Marketing', level: 85, tools: ['Facebook Ads', 'Instagram', 'LinkedIn'] },
      { name: 'Email Marketing', level: 82, tools: ['Mailchimp', 'ConvertKit', 'ActiveCampaign'] },
    ]
  },
  {
    title: 'Web Development',
    icon: Code,
    color: 'text-blue-500',
    description: 'Building modern, scalable web applications',
    skills: [
      { name: 'React/Next.js', level: 90, tools: ['React', 'Next.js', 'TypeScript'] },
      { name: 'JavaScript/TypeScript', level: 88, tools: ['ES6+', 'TypeScript', 'Node.js'] },
      { name: 'HTML/CSS', level: 92, tools: ['HTML5', 'CSS3', 'Tailwind CSS'] },
      { name: 'Responsive Design', level: 90, tools: ['Flexbox', 'Grid', 'Media Queries'] },
      { name: 'API Integration', level: 85, tools: ['REST', 'GraphQL', 'Fetch API'] },
    ]
  },
  {
    title: 'UI/UX Design',
    icon: PenTool,
    color: 'text-purple-500',
    description: 'Creating beautiful and intuitive user experiences',
    skills: [
      { name: 'UI Design', level: 80, tools: ['Figma', 'Adobe XD', 'Sketch'] },
      { name: 'Prototyping', level: 78, tools: ['Figma', 'InVision', 'Adobe XD'] },
      { name: 'User Research', level: 75, tools: ['UserTesting', 'Hotjar', 'Google Analytics'] },
      { name: 'Wireframing', level: 82, tools: ['Balsamiq', 'Figma', 'Whimsical'] },
      { name: 'Brand Identity', level: 70, tools: ['Adobe Illustrator', 'Canva', 'LogoMaker'] },
    ]
  },
  {
    title: 'Analytics & Data',
    icon: BarChart3,
    color: 'text-orange-500',
    description: 'Making data-driven decisions and insights',
    skills: [
      { name: 'Google Analytics', level: 90, tools: ['GA4', 'Google Tag Manager', 'Data Studio'] },
      { name: 'Data Visualization', level: 85, tools: ['Chart.js', 'D3.js', 'Google Charts'] },
      { name: 'A/B Testing', level: 80, tools: ['Google Optimize', 'Hotjar', 'VWO'] },
      { name: 'Conversion Optimization', level: 88, tools: ['Google Optimize', 'Unbounce', 'Leadpages'] },
      { name: 'Performance Monitoring', level: 82, tools: ['PageSpeed Insights', 'GTmetrix', 'Lighthouse'] },
    ]
  },
  {
    title: 'Cybersecurity (Learning)',
    icon: Shield,
    color: 'text-red-500',
    description: 'Building secure applications and understanding threats',
    skills: [
      { name: 'Web Security Basics', level: 70, tools: ['OWASP', 'Security Headers', 'SSL/TLS'] },
      { name: 'Network Security', level: 65, tools: ['Wireshark', 'Nmap', 'Firewall Config'] },
      { name: 'Ethical Hacking', level: 60, tools: ['Kali Linux', 'Metasploit', 'Burp Suite'] },
      { name: 'Security Auditing', level: 68, tools: ['OWASP ZAP', 'Nessus', 'OpenVAS'] },
      { name: 'Incident Response', level: 55, tools: ['SIEM', 'Log Analysis', 'Forensics'] },
    ]
  },
  {
    title: 'Content & Communication',
    icon: Megaphone,
    color: 'text-pink-500',
    description: 'Creating compelling content and effective communication',
    skills: [
      { name: 'Blog Writing', level: 88, tools: ['WordPress', 'Medium', 'Ghost'] },
      { name: 'Copywriting', level: 85, tools: ['Grammarly', 'Hemingway', 'CoSchedule'] },
      { name: 'Technical Writing', level: 82, tools: ['Notion', 'GitBook', 'Confluence'] },
      { name: 'Content Strategy', level: 80, tools: ['ContentKing', 'BuzzSumo', 'SEMrush'] },
      { name: 'Video Editing', level: 70, tools: ['DaVinci Resolve', 'Adobe Premiere', 'Canva'] },
    ]
  }
];

const tools = [
  'Google Analytics', 'SEMrush', 'Ahrefs', 'React', 'Next.js', 'TypeScript', 
  'Tailwind CSS', 'Figma', 'Adobe XD', 'WordPress', 'HubSpot', 'Mailchimp',
  'Google Ads', 'Facebook Ads', 'Canva', 'Git', 'VS Code', 'Photoshop'
];

export default function Skills() {
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
              Skills & <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and expertise across 
              digital marketing, web development, design, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * categoryIndex, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-secondary/50 to-background">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-white dark:bg-card ${category.color}`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                        <p className="text-muted-foreground mt-1">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * skillIndex, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="space-y-4"
                        >
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold">{skill.name}</h4>
                            <span className="text-sm text-muted-foreground font-medium">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-3" />
                          <div className="flex flex-wrap gap-2">
                            {skill.tools.map((tool) => (
                              <Badge key={tool} variant="secondary" className="text-xs">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tools & Technologies */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              The comprehensive toolkit I use to deliver exceptional results across all projects
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skill Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">What Makes Me Different</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Full-Stack Mindset',
                  description: 'I understand both the technical and marketing sides, allowing me to build solutions that actually drive business results.'
                },
                {
                  icon: BarChart3,
                  title: 'Data-Driven Approach',
                  description: 'Every decision is backed by data. I use analytics to optimize performance and measure success across all channels.'
                },
                {
                  icon: Smartphone,
                  title: 'Mobile-First Design',
                  description: 'With mobile traffic dominating, I ensure every solution works perfectly across all devices and screen sizes.'
                }
              ].map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                    <highlight.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}