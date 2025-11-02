"use client"

import { cn } from "@/lib/utils"
import { Avatar } from "@/components/ui/avatar"

interface ChatMessageProps {
    content: string
    role: "user" | "assistant"
    isLoading?: boolean
}

export function ChatMessage({ content, role, isLoading }: ChatMessageProps) {
    return (
        <div className={cn(
            "flex w-full gap-4 p-4 items-center",
            // role === "assistant" ? "bg-muted/40" : "bg-background justify-end"
        )}>
            <div className="flex-1 space-y-2">
                <p className={cn("text-sm text-foreground", role === "assistant" ? "" : "text-end")}>
                    {isLoading ? (
                        <span className="animate-pulse">●●●</span>
                    ) : (
                        <span className={`p-4 rounded-l-2xl rounded--2xl ${role === "assistant" ? "bg-muted/40" : "bg-background text-end"}`}>

                            {content}
                        </span>
                    )}
                </p>
            </div>
        </div>
    )
}