// Blog post type definition
export interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  image: string;
  content?: string;
}

// Categories for blog posts
export const categories = [
  "All",
  "Market Analysis", 
  "Cryptocurrency",
  "Global Markets",
  "DeFi",
  "ESG",
  "Technology",
  "Real Estate",
  "NFTs",
  "Documentation",
] as const;

// Function to format date
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

// Function to generate slug
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Function to add a new blog post
export function addBlogPost(post: Omit<BlogPost, 'slug'>) {
  const newPost = {
    ...post,
    slug: generateSlug(post.title)
  };
  
  marketInsights.unshift(newPost);
  return newPost;
}

// All blog posts
export const marketInsights: BlogPost[] = [
  {
    title: "Market Analysis: Q2 2024",
    description: "Comprehensive analysis of market trends, economic indicators, and future projections for Q2 2024",
    author: "Sarah Chen",
    date: "April 15, 2024",
    readTime: "8 min read",
    slug: "market-analysis-q2-2024",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Markdown Style Guide: A Comprehensive Overview",
    description: "A complete guide to Markdown syntax, formatting options, and best practices for creating well-structured documents",
    author: "Technical Team",
    date: "April 12, 2024",
    readTime: "10 min read",
    slug: "markdown-style-guide",
    category: "Documentation",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "The Impact of AI on Financial Markets in 2024",
    description: "An in-depth analysis of how artificial intelligence is transforming trading, risk management, and investment strategies",
    author: "Dr. Emily Chen",
    date: "April 12, 2024",
    readTime: "8 min read",
    slug: "ai-impact-financial-markets-2024",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1000&q=80",
    category: "Technology"
  },
  {
    title: "Cryptocurrency Market Outlook",
    description: "Expert predictions and analysis for major cryptocurrencies",
    author: "Michael Roberts",
    date: "April 2, 2024",
    readTime: "7 min read",
    slug: "crypto-market-outlook",
    category: "Cryptocurrency",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Global Economic Trends",
    description: "Understanding the latest shifts in global markets",
    author: "David Kumar",
    date: "April 3, 2024",
    readTime: "6 min read",
    slug: "global-economic-trends",
    category: "Global Markets",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Future of DeFi",
    description: "Exploring decentralized finance innovations",
    author: "Emma Wilson",
    date: "April 4, 2024",
    readTime: "8 min read",
    slug: "future-of-defi",
    category: "DeFi",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ESG Investing Trends",
    description: "Sustainable investing strategies for 2024",
    author: "James Miller",
    date: "April 5, 2024",
    readTime: "6 min read",
    slug: "esg-investing-trends",
    category: "ESG",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI in Finance",
    description: "How artificial intelligence is reshaping finance",
    author: "Lisa Zhang",
    date: "April 6, 2024",
    readTime: "7 min read",
    slug: "ai-in-finance",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Real Estate Market Analysis",
    description: "Global property market trends and forecasts",
    author: "Robert Brown",
    date: "April 7, 2024",
    readTime: "5 min read",
    slug: "real-estate-analysis",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Emerging Markets Overview",
    description: "Opportunities in developing economies",
    author: "Sofia Rodriguez",
    date: "April 8, 2024",
    readTime: "6 min read",
    slug: "emerging-markets",
    category: "Global Markets",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "NFT Market Insights",
    description: "Latest trends in digital collectibles",
    author: "Alex Thompson",
    date: "April 9, 2024",
    readTime: "5 min read",
    slug: "nft-insights",
    category: "NFTs",
    image: "https://images.unsplash.com/photo-1639322537133-f9c29c7f2f39?auto=format&fit=crop&w=800&q=80"
  }
];