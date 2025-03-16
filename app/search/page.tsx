"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Bookmark } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import the market insights data from a shared location
import { marketInsights } from "@/lib/data";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<typeof marketInsights>([]);

  useEffect(() => {
    const searchResults = marketInsights.filter((post) => {
      const searchContent = `${post.title} ${post.description} ${post.category}`.toLowerCase();
      const searchTerms = query.toLowerCase().split(" ");
      return searchTerms.every(term => searchContent.includes(term));
    });
    setResults(searchResults);
  }, [query]);

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Search Results</h1>
          <p className="text-muted-foreground">
            {results.length} results found for &quot;{query}&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div>{post.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No results found. Try different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}