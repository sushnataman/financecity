"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Lock, Shield, CheckCircle2, AlertCircle } from "lucide-react";

const paymentMethods = [
  {
    title: "Credit & Debit Cards",
    description: "Secure payment processing for all major cards",
    icon: CreditCard,
    brands: ["Visa", "Mastercard", "American Express", "Discover"],
    features: [
      "Instant processing",
      "No additional fees",
      "24/7 fraud monitoring",
      "Secure encryption"
    ]
  }
];

export default function PaymentPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Lock className="mr-2 h-4 w-4" />
            Secure Payments
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Payment Methods</h1>
          <p className="text-lg text-muted-foreground">
            We use industry-standard security measures to protect your payment information
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Secure Encryption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All payment data is encrypted using industry-standard SSL/TLS protocols
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Verified Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our payment system is certified for secure financial transactions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Fraud Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Advanced fraud detection and prevention systems in place
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto">
          {paymentMethods.map((method) => (
            <Card key={method.title} className="mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-3">Supported Cards</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.brands.map((brand) => (
                        <Badge key={brand} variant="secondary">
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Features</h4>
                    <ul className="space-y-2">
                      {method.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Notice */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Your payment information is processed securely. We never store your complete card details.
          </p>
          <p className="mt-1">
            For questions about payments, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}