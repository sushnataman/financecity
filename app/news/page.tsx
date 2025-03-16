"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Newspaper, TrendingUp, Building2, Landmark, Globe, ScrollText, Megaphone, LineChart, FileText, BarChart2, Award, MessageSquare, Presentation, Share2, Mail, Bell, Rss } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Newspaper className="mr-2 h-4 w-4" />
            Latest News
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Financial News & Updates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest financial news, market updates, and expert analysis
          </p>
        </div>

        {/* News Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link href="/news/breaking">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Megaphone className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Breaking News</h2>
                </div>
                <p className="text-muted-foreground">Latest updates and breaking news from financial markets worldwide</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/news/updates">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart2 className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Market Updates</h2>
                </div>
                <p className="text-muted-foreground">Real-time market movements and trading updates</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/news/company">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Company News</h2>
                </div>
                <p className="text-muted-foreground">Corporate announcements, earnings, and company developments</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/news/economic">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Landmark className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Economic News</h2>
                </div>
                <p className="text-muted-foreground">Economic indicators, policy updates, and global trends</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/news/global">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Global Markets</h2>
                </div>
                <p className="text-muted-foreground">International market news and cross-border developments</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/news/press">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <ScrollText className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Press Releases</h2>
                </div>
                <p className="text-muted-foreground">Official announcements and press releases</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Analysis & Opinion */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Analysis & Opinion</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/news/commentary">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <MessageSquare className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Expert Commentary</h3>
                  <p className="text-sm text-muted-foreground">
                    Insights and analysis from financial experts
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/insights">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <LineChart className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Market Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep dive analysis of market trends
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/research">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Research Reports</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive research and analysis reports
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/weekly">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <BarChart2 className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Weekly Roundup</h3>
                  <p className="text-sm text-muted-foreground">
                    Summary of the week's key events
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/featured">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Featured Articles</h3>
                  <p className="text-sm text-muted-foreground">
                    Highlighted stories and special reports
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/trending">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Trending Topics</h3>
                  <p className="text-sm text-muted-foreground">
                    Most discussed financial topics
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* News Channels */}
        <div>
          <h2 className="text-2xl font-bold mb-8">News Channels</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/news/live">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Rss className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Live Feed</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/video">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Presentation className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Video Updates</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/podcasts">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Megaphone className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Podcasts</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/social">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Share2 className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Social Media</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/newsletter">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Newsletter</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news/alerts">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Bell className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">Alerts</h3>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}