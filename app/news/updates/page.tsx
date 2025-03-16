"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart2, TrendingUp, TrendingDown, Clock, ArrowUpRight } from "lucide-react";

export default function MarketUpdatesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <BarChart2 className="mr-2 h-4 w-4" />
            Market Updates
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Real-Time Market Updates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track live market movements and trading updates across global markets
          </p>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              name: "S&P 500",
              value: "4,783.25",
              change: "+0.85%",
              trend: "up"
            },
            {
              name: "NASDAQ",
              value: "15,123.45",
              change: "+1.2%",
              trend: "up"
            },
            {
              name: "DOW JONES",
              value: "35,456.78",
              change: "-0.3%",
              trend: "down"
            },
            {
              name: "RUSSELL 2000",
              value: "2,123.45",
              change: "+0.5%",
              trend: "up"
            }
          ].map((index) => (
            <Card key={index.name} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{index.name}</h3>
                  {index.trend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className="text-2xl font-bold mb-2">{index.value}</div>
                <Badge variant={index.trend === "up" ? "default" : "destructive"}>
                  {index.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sector Performance */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Sector Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                sector: "Technology",
                change: "+2.3%",
                volume: "125M",
                trend: "up"
              },
              {
                sector: "Healthcare",
                change: "-0.8%",
                volume: "85M",
                trend: "down"
              },
              {
                sector: "Financials",
                change: "+1.5%",
                volume: "95M",
                trend: "up"
              },
              {
                sector: "Energy",
                change: "-1.2%",
                volume: "75M",
                trend: "down"
              },
              {
                sector: "Consumer Discretionary",
                change: "+0.9%",
                volume: "65M",
                trend: "up"
              },
              {
                sector: "Industrials",
                change: "+0.5%",
                volume: "55M",
                trend: "up"
              }
            ].map((sector) => (
              <Card key={sector.sector} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">{sector.sector}</h3>
                    <Badge variant={sector.trend === "up" ? "default" : "destructive"}>
                      {sector.change}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Volume: {sector.volume}</span>
                    {sector.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Latest Updates */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest Updates</h2>
          <div className="space-y-4">
            {[
              {
                time: "2 minutes ago",
                update: "Tech stocks surge on strong earnings reports",
                impact: "Positive",
                details: "Major tech companies exceed Q4 expectations"
              },
              {
                time: "15 minutes ago",
                update: "Oil prices stabilize after morning volatility",
                impact: "Neutral",
                details: "Supply concerns ease following inventory report"
              },
              {
                time: "45 minutes ago",
                update: "European markets react to ECB statement",
                impact: "Negative",
                details: "Policy uncertainty weighs on sentiment"
              }
            ].map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{update.time}</span>
                    </div>
                    <Badge variant={
                      update.impact === "Positive" ? "default" :
                      update.impact === "Negative" ? "destructive" :
                      "secondary"
                    }>
                      {update.impact}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{update.update}</h3>
                  <p className="text-sm text-muted-foreground">{update.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Calendar */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Market Calendar</h2>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    time: "10:00 AM EST",
                    event: "US GDP Data Release",
                    importance: "High"
                  },
                  {
                    time: "2:00 PM EST",
                    event: "Fed Chair Speech",
                    importance: "High"
                  },
                  {
                    time: "4:30 PM EST",
                    event: "Oil Inventory Report",
                    importance: "Medium"
                  }
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{event.event}</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                    <Badge variant={event.importance === "High" ? "destructive" : "secondary"}>
                      {event.importance}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}