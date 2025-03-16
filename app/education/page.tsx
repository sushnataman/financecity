"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Play, FileText, Users, Brain, Target, BarChart2, LineChart, Presentation, Award, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

export default function EducationPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <GraduationCap className="mr-2 h-4 w-4" />
            Financial Education
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Learn Trading & Investment</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive educational resources to help you master financial markets
          </p>
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
                  alt="Trading Basics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
                  Beginner
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Trading Basics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn the fundamentals of trading and market analysis
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    1.2k Students
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    6 Hours
                  </div>
                </div>
                <Button className="w-full mt-4">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
                  alt="Technical Analysis"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
                  Intermediate
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Technical Analysis</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Master chart patterns and technical indicators
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    2.5k Students
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    8 Hours
                  </div>
                </div>
                <Button className="w-full mt-4">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
                  alt="Advanced Trading"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
                  Advanced
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Advanced Trading</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced strategies and risk management
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    1.8k Students
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    10 Hours
                  </div>
                </div>
                <Button className="w-full mt-4">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Stock Trading Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Trading Basics</h4>
                      <p className="text-sm text-muted-foreground">Understanding market fundamentals</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Technical Analysis</h4>
                      <p className="text-sm text-muted-foreground">Chart patterns and indicators</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Risk Management</h4>
                      <p className="text-sm text-muted-foreground">Portfolio and risk management</p>
                    </div>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">Start Path</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Crypto Trading Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Crypto Fundamentals</h4>
                      <p className="text-sm text-muted-foreground">Understanding blockchain and crypto</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Trading Strategies</h4>
                      <p className="text-sm text-muted-foreground">Crypto trading techniques</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">DeFi Trading</h4>
                      <p className="text-sm text-muted-foreground">Decentralized finance trading</p>
                    </div>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">Start Path</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Play className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Step-by-step video guides
              </p>
              <Button variant="outline">Watch Now</Button>
            </Card>

            <Card className="text-center p-6">
              <FileText className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">E-Books</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive trading guides
              </p>
              <Button variant="outline">Download</Button>
            </Card>

            <Card className="text-center p-6">
              <Presentation className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Webinars</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Live training sessions
              </p>
              <Button variant="outline">Register</Button>
            </Card>

            <Card className="text-center p-6">
              <Target className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Practice</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Paper trading simulator
              </p>
              <Button variant="outline">Try Now</Button>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Trading Professional</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Become a certified trading professional
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4 text-primary" />
                    Technical Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-primary" />
                    Risk Management
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    Portfolio Management
                  </li>
                </ul>
                <Button className="w-full">Get Certified</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Market Analyst</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional market analysis certification
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4 text-primary" />
                    Market Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-primary" />
                    Economic Indicators
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    Research Methods
                  </li>
                </ul>
                <Button className="w-full">Get Certified</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Crypto Specialist</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Cryptocurrency trading certification
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4 text-primary" />
                    Blockchain Technology
                  </li>
                  <li className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-primary" />
                    DeFi Trading
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    Crypto Analysis
                  </li>
                </ul>
                <Button className="w-full">Get Certified</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}