import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprehensive Guide to Web Development and Design | FinanceCity',
  description: 'A complete guide to modern web development, design patterns, and best practices. Learn about HTML, CSS, JavaScript, React, and more.',
  keywords: ['web development', 'design patterns', 'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'tutorial', 'guide'],
  authors: [{ name: 'FinanceCity Team' }],
  openGraph: {
    title: 'Comprehensive Guide to Web Development and Design',
    description: 'Master modern web development with our complete guide covering HTML, CSS, JavaScript, React, and more.',
    type: 'article',
    url: 'https://financecity.me/blog/comprehensive-guide',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2000&q=80',
        width: 2000,
        height: 1000,
        alt: 'Web Development Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprehensive Guide to Web Development and Design',
    description: 'Master modern web development with our complete guide covering HTML, CSS, JavaScript, React, and more.',
    images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2000&q=80']
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}