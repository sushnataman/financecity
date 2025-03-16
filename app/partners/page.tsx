"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Building2, ArrowRight, CheckCircle2, Zap, Shield, Globe, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function PartnersPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Users className="mr-2 h-4 w-4" />
            Partnership Program
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Partner With Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our network of global partners and help shape the future of
            financial technology.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Technology Partners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Integrate our financial analysis tools and data into your platform.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    API Integration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    White-label Solutions
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Technical Support
                  </li>
                </ul>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Distribution Partners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Expand your product offering with our financial solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Revenue Sharing
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Marketing Support
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Training Resources
                  </li>
                </ul>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Strategic Partners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Collaborate on innovative financial solutions and market expansion.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Joint Development
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Market Access
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Strategic Support
                  </li>
                </ul>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>
          </div>
        </div>

        {/* Featured Partners */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1614680376408-12c8c384c689?auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1614680376739-8568f7989bab?auto=format&fit=crop&w=300&q=80"
            ].map((logo, index) => (
              <Card key={index} className="p-6 flex items-center justify-center group hover:shadow-lg transition-all duration-300">
                <div className="relative h-12 w-full">
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Partner Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Fast Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Quick and easy integration with comprehensive documentation and support.
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security and 99.9% uptime guarantee.
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <MessageSquare className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">
                  Priority support and regular check-ins with our partnership team.
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
              <p className="text-muted-foreground mb-6">
                Take the first step towards a successful partnership. Our team will
                get in touch to discuss opportunities.
              </p>
              <Button size="lg">
                Contact Partnership Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}