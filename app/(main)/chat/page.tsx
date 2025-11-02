"use client"

import { ChatInput } from "@/components/chat/ChatInput"
import { ChatMessage } from "@/components/chat/ChatMessage"
import { useChatStore } from "@/stores/chat"
import { useEffect } from "react"

const INITIAL_MESSAGE = "Hello! How can I help you today?"

export default function ChatPage() {
    const { messages, addMessage, isLoading, setIsLoading } = useChatStore()

    // Add initial message on mount
    useEffect(() => {
        if (messages.length === 0) {
            addMessage(INITIAL_MESSAGE, "assistant")
        }
    }, [messages.length, addMessage])

    async function handleSubmit(message: string) {
        // Add user message immediately
        addMessage(message, "user")
        
        // Show typing indicator
        setIsLoading(true)

        try {
            // Simulate API delay
            await new Promise(r => setTimeout(r, 1000))

            // Add dummy response
            addMessage(`You said: "${message}". This is a dummy response from the AI.`, "assistant")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] w-full mx-auto max-w-3xl">
            <div className="flex-1 overflow-y-auto ">
                {messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        content={message.content}
                        role={message.role}
                    />
                ))}
                {isLoading && (
                    <ChatMessage
                        content=""
                        role="assistant"
                        isLoading
                    />
                )}
            </div>
            <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
    )
}