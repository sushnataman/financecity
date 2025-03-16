"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function BlogPost() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="mr-2 h-4 w-4" />
            Documentation
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            Markdown Style Guide: A Comprehensive Overview
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              10 min read
            </div>
            <div>April 12, 2024</div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2000&q=80"
            alt="Markdown Style Guide"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            This comprehensive guide explores the fundamental syntax and styling capabilities of Markdown,
            a lightweight markup language designed to make writing formatted content as simple as possible.
          </p>

          <h2>Getting Started with Markdown</h2>
          <p>
            Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
            Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.
          </p>

          <h2>Basic Syntax</h2>
          <h3>Headings</h3>
          <p>
            Markdown supports six levels of headings, corresponding to HTML's <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> elements.
            Each heading level represents a different section hierarchy.
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-markdown">
{`# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading`}
              </code>
            </pre>
          </div>

          <h3>Text Formatting</h3>
          <p>
            Markdown makes it easy to write and format paragraphs. Simply write your text as you normally would,
            and use blank lines to separate paragraphs.
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-markdown">
{`Regular text

*Italic text* or _italic text_

**Bold text** or __bold text__

***Bold and italic text*** or ___bold and italic text___`}
              </code>
            </pre>
          </div>

          <h2>Document Structure</h2>
          <h3>Paragraphs and Line Breaks</h3>
          <p>
            To create paragraphs, use a blank line to separate one or more lines of text.
            To create a line break, end a line with two or more spaces, then hit return.
          </p>

          <h3>Lists</h3>
          <p>
            Markdown supports both ordered and unordered lists, with the ability to create nested
            hierarchies.
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-markdown">
{`1. Ordered list item 1
2. Ordered list item 2
   - Nested unordered item
   - Another nested item
3. Ordered list item 3

- Unordered list item
- Another unordered item
  1. Nested ordered item
  2. Another nested item`}
              </code>
            </pre>
          </div>

          <h2>Rich Content Elements</h2>
          <h3>Images</h3>
          <p>
            Adding images in Markdown is straightforward, using a simple syntax that includes alt text
            and the image source URL.
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-markdown">
{`![Alt text](./path/to/image.jpg)
![Blog placeholder](https://example.com/image.jpg)`}
              </code>
            </pre>
          </div>

          <h3>Blockquotes</h3>
          <p>
            Blockquotes are perfect for highlighting quotes or important information. You can even include
            Markdown syntax within blockquotes for additional formatting.
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-markdown">
{`> Simple blockquote

> Blockquote with **bold** and *italic* text

> Multi-line blockquote
> with multiple paragraphs
> and formatting`}
              </code>
            </pre>
          </div>

          <h2>Advanced Features</h2>
          <h3>Tables</h3>
          <p>
            Markdown tables allow you to organize data in a structured format. The syntax includes
            headers, alignment options, and cell content.
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-markdown">
{`| Header 1 | Header 2 | Header 3 |
|----------|-----------|----------|
| Cell 1   | Cell 2    | Cell 3   |
| Cell 4   | Cell 5    | Cell 6   |`}
              </code>
            </pre>
          </div>

          <h3>Code Blocks</h3>
          <p>
            For displaying code snippets, Markdown provides both inline code and code blocks with
            optional syntax highlighting.
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-markdown">
{`\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
\`\`\`

Inline \`code\` example`}
              </code>
            </pre>
          </div>

          <h2>Extended Syntax</h2>
          <h3>Special Elements</h3>
          <p>
            Markdown also supports various HTML elements for additional formatting options.
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-markdown">
{`<abbr title="HyperText Markup Language">HTML</abbr>

H<sub>2</sub>O

X<sup>2</sup>

Press <kbd>CTRL</kbd> + <kbd>C</kbd>

<mark>Highlighted text</mark>`}
              </code>
            </pre>
          </div>

          <h2>Conclusion</h2>
          <p>
            Markdown's simplicity and flexibility make it an excellent choice for creating well-formatted
            content. Whether you're writing documentation, blog posts, or README files, understanding
            these basic syntax elements will help you create clear and professional-looking documents.
          </p>

          <div className="bg-muted/50 p-8 rounded-lg mt-8 border border-border/50 shadow-lg">
            <h3>Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-2xl">📝</span> Simple and intuitive syntax
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🎨</span> Rich formatting options
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">📊</span> Support for tables and structured content
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">💻</span> Code block syntax highlighting
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">📚</span> HTML compatibility for advanced formatting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}