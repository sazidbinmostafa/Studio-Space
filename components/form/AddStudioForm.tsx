
"use client";

import { type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const amenities = [
  "Professional Lighting",
  "Soundproofing",
  "Green Screen",
  "Air Conditioning",
  "High-Speed Wi-Fi",
  "Parking",
  "Makeup Room",
  "Changing Room",
  "Audio Equipment",
  "Photography Backdrops",
];

export default function AddStudioForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const studioData = Object.fromEntries(formData.entries());

    console.log("Studio Information:", studioData);
  }

  const fieldClass =
    "h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 placeholder:text-mist-foreground";

  return (
    <Card className="border-border/70 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Studio Information</CardTitle>
        <p className="text-sm text-muted-foreground">
          Fill in the details to introduce your creative space.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Basic Information */}
          <section className="space-y-5">
            <h2 className="font-semibold">Basic Information</h2>

            <div className="space-y-2">
              <Label htmlFor="title">Studio Name</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. The Creative Loft"
                className={fieldClass}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Studio Category</Label>
              <select
                id="category"
                name="category"
                defaultValue=""
                className={fieldClass}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Photography Studio">Photography Studio</option>
                <option value="Sound Stage">Sound Stage</option>
                <option value="Podcast Room">Podcast Room</option>
                <option value="Music Suite">Music Suite</option>
                <option value="Art Workshop">Art Workshop</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="overview">Studio Overview</Label>
              <Textarea
                id="overview"
                name="overview"
                placeholder="Describe your studio and what makes it special..."
                className={`min-h-32 rounded-xl placeholder:text-mist-foreground ${fieldClass}`}
                required
              />
            </div>
          </section>

          <div className="h-px bg-border" />

          {/* Pricing */}
          <section className="space-y-5">
            <h2 className="font-semibold">Pricing</h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Hourly Rate (৳)</Label>
                <Input
                  id="hourlyRate"
                  name="hourlyRate"
                  type="number"
                  min="1"
                  placeholder="1500"
                  className={fieldClass}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="securityDeposit">
                  Security Deposit (৳)
                </Label>
                <Input
                  id="securityDeposit"
                  name="securityDeposit"
                  type="number"
                  min="0"
                  placeholder="500"
                  className={fieldClass}
                  required
                />
              </div>
            </div>
          </section>

          <div className="h-px bg-border" />

          {/* Location and Capacity */}
          <section className="space-y-5">
            <h2 className="font-semibold">Location & Capacity</h2>

            <div className="space-y-2">
              <Label htmlFor="location">Studio Address</Label>
              <Input
                id="location"
                name="location"
                placeholder="House, road, area, city"
                className={fieldClass}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxCapacity">Maximum Capacity</Label>
              <Input
                id="maxCapacity"
                name="maxCapacity"
                type="number"
                min="1"
                placeholder="10"
                className={fieldClass}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Studio Image URL</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/studio-image.jpg"
                className={fieldClass}
                required
              />
            </div>
          </section>

          <div className="h-px bg-border" />

          {/* Amenities */}
          <section className="space-y-4">
            <h2 className="font-semibold">Studio Amenities</h2>

            <p className="text-sm text-muted-foreground">
              Select all facilities available at your studio.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {amenities.map((amenity) => (
                <label
                  key={amenity}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-3 text-sm transition hover:border-primary/50"
                >
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenity}
                    className="h-4 w-4 accent-primary"
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </section>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Add Studio
          </button>

        </form>
      </CardContent>
    </Card>
  );
}
