import Link from "next/link";
import {
  Search,
  CalendarDays,
  CreditCard,
  Sparkles,
  Camera,
  ClipboardList,
  Wallet,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const bookingSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover a Studio",
    description:
      "Explore creative spaces near you. Filter by category, location, capacity, and budget to find the perfect match.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Choose Your Time",
    description:
      "Check the studio details and available dates. Select the time slot that works best for your project.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Confirm Your Booking",
    description:
      "Review the pricing and booking details, then submit your reservation request.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Show Up & Create",
    description:
      "Once your booking is confirmed, visit the studio and bring your creative vision to life.",
  },
];

const hostSteps = [
  {
    icon: Camera,
    title: "List Your Space",
    description:
      "Add photos, amenities, location, and details to showcase your creative studio.",
  },
  {
    icon: ClipboardList,
    title: "Manage Bookings",
    description:
      "Receive booking requests and manage reservations from your dashboard.",
  },
  {
    icon: Wallet,
    title: "Earn From Your Space",
    description:
      "Make your studio available to creators and earn from the space you already own.",
  },
];

function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.14),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Simple. Flexible. Creative.
          </p>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your next creative space is{" "}
            <span className="text-primary">just a few steps away.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Whether you are looking for the perfect studio or sharing a space
            of your own, StudioSpace makes the entire process simple.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/studios"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Explore Studios
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/add-studio"
              className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-3.5 font-semibold transition hover:border-primary hover:text-primary"
            >
              List Your Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            For Creators
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Book your perfect studio
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Finding and booking a creative space {"doesn't"} have to be
            complicated. {"Here's"} how it works.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-border/70 bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-3xl font-bold text-muted-foreground/25">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Studio Owners */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-28">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              For Studio Owners
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Turn your creative space into an opportunity.
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Have a photography studio, podcast room, music suite, or
              creative workspace? Share it with creators and make the most
              of your space.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Reach creators looking for a space like yours.",
                "Control your studio details and pricing.",
                "Manage your reservations in one place.",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            <Link
              href="/add-studio"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Start Hosting
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-5">
            {hostSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex gap-5 rounded-2xl border border-border/70 bg-card p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Step 0{index + 1}
                    </p>

                    <h3 className="font-semibold">{step.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6">
        <div className="rounded-3xl border border-primary/20 bg-primary/5 px-6 py-14 sm:px-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to make something amazing?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
            Your next creative project starts with the right space.
            Discover a studio and get started today.
          </p>

          <Link
            href="/studios"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Find Your Studio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
