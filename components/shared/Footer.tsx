"use client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";
import Logo from "../../app/icon.png";
import Image from "next/image";
import CurrentYear from "./CurrentYear";

const quickLinks = [
    { label: "Explore Studios", href: "/studios" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About Us", href: "/about" },
];

const categories = [
    "Photo Studios",
    "Sound Stages",
    "Podcast Rooms",
    "Music Suites",
    "Art Workshops",
];

function Footer() {
    return (
        <footer className="border-t border-border bg-card text-card-foreground">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center" onClick={()=> window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground">
                                <Image src={Logo} alt="StudioSpace Logo" width={24} height={24} />
                            </span>
                            <span className="text-xl font-bold tracking-tight">
                                Studio<span className="text-primary">Space</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
                            A creative home for creators. Discover inspiring spaces,
                            connect with hosts, and bring your next big idea to life.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                <SiInstagram size={20} />
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                <SiFacebook size={20} />
                            </a>

                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                <span className="text-sm font-bold">𝕏</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold">Quick Links</h3>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-muted-foreground transition hover:text-primary"
                                    onClick={()=> window.scrollTo({ top: 0, behavior: "smooth" })}
                                >
                                    Home
                                </Link>
                            </li>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition hover:text-primary"
                                        onClick={()=> window.scrollTo({ top: 0, behavior: "smooth" })}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold">Explore Categories</h3>
                        <ul className="mt-5 space-y-3">
                            {categories.map((category) => (
                                <li key={category}>
                                    <Link
                                        href="/studios"
                                        className="text-sm text-muted-foreground transition hover:text-primary"
                                        onClick={()=> window.scrollTo({ top: 0, behavior: "smooth" })}
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold">Stay Inspired</h3>
                        <p className="mt-5 text-sm leading-7 text-muted-foreground">
                            Get creative space inspiration and the latest StudioSpace
                            updates in your inbox.
                        </p>

                        <form
                            className="mt-5 flex items-center gap-2"
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <input
                                type="email"
                                required
                                placeholder="Your email address"
                                aria-label="Your email address"
                                className="h-11 min-w-0 flex-1 rounded-xl border border-border bg-background px-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:bg-primary/90"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </form>
                        <p className="mt-3 text-xs text-muted-foreground">
                            Newsletter signup will be connected later.
                        </p>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {<CurrentYear />} StudioSpace. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link
                            href="/"
                            className="transition hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/"
                            className="transition hover:text-primary"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;