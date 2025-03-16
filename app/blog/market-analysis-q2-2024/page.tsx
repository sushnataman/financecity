"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
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
            Market Analysis
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            Market Analysis: Q2 2024
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              8 min read
            </div>
            <div>April 15, 2024</div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=80"
            alt="Market Analysis Q2 2024"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Executive Summary</h2>
          <p>
            As we enter Q2 2024, global markets continue to demonstrate resilience amid evolving economic conditions. 
            This comprehensive analysis examines key market trends, economic indicators, and potential opportunities 
            for investors in the coming quarter.
          </p>

          <h2>Global Market Overview</h2>
          <p>
            The first quarter of 2024 has set the stage for what promises to be a dynamic second quarter. Major indices 
            have shown strong performance, with technology and AI-related sectors leading the charge. Key developments include:
          </p>
          <ul>
            <li>S&P 500 reaching new all-time highs</li>
            <li>Continued strength in global tech stocks</li>
            <li>Emerging market opportunities in Asia-Pacific</li>
            <li>Stabilizing cryptocurrency markets</li>
          </ul>

          <h2>Economic Indicators</h2>
          <p>
            Several key economic indicators are shaping market sentiment and investment decisions:
          </p>
          <ul>
            <li>Inflation rates showing signs of moderation</li>
            <li>Central bank policies becoming more accommodative</li>
            <li>Employment markets remaining robust</li>
            <li>Consumer confidence trending upward</li>
          </ul>

          <h2>Sector Analysis</h2>
          <h3>Technology Sector</h3>
          <p>
            The technology sector continues to dominate market performance, driven by:
          </p>
          <ul>
            <li>AI and machine learning innovations</li>
            <li>Cloud computing growth</li>
            <li>Semiconductor industry expansion</li>
            <li>Cybersecurity demands</li>
          </ul>

          <h3>Financial Sector</h3>
          <p>
            Banks and financial institutions are adapting to new market conditions:
          </p>
          <ul>
            <li>Digital transformation initiatives</li>
            <li>Fintech integration</li>
            <li>Regulatory compliance focus</li>
            <li>Sustainable finance growth</li>
          </ul>

          <h2>Investment Opportunities</h2>
          <p>
            Q2 2024 presents several compelling investment opportunities across different asset classes:
          </p>
          <ul>
            <li>Green energy initiatives</li>
            <li>AI and automation companies</li>
            <li>Healthcare innovation</li>
            <li>Infrastructure development</li>
          </ul>

          <h2>Risk Factors</h2>
          <p>
            Investors should remain mindful of potential risks:
          </p>
          <ul>
            <li>Geopolitical tensions</li>
            <li>Supply chain disruptions</li>
            <li>Regulatory changes</li>
            <li>Market volatility</li>
          </ul>

          <h2>Regional Outlook</h2>
          <h3>North America</h3>
          <p>
            The North American market continues to show strength, supported by:
          </p>
          <ul>
            <li>Strong corporate earnings</li>
            <li>Technology sector leadership</li>
            <li>Consumer spending resilience</li>
            <li>Infrastructure investments</li>
          </ul>

          <h3>Europe</h3>
          <p>
            European markets are navigating through:
          </p>
          <ul>
            <li>Energy transition challenges</li>
            <li>Digital transformation</li>
            <li>Green deal implementation</li>
            <li>Manufacturing sector evolution</li>
          </ul>

          <h3>Asia-Pacific</h3>
          <p>
            The Asia-Pacific region offers:
          </p>
          <ul>
            <li>Growing consumer markets</li>
            <li>Technology innovation hubs</li>
            <li>Infrastructure development</li>
            <li>Regional trade integration</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Q2 2024 presents a mix of opportunities and challenges for investors. Success will depend on:
          </p>
          <ul>
            <li>Strategic asset allocation</li>
            <li>Risk management discipline</li>
            <li>Long-term perspective maintenance</li>
            <li>Adaptability to market changes</li>
          </ul>

          <div className="bg-muted/50 p-8 rounded-lg mt-8 border border-border/50 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-2xl">📈</span> Markets showing resilience with positive momentum
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🤖</span> Technology and AI sectors leading growth
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🌱</span> Sustainable investments gaining traction
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">⚖️</span> Risk management remains crucial
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🔮</span> Positive outlook with monitored risks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}