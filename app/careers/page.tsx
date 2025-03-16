"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, Search, MapPin, DollarSign, Clock, Users, Laptop, Coffee, GraduationCap, Heart, Gem, Zap } from "lucide-react";
import Image from "next/image";

export default function CareersPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Briefcase className="mr-2 h-4 w-4" />
            Careers
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Join Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build the future of financial technology with us. We&apos;re looking for
            passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-2xl mx-auto mb-12">
          <form className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search positions..." className="pl-10" />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Coffee className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-sm text-muted-foreground">
                  Flexible working hours, remote work options, and generous vacation policy.
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <GraduationCap className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Growth & Development</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous learning opportunities, mentorship programs, and career advancement.
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Heart className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Comprehensive Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Health insurance, retirement plans, and competitive compensation packages.
                </p>
              </CardContent>
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none group-hover:border-primary/20 transition-colors" />
            </Card>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Open Positions</h2>
          <div className="grid gap-6">
            {[
              {
                title: "Senior Full Stack Developer",
                department: "Engineering",
                location: "New York, NY",
                type: "Full-time",
                salary: "$120k - $180k"
              },
              {
                title: "Financial Analyst",
                department: "Analytics",
                location: "London, UK",
                type: "Full-time",
                salary: "£60k - £90k"
              },
              {
                title: "Product Manager",
                department: "Product",
                location: "Remote",
                type: "Full-time",
                salary: "$100k - $150k"
              },
              {
                title: "UX/UI Designer",
                department: "Design",
                location: "Singapore",
                type: "Full-time",
                salary: "S$80k - S$120k"
              }
            ].map((position) => (
              <Card key={position.title} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {position.department}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {position.location}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {position.type}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {position.salary}
                        </p>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Culture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Gem className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Innovation First</h3>
                  <p className="text-muted-foreground">
                    We encourage creative thinking and embrace new ideas to solve
                    complex financial challenges.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Collaborative Environment</h3>
                  <p className="text-muted-foreground">
                    Work with talented individuals who are passionate about making
                    a difference in the financial world.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Fast-Paced & Dynamic</h3>
                  <p className="text-muted-foreground">
                    Thrive in a dynamic environment where you can make an impact
                    and grow your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Don&apos;t See a Perfect Fit?</h2>
          <p className="text-muted-foreground mb-6">
            We&apos;re always looking for talented individuals. Send us your resume and
            we&apos;ll keep you in mind for future opportunities.
          </p>
          <Button size="lg">
            Submit Your Resume
          </Button>
        </div>
      </div>
    </div>
  );
}