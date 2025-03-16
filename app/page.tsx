"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart2, Clock, TrendingUp, DollarSign, LineChart, ArrowRight, Bookmark, ChevronRight, BookOpen, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { marketInsights } from "@/lib/data";

export default function Home() {
  // Get only the 9 latest posts
  const latestPosts = marketInsights.slice(0, 9);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-background border-b">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear_gradient(to_bottom,#ffffff12_1px,transparent_1px)] dark:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_70%,transparent_100%)]" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Badge 
              variant="outline" 
              className="px-4 py-2 border-primary/20 mb-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Latest Market Insights
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 relative">
              <span className="relative z-10 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent animate-shimmer">
                Stay Ahead with Expert
                <span className="block mt-2 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text">Financial Analysis</span>
              </span>
              <span className="absolute -inset-x-2 inset-y-0 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-3xl opacity-30 animate-pulse" />
              <span className="absolute -inset-x-2 inset-y-0 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 blur-2xl opacity-20 animate-aurora" />
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-[600px] mx-auto mb-8 px-4 sm:px-0">
              Access in-depth market analysis, expert insights, and comprehensive financial research to make informed investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              >
                <BookOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Start Reading
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-secondary w-full sm:w-auto"
              >
                <BarChart2 className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Market Analysis
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Grid */}
      <section className="container py-12 sm:py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Market Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {latestPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    aria-label="Bookmark this article"
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div>{post.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/blog">
            <Button size="lg" variant="outline" className="group w-full sm:w-auto">
              View All Articles
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-muted py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 bg-background/80 dark:bg-background/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear_gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear_gradient(to_bottom,#ffffff12_1px,transparent_1px)] dark:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_70%,transparent_100%)]" />
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose FinanceInsight</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Get the tools and insights you need to make informed trading decisions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="relative bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3 group-hover:bg-primary/20 transition-colors">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  Real-time Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access live market data and trading insights from global markets
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3 group-hover:bg-primary/20 transition-colors">
                    <LineChart className="h-6 w-6" />
                  </div>
                  Expert Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In-depth research and analysis from financial experts worldwide
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group sm:col-span-2 md:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  Market Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track and analyze market movements with advanced tools
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}