import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Brain, Lock, Zap, Share2, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold">Ark</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </Link>
            <Link href="#how-it-works" className="transition-colors hover:text-foreground/80 text-foreground/60">
              How it works
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="flex max-w-[64rem] flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <Sparkles className="mr-2 h-4 w-4" />
            <span className="font-medium">Introducing Ark - Your AI Life Vault</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your Personal{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Memory Palace
            </span>
            <br />
            Powered by AI
          </h1>
          
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Capture everything that matters. Notes, screenshots, links, and ideas—automatically organized and searchable. 
            Chat with your AI twin that knows you better than anyone.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="/login">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative mt-8 w-full max-w-5xl">
          <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted/50 shadow-2xl">
            <div className="flex h-full items-center justify-center">
              <div className="text-center space-y-2">
                <Brain className="mx-auto h-16 w-16 text-muted-foreground/40" />
                <p className="text-sm text-muted-foreground">App Preview Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-16 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to remember everything
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Ark combines powerful AI with intuitive design to create your perfect second brain.
          </p>
        </div>

        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {[
            {
              icon: Zap,
              title: "Instant Capture",
              description: "Drop anything into your vault—notes, images, videos, links. No folders, no friction.",
            },
            {
              icon: Brain,
              title: "AI Organization",
              description: "Smart classification automatically sorts your content into Notes, Media, Tasks, and Links.",
            },
            {
              icon: Search,
              title: "Semantic Search",
              description: "Find anything instantly with AI-powered search that understands context and meaning.",
            },
            {
              icon: Sparkles,
              title: "AI Twin Chat",
              description: "Ask questions and get answers grounded in your personal knowledge base.",
            },
            {
              icon: Share2,
              title: "Shareable Twin",
              description: "Generate a public link to let others chat with your AI twin for demos or collaboration.",
            },
            {
              icon: Lock,
              title: "Private & Secure",
              description: "Your data is encrypted and private. You own your vault, always.",
            },
          ].map((feature) => (
            <Card key={feature.title} className="relative overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="container py-16 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 rounded-2xl border bg-muted/50 p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Ready to build your second brain?
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg">
            Join thousands of people who never forget anything important. Start free, no credit card required.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="/login">
                Create your account
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-semibold">Ark</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ark. Built for hackathon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
