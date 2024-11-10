<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/icon.svg">
    <img alt="Chainable Swap logo" src="public/icon.svg" width="auto">
  </picture>
</p>

# Chainable Swap

Welcome to the Chainable Swap repository. This project is structured to follow best practices in modern web development, utilizing Next.js, Vercel's Geist UI, and shadcn for design consistency. Below you'll find guidelines for setting up the project, contributing, and understanding the project's architecture.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Folder Structure](#folder-structure)
3. [Component Standards](#component-standards)
4. [Routing Rules](#routing-rules)
5. [Data Handling](#data-handling)
6. [Testing & CI](#testing--ci)
7. [TypeScript & Type Safety](#typescript--type-safety)
8. [UX/UI Consistency](#uxui-consistency)
9. [Documentation](#documentation)
10. [Resources](#resources)
11. [License](#license)
12. [Need More Help?](#need-more-help)

## Project Setup

To get started with the project, ensure you have the following prerequisites:

- Node.js and pnpm installed
- A Supabase account for backend services
- Environment variables set up in `.env.local`

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-repo/chainable-swap.git
cd chainable-swap
pnpm install
pnpm dev
```

## Folder Structure

- **src/**: Contains all source code.
  - **components/**: Reusable components.
  - **app/**: Next.js app directory for page routing.
- **__tests__/**: Unit tests for the application.

## Component Standards

- Use Vercel’s Geist UI and shadcn for design.
- Ensure all modals and dropdowns are opaque.
- Reuse existing components; create new ones sparingly.

## Routing Rules

- Use kebab-case for static URLs and PascalCase for dynamic segments.
- Limit route nesting to 3 levels.

## Data Handling

- Use a single Supabase client instance from the `utils` directory.
- Ensure type safety by generating and importing Supabase types.

## Testing & CI

- Write unit tests with mocks for required components.
- Ensure tests and `tsc --noEmit` pass on each run.

## TypeScript & Type Safety

- Enable strict type-checking.
- Use TypeScript exclusively; no JavaScript files.

## UX/UI Consistency

- Follow Vercel’s design standards strictly.
- Ensure pages render without errors or missing components.

## Documentation

- Update `RULES.md` if any rules change.
- Confirm before creating/deleting key configurations or components.

## Resources

- [OnchainKit documentation](https://onchainkit.xyz)
- We use the [OnchainKit Early Adopter](https://github.com/neodaoist/onchainkit-early-adopter) contract written by neodaoist [[X]](https://x.com/neodaoist)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Need More Help?

If you have any questions or need help, feel free to reach out to us on [Discord](https://discord.gg/8gW3h6w5) or open a [GitHub issue](https://github.com/coinbase/onchainkit/issues) or DM us on X at [@onchainkit](https://x.com/onchainkit), [@zizzamia](https://x.com/zizzamia), [@fkpxls](https://x.com/fkpxls).
