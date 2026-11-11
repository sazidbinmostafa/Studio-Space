import { Suspense } from "react";
import StudioSection from "@/components/studio-section/StudioSection";
import StudiosSkeleton from "@/components/studio-section/StudioSkeleton";

interface Studio {
  _id: string;
  title: string;
  category: string;
  hourlyRate: number;
  securityDeposit: number;
  location: string;
  maxCapacity: number;
  imageUrl: string;
  overview: string;
  amenities: string[];
}

async function getStudios(): Promise<Studio[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studios`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch studios");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching studios:", error);
    return [];
  }
}

async function StudiosContent() {
  const studios = await getStudios();

  return <StudioSection studios={studios} />;
}

async function Studios() {

  return (
    <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Explore Studios
          </h1>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Find Your Creative Space
          </p>
        </div>

        <Suspense fallback={<StudiosSkeleton/>}>
          <StudiosContent />
        </Suspense>

      </div>
    </main>
  );
}

export default Studios;
