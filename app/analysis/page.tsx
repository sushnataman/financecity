"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LineChart, BarChart2, TrendingUp, TrendingDown, Target, Brain, FileText, ChartBar, CandlestickChart, ArrowUpDown } from "lucide-react";

export default function AnalysisPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <LineChart className="mr-2 h-4 w-4" />
            Market Analysis
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Expert Market Analysis</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In-depth analysis and insights to help you make informed investment decisions
          </p>
        </div>

        {/* Analysis Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartBar className="h-5 w-5 text-primary" />
                Technical Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Advanced technical analysis using chart patterns, indicators, and price action.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <CandlestickChart className="h-4 w-4 text-primary" />
                  Chart Patterns
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  Technical Indicators
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <ArrowUpDown className="h-4 w-4 text-primary" />
                  Price Action
                </li>
              </ul>
              <Button className="w-full">
                View Analysis
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Fundamental Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Comprehensive analysis of financial statements and economic indicators.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-primary" />
                  Financial Statements
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  Economic Indicators
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-primary" />
                  Valuation Metrics
                </li>
              </ul>
              <Button className="w-full">
                View Analysis
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Sentiment Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Market sentiment analysis using AI and alternative data sources.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Brain className="h-4 w-4 text-primary" />
                  AI Analysis
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  Social Sentiment
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-primary" />
                  News Impact
                </li>
              </ul>
              <Button className="w-full">
                View Analysis
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Latest Analysis */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "S&P 500 Technical Analysis",
                description: "Key support and resistance levels for the S&P 500 index",
                trend: "bullish",
                date: "April 15, 2024"
              },
              {
                title: "Bitcoin Price Analysis",
                description: "Bitcoin's price action and potential breakout levels",
                trend: "neutral",
                date: "April 15, 2024"
              },
              {
                title: "EUR/USD Analysis",
                description: "Technical and fundamental analysis of EUR/USD pair",
                trend: "bearish",
                date: "April 15, 2024"
              },
              {
                title: "Gold Market Analysis",
                description: "Gold price analysis and market outlook",
                trend: "bullish",
                date: "April 15, 2024"
              }
            ].map((analysis) => (
              <Card key={analysis.title} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">{analysis.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{analysis.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          {analysis.trend === "bullish" && <TrendingUp className="h-4 w-4 text-green-500 mr-1" />}
                          {analysis.trend === "bearish" && <TrendingDown className="h-4 w-4 text-red-500 mr-1" />}
                          {analysis.trend === "neutral" && <ArrowUpDown className="h-4 w-4 text-yellow-500 mr-1" />}
                          {analysis.trend.charAt(0).toUpperCase() + analysis.trend.slice(1)}
                        </div>
                        <div>{analysis.date}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Outlook */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Market Outlook</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Short Term</h3>
              <Badge variant="secondary" className="mb-4">1-2 Weeks</Badge>
              <p className="text-sm text-muted-foreground">
                Markets showing bullish momentum with potential for further upside
              </p>
            </Card>

            <Card className="text-center p-6">
              <ArrowUpDown className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Medium Term</h3>
              <Badge variant="secondary" className="mb-4">1-3 Months</Badge>
              <p className="text-sm text-muted-foreground">
                Consolidation expected with range-bound trading opportunities
              </p>
            </Card>

            <Card className="text-center p-6">
              <Target className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Long Term</h3>
              <Badge variant="secondary" className="mb-4">6-12 Months</Badge>
              <p className="text-sm text-muted-foreground">
                Positive outlook with focus on value and growth opportunities
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}