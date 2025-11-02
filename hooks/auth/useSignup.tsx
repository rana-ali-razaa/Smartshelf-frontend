import { SignupSchema, SignupSchemaType } from "@/schema/auth/signup.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const useSignup = () => {
	const [submitted, setSubmitted] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignupSchemaType>({ resolver: zodResolver(SignupSchema) })

	async function onSubmit(data: SignupSchemaType) {
		// In a real app you'd call your auth API here.
		console.log("Signup submit:", data)
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
		isSubmitting,
	}
}
