import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, Users, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-foreground">RealEstate</h1>
            <div className="flex gap-4">
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold text-foreground">
            Find Your Dream Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect property with our modern real estate platform.
            Connect buyers, sellers, and agents in a seamless experience.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              <Link href="/signup">Start Browsing</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Choose Our Platform?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>For Buyers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Browse thousands of properties, save favorites, and schedule
                  appointments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>For Sellers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  List your properties, manage inquiries, and track analytics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>For Admins</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monitor platform activity, manage users, and view
                  comprehensive analytics.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-3xl font-bold text-foreground mb-6">
          Ready to Get Started?
        </h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of users on our platform. Create your account today and
          start your real estate journey.
        </p>
        <Button size="lg">
          <Link href="/signup">Sign Up Free</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; 2026 RealEstate Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
