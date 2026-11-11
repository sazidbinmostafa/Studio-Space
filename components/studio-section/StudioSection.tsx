import { ArrowUpRight, Clock, MapPin, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

interface StudioSectionProps {
    studios: Studio[];
}

function StudioSection({ studios }: StudioSectionProps) {
    return (
        <>
            {/* Studio Count */}
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                    Available Studios
                </h2>

                <span className="text-sm text-muted-foreground">
                    {studios.length} {studios.length === 1 ? "Studio" : "Studios"} Found
                </span>
            </div>

            {/* Studio Grid */}
            {studios.length > 0 ? (
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                    {studios.map((studio: Studio) => (
                        <div
                            key={studio._id}
                            className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Studio Image */}
                            <div className="relative h-56 overflow-hidden bg-muted">
                                <Image
                                    src={studio.imageUrl}
                                    alt={studio.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                                    {studio.category}
                                </span>
                            </div>

                            {/* Studio Information */}
                            <div className="p-5">

                                <h3 className="mb-2 text-xl font-bold">
                                    {studio.title}
                                </h3>

                                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin size={16} />
                                    <span>{studio.location}</span>
                                </div>

                                <p className="mb-5 line-clamp-2 text-sm leading-6 text-muted-foreground">
                                    {studio.overview}
                                </p>

                                {/* Studio Details */}
                                <div className="mb-5 flex flex-wrap items-center gap-4 border-y py-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Users size={16} />
                                        <span>{studio.maxCapacity} People</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>Hourly Booking</span>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="mb-5 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Starting from
                                        </p>

                                        <p className="text-xl font-bold text-primary">
                                            ৳{studio.hourlyRate.toLocaleString("en-BD")}
                                            <span className="text-sm font-normal text-muted-foreground">
                                                /hr
                                            </span>
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs text-muted-foreground">
                                            Security Deposit
                                        </p>

                                        <p className="font-semibold">
                                            ৳{studio.securityDeposit.toLocaleString("en-BD")}
                                        </p>
                                    </div>
                                </div>

                                {/* View Details */}
                                <Link
                                    href={`/studios/${studio._id}`}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
                                >
                                    View Details
                                    <ArrowUpRight size={17} />
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                /* Empty State */
                <div className="rounded-2xl border border-dashed py-20 text-center">
                    <h3 className="mb-2 text-xl font-semibold">
                        No Studios Found
                    </h3>

                    <p className="text-muted-foreground">
                        There are currently no studios available. Please check back later.
                    </p>
                </div>
            )}
        </>
    )
}

export default StudioSection