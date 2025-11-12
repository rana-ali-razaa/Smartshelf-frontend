import { UploadSchema, UploadSchemaType } from "@/schema/upload.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const useUpload = () => {
    const [submitted, setSubmitted] = useState(false)
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<UploadSchemaType>({
        resolver: zodResolver(UploadSchema),
        defaultValues: {
            title: "",
            description: "",
        }
    })

    // Watch for image file changes to update preview
    const imageFile = watch("image")
    if (imageFile instanceof File && !imagePreview) {
        const url = URL.createObjectURL(imageFile)
        setImagePreview(url)
    }

    const clearPreview = () => {
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview)
            setImagePreview(null)
        }
    }

    async function onSubmit(data: UploadSchemaType) {
        try {
            const fd = new FormData()
            fd.append("title", data.title)
            if (data.description) fd.append("description", data.description)
            if (data.image) fd.append("image", data.image)
            if (data.pdf) fd.append("pdf", data.pdf)

            // For demo: log the FormData keys and types
            console.group("Upload form data (demo)")
            for (const pair of fd.entries()) {
                const [k, v] = pair as [string, {name: string; type: string; size: number} | string]
                if (v instanceof File) {
                    console.log(k, v.name, v.type, v.size)
                } else {
                    console.log(k, v)
                }
            }
            console.groupEnd()

            // Simulate network delay
            await new Promise((r) => setTimeout(r, 800))

            setSubmitted(true)
            clearPreview()
            reset()
        } catch (err) {
            console.error(err)
            throw new Error("Upload failed (demo). Check console.")
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        submitted,
        onSubmit,
        imagePreview,
        setSubmitted
    }
}