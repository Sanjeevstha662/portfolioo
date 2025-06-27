import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          image_url: string;
          tech_stack: string[];
          live_url?: string;
          github_url?: string;
          category: string;
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          image_url: string;
          tech_stack: string[];
          live_url?: string;
          github_url?: string;
          category: string;
          featured?: boolean;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          image_url?: string;
          tech_stack?: string[];
          live_url?: string;
          github_url?: string;
          category?: string;
          featured?: boolean;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          content: string;
          excerpt: string;
          image_url: string;
          tags: string[];
          published: boolean;
          created_at: string;
          updated_at: string;
          slug: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          excerpt: string;
          image_url: string;
          tags: string[];
          published?: boolean;
          slug: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          excerpt?: string;
          image_url?: string;
          tags?: string[];
          published?: boolean;
          slug?: string;
        };
      };
      profile: {
        Row: {
          id: string;
          name: string;
          title: string;
          bio: string;
          email: string;
          phone?: string;
          location: string;
          avatar_url: string;
          social_links: {
            github?: string;
            linkedin?: string;
            twitter?: string;
            website?: string;
          };
          resume_url?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          title: string;
          bio: string;
          email: string;
          phone?: string;
          location: string;
          avatar_url: string;
          social_links?: {
            github?: string;
            linkedin?: string;
            twitter?: string;
            website?: string;
          };
          resume_url?: string;
        };
        Update: {
          id?: string;
          name?: string;
          title?: string;
          bio?: string;
          email?: string;
          phone?: string;
          location?: string;
          avatar_url?: string;
          social_links?: {
            github?: string;
            linkedin?: string;
            twitter?: string;
            website?: string;
          };
          resume_url?: string;
        };
      };
    };
  };
};