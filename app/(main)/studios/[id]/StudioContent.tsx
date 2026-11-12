
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Users,
  Clock,
  ShieldCheck,
  Check,
  ImageIcon,
} from "lucide-react";
import { getStudio } from "./page";

function formatPrice(price: number) {
  return `৳${price.toLocaleString("en-BD")}`;
}

async function StudioContent({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const studio = await getStudio(id);

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          href="/studios"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to Studios
        </Link>

        <div className="grid items-start gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Studio Image */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border bg-muted">
              {studio.imageUrl ? (
                <Image
                  src={studio.imageUrl}
                  alt={studio.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <ImageIcon className="size-16 text-muted-foreground" />
                </div>
              )}

              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                {studio.category}
              </span>
            </div>

            {/* Studio Heading */}
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {studio.title}
                </h1>

                <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4 shrink-0 text-primary" />
                  <span>{studio.location}</span>
                </div>
              </div>

              {/* Quick Information */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border bg-card p-4">
                  <Users className="mb-2 size-5 text-primary" />
                  <p className="text-xs text-muted-foreground">
                    Maximum Capacity
                  </p>
                  <p className="mt-1 font-semibold">
                    {studio.maxCapacity} People
                  </p>
                </div>

                <div className="rounded-xl border bg-card p-4">
                  <Clock className="mb-2 size-5 text-primary" />
                  <p className="text-xs text-muted-foreground">
                    Rental Type
                  </p>
                  <p className="mt-1 font-semibold">Hourly</p>
                </div>

                <div className="col-span-2 rounded-xl border bg-card p-4 sm:col-span-1">
                  <ShieldCheck className="mb-2 size-5 text-primary" />
                  <p className="text-xs text-muted-foreground">
                    Security Deposit
                  </p>
                  <p className="mt-1 font-semibold">
                    {formatPrice(studio.securityDeposit)}
                  </p>
                </div>
              </div>
            </div>

            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">About This Studio</h2>
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                {studio.overview}
              </p>
            </section>

            {/* Amenities */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold">Studio Amenities</h2>

              {studio.amenities?.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {studio.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 rounded-xl border bg-card p-4"
                    >
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Check className="size-4" />
                      </div>
                      <span className="text-sm font-medium">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No amenities listed for this studio.
                </p>
              )}
            </section>
          </div>

          {/* Booking / Pricing Card */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Studio rental price
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(studio.hourlyRate)}
                </span>
                <span className="text-sm text-muted-foreground">
                  / hour
                </span>
              </div>

              <div className="my-6 border-t" />

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">
                    Hourly rate
                  </span>
                  <span className="font-semibold">
                    {formatPrice(studio.hourlyRate)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">
                    Security deposit
                  </span>
                  <span className="font-semibold">
                    {formatPrice(studio.securityDeposit)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">
                    Capacity
                  </span>
                  <span className="font-semibold">
                    {studio.maxCapacity} people
                  </span>
                </div>
              </div>

              <div className="my-6 border-t" />

              <p className="mb-5 text-xs leading-5 text-muted-foreground">
                The security deposit is separate from the hourly rental
                charge.
              </p>

              <button
                type="button"
                disabled
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >Book Now</button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default StudioContent
