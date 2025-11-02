import { create } from "zustand"

export interface Message {
    id: string
    content: string
    role: "user" | "assistant"
}

interface ChatStore {
    messages: Message[]
    addMessage: (content: string, role: Message["role"]) => void
    isLoading: boolean
    setIsLoading: (loading: boolean) => void
}

export const useChatStore = create<ChatStore>((set) => ({
    messages: [],
    isLoading: false,
    addMessage: (content, role) =>
        set((state) => ({
            messages: [
                ...state.messages,
                { id: Math.random().toString(36).slice(2), content, role },
            ],
        })),
    setIsLoading: (loading) => set({ isLoading: loading }),
}))