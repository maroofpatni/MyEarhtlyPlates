# replit.md

## Overview

Earthly Plates International is a professional B2B website for eco-friendly tableware exports. Built as a full-stack application, it serves as a comprehensive platform for global buyers to discover and inquire about sustainable areca palm leaf and bagasse tableware products from India. The website features product catalogs, certification information, and a complete inquiry management system designed for international trade.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with **React 18** and **TypeScript**, utilizing modern React patterns including functional components and hooks. The UI framework leverages **shadcn/ui** components built on **Radix UI primitives** for accessibility and consistency. **Tailwind CSS** provides utility-first styling with a custom design system featuring eco-friendly color schemes and professional typography using the Inter font family.

**Routing** is handled by **wouter** for lightweight client-side navigation between pages including Home, Product Categories, About, Why Choose Us, and Contact sections. **TanStack Query (React Query)** manages server state, API calls, and caching for optimal performance.

The architecture follows a **component-driven approach** with reusable UI components, layout components (Header, Footer), and page-specific components. Custom hooks handle mobile detection and toast notifications.

### Backend Architecture
The server uses **Express.js** with **TypeScript** in ES module format. The API layer provides RESTful endpoints for inquiry management and static file serving for product catalogs.

**Development setup** includes Vite integration for hot module replacement and development tooling. The server handles static asset serving, PDF catalog downloads, and API routing with proper error handling and request logging middleware.

### Data Storage Solutions
**Database**: PostgreSQL with **Drizzle ORM** for type-safe database operations. The schema includes inquiries table for storing customer contact information and interest data, with proper UUID primary keys and timestamp tracking.

**Memory Storage**: Fallback in-memory storage implementation for development/testing scenarios, maintaining the same interface as the database layer through the IStorage interface pattern.

### Authentication and Authorization
Currently implemented with basic session handling setup using **connect-pg-simple** for PostgreSQL session storage. The architecture supports future expansion of authentication features while maintaining security best practices.

### External Dependencies

**UI Framework**: 
- Radix UI primitives for accessible components
- shadcn/ui component library
- Tailwind CSS for styling
- Lucide React for icons
- Font Awesome for additional icons

**Database & ORM**:
- Neon Database (PostgreSQL-compatible serverless)
- Drizzle ORM with Zod validation
- Database migrations via drizzle-kit

**Development Tools**:
- Vite for bundling and development server
- TypeScript for type safety
- esbuild for server-side compilation
- Replit-specific plugins for development environment

**Form Handling**:
- React Hook Form with Hookform Resolvers
- Zod schema validation
- Custom form components with accessibility

**Communication**:
- WhatsApp integration for customer support (sticky button with direct messaging)
- Email inquiry system through contact forms

**File Management**:
- Static PDF serving for product catalogs
- Express static file handling for downloads

**Styling & Animation**:
- Class Variance Authority for component variants
- Embla Carousel for product showcases
- Custom CSS animations and transitions