import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = (to) => cn(
    "text-sm font-medium transition-colors hover:text-primary",
    location.pathname === to ? "text-primary" : "text-muted-foreground"
  );

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled
        ? "bg-background/80 backdrop-blur-md py-3 shadow-sm border-border"
        : "bg-transparent py-5 border-transparent"
    )}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl border border-primary/20 bg-white shadow-sm transition-transform group-hover:scale-105">
            <img
              src="/images/medalphlogo.jpg"
              alt="MedAlph Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
            Med<span className="text-primary italic">Alph</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link key={to} to={to} className={cn(navLinkClasses(to), "relative py-2")}>
              {label}
              {location.pathname === to && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <ModeToggle />
          <Button asChild className="transition-all hover:scale-105 active:scale-95">
            <Link to="/contact">Request Demo</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Access site navigation links and other options.
              </SheetDescription>
              <div className="flex flex-col gap-8 mt-10">
                <div className="flex flex-col gap-4">
                  {NAV_ITEMS.map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        location.pathname === to ? "text-primary" : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
