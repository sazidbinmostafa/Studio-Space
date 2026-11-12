import React, { Suspense } from 'react'
import StudioContent from './StudioContent';
import { notFound } from 'next/navigation';
import { IStudio } from '@/types/Studio';

export async function getStudio(id: string): Promise<IStudio> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/studios/${id}`,
    { cache: "no-store" }
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch studio details.");
  }

  return res.json();
}

function StudioDetailsSkeleton() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 h-5 w-32 rounded bg-muted" />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="aspect-video rounded-2xl bg-muted" />
          <div className="h-8 w-2/3 rounded bg-muted" />
          <div className="h-32 rounded-xl bg-muted" />
        </div>
        <div className="h-80 rounded-2xl bg-muted" />
      </div>
    </div>
  );
}


const Studio = async ({params}: {params: Promise<{ id: string }>})=> {
  
  return (
    <Suspense fallback={<StudioDetailsSkeleton/>}>
      <StudioContent params={params} />
    </Suspense>
  );
}

export default Studio