"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import {
  BarChart2, Menu, Search, TrendingUp, LineChart, BookOpen,
  Briefcase, Bitcoin, Globe, ChartBar, DollarSign, BookOpenCheck,
  GraduationCap, BookText, ShieldAlert, Lightbulb, Blocks, Binary,
  Wallet, Building2, Landmark, PieChart, BadgeDollarSign, Banknote,
  Coins, CircleDollarSign, Gem, BriefcaseBusiness, FileSpreadsheet,
  BarChart, TrendingDown, CandlestickChart, ArrowUpDown, Calculator,
  Target, Award, Users, Presentation, FileText, ScrollText, Newspaper,
  Megaphone, Rss, MessageSquare, Share2, Mail, Bell, Settings, HelpCircle,
  Cog, Brain, Play, Grid, Calendar, Gauge, Code, Download, BookmarkCheck,
  Clock, X
} from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { marketInsights } from "@/lib/data";

const navigation = [
  {
    name: "Markets",
    href: "/markets",
    icon: BarChart2,
    items: [
      {
        title: "Stock Markets",
        icon: ChartBar,
        items: [
          { title: "US Markets", href: "/markets/us", icon: DollarSign },
          { title: "European Markets", href: "/markets/europe", icon: Globe },
          { title: "Asian Markets", href: "/markets/asia", icon: Globe },
          { title: "Emerging Markets", href: "/markets/emerging", icon: TrendingUp },
          { title: "Market Indices", href: "/markets/indices", icon: BarChart },
          { title: "Market Sectors", href: "/markets/sectors", icon: PieChart },
        ],
      },
      {
        title: "Cryptocurrencies",
        icon: Bitcoin,
        items: [
          { title: "Bitcoin", href: "/markets/crypto/bitcoin", icon: Bitcoin },
          { title: "Ethereum", href: "/markets/crypto/ethereum", icon: Binary },
          { title: "DeFi Tokens", href: "/markets/crypto/defi", icon: Wallet },
          { title: "NFTs", href: "/markets/crypto/nfts", icon: Gem },
          { title: "Altcoins", href: "/markets/crypto/altcoins", icon: Blocks },
          { title: "Stablecoins", href: "/markets/crypto/stablecoins", icon: CircleDollarSign },
        ],
      },
      {
        title: "Forex & Commodities",
        icon: BadgeDollarSign,
        items: [
          { title: "Major Pairs", href: "/markets/forex/major", icon: ArrowUpDown },
          { title: "Commodities", href: "/markets/commodities", icon: Coins },
          { title: "Precious Metals", href: "/markets/metals", icon: Gem },
          { title: "Energy Markets", href: "/markets/energy", icon: Lightbulb },
          { title: "Agricultural", href: "/markets/agricultural", icon: Landmark },
        ],
      },
    ],
  },
  {
    name: "Analysis",
    href: "/analysis",
    icon: LineChart,
    items: [
      {
        title: "Technical Analysis",
        icon: CandlestickChart,
        items: [
          { title: "Chart Patterns", href: "/analysis/chart-patterns", icon: LineChart },
          { title: "Technical Indicators", href: "/analysis/indicators", icon: BarChart2 },
          { title: "Price Action", href: "/analysis/price-action", icon: TrendingUp },
          { title: "Volume Analysis", href: "/analysis/volume", icon: BarChart },
          { title: "Market Breadth", href: "/analysis/breadth", icon: PieChart },
          { title: "Sentiment Analysis", href: "/analysis/sentiment", icon: Users },
        ],
      },
      {
        title: "Fundamental Analysis",
        icon: FileSpreadsheet,
        items: [
          { title: "Financial Statements", href: "/analysis/financials", icon: FileText },
          { title: "Economic Indicators", href: "/analysis/economic", icon: DollarSign },
          { title: "Company Analysis", href: "/analysis/company", icon: Building2 },
          { title: "Industry Analysis", href: "/analysis/industry", icon: BriefcaseBusiness },
          { title: "Valuation Models", href: "/analysis/valuation", icon: Calculator },
          { title: "Risk Assessment", href: "/analysis/risk", icon: ShieldAlert },
        ],
      },
      {
        title: "Investment Strategies",
        icon: Target,
        items: [
          { title: "Portfolio Management", href: "/analysis/portfolio", icon: Briefcase },
          { title: "Asset Allocation", href: "/analysis/allocation", icon: PieChart },
          { title: "Risk Management", href: "/analysis/risk-management", icon: ShieldAlert },
          { title: "Trading Strategies", href: "/analysis/strategies", icon: Target },
          { title: "Investment Themes", href: "/analysis/themes", icon: Lightbulb },
          { title: "Performance Metrics", href: "/analysis/performance", icon: Award },
        ],
      },
    ],
  },
  {
    name: "News",
    href: "/news",
    icon: Newspaper,
    items: [
      {
        title: "Market News",
        icon: Newspaper,
        items: [
          { title: "Breaking News", href: "/news/breaking", icon: Megaphone },
          { title: "Market Updates", href: "/news/updates", icon: BarChart2 },
          { title: "Company News", href: "/news/company", icon: Building2 },
          { title: "Economic News", href: "/news/economic", icon: Landmark },
          { title: "Global Markets", href: "/news/global", icon: Globe },
          { title: "Press Releases", href: "/news/press", icon: ScrollText },
        ],
      },
      {
        title: "Analysis & Opinion",
        icon: Lightbulb,
        items: [
          { title: "Expert Commentary", href: "/news/commentary", icon: MessageSquare },
          { title: "Market Insights", href: "/news/insights", icon: LineChart },
          { title: "Research Reports", href: "/news/research", icon: FileText },
          { title: "Weekly Roundup", href: "/news/weekly", icon: BarChart2 },
          { title: "Featured Articles", href: "/news/featured", icon: Award },
          { title: "Trending Topics", href: "/news/trending", icon: TrendingUp },
        ],
      },
      {
        title: "News Channels",
        icon: Rss,
        items: [
          { title: "Live Feed", href: "/news/live", icon: Rss },
          { title: "Video Updates", href: "/news/video", icon: Presentation },
          { title: "Podcasts", href: "/news/podcasts", icon: Megaphone },
          { title: "Social Media", href: "/news/social", icon: Share2 },
          { title: "Newsletter", href: "/news/newsletter", icon: Mail },
          { title: "Alerts", href: "/news/alerts", icon: Bell },
        ],
      },
    ],
  },
  {
    name: "Education",
    href: "/education",
    icon: GraduationCap,
    items: [
      {
        title: "Trading Basics",
        icon: BookText,
        items: [
          { title: "Getting Started", href: "/education/basics", icon: BookOpen },
          { title: "Trading Terms", href: "/education/terms", icon: BookText },
          { title: "Market Mechanics", href: "/education/mechanics", icon: Cog },
          { title: "Order Types", href: "/education/orders", icon: FileText },
          { title: "Trading Psychology", href: "/education/psychology", icon: Brain },
          { title: "Risk Management", href: "/education/risk", icon: ShieldAlert },
        ],
      },
      {
        title: "Advanced Topics",
        icon: Lightbulb,
        items: [
          { title: "Technical Analysis", href: "/education/technical", icon: LineChart },
          { title: "Fundamental Analysis", href: "/education/fundamental", icon: FileSpreadsheet },
          { title: "Options Trading", href: "/education/options", icon: ArrowUpDown },
          { title: "Futures Trading", href: "/education/futures", icon: Clock },
          { title: "Algorithmic Trading", href: "/education/algo", icon: Binary },
          { title: "Portfolio Theory", href: "/education/portfolio", icon: PieChart },
        ],
      },
      {
        title: "Resources",
        icon: BookOpenCheck,
        items: [
          { title: "Video Tutorials", href: "/education/videos", icon: Play },
          { title: "Trading Guides", href: "/education/guides", icon: FileText },
          { title: "Webinars", href: "/education/webinars", icon: Presentation },
          { title: "Glossary", href: "/education/glossary", icon: BookText },
          { title: "FAQ", href: "/education/faq", icon: HelpCircle },
          { title: "Support", href: "/education/support", icon: MessageSquare },
        ],
      },
    ],
  },
  {
    name: "Tools",
    href: "/tools",
    icon: Settings,
    items: [
      {
        title: "Trading Tools",
        icon: ChartBar,
        items: [
          { title: "Stock Screener", href: "/tools/screener", icon: Search },
          { title: "Technical Charts", href: "/tools/charts", icon: LineChart },
          { title: "Portfolio Tracker", href: "/tools/portfolio", icon: Briefcase },
          { title: "Risk Calculator", href: "/tools/calculator", icon: Calculator },
          { title: "Market Scanner", href: "/tools/scanner", icon: BarChart2 },
          { title: "Watchlists", href: "/tools/watchlists", icon: BookmarkCheck },
        ],
      },
      {
        title: "Analysis Tools",
        icon: Calculator,
        items: [
          { title: "Financial Calculator", href: "/tools/financial", icon: Calculator },
          { title: "Technical Indicators", href: "/tools/indicators", icon: LineChart },
          { title: "Correlation Matrix", href: "/tools/correlation", icon: Grid },
          { title: "Economic Calendar", href: "/tools/calendar", icon: Calendar },
          { title: "Heat Maps", href: "/tools/heatmaps", icon: Grid },
          { title: "Sentiment Index", href: "/tools/sentiment", icon: Gauge },
        ],
      },
      {
        title: "Research Tools",
        icon: Search,
        items: [
          { title: "Company Research", href: "/tools/research", icon: Building2 },
          { title: "Market Research", href: "/tools/market", icon: Globe },
          { title: "News Aggregator", href: "/tools/news", icon: Newspaper },
          { title: "Data Export", href: "/tools/export", icon: Download },
          { title: "API Access", href: "/tools/api", icon: Code },
          { title: "Custom Reports", href: "/tools/reports", icon: FileText },
        ],
      },
    ],
  },
];

