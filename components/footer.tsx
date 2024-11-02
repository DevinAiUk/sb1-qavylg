import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="h-6 w-6" />
              <span className="font-bold">Deeper Divers</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              In-depth analysis and insights on technology, politics, culture, and science.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Newsletter</h4>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Deeper Divers. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://twitter.com/DeeperDivers" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </a>
            <a href="https://youtube.com/DeeperDivers" className="text-sm text-muted-foreground hover:text-foreground">
              YouTube
            </a>
            <a href="https://instagram.com/DeeperDivers" className="text-sm text-muted-foreground hover:text-foreground">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}