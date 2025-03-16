"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, Award, BarChart2, Globe, Shield, Heart, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Building2 className="mr-2 h-4 w-4" />
            About Us
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Empowering Financial Decisions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            FinanceCity is a leading provider of financial analysis and market insights,
            helping investors make informed decisions in today&apos;s dynamic markets.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To democratize financial information and empower individuals with
                the tools and knowledge they need to achieve their financial goals.
              </p>
            </CardContent>
            <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To become the world&apos;s most trusted platform for financial analysis,
                market insights, and investment education.
              </p>
            </CardContent>
            <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
          </Card>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6">
            <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold mb-2">1M+</h3>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </Card>

          <Card className="text-center p-6">
            <Globe className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold mb-2">150+</h3>
            <p className="text-sm text-muted-foreground">Countries Served</p>
          </Card>

          <Card className="text-center p-6">
            <Award className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-sm text-muted-foreground">Industry Awards</p>
          </Card>

          <Card className="text-center p-6">
            <BarChart2 className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold mb-2">10M+</h3>
            <p className="text-sm text-muted-foreground">Daily Analyses</p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Trust & Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain the highest standards of integrity in all our operations
                  and analyses.
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Heart className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">User-Centric</h3>
                <p className="text-sm text-muted-foreground">
                  Our users are at the heart of everything we do, driving our
                  innovation and growth.
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <TrendingUp className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We strive for excellence in our analysis, technology, and
                  customer service.
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Michael Roberts",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Emily Wong",
                role: "Chief Analytics Officer",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80"
              }
            ].map((member) => (
              <Card key={member.name} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="text-center pt-4">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Global Presence</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { city: "New York", country: "United States", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80" },
              { city: "London", country: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80" },
              { city: "Singapore", country: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=500&q=80" },
              { city: "Hong Kong", country: "China", image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=500&q=80" }
            ].map((office) => (
              <Card key={office.city} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-32">
                  <Image
                    src={office.image}
                    alt={office.city}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="text-center pt-4">
                  <h3 className="font-semibold">{office.city}</h3>
                  <p className="text-sm text-muted-foreground">{office.country}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}