export function SiteHeader() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof marketInsights>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      setIsMobileSearchVisible(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const updateSearchResults = useCallback(() => {
    if (searchQuery.trim()) {
      const results = marketInsights.filter((post) => {
        const searchContent = `${post.title} ${post.description} ${post.category}`.toLowerCase();
        const searchTerms = searchQuery.toLowerCase().split(" ");
        return searchTerms.every(term => searchContent.includes(term));
      });
      setSearchResults(results.slice(0, 5));
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    updateSearchResults();
  }, [updateSearchResults]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mr-2"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] max-w-sm p-0">
              <SheetHeader className="border-b px-4 py-3">
                <SheetTitle asChild>
                  <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                      <TrendingUp className="h-6 w-6" />
                      <span className="font-bold">FinanceCity</span>
                    </Link>
                    <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-5rem)]">
                <div className="pb-4 pt-2">
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <div key={item.name} className="space-y-3 px-4">
                        <div className="flex items-center gap-2 font-medium">
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </div>
                        {item.items.map((section) => (
                          <div key={section.title} className="pl-4 space-y-2">
                            <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                              <section.icon className="h-4 w-4" />
                              {section.title}
                            </div>
                            <ul className="space-y-1">
                              {section.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center gap-2 rounded-md py-1 text-sm text-muted-foreground hover:text-foreground"
                                    onClick={() => setIsSheetOpen(false)}
                                  >
                                    <subItem.icon className="h-3 w-3" />
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </nav>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start md:flex-none">
          <Link href="/" className="flex items-center space-x-2" aria-label="FinanceCity Home">
            <TrendingUp className="h-6 w-6" aria-hidden="true" />
            <span className="font-bold">FinanceCity</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 items-center">
          <nav className="flex-1" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="h-9 px-3">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span className="text-sm">{item.name}</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] xl:w-[600px] lg:grid-cols-3">
                        {item.items.map((section) => (
                          <div key={section.title} className="space-y-2">
                            <div className="flex items-center gap-1 text-sm font-medium">
                              <section.icon className="h-4 w-4" />
                              {section.title}
                            </div>
                            <ul className="space-y-1">
                              {section.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground"
                                    >
                                      <subItem.icon className="h-4 w-4" />
                                      {subItem.title}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center justify-end md:w-[440px]">
          {/* Mobile Theme Toggle and Search */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileSearchVisible(!isMobileSearchVisible)}
              aria-label="Toggle search"
              aria-expanded={isMobileSearchVisible}
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>
            <ModeToggle />
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-2 w-full max-w-[360px]">
            <div className="relative flex-1">
              <form onSubmit={handleSearch} role="search">
                <div className="relative">
                  <Search 
                    className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                    aria-hidden="true"
                  />
                  <Input
                    type="search"
                    placeholder="Search markets..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search markets"
                    aria-controls={isSearchOpen ? "search-results" : undefined}
                    aria-describedby="search-description"
                  />
                </div>
                <span id="search-description" className="sr-only">
                  Type to search for market insights and analysis
                </span>
              </form>

              {/* Search Results Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div 
                  id="search-results"
                  className="absolute top-full left-0 right-0 mt-1 bg-popover text-popover-foreground shadow-lg rounded-md border overflow-hidden z-50"
                  role="listbox"
                >
                  <div className="p-2 max-h-[60vh] overflow-y-auto">
                    {searchResults.map((result) => (
                      <Link
                        key={result.slug}
                        href={`/blog/${result.slug}`}
                        className="flex items-start gap-2 p-2 hover:bg-accent rounded-sm"
                        onClick={() => setIsSearchOpen(false)}
                        role="option"
                        aria-selected="false"
                      >
                        <div className="w-10 h-10 relative flex-shrink-0 rounded-sm overflow-hidden">
                          <Image
                            src={result.image}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium truncate">{result.title}</h4>
                          <p className="text-xs text-muted-foreground truncate">{result.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div 
          className={`absolute left-0 right-0 top-[56px] bg-background border-b p-4 md:hidden transition-all duration-200 ${
            isMobileSearchVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <form onSubmit={handleSearch} role="search">
            <div className="relative">
              <Search 
                className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Search markets..."
                className="w-full pl-8 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search markets"
                aria-controls={isSearchOpen ? "mobile-search-results" : undefined}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                onClick={() => setIsMobileSearchVisible(false)}
                aria-label="Close search"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </form>

          {/* Mobile Search Results */}
          {isSearchOpen && searchResults.length > 0 && (
            <div 
              id="mobile-search-results"
              className="absolute left-0 right-0 mt-1 mx-4 bg-popover text-popover-foreground shadow-lg rounded-md border overflow-hidden"
              role="listbox"
            >
              <div className="p-2 max-h-[60vh] overflow-y-auto">
                {searchResults.map((result) => (
                  <Link
                    key={result.slug}
                    href={`/blog/${result.slug}`}
                    className="flex items-start gap-2 p-2 hover:bg-accent rounded-sm"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setIsMobileSearchVisible(false);
                    }}
                    role="option"
                    aria-selected="false"
                  >
                    <div className="w-10 h-10 relative flex-shrink-0 rounded-sm overflow-hidden">
                      <Image
                        src={result.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate">{result.title}</h4>
                      <p className="text-xs text-muted-foreground truncate">{result.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}