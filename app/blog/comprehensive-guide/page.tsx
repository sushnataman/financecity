"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BookOpen, Clock, ChevronLeft, Info, CheckCircle2, AlertTriangle, Code, FileText, Link as LinkIcon, Quote, List, Image as ImageIcon, Table as TableIcon, Keyboard, BookMarked, Lightbulb, ArrowRight, Twitter, Facebook, Linkedin, Copy, Share2, Bookmark, ArrowUpRight, Palette, Layout, Type, Braces, FileCode, Blocks, Sparkles, Puzzle, Shapes, Layers, Paintbrush, Wand2, Brush, Hash, BookText, Component, Code2, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function ComprehensiveGuide() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    Prism.highlightAll();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const tableOfContents = [
    {
      id: "introduction",
      title: "Introduction",
      icon: BookText,
      description: "Overview of blog elements and components"
    },
    {
      id: "text-formatting",
      title: "Text Formatting",
      icon: Type,
      description: "Typography, styles, and text elements"
    },
    {
      id: "components",
      title: "Components & Elements",
      icon: Component,
      description: "Interactive UI components and elements"
    },
    {
      id: "code-examples",
      title: "Code Examples",
      icon: Code2,
      description: "Code snippets and syntax highlighting"
    },
    {
      id: "design-patterns",
      title: "Design Patterns",
      icon: PenTool,
      description: "Common patterns and best practices"
    }
  ];

  const handleShare = (platform: string) => {
    const url = encodeURIComponent("https://financecity.me/blog/comprehensive-guide");
    const title = encodeURIComponent("The Complete Guide to Our Blog Elements");

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href);
        break;
    }
  };

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
            The Complete Guide to Our Blog Elements
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              15 min read
            </div>
            <div>April 15, 2024</div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2000&q=80"
            alt="Web Development Guide"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <div className="p-6 border-b">
            <div className="flex items-center gap-2">
              <Hash className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Table of Contents</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Navigate through the comprehensive guide using the sections below
            </p>
          </div>
          <ScrollArea className="h-[400px] p-6">
            <nav className="space-y-6">
              {tableOfContents.map((section, index) => {
                const Icon = section.icon;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`group block transition-all duration-200 ${
                      activeSection === section.id ? "transform -translate-x-1" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
                        activeSection === section.id 
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className={`font-medium transition-colors ${
                            activeSection === section.id 
                              ? "text-primary"
                              : "text-foreground group-hover:text-primary"
                          }`}>
                            {section.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {section.description}
                        </p>
                      </div>
                      <div className={`w-1 self-stretch rounded-full transition-all ${
                        activeSection === section.id 
                          ? "bg-primary"
                          : "bg-transparent group-hover:bg-primary/20"
                      }`} />
                    </div>
                  </a>
                );
              })}
            </nav>
          </ScrollArea>
        </Card>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              Welcome to our comprehensive guide that showcases all the elements and components
              available in our blog system. This guide will help you understand how to use
              different elements effectively in your content.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8 not-prose">
              {[
                { icon: Type, title: "Typography", desc: "Rich text formatting" },
                { icon: Layout, title: "Layout", desc: "Flexible grid system" },
                { icon: Palette, title: "Colors", desc: "Beautiful color schemes" },
                { icon: Blocks, title: "Components", desc: "Reusable elements" },
                { icon: Braces, title: "Code", desc: "Syntax highlighting" },
                { icon: FileCode, title: "Examples", desc: "Real-world usage" }
              ].map((feature) => (
                <Card key={feature.title} className="p-4 text-center hover:shadow-md transition-shadow">
                  <feature.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium text-base">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="text-formatting">
            <h2>Text Formatting</h2>
            <p>
              Our blog supports various text formatting options to help you create rich,
              engaging content that effectively communicates your ideas.
            </p>

            {/* Text Formatting Examples */}
            <div className="not-prose bg-muted/50 rounded-lg p-6 my-8 space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Basic Formatting</h4>
                <p><strong>Bold text</strong> using strong tags</p>
                <p><em>Italic text</em> using em tags</p>
                <p><code>Inline code</code> using code tags</p>
                <p><mark>Highlighted text</mark> using mark tags</p>
                <p><del>Strikethrough text</del> using del tags</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Advanced Formatting</h4>
                <p>Text with <sub>subscript</sub> and <sup>superscript</sup></p>
                <p><abbr title="HyperText Markup Language">HTML</abbr> abbreviations</p>
                <p><cite>Citations</cite> and references</p>
              </div>
            </div>

            {/* Typography Showcase */}
            <div className="not-prose space-y-6 my-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Heading Styles</h3>
                <div className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold">Heading 1</h1>
                    <p className="text-sm text-muted-foreground">For main titles</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Heading 2</h2>
                    <p className="text-sm text-muted-foreground">For section headers</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Heading 3</h3>
                    <p className="text-sm text-muted-foreground">For subsections</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Heading 4</h4>
                    <p className="text-sm text-muted-foreground">For smaller sections</p>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Text Sizes</h3>
                  <div className="space-y-2">
                    <p className="text-xs">Extra Small Text</p>
                    <p className="text-sm">Small Text</p>
                    <p className="text-base">Base Text</p>
                    <p className="text-lg">Large Text</p>
                    <p className="text-xl">Extra Large Text</p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Font Weights</h3>
                  <div className="space-y-2">
                    <p className="font-light">Light Weight</p>
                    <p className="font-normal">Normal Weight</p>
                    <p className="font-medium">Medium Weight</p>
                    <p className="font-semibold">Semibold Weight</p>
                    <p className="font-bold">Bold Weight</p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section id="components">
            <h2>Components & Elements</h2>
            <p>
              Our blog system includes a variety of components and elements to help you
              create rich, interactive content.
            </p>

            {/* Alert Examples */}
            <div className="not-prose space-y-4 my-8">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is a standard information alert that provides additional context.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  This is a warning alert for important notifications.
                </AlertDescription>
              </Alert>

              <div className="p-6 bg-muted rounded-lg border">
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Pro Tip</h4>
                    <p className="text-muted-foreground">
                      This is a custom callout box that can be used to highlight important information
                      or tips in your content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Components */}
            <div className="not-prose my-8">
              <h3 className="text-xl font-bold mb-4">Interactive Elements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Buttons & Inputs</h4>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                    </div>
                    <div className="space-y-2">
                      <Input placeholder="Text input example" />
                      <Input type="number" placeholder="Number input" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Tabs Example</h4>
                  <Tabs defaultValue="preview">
                    <TabsList>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="p-4 border rounded-lg mt-2">
                      <p>Tab content example</p>
                    </TabsContent>
                    <TabsContent value="code" className="mt-2">
                      <pre>
                        <code className="language-jsx">
{`<Tabs defaultValue="preview">
  <TabsList>
    <TabsTrigger value="preview">
      Preview
    </TabsTrigger>
    <TabsTrigger value="code">
      Code
    </TabsTrigger>
  </TabsList>
  <TabsContent value="preview">
    Content
  </TabsContent>
</Tabs>`}
                        </code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>
            </div>
          </section>

          <section id="code-examples">
            <h2>Code Examples</h2>
            <p>
              Showcase code with syntax highlighting and proper formatting. Our blog
              supports multiple programming languages.
            </p>

            <div className="not-prose my-8 space-y-6">
              <Card className="overflow-hidden">
                <div className="border-b p-4 bg-muted/50">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">React Component Example</h3>
                  </div>
                </div>
                <div className="p-4">
                  <pre className="!mt-0">
                    <code className="language-jsx">
{`function Button({ children, onClick }) {
  return (
    <button
      className="px-4 py-2 rounded-md bg-primary"
      onClick={onClick}
    >
      {children}
    </button>
  );
}`}
                    </code>
                  </pre>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="border-b p-4 bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Braces className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">CSS/SCSS Example</h3>
                  </div>
                </div>
                <div className="p-4">
                  <pre className="!mt-0">
                    <code className="language-css">
{`.button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background: var(--primary);
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
}`}
                    </code>
                  </pre>
                </div>
              </Card>
            </div>
          </section>

          <section id="design-patterns">
            <h2>Design Patterns</h2>
            <p>
              Explore common design patterns and best practices for creating effective
              and engaging blog content.
            </p>

            {/* Design Pattern Examples */}
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Puzzle className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Component Composition</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Build complex UIs by combining simple, reusable components
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <Shapes className="h-4 w-4" />
                    <span>Basic Components</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <Layers className="h-4 w-4" />
                    <span>Compound Components</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <Blocks className="h-4 w-4" />
                    <span>Layout Components</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Paintbrush className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Visual Hierarchy</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Guide users through content with clear visual hierarchy
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold">Main Heading</h4>
                    <p className="text-sm text-muted-foreground">Primary content</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">Subheading</h5>
                    <p className="text-sm text-muted-foreground">Supporting content</p>
                  </div>
                  <div>
                    <h6 className="text-base font-medium">Detail</h6>
                    <p className="text-sm text-muted-foreground">Additional information</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Design Tips */}
            <div className="not-prose bg-muted/50 rounded-lg p-6 my-8">
              <div className="flex items-center gap-2 mb-4">
                <Wand2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Design Tips & Best Practices</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Layout</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Use consistent spacing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Maintain proper alignment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Create clear sections
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Typography</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Use readable font sizes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Maintain contrast
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Choose appropriate line height
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <div className="bg-muted/50 p-8 rounded-lg mt-8 border border-border/50 shadow-lg">
            <h4 className="text-xl font-semibold mb-4 text-primary">Element Reference</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>Code blocks</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Typography</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                <span>Links</span>
              </div>
              <div className="flex items-center gap-2">
                <Quote className="h-4 w-4" />
                <span>Blockquotes</span>
              </div>
              <div className="flex items-center gap-2">
                <List className="h-4 w-4" />
                <span>Lists</span>
              </div>
              <div className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                <span>Images</span>
              </div>
              <div className="flex items-center gap-2">
                <TableIcon className="h-4 w-4" />
                <span>Tables</span>
              </div>
              <div className="flex items-center gap-2">
                <Keyboard className="h-4 w-4" />
                <span>Keyboard</span>
              </div>
              <div className="flex items-center gap-2">
                <BookMarked className="h-4 w-4" />
                <span>Cards</span>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-muted rounded-lg border">
            <div className="flex items-start gap-6">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-muted-foreground">
                  Technical Writer & Web Developer with over 10 years of experience
                  in creating educational content for developers.
                </p>
                <div className="mt-2">
                  <Button variant="link" className="px-0">
                    View Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Share Section */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => handleShare('twitter')}
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => handleShare('facebook')}
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => handleShare('linkedin')}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => handleShare('copy')}
              >
                <Copy className="h-4 w-4" />
                Copy Link
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                    alt="Web Development"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">Tutorial</Badge>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">Getting Started with Web Development</h4>
                  <p className="text-sm text-muted-foreground mb-4">A beginner's guide to modern web development practices and tools.</p>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Read More
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                    alt="Design Systems"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">Design</Badge>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">Understanding Design Systems</h4>
                 <p className="text-sm text-muted-foreground mb-4">Learn how to create and maintain effective design systems.</p>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Read More
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=800&q=80"
                    alt="Code Quality"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">Best Practices</Badge>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">Writing Clean Code</h4>
                  <p className="text-sm text-muted-foreground mb-4">Best practices for maintaining code quality and readability.</p>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Read More
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}