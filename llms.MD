# Project Rules for Next.js + shadcn UI

## Tech Stack
- Next.js (App Router)
- Tailwind CSS (v4)
- shadcn UI components
- Typescript

## Directory Structure Rules

### Routes
- Every new page MUST be created inside the `app/` folder.
- Each route folder MUST contain:
  - `page.tsx` (default)
  - optional: `loading.tsx`, `error.tsx`, `layout.tsx`

Example:
app/dashboard/page.tsx

### Component Generation Rules
- For every route created, automatically create a matching folder inside `/components`
- Folder name MUST match route name exactly
- Page-specific components go here

Example:
components/dashboard/
components/dashboard/StatsCard.tsx

### Hook Generation Rules
- For every route, create a matching folder inside `/hooks`
- Folder name MUST match route name
- Page-specific hooks go here

Example:
hooks/dashboard/useStats.ts

### Naming Standards
- Components: PascalCase (UserCard.tsx)
- Hooks: camelCase and MUST start with `use` (useUser.ts)
- Routes: kebab-case when multiple words (`user-profile`)

### Component Guidelines
- Use shadcn UI primitives first
- Global reusable components → `components/ui`
- Page-specific components → route folder

Examples:
components/ui/Button.tsx
components/dashboard/StatsCard.tsx

### Hook Guidelines
- Global hooks → `hooks/`
- Route-specific hooks → route folder

Examples:
hooks/useAuth.ts
hooks/dashboard/useStats.ts

### Code Rules
- Functional components only
- Default to **Server Components**
- Add `"use client"` only when needed
- Import `cn` from `@/lib/utils`

### Page Template
```tsx
export default function Page() {
  return <div>Page</div>;
}


### Schema Guidelines
- Global schemas → `schema/`
- Route-specific schema → route folder
