'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code, 
  Search, 
  PenTool, 
  Shield,
  Download,
  Calendar,
  MapPin
} from 'lucide-react';

const experiences = [
  {
    company: 'GTS Technologies',
    role: 'SEO Specialist & Web Developer',
    period: '2023 - Present',
    description: 'Leading SEO campaigns and developing modern web applications for clients across various industries.',
    achievements: [
      'Increased organic traffic by 250% on average',
      'Built 15+ responsive web applications',
      'Managed Google Ads campaigns with $50K+ budget'
    ]
  },
  {
    company: 'Digital Marketing Intern',
    role: 'Content & SEO Intern',
    period: '2022 - 2023',
    description: 'Focused on content creation, SEO optimization, and social media marketing strategies.',
    achievements: [
      'Created 100+ SEO-optimized blog posts',
      'Managed social media accounts with 50K+ followers',
      'Improved website loading speed by 40%'
    ]
  }
];

const skills = [
  { name: 'SEO & SEM', level: 95, category: 'Digital Marketing' },
  { name: 'React/Next.js', level: 90, category: 'Web Development' },
  { name: 'Google Ads', level: 85, category: 'Digital Marketing' },
  { name: 'UI/UX Design', level: 80, category: 'Design' },
  { name: 'Content Writing', level: 88, category: 'Content' },
  { name: 'TypeScript', level: 85, category: 'Web Development' },
  { name: 'Cyber Security', level: 70, category: 'Security' },
  { name: 'Analytics', level: 90, category: 'Digital Marketing' }
];

const certifications = [
  'Google Analytics Certified',
  'Google Ads Certified',
  'HubSpot Content Marketing',
  'React Developer Certification',
  'SEMrush SEO Toolkit'
];

export default function About() {
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
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I'm a passionate digital professional who bridges the gap between technology and marketing. 
              Currently pursuing Cyber Security while building digital experiences that drive real business results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                Nepal
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Available for hire
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <GraduationCap className="w-4 h-4 mr-2" />
                Cyber Security Student
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Personal Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Working setup"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My journey into digital marketing and web development started during my college years 
                    when I discovered the power of SEO to transform businesses. What began as curiosity 
                    quickly evolved into a passion for creating digital solutions that make a real impact.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, I combine my technical skills in React and Next.js with deep expertise in SEO 
                    and digital marketing to help businesses grow online. I'm also expanding my knowledge 
                    in cyber security to stay ahead of the digital landscape.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When I'm not coding or optimizing websites, you'll find me writing about the latest 
                    digital trends, learning new technologies, or working on personal projects that push 
                    the boundaries of what's possible on the web.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0">
                          <Briefcase className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={skill.level} className="h-2" />
                    <div className="text-right text-sm text-muted-foreground">
                      {skill.level}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-12">Certifications & Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                      <p className="font-medium">{cert}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to take your digital presence to the next level? I'd love to discuss 
              how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}