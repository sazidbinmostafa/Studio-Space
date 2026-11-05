import AddStudioForm from "@/components/form/AddStudioForm";


function AddStudioPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Share your creative space
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            List Your Studio
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Give creators a place to bring their ideas to life. Add your
            studio details, set your pricing, and let people discover it.
          </p>
        </div>

        <AddStudioForm />
      </div>
    </div>
  );
}

export default AddStudioPage;