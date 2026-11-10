"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import studioLogo from "../../app/icon.png";

import {
  Menu,
  X,
  Sun,
  LayoutDashboard,
  Plus,
  Building2,
  CalendarDays,
  LogOut,
  ChevronDown,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Loading from "@/app/loading";
import { toast } from "sonner";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Studios", href: "/studios" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
];

const dashboardLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Add New Studio",
    href: "/add-studio",
    icon: Plus,
  },
  {
    name: "My Studio Listings",
    href: "/my-listings",
    icon: Building2,
  },
  {
    name: "My Bookings",
    href: "/my-bookings",
    icon: CalendarDays,
  },
];

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session, isPending } = useSession();

  const isLoggedIn = !!session && !isPending;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleLogout = async () => {
    try {
      const response = await signOut();

      if (response.error) {
        toast.error("Logout failed. Please try again.");
        return;
      }

      toast.success("Logged out successfully!");
      router.push("/login");
      router.refresh();
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="StudioSpace Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground transition-transform group-hover:rotate-90">
            <Image src={studioLogo} alt="StudioSpace Logo" width={40} height={40} />
          </span>

          <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Studio<span className="text-primary">Space</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative p-2 text-sm font-medium transition-colors rounded-md ${isActive(link.href)
                ? "text-primary hover:bg-accent"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
            >
              {link.name}

              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full text-foreground hover:bg-accent cursor-pointer">
            <Sun size={20} />
          </Button>

          {isLoggedIn ? (
            <details className="relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-border px-3 py-2 transition-colors hover:bg-accent">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <UserRound size={18} />
                </span>
                <span className="text-sm font-semibold text-foreground">
                  My Account
                </span>
                <ChevronDown size={16} className="text-muted-foreground" />
              </summary>

              <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-xl border border-border bg-background p-2 shadow-xl">
                <div className="border-b border-border px-3 py-3">
                  <p className="text-sm font-semibold text-foreground">
                    Welcome back!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Manage your creative space
                  </p>
                </div>

                {dashboardLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <Icon size={17} />
                      {link.name}
                    </Link>
                  );
                })}

                <div className="my-1 border-t border-border" />

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-500 transition-colors hover:bg-red-500/10"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            </details>
          ) : (
            <>
              <Link href="/login" className="inline-flex items-center justify-center rounded-3xl px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Login</Link>

              <Link href="/register" className="inline-flex items-center justify-center rounded-3xl bg-primary px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/80 hover:text-accent-foreground">Get Started</Link>
            </>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full text-foreground"
          >
            <Sun size={19} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-4 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            {navLinks.map((link) => (
              <Link
                onClick={() => setMobileMenuOpen(false)}
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="my-3 border-t border-border" />

            {isLoggedIn ? (
              <>
                {dashboardLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <Icon size={18} />
                      {link.name}
                    </Link>
                  );
                })}

                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="mt-3 w-full justify-center gap-2"
                >
                  <LogOut size={17} />
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">Login</Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center bg-primary rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/80 hover:text-accent-foreground focus:bg-primary/80 focus:text-accent-foreground">Get Started</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;