
import Link from "next/link";
import {
  Aperture,
  Camera,
  Heart,
  Lightbulb,
  Music,
  Users,
  ArrowRight,
  Sparkles,
  Handshake,
} from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Heart,
    title: "Built for Creators",
    description:
      "We believe every great idea deserves the right environment. Our platform helps creators find spaces where their best work can happen.",
  },
  {
    icon: Handshake,
    title: "Community First",
    description:
      "We bring studio owners and creative professionals together, building a community based on trust, collaboration, and opportunity.",
  },
  {
    icon: Lightbulb,
    title: "Making Creativity Easier",
    description:
      "Finding the right creative space shouldn't be complicated. We make discovering, comparing, and booking studios simple.",
  },
];

const categories = [
  { icon: Camera, name: "Photography Studios" },
  { icon: Music, name: "Music & Sound Studios" },
  { icon: Aperture, name: "Podcast Rooms" },
  { icon: Sparkles, name: "Creative Workspaces" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles size={16} />
            About StudioSpace
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            A space for every idea.
            <span className="block text-primary">
              A place for every creator.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            StudioSpace connects creative people with inspiring spaces.
            Whether you are capturing a perfect shot, recording your next
            track, or bringing a new idea to life, we help you find the
            right place to make it happen.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/studios"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Explore Studios
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-3.5 font-semibold transition hover:bg-muted"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-y border-border bg-muted/30 px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Mission
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Helping creativity find its space.
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              Great creative work starts with the right environment. But
              finding a suitable studio can take time, effort, and endless
              searching.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              StudioSpace was created to make that process easier. We bring
              studio owners and creators together through one convenient
              platform, making creative spaces easier to discover and
              book.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-xl">
              <Image
                height={320}
                width={640}
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85"
                alt="A bright and inspiring creative workspace"
                className="h-80 w-full rounded-2xl object-cover sm:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What We Do
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Bringing creative spaces closer to you.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              From professional studios to unique creative environments,
              discover spaces that match your vision.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.name}
                  className="rounded-2xl border border-border bg-card p-7 text-center transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What Matters to Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              More than just a booking platform.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Our values shape how we build StudioSpace and how we serve
              the creative community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold">{value.title}</h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
          <Users className="mx-auto mb-6" size={38} />

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Creativity is better when we connect.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-primary-foreground/80">
            Discover your next creative space or share your own studio
            with people who are ready to create something amazing.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/studios"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-background px-7 py-3.5 font-semibold text-foreground transition hover:bg-background/90"
            >
              Find a Studio
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/add-studio"
              className="inline-flex items-center justify-center rounded-xl border border-primary-foreground/40 px-7 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              List Your Space
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
