import SearchBar from "@/components/home/SearchBar";
import React from "react";

// Server Component - renders the library page and provides initial data
export default function HomePage() {
  const books = [
    {
      id: "1",
      title: "The Pragmatic Programmer",
      description: "Your journey to mastery of software development.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    },
    {
      id: "2",
      title: "Clean Code",
      description: "A handbook of agile software craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    },
    {
      id: "3",
      title: "Design Patterns",
      description: "Elements of reusable object-oriented software.",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
    },
    {
      id: "1",
      title: "The Pragmatic Programmer",
      description: "Your journey to mastery of software development.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    },
    {
      id: "2",
      title: "Clean Code",
      description: "A handbook of agile software craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    },
    {
      id: "3",
      title: "Design Patterns",
      description: "Elements of reusable object-oriented software.",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
    },
    {
      id: "1",
      title: "The Pragmatic Programmer",
      description: "Your journey to mastery of software development.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    },
    {
      id: "2",
      title: "Clean Code",
      description: "A handbook of agile software craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    },
    {
      id: "3",
      title: "Design Patterns",
      description: "Elements of reusable object-oriented software.",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
    },
    {
      id: "1",
      title: "The Pragmatic Programmer",
      description: "Your journey to mastery of software development.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    },
    {
      id: "2",
      title: "Clean Code",
      description: "A handbook of agile software craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    },
    {
      id: "3",
      title: "Design Patterns",
      description: "Elements of reusable object-oriented software.",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
    },
    {
      id: "1",
      title: "The Pragmatic Programmer",
      description: "Your journey to mastery of software development.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    },
    {
      id: "2",
      title: "Clean Code",
      description: "A handbook of agile software craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    },
    {
      id: "3",
      title: "Design Patterns",
      description: "Elements of reusable object-oriented software.",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
    },
  ];

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Library</h1>
      <p className="text-muted-foreground mb-6">Browse and search books</p>

      {/* SearchBar is a client component and will handle filtering on the client side. */}
      {/* We pass the initial books array as a prop (serialized to JSON). */}
      <SearchBar initialBooks={books} />
    </main>
  );
}
