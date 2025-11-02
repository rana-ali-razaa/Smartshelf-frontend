"use client"
import { Menu, Moon, Sun } from "lucide-react"
import { useSidebar } from "../ui/sidebar"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"

const MobileNavbar = () => {
    const { toggleSidebar } = useSidebar()
    const { theme, setTheme } = useTheme();
    return <div className="py-2 bg-accent w-full p-3 flex justify-between">
        <Menu  className="" onClick={toggleSidebar} />
        <div className="p-2">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-md"
            >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    </div>
}

export default MobileNavbar