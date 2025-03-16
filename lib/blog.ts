import { BlogPost, marketInsights } from './data';

// Get all blog posts
export function getAllPosts(): BlogPost[] {
  return marketInsights;
}

// Get latest blog posts
export function getLatestPosts(count: number = 6): BlogPost[] {
  return marketInsights.slice(0, count);
}

// Get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return marketInsights.find(post => post.slug === slug);
}

// Search posts
export function searchPosts(query: string): BlogPost[] {
  const searchTerms = query.toLowerCase().split(' ');
  return marketInsights.filter(post => {
    const searchContent = `${post.title} ${post.description} ${post.category}`.toLowerCase();
    return searchTerms.every(term => searchContent.includes(term));
  });
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') {
    return marketInsights;
  }
  return marketInsights.filter(post => post.category === category);
}

// Create new blog post
export function createPost(post: Omit<BlogPost, 'slug'>): BlogPost {
  const newPost: BlogPost = {
    ...post,
    slug: post.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  };
  
  marketInsights.unshift(newPost);
  return newPost;
}