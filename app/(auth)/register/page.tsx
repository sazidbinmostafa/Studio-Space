"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("Registration data:", userData);
  };

  const handleGoogleRegister = () => {
    console.log("Google registration will be connected later.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">

        <div className="mb-6 text-center">

          <h1 className="text-3xl font-bold tracking-tight">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Join StudioSpace and discover a space for your creativity.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-5">

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition placeholder:text-mist focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition placeholder:text-mist focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                required
                minLength={6}
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}"
                title="Password must contain at least 6 characters, including one uppercase and one lowercase letter, and one digit."
                className="w-full rounded-xl border border-border bg-card px-4 py-3 pr-20 text-sm outline-none transition placeholder:text-mist focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="mt-2 text-xs text-mist-500">
              At least 6 characters, with one uppercase, one lowercase letter, and one digit.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 cursor-pointer"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-7 text-center text-sm text-mist-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 border border-mist-500" />
          <span className="text-xs text-mist">
            OR
          </span>
          <div className="h-px flex-1 border border-mist-500" />
        </div>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold transition cursor-pointer hover:bg-primary/5"
        >
          <FcGoogle size={21} />
          Continue with Google
        </button>

      </div>
    </main>
  );
}
export default Register;