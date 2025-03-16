"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createChart, ColorType, CrosshairMode } from "lightweight-charts";
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown, LineChart, BarChart2, Clock, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import useSWR from "swr";

interface ForexData {
  endpoint: string;
  quotes: {
    ask: number;
    bid: number;
    mid: number;
    open: number;
    high: number;
    low: number;
    close: number;
    timestamp: number;
  }[];
  requested_time: string;
  timestamp: number;
}

async function fetchForexData(): Promise<ForexData> {
  try {
    const response = await fetch(
      'https://marketdata.tradermade.com/api/v1/live?currency=EURUSD&api_key=tlXJrNzX8fDzaDyjB_4n'
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching forex data:', error);
    throw error;
  }
}

export default function EURUSDAnalysis() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("technical");
  const { data, error } = useSWR("forex/eurusd", fetchForexData, {
    refreshInterval: 5000,
    dedupingInterval: 1000
  });

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#999",
      },
      grid: {
        vertLines: { color: "rgba(42, 46, 57, 0.1)" },
        horzLines: { color: "rgba(42, 46, 57, 0.1)" },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        borderColor: "rgba(42, 46, 57, 0.1)",
      },
      timeScale: {
        borderColor: "rgba(42, 46, 57, 0.1)",
        timeVisible: true,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    // Generate mock data for the chart
    const currentDate = new Date();
    const candleData = Array.from({ length: 100 }, (_, i) => {
      const date = new Date(currentDate);
      date.setMinutes(date.getMinutes() - (100 - i) * 15);
      
      const basePrice = 1.0650;
      const randomFactor = 0.002;
      const open = basePrice + (Math.random() - 0.5) * randomFactor;
      const close = basePrice + (Math.random() - 0.5) * randomFactor;
      const high = Math.max(open, close) + Math.random() * randomFactor * 0.5;
      const low = Math.min(open, close) - Math.random() * randomFactor * 0.5;

      return {
        time: date.toISOString(),
        open,
        high,
        low,
        close,
      };
    });

    candlestickSeries.setData(candleData);
    chart.timeScale().fitContent();

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current?.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  if (error) {
    return (
      <div className="min-h-screen py-12">
        <div className="container">
          <Card className="bg-destructive/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                <p>Error loading EUR/USD data. Please try again later.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentRate = data?.quotes?.[0]?.mid || 0;
  const previousClose = data?.quotes?.[0]?.open || 0;
  const change = currentRate - previousClose;
  const changePercent = (change / previousClose) * 100;

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline" className="text-lg py-1.5">
              <LineChart className="mr-2 h-5 w-5" />
              EUR/USD
            </Badge>
            {data && (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{currentRate.toFixed(4)}</span>
                <div className={`flex items-center ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {change >= 0 ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5" />
                  )}
                  <span>{Math.abs(changePercent).toFixed(2)}%</span>
                </div>
              </div>
            )}
          </div>
          <p className="text-muted-foreground">
            Real-time technical and fundamental analysis of the EUR/USD currency pair
          </p>
        </div>

        {/* Price Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">Open</span>
                </div>
                <span>{data?.quotes?.[0]?.open.toFixed(4)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-medium">High</span>
                </div>
                <span>{data?.quotes?.[0]?.high.toFixed(4)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-primary" />
                  <span className="font-medium">Low</span>
                </div>
                <span>{data?.quotes?.[0]?.low.toFixed(4)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Range</span>
                </div>
                <span>{((data?.quotes?.[0]?.high || 0) - (data?.quotes?.[0]?.low || 0)).toFixed(4)}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList>
            <TabsTrigger value="technical">Technical Analysis</TabsTrigger>
            <TabsTrigger value="fundamental">Fundamental Analysis</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <div className="grid gap-6">
              {/* Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Price Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <div ref={chartContainerRef} className="h-[400px] w-full" />
                </CardContent>
              </Card>

              {/* Technical Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Moving Averages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>MA (20)</span>
                        <div className="flex items-center gap-2 text-green-500">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Buy</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>MA (50)</span>
                        <div className="flex items-center gap-2 text-green-500">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Buy</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>MA (200)</span>
                        <div className="flex items-center gap-2 text-red-500">
                          <AlertTriangle className="h-4 w-4" />
                          <span>Sell</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Oscillators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>RSI (14)</span>
                        <span>58.24</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>MACD (12,26,9)</span>
                        <span>0.0012</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Stochastic (14,3,3)</span>
                        <span>75.45</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fundamental">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Economic Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        time: "14:30 GMT",
                        event: "US CPI Data",
                        impact: "High",
                        forecast: "0.3%",
                        previous: "0.4%"
                      },
                      {
                        time: "12:45 GMT",
                        event: "ECB Interest Rate Decision",
                        impact: "High",
                        forecast: "4.50%",
                        previous: "4.50%"
                      },
                      {
                        time: "15:00 GMT",
                        event: "US Retail Sales",
                        impact: "Medium",
                        forecast: "0.2%",
                        previous: "0.1%"
                      }
                    ].map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{event.event}</p>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={event.impact === "High" ? "destructive" : "secondary"}>
                            {event.impact}
                          </Badge>
                          <div className="mt-1 text-sm">
                            <span className="text-muted-foreground">Forecast: </span>
                            {event.forecast}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Interest Rates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>ECB Rate</span>
                        <span>4.50%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Fed Rate</span>
                        <span>5.50%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Rate Differential</span>
                        <span className="text-red-500">-1.00%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Economic Indicators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>EUR GDP (QoQ)</span>
                        <span>0.3%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>US GDP (QoQ)</span>
                        <span>2.1%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>EUR CPI (YoY)</span>
                        <span>2.4%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sentiment">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Sentiment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span>Retail Sentiment</span>
                        <span>65% Bullish</span>
                      </div>
                      <div className="h-3 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "65%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span>Institutional Sentiment</span>
                        <span>45% Bullish</span>
                      </div>
                      <div className="h-3 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "45%" }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Positioning Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Long Positions</span>
                        <span>65%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Short Positions</span>
                        <span>35%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Net Position</span>
                        <span className="text-green-500">+30%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Sentiment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-yellow-500">
                        <Info className="h-5 w-5" />
                        <span className="font-medium">Neutral</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Market participants are showing mixed sentiment with a slight bias towards risk-on conditions.
                        Watch for potential shifts in risk appetite.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}