"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Newspaper, Download, ArrowUpRight, Award, TrendingUp, Users, Globe, FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PressPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Newspaper className="mr-2 h-4 w-4" />
            Press & Media
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Press Room</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the latest news, updates, and media resources about FinanceCity.
          </p>
        </div>

        {/* Latest News */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "FinanceCity Launches Advanced AI Trading Analytics",
                date: "April 15, 2024",
                image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
                category: "Product Launch"
              },
              {
                title: "FinanceCity Expands to Asian Markets",
                date: "April 10, 2024",
                image: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?auto=format&fit=crop&w=800&q=80",
                category: "Company News"
              },
              {
                title: "Q1 2024 Financial Results Announced",
                date: "April 5, 2024",
                image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
                category: "Financial Results"
              }
            ].map((news) => (
              <Card key={news.title} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {news.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{news.date}</p>
                  <h3 className="font-semibold mb-4 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Company Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">1M+</h3>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </Card>

            <Card className="text-center p-6">
              <Globe className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">150+</h3>
              <p className="text-sm text-muted-foreground">Countries</p>
            </Card>

            <Card className="text-center p-6">
              <Award className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-sm text-muted-foreground">Awards</p>
            </Card>

            <Card className="text-center p-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">200%</h3>
              <p className="text-sm text-muted-foreground">YoY Growth</p>
            </Card>
          </div>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Press Releases</h2>
          <div className="space-y-6">
            {[
              {
                title: "FinanceCity Secures $100M Series C Funding",
                date: "April 1, 2024",
                description: "Investment to accelerate global expansion and product development"
              },
              {
                title: "FinanceCity Partners with Leading Global Banks",
                date: "March 15, 2024",
                description: "Strategic partnership to enhance financial data analytics"
              },
              {
                title: "FinanceCity Wins Best FinTech Platform Award",
                date: "March 1, 2024",
                description: "Recognition for innovation in financial technology"
              }
            ].map((release) => (
              <Card key={release.title} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">{release.date}</p>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{release.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="flex-shrink-0">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Media Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Brand Assets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download our logo, brand guidelines, and other visual assets.
                </p>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Media Kit
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Media Inquiries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For press inquiries, please contact our media relations team.
                </p>
                <Button variant="outline">
                  Contact Press Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Awards Section */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Awards & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { year: "2024", award: "Best FinTech Innovation" },
              { year: "2023", award: "Excellence in Financial Analysis" },
              { year: "2023", award: "Top Financial Platform" },
              { year: "2022", award: "Best User Experience" }
            ].map((award) => (
              <Card key={award.award} className="text-center p-6 group hover:shadow-lg transition-all duration-300">
                <Award className="h-8 w-8 mx-auto mb-4 text-primary" />
                <p className="text-sm text-muted-foreground mb-2">{award.year}</p>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {award.award}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}