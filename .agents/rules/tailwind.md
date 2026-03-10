---
trigger: always_on
---

TAILWIND STYLING PRINCIPLES

GENERAL
- Use TailwindCSS utility classes as the primary styling approach.
- Do not introduce additional CSS frameworks unless explicitly required.
- Prefer Tailwind utilities over custom CSS whenever possible.
- Follow the project's existing design tokens, spacing scale, and color palette.

UTILITY-FIRST APPROACH
- Build UI using Tailwind utility classes instead of custom stylesheets.
- Avoid creating custom CSS unless the style cannot be expressed with Tailwind utilities.
- Prefer composing multiple small utility classes rather than writing large custom styles.

CONSISTENCY
- Reuse existing component styles and patterns used elsewhere in the project.
- Follow the existing naming conventions for shared components and style patterns.
- Maintain visual consistency with spacing, colors, typography, and layout.

CLASS ORGANIZATION
- Keep Tailwind class lists readable and logically grouped.
- Prefer grouping utilities by purpose:
  layout → spacing → typography → colors → effects.

Example ordering:

flex items-center justify-between
p-4 gap-2
text-sm font-medium
text-gray-900
bg-white
rounded-lg shadow

REUSABILITY
- When a pattern is reused multiple times, extract it into a reusable component.
- Avoid duplicating long class lists across multiple files.
- Prefer shared UI components over repeated utility combinations.

RESPONSIVE DESIGN
- Use Tailwind responsive utilities for layout adjustments.
- Follow mobile-first design principles.
- Avoid unnecessary breakpoints when layout does not require them.

STATE AND INTERACTION
- Use Tailwind state utilities such as hover:, focus:, active:, disabled:.
- Avoid writing custom JavaScript styling when Tailwind state utilities are sufficient.

Example:

hover:bg-gray-100
focus:ring-2
disabled:opacity-50

THEME AND TOKENS
- Always prefer project-defined color tokens instead of raw color values.
- Avoid arbitrary color values unless absolutely necessary.
- Follow the project's defined theme configuration.

PERFORMANCE
- Avoid extremely long class lists when a reusable component would improve clarity.
- Prefer semantic components for complex UI patterns.

CUSTOM CSS
- Use custom CSS only when Tailwind utilities cannot express the required style.
- Keep custom CSS minimal and scoped.
- Do not create large standalone stylesheets that duplicate Tailwind behavior.

CONSISTENCY WITH COMPONENT LIBRARIES
- If the project uses a UI component system, extend or compose it instead of rewriting styles from scratch.
- Do not override component styles in inconsistent ways.
COLOR SYSTEM

- Always use colors defined in the Tailwind theme configuration (tailwind.config.js / tailwind.config.ts).
- Do not use hard-coded color values such as hex, rgb, or arbitrary Tailwind colors unless explicitly required.

Correct examples:
text-primary-500
bg-primary-500
border-primary-500

Incorrect examples:
text-[#2F7F33]
bg-green-600
border-[#000]

- The primary brand colors of the website must always come from the configured Tailwind theme tokens.
- Prefer semantic color tokens such as primary, secondary, accent, muted, destructive, etc., if defined in the project theme.

DESIGN TOKEN USAGE

- Treat Tailwind theme colors as the single source of truth for the UI color system.
- Reuse the same color tokens across components to maintain visual consistency.
- Do not introduce new arbitrary color values without updating the Tailwind theme configuration.