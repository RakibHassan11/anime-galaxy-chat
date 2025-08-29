import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-gradient-cosmic border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-accent rounded-full p-2 animate-float">
              <span className="text-2xl font-bold text-primary-foreground">🌌</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Anime Galaxy
            </h1>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Anime
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Manga
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Characters
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search anime & manga..."
                className="pl-10 w-64 bg-card/50 border-border focus:border-primary"
              />
            </div>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="ghost" className="text-foreground">
                Sign up
              </Button>
              <Button variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Log in
              </Button>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;