"use client";
import { signIn, useSession } from "@/lib/auth-client";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
          const response = await signIn.email({
            email: userData.email as string,
            password: userData.password as string,
          });
    
          if (response.error) {
            toast.error(response.error.message || "Login failed. Please try again.");
          } else {
            toast.success("Logged in successfully!");
            router.push("/dashboard");
          }
        } catch (error) {
          console.error("Unexpected error:", error);
        }
  };

  const handleGoogleLogin = () => {
    console.log("Google login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-primary/5 p-8 shadow-lg">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue your creative journey with StudioSpace.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">

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
                placeholder="Enter your password"
                required
                className="w-full rounded-xl border border-border bg-card px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-mist focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 border border-mist-500" />
          <span className="text-xs text-mist">OR</span>
          <div className="h-px flex-1 border border-mist-500" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:bg-primary/5"
        >
          <FcGoogle size={21} />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="mt-7 text-center text-sm text-mist-500">
          {"Don't"} have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;