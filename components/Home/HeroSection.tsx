"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    title: "Find the perfect space to create.",
    description:
      "Discover inspiring studios, sound stages, and creative spaces for your next big idea.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=85",
  },
  {
    title: "Bring your creative vision to life.",
    description:
      "From photography to podcasts, find a space that makes every project possible.",
    image:
    "https://images.unsplash.com/photo-1782274265689-4f10a91d4abb?w=1800&q=85",
},
{
    title: "Your space. Their next masterpiece.",
    description:
    "Share your creative space with a community of makers and earn from your studio.",
    image:
    "https://images.unsplash.com/photo-1664817550969-5e76adc4a3fe?w=1800&q=85",
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-155 min-h-130 w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex h-full items-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
                <div className="max-w-3xl text-white">
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                    StudioSpace — Create Without Limits
                  </p>

                  <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <Link
                      href="/studios"
                      className="inline-flex items-center justify-center rounded-3xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-background transition hover:bg-primary/90 hover:scale-105 hover:text-primary-foreground"
                    >
                      Explore Studios
                    </Link>

                    <Link
                      href="/add-studio"
                      className="inline-flex items-center justify-center rounded-3xl border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                      Host Your Space
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
