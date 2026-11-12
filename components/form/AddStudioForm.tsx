"use client";

import { ChangeEvent, useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";
import { ImagePlus, Loader2 } from "lucide-react";

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

  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // Handle Image Upload \\
  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setIsUploading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload-image`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Image upload failed.");
      }

      setImageUrl(data.imageUrl);
      toast.success("Image uploaded successfully!");

    }
    catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Upload failed."
      );
    }
    finally {
      setIsUploading(false);
    }

  }

  // Handle form submission \\
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);

    // Studio Data \\
    const studioData = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      overview: formData.get("overview") as string,
      hourlyRate: Number(formData.get("hourlyRate")),
      securityDeposit: Number(formData.get("securityDeposit")),
      location: formData.get("location") as string,
      maxCapacity: Number(formData.get("maxCapacity")),
      imageUrl,
      amenities: formData.getAll("amenities") as string[],
    };

    // Trying to POST \\ 
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/add-studio`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studioData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add studio.");
      }

      toast.success("Studio added successfully!");
      setImageUrl("")
      form.reset();
    } catch (error) {
      console.error("Error adding studio:", error);

      toast.error(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  // Filed Class (CSS) \\
  const fieldClass = "h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 placeholder:text-mist-foreground";

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
                  placeholder="2000"
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


            <div className="space-y-3">
              <Label htmlFor="image" className="text-sm font-semibold">
                Studio Image
              </Label>

              <div className="flex flex-col md:flex-row gap-4 ">
                {/* Image Upload */}
                <div className="flex flex-1 min-h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/20 p-5 text-center transition-colors hover:border-primary/60">
                  <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ImagePlus className="size-6" />
                  </div>

                  <div className="mb-4 space-y-1">
                    <p className="text-sm font-semibold">
                      Upload your studio image
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG or WEBP
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Recommended: 1200 × 800
                    </p>
                  </div>

                  <Input
                    id="image"
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleImageUpload}
                    disabled={isUploading}
                    className="h-auto w-full cursor-pointer border-border bg-background text-xs file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-2 file:text-xs file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                  />

                  {isUploading && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-primary">
                      <Loader2 className="size-4 animate-spin" />
                      Uploading image...
                    </div>
                  )}
                </div>

                {/* Image Preview */}
                {imageUrl ?
                    <div className="flex flex-1 min-h-64 flex-col overflow-hidden rounded-2xl border border-border">
                      <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl">
                        <Image
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          src={imageUrl}
                          alt="Studio Image Preview"
                          className="object-cover"
                        />
                      </div>
                    </div>:
                  <></>}
              </div>

              <input type="hidden" name="imageUrl" value={imageUrl} />
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
