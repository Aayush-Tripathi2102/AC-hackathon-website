"use client"

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { toast } = useToast();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string) => {
    if (linkName !== "Home") {
      e.preventDefault();
      toast({
        title: "Coming Soon!",
        description: "It will be updated soon.",
      });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-pink-500 ml-4">
          Android Club
        </Link>
        <div className="hidden space-x-6 md:flex">
          <Link href="/" className="text-foreground/70 hover:text-foreground" onClick={(e) => handleNavClick(e, "Home")}>
            Home
          </Link>
          <Link href="#" onClick={(e) => handleNavClick(e, "Speakers")} className="text-foreground/70 hover:text-foreground">
            Speakers
          </Link>
          <Link href="#" onClick={(e) => handleNavClick(e, "Schedule")} className="text-foreground/70 hover:text-foreground">
            Schedule
          </Link>
          <Link href="#" onClick={(e) => handleNavClick(e, "Stories")} className="text-foreground/70 hover:text-foreground">
            Stories
          </Link>
        </div>
        <Button size="lg" className="hidden bg-pink-500 hover:bg-pink-600 md:inline-flex mr-4">
          Register Today
        </Button>
        <Button variant="outline" size="icon" className="md:hidden mr-4" onClick={toggleMobileMenu}>
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background/90 shadow-lg">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link href="/" className="text-foreground/70 hover:text-foreground" onClick={(e) => handleNavClick(e, "Home")}>
              Home
            </Link>
            <Link href="#" onClick={(e) => handleNavClick(e, "Speakers")} className="text-foreground/70 hover:text-foreground">
              Speakers
            </Link>
            <Link href="#" onClick={(e) => handleNavClick(e, "Schedule")} className="text-foreground/70 hover:text-foreground">
              Schedule
            </Link>
            <Link href="#" onClick={(e) => handleNavClick(e, "Stories")} className="text-foreground/70 hover:text-foreground">
              Stories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

