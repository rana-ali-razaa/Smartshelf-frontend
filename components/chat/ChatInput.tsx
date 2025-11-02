"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { SendHorizontal } from "lucide-react"
import { useState, useTransition } from "react"

interface ChatInputProps {
  onSubmit: (message: string) => Promise<void> | void
  isLoading?: boolean
}

export function ChatInput({ onSubmit, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("")
  const [isPending, startTransition] = useTransition()

  const disabled = isLoading || isPending || !input.trim()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (disabled) return

    const message = input.trim()
    setInput("")

    startTransition(async () => {
      await onSubmit(message)
    })
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-4 bg-background"
    >
      <div className="relative w-full mx-auto">
        <div className="flex items-end gap-2 border rounded-2xl bg-muted/40 px-3 py-2 shadow-md">
          
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message..."
            className="w-full min-h-11 max-h-[180px] resize-none border-0 bg-transparent p-0
focus-visible:ring-0 focus:outline-none focus-visible:outline-none focus:border-0 focus-visible:border-0"
            disabled={isLoading}
            // rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(e)
              }
            }}
          />

          <Button
            type="submit"
            size="icon"
            disabled={disabled}
            className="rounded-full"
          >
            <SendHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </form>
  )
}
