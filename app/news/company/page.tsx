"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Clock, ArrowUpRight, FileText, BarChart2, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import Image from "next/image";

export default function CompanyNewsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Building2 className="mr-2 h-4 w-4" />
            Company News
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Corporate News & Updates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest corporate announcements, earnings, and company developments
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="md:flex">
              <div className="relative h-64 md:h-auto md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Featured corporate news"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
                  Featured
                </Badge>
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  <span>2 hours ago</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Major Tech Company Announces Revolutionary AI Platform
                </h2>
                <p className="text-muted-foreground mb-6">
                  Leading technology firm unveils groundbreaking artificial intelligence platform,
                  promising to transform enterprise operations and data analytics capabilities.
                </p>
                <Button className="group">
                  Read Full Story
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Latest Earnings */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest Earnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                company: "Tech Corp",
                eps: "$2.45",
                expected: "$2.30",
                revenue: "$12.5B",
                change: "+5.2%"
              },
              {
                company: "Global Bank",
                eps: "$1.85",
                expected: "$1.90",
                revenue: "$8.3B",
                change: "-2.1%"
              },
              {
                company: "Retail Giant",
                eps: "$3.15",
                expected: "$3.00",
                revenue: "$15.7B",
                change: "+3.8%"
              }
            ].map((earning) => (
              <Card key={earning.company} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">{earning.company}</h3>
                    <Badge variant={earning.change.startsWith("+") ? "default" : "destructive"}>
                      {earning.change}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">EPS</span>
                      <span className="font-medium">{earning.eps}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Expected</span>
                      <span>{earning.expected}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Revenue</span>
                      <span>{earning.revenue}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 group">
                    View Details
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate Actions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Corporate Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "Merger & Acquisition",
                title: "Tech Giant Acquires AI Startup",
                description: "Strategic acquisition to enhance AI capabilities",
                value: "$2.5B",
                icon: Building2
              },
              {
                type: "Stock Split",
                title: "E-commerce Leader Announces Split",
                description: "4-for-1 stock split to increase accessibility",
                date: "Effective April 1",
                icon: DollarSign
              },
              {
                type: "Dividend",
                title: "Bank Increases Quarterly Dividend",
                description: "15% increase in quarterly dividend payment",
                value: "$0.75 per share",
                icon: BarChart2
              },
              {
                type: "Executive Change",
                title: "New CEO Appointment",
                description: "Industry veteran to lead global operations",
                date: "Starting May 1",
                icon: FileText
              }
            ].map((action) => (
              <Card key={action.title} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <action.icon className="h-5 w-5 text-primary" />
                    <Badge>{action.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{action.description}</p>
                  <div className="text-sm">
                    {action.value && <p>Value: {action.value}</p>}
                    {action.date && <p>Date: {action.date}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Updates */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Latest Updates</h2>
          <div className="space-y-4">
            {[
              {
                company: "Tech Innovators Inc.",
                update: "Launches new cloud platform",
                time: "1 hour ago",
                impact: "Positive"
              },
              {
                company: "Global Manufacturing Co.",
                update: "Expands European operations",
                time: "3 hours ago",
                impact: "Positive"
              },
              {
                company: "Financial Services Ltd.",
                update: "Regulatory compliance update",
                time: "5 hours ago",
                impact: "Neutral"
              }
            ].map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="font-medium">{update.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{update.time}</span>
                    </div>
                  </div>
                  <p className="mb-4">{update.update}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant={update.impact === "Positive" ? "default" : "secondary"}>
                      {update.impact} Impact
                    </Badge>
                    <Button variant="ghost" size="sm" className="group">
                      Read More
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