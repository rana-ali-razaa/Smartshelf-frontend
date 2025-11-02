import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function BookDetailsDialog() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogTitle>Clean Code</DialogTitle>
                    <div className="flex gap-4 flex-col">
                        <img
                            src={"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80"}
                            className="w-full object-cover rounded-md flex-none"
                        />
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground mt-2">A handbook of agile software craftsmanship.</p>
                        </div>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    )
}
