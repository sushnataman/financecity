"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <ScrollText className="mr-2 h-4 w-4" />
            Legal Information
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Please read these terms carefully before using our services
          </p>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                By accessing and using FinanceCity&apos;s services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service. If you do not agree
                with any part of these terms, you may not use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Description of Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                FinanceCity provides financial analysis, market insights, and educational content.
                Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Market analysis and research reports</li>
                <li>Real-time market data and insights</li>
                <li>Educational resources and tutorials</li>
                <li>Investment tools and calculators</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                To access certain features of our services, you may need to create an account.
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                All content provided through our services, including but not limited to text,
                graphics, logos, and software, is the property of FinanceCity or its licensors
                and is protected by intellectual property laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Disclaimer of Warranties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our services are provided &quot;as is&quot; without any warranties, express or implied.
                FinanceCity does not guarantee the accuracy, completeness, or timeliness of the
                information provided through our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                FinanceCity shall not be liable for any direct, indirect, incidental, special,
                or consequential damages resulting from the use or inability to use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Modifications to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We reserve the right to modify these terms at any time. Continued use of our
                services after any modifications indicates your acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                These terms shall be governed by and construed in accordance with the laws of
                the jurisdiction in which FinanceCity operates, without regard to its conflict
                of law provisions.
              </p>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-sm text-muted-foreground pt-8">
            <p>Last updated: April 11, 2024</p>
            <p className="mt-2">
              For questions about these terms, please contact our legal team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}