"use client"

import { Button } from "@/components/ui/button";
import { useUpload } from "@/hooks/useUpload";

export default function UploadVideoPage() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    submitted,
    onSubmit,
    imagePreview,
  } = useUpload();


  return (
    <div className="min-h-screen flex items-center justify-center px-4 w-full">
      <div className="w-full max-w-2xl bg-primary-foreground rounded-lg p-8 shadow">
        <h1 className="text-2xl font-semibold mb-4">Upload Video</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Video Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title")}
              className="w-full rounded border px-3 py-2 text-sm"
              placeholder="Enter a descriptive title"
              aria-describedby={errors.title ? "title-error" : undefined}
            />
            {errors.title && (
              <p id="title-error" className="text-xs text-destructive mt-1">
                {errors.title?.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              className="w-full rounded border px-3 py-2 text-sm h-24"
              placeholder="Short description about the video"
              aria-describedby={errors.description ? "description-error" : undefined}
            />
            {errors.description && (
              <p id="description-error" className="text-xs text-destructive mt-1">
                {errors.description?.message}
              </p>
            )}
          </div>

          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="image">
                Cover Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                {...register("image")}
                className="w-full text-sm"
                aria-describedby={errors.image ? "image-error" : undefined}
              />
              {errors.image && (
                <p id="image-error" className="text-xs text-destructive mt-1">
                  {errors.image?.message}
                </p>
              )}
              {imagePreview && (
                <img
                  src={imagePreview || ''}
                  alt="Cover image preview"
                  className="mt-2 w-40 h-56 object-cover rounded-md"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 mt-4" htmlFor="pdf">
                Supplementary PDF
              </label>
              <input
                id="pdf"
                type="file"
                accept="application/pdf"
                {...register("pdf")}
                className="w-full text-sm"
                aria-describedby={errors.pdf ? "pdf-error" : undefined}
              />
              {errors.pdf && (
                <p id="pdf-error" className="text-xs text-destructive mt-1">
                  {errors.pdf?.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Uploading..." : "Upload Video"}
            </Button>
          </div>
        </form>

        {submitted && (
          <p className="mt-4 text-sm text-green-600">Uploaded (demo only) — check console</p>
        )}
      </div>
    </div>
  );
}
