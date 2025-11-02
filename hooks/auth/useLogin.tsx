import { LoginSchema, LoginSchemaType } from "@/schema/auth/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const useLogin = () => {
    const [submitted, setSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) })

    async function onSubmit(data: LoginSchemaType) {
        // In a real app you'd call your auth API here.
        console.log("Login submit:", data)
        setSubmitted(true)
        // simulate small delay
        await new Promise((r) => setTimeout(r, 400))
    }

    return {
        register,
        handleSubmit,
        submitted,
        onSubmit,
        errors,
        isSubmitting
    }
}