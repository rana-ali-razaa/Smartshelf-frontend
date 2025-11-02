import { z } from "zod";

export const UploadSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  description: z
    .string()
     .min(1, "Description is required")
    .max(500, "Description must be less than 500 characters"),
  image: z
    .custom<File>()
    .refine((file) => !file || (file instanceof File && file.type.startsWith('image/')), {
      message: "Cover image must be a valid image file"
    })
    .optional(),
  pdf: z
    .custom<File>()
    .refine((file) => !file || (file instanceof File && file.type === 'application/pdf'), {
      message: "Supplementary file must be a PDF"
    })
    .optional(),
});

export type UploadSchemaType = z.infer<typeof UploadSchema>;