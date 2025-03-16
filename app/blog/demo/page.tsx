"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function DemoBlogPost() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="mr-2 h-4 w-4" />
            Tutorial
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            The Complete Guide to Modern Web Development
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
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80"
            alt="Web Development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Introduction to Web Development</h2>
          <p>
            Welcome to our comprehensive guide on modern web development. In this article,
            we'll explore various aspects of building websites and web applications using
            cutting-edge technologies and best practices.
          </p>

          <blockquote>
            "The web is not a fixed width." —<cite>Ethan Marcotte</cite>
          </blockquote>

          <h3>Key Technologies</h3>
          <p>
            Here are the fundamental technologies you'll need to master:
          </p>

          <ul>
            <li>
              <strong>HTML5</strong>
              <ul>
                <li>Semantic Elements</li>
                <li>Forms and Validation</li>
                <li>Multimedia Support</li>
              </ul>
            </li>
            <li>
              <strong>CSS3</strong>
              <ul>
                <li>Flexbox & Grid</li>
                <li>Animations</li>
                <li>Media Queries</li>
              </ul>
            </li>
            <li>
              <strong>JavaScript</strong>
              <ul>
                <li>ES6+ Features</li>
                <li>DOM Manipulation</li>
                <li>Async Programming</li>
              </ul>
            </li>
          </ul>

          <h3>Code Examples</h3>
          <p>
            Let's look at some code examples. Here's a simple React component:
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-jsx">
{`function Welcome({ name }) {
  return (
    <div className="greeting">
      <h1>Hello, {name}!</h1>
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <p>
            And here's some CSS using modern features:
          </p>

          <div className="not-prose">
            <pre>
              <code className="language-css">
{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}`}
              </code>
            </pre>
          </div>

          <h3>Mathematical Expressions</h3>
          <p>
            In web development, we often work with mathematical concepts. For example,
            calculating the area of a circle: πr<sup>2</sup> or the golden ratio:
            φ ≈ 1.618<sub>033988749895</sub>
          </p>

          <h3>Keyboard Shortcuts</h3>
          <p>
            Some useful keyboard shortcuts for developers:
          </p>

          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Windows/Linux</th>
                <th>macOS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Save File</td>
                <td><kbd>Ctrl</kbd> + <kbd>S</kbd></td>
                <td><kbd>⌘</kbd> + <kbd>S</kbd></td>
              </tr>
              <tr>
                <td>Find</td>
                <td><kbd>Ctrl</kbd> + <kbd>F</kbd></td>
                <td><kbd>⌘</kbd> + <kbd>F</kbd></td>
              </tr>
              <tr>
                <td>Replace</td>
                <td><kbd>Ctrl</kbd> + <kbd>H</kbd></td>
                <td><kbd>⌘</kbd> + <kbd>H</kbd></td>
              </tr>
            </tbody>
          </table>

          <h3>Important Terms</h3>
          <p>
            Here are some important terms in web development:
          </p>
          <dl>
            <dt><abbr title="Document Object Model">DOM</abbr></dt>
            <dd>The programming interface for HTML and XML documents</dd>
            
            <dt><abbr title="Cascading Style Sheets">CSS</abbr></dt>
            <dd>The language used to style web documents</dd>
            
            <dt><abbr title="Application Programming Interface">API</abbr></dt>
            <dd>A set of rules that allow programs to talk to each other</dd>
          </dl>

          <h3>Highlighted Content</h3>
          <p>
            Here's an example of <mark>highlighted text</mark> that draws attention to
            important information. You can also use it to show <mark className="bg-yellow-200 dark:bg-yellow-900">search results</mark> or
            <mark className="bg-green-200 dark:bg-green-900">success messages</mark>.
          </p>

          <h3>Image Gallery</h3>
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                alt="Coding"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h3>Final Thoughts</h3>
          <p>
            Web development is an ever-evolving field that requires continuous learning
            and adaptation. Stay curious, keep practicing, and never stop exploring new
            technologies and techniques.
          </p>

          <div className="bg-muted/50 p-8 rounded-lg mt-8 border border-border/50 shadow-lg">
            <h4 className="text-xl font-semibold mb-4 text-primary">Quick Reference</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 transition-transform hover:translate-x-2">
                <span className="text-2xl">✨</span> Start with the basics
              </li>
              <li className="flex items-center gap-2 transition-transform hover:translate-x-2">
                <span className="text-2xl">📚</span> Learn by doing
              </li>
              <li className="flex items-center gap-2 transition-transform hover:translate-x-2">
                <span className="text-2xl">🔄</span> Practice regularly
              </li>
              <li className="flex items-center gap-2 transition-transform hover:translate-x-2">
                <span className="text-2xl">🤝</span> Collaborate with others
              </li>
              <li className="flex items-center gap-2 transition-transform hover:translate-x-2">
                <span className="text-2xl">📈</span> Keep improving
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}