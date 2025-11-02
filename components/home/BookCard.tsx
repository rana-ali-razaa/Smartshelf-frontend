"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookDetailsDialog } from "./dialogs/BookDetailsDialog";

type Book = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export default function BookCard({ book }: { book: Book }) {
  return (
    <article className={cn("rounded-lg border p-4 shadow-sm bg-background")}> 
      <div className="flex gap-4 flex-col">
        <img
          src={book.image}
          alt={book.title}
          className="w-full object-cover rounded-md flex-none"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{book.description}</p>
          <div className="mt-4">
            <BookDetailsDialog/>
          </div>
        </div>
      </div>
    </article>
  );
}
