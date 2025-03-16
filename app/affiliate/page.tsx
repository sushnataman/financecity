"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight, DollarSign, Users, Zap, Trophy, Target, BarChart2, Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AffiliatePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Gift className="mr-2 h-4 w-4" />
            Affiliate Program
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Earn With Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our affiliate program and earn competitive commissions by promoting
            our financial analysis tools and services.
          </p>
        </div>

        {/* Commission Structure */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Commission Structure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Standard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">20%</span>
                  <span className="text-muted-foreground"> commission</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Perfect for beginners and content creators.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    30-day cookie duration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Monthly payments
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Basic marketing materials
                  </li>
                </ul>
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">30%</span>
                  <span className="text-muted-foreground"> commission</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  For experienced affiliates with proven results.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    60-day cookie duration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Bi-weekly payments
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Premium marketing kit
                  </li>
                </ul>
                <Button className="w-full">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Elite
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">40%</span>
                  <span className="text-muted-foreground"> commission</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  For top performers and strategic partners.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    90-day cookie duration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Weekly payments
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Custom marketing support
                  </li>
                </ul>
                <Button className="w-full">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Join Our Program?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <DollarSign className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">High Commissions</h3>
              <p className="text-sm text-muted-foreground">
                Earn up to 40% commission on all referred sales
              </p>
            </Card>

            <Card className="text-center p-6">
              <Zap className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Quick Payments</h3>
              <p className="text-sm text-muted-foreground">
                Get paid weekly, bi-weekly, or monthly
              </p>
            </Card>

            <Card className="text-center p-6">
              <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Dedicated Support</h3>
              <p className="text-sm text-muted-foreground">
                Personal affiliate manager for guidance
              </p>
            </Card>

            <Card className="text-center p-6">
              <BarChart2 className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Track your performance with detailed reports
              </p>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">1. Sign Up</h3>
              <p className="text-sm text-muted-foreground">
                Complete our simple registration process and get instant access to your affiliate dashboard
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">2. Promote</h3>
              <p className="text-sm text-muted-foreground">
                Share your unique affiliate link and promotional materials with your audience
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">3. Earn</h3>
              <p className="text-sm text-muted-foreground">
                Earn commissions for every successful referral and get paid regularly
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Financial Blogger",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
                quote: "The affiliate program has been a game-changer for my blog. The high commission rates and excellent support team make it easy to promote their products."
              },
              {
                name: "Michael Roberts",
                role: "Investment Educator",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
                quote: "I've tried many affiliate programs, but FinanceCity's stands out with their professional approach and reliable payments. My audience loves their products."
              }
            ].map((story) => (
              <Card key={story.name} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{story.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{story.role}</p>
                      <p className="text-muted-foreground italic">"{story.quote}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold mb-4">Start Earning Today</h2>
              <p className="text-muted-foreground mb-6">
                Join our affiliate program and start earning competitive commissions
                by promoting our trusted financial products.
              </p>
              <Button size="lg">
                Join Affiliate Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}