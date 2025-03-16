"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart2, TrendingUp, TrendingDown, Globe, RefreshCw } from "lucide-react";
import { useStockData, exchanges, countries, popularStocks, type StockData } from "@/lib/stocks";

export default function MarketsPage() {
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [selectedExchange, setSelectedExchange] = useState("NYSE");
  const [selectedStocks, setSelectedStocks] = useState<string[]>(popularStocks[selectedCountry]);
  const [stocksData, setStocksData] = useState<{ [key: string]: StockData }>({});

  // Filter exchanges based on selected country
  const countryExchanges = exchanges.filter(e => e.country === selectedCountry);

  // Fetch data for all selected stocks
  selectedStocks.forEach(symbol => {
    const { data } = useStockData(symbol);
    if (data) {
      stocksData[symbol] = data;
    }
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <BarChart2 className="mr-2 h-4 w-4" />
            Live Markets
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Global Market Overview</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track real-time market data, trends, and analysis across global financial markets
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-[200px]">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map(country => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <Select value={selectedExchange} onValueChange={setSelectedExchange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Exchange" />
              </SelectTrigger>
              <SelectContent>
                {countryExchanges.map(exchange => (
                  <SelectItem key={exchange.id} value={exchange.id}>
                    {exchange.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>

        {/* Market Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {selectedStocks.map(symbol => {
            const data = stocksData[symbol];
            if (!data) return null;

            const isPositive = data.change >= 0;

            return (
              <Card key={symbol}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-primary" />
                      <span className="font-medium">{symbol}</span>
                    </div>
                    <Badge variant="secondary" className="flex items-center">
                      {isPositive ? (
                        <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
                      )}
                      {data.changePercent.toFixed(2)}%
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <span className="text-2xl font-bold">${data.price.toFixed(2)}</span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Vol: {data.volume.toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Market Details */}
        <div className="grid grid-cols-1 gap-6">
          {selectedStocks.map(symbol => {
            const data = stocksData[symbol];
            if (!data) return null;

            const isPositive = data.change >= 0;

            return (
              <Card key={symbol} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      {symbol}
                    </div>
                    <Badge variant={isPositive ? "default" : "destructive"}>
                      {isPositive ? "▲" : "▼"} ${Math.abs(data.change).toFixed(2)} ({data.changePercent.toFixed(2)}%)
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="text-lg font-semibold">${data.price.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Volume</p>
                      <p className="text-lg font-semibold">{data.volume.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Change</p>
                      <p className={`text-lg font-semibold ${isPositive ? "text-green-500" : "text-red-500"}`}>
                        {isPositive ? "+" : ""}{data.change.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last Updated</p>
                      <p className="text-lg font-semibold">{data.lastUpdated}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}