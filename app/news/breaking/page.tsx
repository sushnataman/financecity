"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Megaphone, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BreakingNewsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Megaphone className="mr-2 h-4 w-4" />
            Breaking News
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Latest Financial Updates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with real-time breaking news from global financial markets
          </p>
        </div>

        {/* Live Updates */}
        <div className="space-y-6 mb-16">
          {[
            {
              time: "2 minutes ago",
              title: "Fed Announces Surprise Interest Rate Decision",
              description: "Federal Reserve maintains current interest rates, citing stable inflation metrics",
              image: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?auto=format&fit=crop&w=800&q=80",
              category: "Central Banks"
            },
            {
              time: "15 minutes ago",
              title: "Major Tech Merger Announced",
              description: "Leading technology companies announce $50 billion merger deal",
              image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
              category: "M&A"
            },
            {
              time: "45 minutes ago",
              title: "Oil Prices Surge on Supply Concerns",
              description: "Global oil prices jump 5% following production disruption reports",
              image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
              category: "Commodities"
            }
          ].map((news, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="relative h-48 md:h-auto md:w-72">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
                    {news.category}
                  </Badge>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Clock className="h-4 w-4" />
                      {news.time}
                    </div>
                    <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                    <p className="text-muted-foreground">{news.description}</p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="group">
                      Read More
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Market Movers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Market Movers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                symbol: "AAPL",
                name: "Apple Inc.",
                change: "+5.2%",
                reason: "New product announcement"
              },
              {
                symbol: "TSLA",
                name: "Tesla Inc.",
                change: "-3.8%",
                reason: "Production delay reports"
              },
              {
                symbol: "NVDA",
                name: "NVIDIA Corp.",
                change: "+4.1%",
                reason: "AI chip demand surge"
              }
            ].map((stock, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">{stock.symbol}</span>
                    <Badge variant={stock.change.startsWith("+") ? "default" : "destructive"}>
                      {stock.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{stock.name}</p>
                  <p className="text-sm">{stock.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Breaking Analysis */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Breaking Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Impact of Fed Decision",
                author: "Sarah Chen",
                time: "5 minutes ago",
                excerpt: "Analysis of the immediate market reaction to Federal Reserve's latest policy decision"
              },
              {
                title: "Tech Merger Implications",
                author: "Michael Roberts",
                time: "20 minutes ago",
                excerpt: "Expert analysis on how the major tech merger could reshape the industry landscape"
              }
            ].map((analysis, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{analysis.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{analysis.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      By {analysis.author} • {analysis.time}
                    </div>
                    <Button variant="ghost" className="group">
                      Read Analysis
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}