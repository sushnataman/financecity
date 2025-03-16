import { TrendingUp, Twitter, Linkedin, Facebook, Instagram, Youtube, Github, Disc as Discord, MessageSquare as Telegram, Mail, Rss, Phone, MapPin, Clock, Shield, FileText, HelpCircle, Users, BookOpen, Gift, CreditCard, Building2, Award, Briefcase, GraduationCap, BarChart2, LineChart, DollarSign } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2" aria-label="FinanceCity Home">
              <TrendingUp className="h-8 w-8" aria-hidden="true" />
              <span className="text-xl font-bold">FinanceCity</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Your trusted source for market analysis, financial news, and investment insights. Stay ahead with expert analysis and real-time market data.
            </p>
            <div className="space-y-3">
              <address className="not-italic">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <a href="mailto:contact@financecity.me" className="text-sm hover:underline h-[44px] leading-[44px]">contact@financecity.me</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <a href="tel:+918286767679" className="text-sm hover:underline h-[44px] leading-[44px]">+91 8286767679</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-sm">Maharashtra, MUM 400056</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-sm">Mon-Fri: 9:00 AM - 5:00 PM IST</span>
                </div>
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4" aria-label="Quick links">
            <h2 className="font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/markets" className="flex items-center text-muted-foreground hover:text-foreground">
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Markets
                </Link>
              </li>
              <li>
                <Link href="/analysis" className="flex items-center text-muted-foreground hover:text-foreground">
                  <LineChart className="h-4 w-4 mr-2" />
                  Analysis
                </Link>
              </li>
              <li>
                <Link href="/education" className="flex items-center text-muted-foreground hover:text-foreground">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Education
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="flex items-center text-muted-foreground hover:text-foreground">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center text-muted-foreground hover:text-foreground">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company Links */}
          <nav className="space-y-4" aria-label="Company">
            <h2 className="font-semibold">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="flex items-center text-muted-foreground hover:text-foreground">
                  <Building2 className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="flex items-center text-muted-foreground hover:text-foreground">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="flex items-center text-muted-foreground hover:text-foreground">
                  <Award className="h-4 w-4 mr-2" />
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="/partners" className="flex items-center text-muted-foreground hover:text-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="flex items-center text-muted-foreground hover:text-foreground">
                  <Gift className="h-4 w-4 mr-2" />
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </nav>

          {/* Support Links */}
          <nav className="space-y-4" aria-label="Support">
            <h2 className="font-semibold">Support</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="flex items-center text-muted-foreground hover:text-foreground">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center text-muted-foreground hover:text-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="flex items-center text-muted-foreground hover:text-foreground">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="flex items-center text-muted-foreground hover:text-foreground">
                  <FileText className="h-4 w-4 mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/payment" className="flex items-center text-muted-foreground hover:text-foreground">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Payment Methods
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Newsletter & Social */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="font-semibold">Stay Updated</h2>
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter for market insights and updates.</p>
              <form className="flex gap-2" aria-label="Newsletter subscription">
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
                <Button type="submit" size="sm">Subscribe</Button>
              </form>
            </div>
            <div className="space-y-4 md:text-right">
              <h2 className="font-semibold">Connect With Us</h2>
              <nav className="flex flex-wrap gap-4 md:justify-end" aria-label="Social media">
                <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow us on Twitter">
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow us on LinkedIn">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow us on Facebook">
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow us on Instagram">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="https://youtube.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Subscribe to our YouTube channel">
                  <Youtube className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow us on GitHub">
                  <Github className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="https://discord.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Join our Discord server">
                  <Discord className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="https://t.me" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Join our Telegram channel">
                  <Telegram className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="/rss" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Subscribe to our RSS feed">
                  <Rss className="h-5 w-5" aria-hidden="true" />
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FinanceCity. All rights reserved.</p>
          <p className="mt-2">
            FinanceCity is a registered trademark. Market data provided by our partners.
          </p>
        </div>
      </div>
    </footer>
  );
}