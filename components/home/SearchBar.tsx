"use client"

import React, { useMemo, useState } from "react";
import BookCard from "@/components/home/BookCard";
import { Search } from "lucide-react";

type Book = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export default function SearchBar({ initialBooks }: { initialBooks: Book[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return initialBooks;
    return initialBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    );
  }, [query, initialBooks]);

  return (
    <div>
      <div className="mb-6 flex gap-4 items-center w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary">
        <Search />
        <input
          aria-label="Search books"
          placeholder="Search books by title or description..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full focus:bg-transparent focus:outline-0"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-6 text-muted-foreground">No books found.</p>
      )}
    </div>
  );
}
