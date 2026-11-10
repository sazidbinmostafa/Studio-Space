"use client";
import { signIn, signUp, useSession } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Loading from "@/app/loading";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (isPending) return;

    if (!session) {
      router.replace("/register");
    } else {
      router.replace("/dashboard");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <Loading />;
  }

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("Registration data:", userData);

    try {
      const response = await signUp.email({
        name: userData.name as string,
        email: userData.email as string,
        password: userData.password as string,
      });

      if (response.error) {
        toast.error(response.error.message || "Registration failed. Please try again.");
      } else {
        toast.success("Account created successfully!");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const response = await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });

      if (response.error) {
        toast.error(response.error.message || "Google login failed.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-primary/5 p-8 shadow-lg">

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
                minLength={8}
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
                title="Password must contain at least 8 characters, including one uppercase, one lowercase letter, and one digit."
                className="w-full rounded-xl border border-border bg-card px-4 py-3 pr-20 text-sm outline-none transition placeholder:text-mist focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary"
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>

            <p className="mt-2 text-xs text-mist-500">
              At least 8 characters, with one uppercase, one lowercase letter, and one digit.
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
    </div>
  );
}
export default Register;