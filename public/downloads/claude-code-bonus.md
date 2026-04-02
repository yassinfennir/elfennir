# 50 Advanced Claude Code Prompts for Developers
### EXCLUSIVE BONUS — Ultimate AI Bundle
### By InfluAI (elfennir.com) | April 2026

---

> **How to use:** These prompts are designed for Claude Code, Cursor AI, and AI-assisted development workflows. Copy, customize the `[PLACEHOLDERS]`, and paste into your AI coding tool. Each prompt is engineered for production-quality output.

---

## TABLE OF CONTENTS

1. [Project Setup & Architecture](#1-project-setup--architecture) — 8 prompts
2. [Frontend Development](#2-frontend-development) — 8 prompts
3. [Backend & API](#3-backend--api) — 8 prompts
4. [Database & Data](#4-database--data) — 6 prompts
5. [Testing & Debugging](#5-testing--debugging) — 6 prompts
6. [DevOps & Deployment](#6-devops--deployment) — 6 prompts
7. [Refactoring & Optimization](#7-refactoring--optimization) — 4 prompts
8. [AI-Powered Features](#8-ai-powered-features) — 4 prompts

---

# 1. PROJECT SETUP & ARCHITECTURE

---

### 1.1 Full-Stack Project Scaffolding
**Category:** Project Setup & Architecture
**The Prompt:**
> Create a complete project structure for a [PROJECT TYPE: SaaS / e-commerce / portfolio / dashboard] application. Stack: React + Vite + TypeScript + Tailwind CSS (frontend), Node.js + Express + TypeScript (backend), [DATABASE: Supabase / PostgreSQL / MongoDB]. Include: folder structure with every file needed, package.json for both frontend and backend, TypeScript configs, Tailwind config, environment variable setup (.env.example with all required vars), ESLint + Prettier configs, and a README with setup instructions. The structure must be scalable for a team of 1-5 developers.

**Expected Output:** A complete, production-ready project scaffold.
**Pro Tip:** A well-structured project on day 1 saves 100+ hours of refactoring later.

---

### 1.2 Architecture Decision Document
**Category:** Project Setup & Architecture
**The Prompt:**
> Create an Architecture Decision Record (ADR) for [DECISION: e.g., "choosing Supabase over Firebase", "using server-side rendering", "implementing microservices"]. Include: context and problem statement, decision drivers, considered options (3 minimum) with pros/cons, decision outcome and rationale, consequences (positive and negative), and compliance/security considerations. Format: standard ADR template.

**Expected Output:** A documented architecture decision for team reference.
**Pro Tip:** ADRs prevent "why did we do it this way?" conversations 6 months later.

---

### 1.3 Monorepo Setup
**Category:** Project Setup & Architecture
**The Prompt:**
> Set up a monorepo using [Turborepo / Nx / pnpm workspaces] for a project with: frontend app (React + Vite), backend API (Express/Hono), shared types package, shared UI component library, and shared utilities. Include: workspace configuration, shared TypeScript config, build pipeline, dev server setup (concurrent frontend + backend), and a CI/CD workflow file for [GitHub Actions / Vercel]. Every package should have proper exports and type definitions.

**Expected Output:** A complete monorepo configuration with shared packages.
**Pro Tip:** Shared types between frontend and backend eliminate an entire class of bugs.

---

### 1.4 Authentication System Design
**Category:** Project Setup & Architecture
**The Prompt:**
> Design and implement a complete authentication system for [APP TYPE]. Requirements: email/password login, OAuth ([Google / GitHub / etc.]), JWT tokens with refresh rotation, password reset flow, email verification, rate limiting on auth endpoints, session management, and role-based access control (RBAC) with [ROLES]. Stack: [YOUR STACK]. Include: database schema, API routes, middleware, frontend auth context/hook, and protected route component. Security: bcrypt hashing, HTTP-only cookies, CSRF protection.

**Expected Output:** A complete, secure authentication system.
**Pro Tip:** Never roll your own crypto. Use bcrypt for hashing, established JWT libraries, and battle-tested OAuth libraries.

---

### 1.5 API Architecture Blueprint
**Category:** Project Setup & Architecture
**The Prompt:**
> Design a REST API architecture for [APPLICATION]. Resources: [LIST MAIN RESOURCES]. Include: complete route map (GET, POST, PUT, PATCH, DELETE for each resource), request/response schemas (TypeScript interfaces), error response format (consistent across all endpoints), pagination strategy, filtering/sorting query parameters, authentication middleware placement, rate limiting strategy, API versioning approach, and OpenAPI/Swagger documentation structure.

**Expected Output:** A complete API blueprint ready for implementation.
**Pro Tip:** Design the API contract first, then implement. It's the contract between frontend and backend.

---

### 1.6 Environment Configuration System
**Category:** Project Setup & Architecture
**The Prompt:**
> Create a robust environment configuration system using Zod validation. Include: .env.example with all variables documented, a config.ts that validates all env vars at startup (fail fast if missing), separate configs for development/staging/production, type-safe access throughout the app, secrets management best practices, and a CI/CD variable checklist. Stack: [YOUR STACK]. Variables needed: [LIST KEY ENV VARS].

**Expected Output:** A type-safe, validated environment configuration system.
**Pro Tip:** Validating env vars at startup prevents runtime crashes from missing configuration.

---

### 1.7 Error Handling Architecture
**Category:** Project Setup & Architecture
**The Prompt:**
> Design a comprehensive error handling system for [APP TYPE]. Include: custom error classes (AppError, ValidationError, AuthError, NotFoundError, etc.), global error handler middleware (Express/Hono), error boundary component (React), structured error logging (with request ID tracking), user-friendly error messages (never expose internal errors), error monitoring integration points (Sentry, etc.), and retry strategies for transient failures. Both frontend and backend.

**Expected Output:** A production-grade error handling system.
**Pro Tip:** Good error handling is invisible to users and invaluable to developers.

---

### 1.8 CI/CD Pipeline Design
**Category:** Project Setup & Architecture
**The Prompt:**
> Design a CI/CD pipeline for [PROJECT] using [GitHub Actions / GitLab CI / etc.]. Stages: lint → type-check → test → build → deploy. Include: workflow YAML file, branch protection rules, environment-specific deployments (dev/staging/prod), automated testing on PR, deployment to [Vercel / Railway / AWS / etc.], Slack/Discord notification on failure, rollback strategy, and database migration handling in the pipeline.

**Expected Output:** A complete CI/CD pipeline configuration.
**Pro Tip:** If deployment isn't automated, it's not reliable. Automate everything from PR to production.

---

# 2. FRONTEND DEVELOPMENT

---

### 2.1 React Component System
**Category:** Frontend Development
**The Prompt:**
> Create a reusable component library for [APP TYPE] with React + TypeScript + Tailwind. Components: Button (variants: primary, secondary, outline, ghost, destructive; sizes: sm, md, lg; loading state), Input (with label, error state, helper text), Modal (with portal, keyboard trap, animation), Card, Badge, Avatar, Dropdown Menu, Toast/Notification system, and Skeleton loader. Each component: fully typed props, accessible (ARIA attributes), keyboard navigable, and has Tailwind variants using class-variance-authority (CVA).

**Expected Output:** 10 production-ready, accessible UI components.
**Pro Tip:** Build components once, use everywhere. A good component library is your biggest productivity multiplier.

---

### 2.2 Form System with Validation
**Category:** Frontend Development
**The Prompt:**
> Build a complete form system for [FORM TYPE: registration, checkout, multi-step wizard, settings]. Stack: React Hook Form + Zod. Include: Zod schema with all validations, custom form components (Input, Select, Checkbox, Radio, TextArea, DatePicker), error display logic, form submission handler with loading/error/success states, server-side validation mirroring, and a multi-step form wrapper if applicable. Type-safe from schema to submission.

**Expected Output:** A type-safe form system with full validation.
**Pro Tip:** Define the Zod schema first — it becomes your single source of truth for both frontend and backend validation.

---

### 2.3 State Management Setup
**Category:** Frontend Development
**The Prompt:**
> Set up state management for [APP TYPE] using Zustand. Create stores for: [LIST STATE DOMAINS, e.g., auth, cart, ui, notifications]. Each store: typed state interface, actions, selectors, persist middleware where needed, and devtools integration. Include: how to handle async actions, optimistic updates, and a pattern for combining multiple stores. Also set up TanStack Query for server state with: query keys factory, custom hooks for each API endpoint, and cache invalidation strategy.

**Expected Output:** A complete state management architecture.
**Pro Tip:** Client state (Zustand) + Server state (TanStack Query) = clean, predictable state management.

---

### 2.4 Responsive Layout System
**Category:** Frontend Development
**The Prompt:**
> Create a responsive layout system for [APP TYPE] using Tailwind CSS. Include: a Layout component with header, sidebar (collapsible on mobile), main content area, and footer. Breakpoint strategy: mobile-first with sm, md, lg, xl breakpoints. Components: responsive navigation (hamburger on mobile, sidebar on desktop), responsive grid system, responsive typography scale, and a dark/light theme toggle with system preference detection. All using Tailwind — no custom CSS.

**Expected Output:** A complete responsive layout system.
**Pro Tip:** Design mobile-first, then enhance for desktop. It's easier to add complexity than to remove it.

---

### 2.5 Data Table Component
**Category:** Frontend Development
**The Prompt:**
> Build an advanced data table component using [TanStack Table / custom]. Features: sorting (multi-column), filtering (global + per-column), pagination (client-side and server-side), row selection (single + multi), column visibility toggle, column resizing, sticky header, loading skeleton, empty state, export to CSV, and responsive behavior (horizontal scroll on mobile). Fully typed with generic row type. Include: a demo with [SAMPLE DATA TYPE].

**Expected Output:** A feature-rich, reusable data table component.
**Pro Tip:** Data tables are the most complex UI component. Build it once and make it configurable.

---

### 2.6 Animation & Transition System
**Category:** Frontend Development
**The Prompt:**
> Create an animation system for [APP] using [Framer Motion / CSS transitions / both]. Include: page transition wrapper, list animation (stagger children), modal enter/exit, toast slide-in, skeleton shimmer, hover effects for cards, scroll-triggered reveals, loading spinner variants (3 styles), and a spring-based animation config. All animations must: respect prefers-reduced-motion, be smooth at 60fps, and not block main thread.

**Expected Output:** A reusable animation system with accessibility support.
**Pro Tip:** Respect prefers-reduced-motion. Not doing so is both an accessibility violation and a poor user experience.

---

### 2.7 Dashboard Builder
**Category:** Frontend Development
**The Prompt:**
> Build a dashboard page for [APP TYPE] with React + TypeScript + Tailwind. Components: KPI cards (4 cards with icons, values, trends), Line chart (revenue/growth over time), Bar chart (comparison data), Pie/donut chart (distribution), Recent activity table, Quick action buttons, and Date range filter. Use [Recharts / Chart.js / Visx] for charts. Include: responsive grid layout, loading states, error states, and empty states for each component. Data fetched from API with TanStack Query.

**Expected Output:** A complete, responsive dashboard page.
**Pro Tip:** Dashboards should answer "how is the business doing?" in 3 seconds. Lead with KPI cards.

---

### 2.8 Progressive Web App (PWA) Setup
**Category:** Frontend Development
**The Prompt:**
> Convert a React + Vite app into a Progressive Web App. Include: manifest.json with all required fields, service worker (using Workbox) with caching strategies (cache-first for assets, network-first for API), offline fallback page, install prompt handling, push notification setup, app icons (all sizes), and Lighthouse optimization for 90+ PWA score. Include: testing checklist and deployment considerations.

**Expected Output:** A complete PWA configuration.
**Pro Tip:** PWAs work offline and install like native apps. It's free distribution without app store fees.

---

# 3. BACKEND & API

---

### 3.1 RESTful API with Express/Hono
**Category:** Backend & API
**The Prompt:**
> Build a complete REST API for [RESOURCE, e.g., "products", "users", "orders"] using [Express / Hono] + TypeScript. Include: router with all CRUD endpoints, controller layer (business logic), service layer (data access), Zod validation middleware (request body + params + query), error handling middleware, authentication middleware (JWT), authorization middleware (roles), rate limiting, request logging, and pagination/filtering utilities. Follow the repository pattern. Include: TypeScript interfaces for all request/response shapes.

**Expected Output:** A layered, production-ready API for one resource.
**Pro Tip:** The controller-service-repository pattern keeps your code testable and maintainable as the API grows.

---

### 3.2 Webhook Handler System
**Category:** Backend & API
**The Prompt:**
> Build a webhook handler system for [SERVICE: Stripe / GitHub / Twilio / custom]. Include: signature verification (cryptographic), event type routing, idempotency handling (prevent duplicate processing), async processing with queue/retry, error handling with logging, webhook event storage (for debugging/replay), and a local testing setup using [ngrok / Stripe CLI]. Security: verify signatures BEFORE parsing, reject unverified payloads, and use constant-time comparison.

**Expected Output:** A secure, reliable webhook processing system.
**Pro Tip:** Always verify webhook signatures. Without verification, anyone can send fake events to your endpoint.

---

### 3.3 Stripe Integration (Payments)
**Category:** Backend & API
**The Prompt:**
> Implement a complete Stripe integration for [PRODUCT TYPE: one-time / subscription / both]. Include: Checkout Session creation, webhook handler (checkout.session.completed, invoice.paid, customer.subscription.updated, etc.), customer management (create/update), product and price management, subscription lifecycle handling (trial, active, past_due, canceled), refund handling, receipt/invoice URLs, and a frontend Checkout component. Security: webhook signature verification, idempotent processing, never store card data.

**Expected Output:** A complete Stripe payment system.
**Pro Tip:** Handle EVERY webhook event type for subscriptions. Missing one causes billing bugs that lose money.

---

### 3.4 Email System
**Category:** Backend & API
**The Prompt:**
> Build an email system using [Resend / SendGrid / Nodemailer]. Include: email service abstraction (swap providers easily), HTML email templates (welcome, password reset, invoice, notification) using [React Email / MJML], template rendering with dynamic data, email queue for bulk sending, retry logic for failed sends, unsubscribe handling, and a preview/testing setup. Templates must: work in all major email clients, be mobile responsive, and include plain-text fallback.

**Expected Output:** A complete transactional email system with templates.
**Pro Tip:** Always include a plain-text version. Some email clients and accessibility tools need it.

---

### 3.5 File Upload System
**Category:** Backend & API
**The Prompt:**
> Build a file upload system for [USE CASE: profile images, documents, media]. Include: multer/busboy configuration, file type validation (whitelist extensions + check magic bytes), file size limits, image processing (resize, compress, convert to WebP using Sharp), upload to [Cloudinary / S3 / Supabase Storage], progress tracking on frontend, drag-and-drop UI component, and cleanup for orphaned files. Security: validate on both frontend and backend, sanitize filenames, and serve files from CDN.

**Expected Output:** A secure file upload pipeline from frontend to cloud storage.
**Pro Tip:** Never trust file extensions alone — check magic bytes to prevent disguised malicious files.

---

### 3.6 Real-Time Features
**Category:** Backend & API
**The Prompt:**
> Implement real-time features for [APP] using [WebSockets / Server-Sent Events / Supabase Realtime]. Features: [CHOOSE: live notifications, chat, collaborative editing, live dashboard updates, presence indicators]. Include: server-side setup, client-side hook (useRealtime), connection management (reconnect, heartbeat), room/channel management, authentication for connections, and graceful degradation (fallback when WebSocket fails). Scale considerations: Redis Pub/Sub for multi-server.

**Expected Output:** A real-time communication system.
**Pro Tip:** SSE is simpler than WebSockets and works for most "server to client" use cases. Don't over-engineer.

---

### 3.7 Caching Layer
**Category:** Backend & API
**The Prompt:**
> Implement a caching strategy for [API/APP] using [Redis / Upstash / in-memory]. Include: cache-aside pattern for database queries, HTTP caching headers (ETag, Cache-Control), API response caching middleware, cache invalidation strategy (on data mutation), cache warming for critical paths, TTL configuration per resource type, and monitoring (hit/miss ratio). Show: before/after performance comparison for a typical endpoint.

**Expected Output:** A multi-layer caching system with invalidation strategy.
**Pro Tip:** Cache invalidation is one of the hardest problems in CS. Keep your invalidation strategy simple and explicit.

---

### 3.8 Background Job System
**Category:** Backend & API
**The Prompt:**
> Set up a background job system for [APP] using [BullMQ / Agenda / custom queue]. Jobs: [LIST: email sending, report generation, data sync, image processing, etc.]. Include: job queue setup, worker process, job retry logic (exponential backoff), dead letter queue, job scheduling (cron-like), job progress tracking, admin dashboard for monitoring, and graceful shutdown. Ensure: no job is lost on server restart, and duplicate jobs are prevented.

**Expected Output:** A reliable background job processing system.
**Pro Tip:** Background jobs should be idempotent — running the same job twice should not cause duplicate effects.

---

# 4. DATABASE & DATA

---

### 4.1 Database Schema Design
**Category:** Database & Data
**The Prompt:**
> Design a complete database schema for [APP TYPE] using [PostgreSQL / Supabase / MongoDB]. Entities: [LIST MAIN ENTITIES]. Include: table definitions with all columns (types, constraints, defaults), relationships (1:1, 1:N, M:N with junction tables), indexes for common queries, created_at/updated_at timestamps, soft delete (deleted_at) where appropriate, Row Level Security policies (if Supabase), and seed data SQL. Normalize to 3NF unless denormalization is justified for performance.

**Expected Output:** A complete, optimized database schema.
**Pro Tip:** Design for the queries you'll actually run, not for theoretical perfection.

---

### 4.2 Database Migration System
**Category:** Database & Data
**The Prompt:**
> Set up a database migration system for [DATABASE] using [Prisma / Drizzle / Knex / raw SQL]. Include: initial migration (create all tables), example migration (add column, rename, create index), rollback strategy, seed data management, migration for production (zero-downtime considerations), CI/CD integration, and a team workflow (how to handle conflicting migrations). Show: how to handle data migrations (not just schema).

**Expected Output:** A complete migration workflow with examples.
**Pro Tip:** Never modify a migration that has been applied in production. Always create a new migration.

---

### 4.3 Query Optimization
**Category:** Database & Data
**The Prompt:**
> Optimize these database queries for [APP]: [PASTE QUERIES OR DESCRIBE USE CASES]. For each: analyze the current query plan (EXPLAIN ANALYZE), identify bottlenecks, add appropriate indexes, rewrite for efficiency, implement pagination (cursor-based for large datasets), and add caching where beneficial. Show: before/after query times. Also create a query monitoring checklist for ongoing performance.

**Expected Output:** Optimized queries with performance comparison.
**Pro Tip:** One missing index can be the difference between 50ms and 5 seconds on a query.

---

### 4.4 Data Access Layer (Repository Pattern)
**Category:** Database & Data
**The Prompt:**
> Implement a data access layer using the Repository Pattern for [DATABASE] with TypeScript. Entities: [LIST]. Include: base repository with CRUD methods (typed with generics), entity-specific repositories with custom queries, transaction support, soft delete methods, pagination helper, and filtering/sorting utilities. Use [Prisma / Drizzle / pg]. All methods: fully typed return values, proper error handling, and SQL injection prevention.

**Expected Output:** A typed, reusable data access layer.
**Pro Tip:** The repository pattern abstracts database details so you can swap databases without touching business logic.

---

### 4.5 Search Implementation
**Category:** Database & Data
**The Prompt:**
> Implement search functionality for [APP/DATA TYPE]. Options: full-text search with [PostgreSQL tsvector / Meilisearch / Algolia / Typesense]. Include: indexing strategy, search API endpoint, frontend search component (with debounce), autocomplete/suggestions, typo tolerance, filtering alongside search, result ranking, highlighting matched terms, and search analytics (what people search for).

**Expected Output:** A complete search system from indexing to UI.
**Pro Tip:** PostgreSQL full-text search handles 90% of use cases. You probably don't need a separate search engine.

---

### 4.6 Data Backup & Recovery
**Category:** Database & Data
**The Prompt:**
> Design a data backup and recovery strategy for [DATABASE]. Include: automated daily backups (script/cron), backup storage (where and how long to retain), point-in-time recovery setup, backup verification (automated restore test), disaster recovery plan (RTO and RPO targets), documentation for the team, and a one-command restore script. Also create: a data export feature for users (GDPR compliance).

**Expected Output:** A backup and recovery system with disaster recovery plan.
**Pro Tip:** Untested backups are not backups. Automate a monthly restore test to verify integrity.

---

# 5. TESTING & DEBUGGING

---

### 5.1 Testing Strategy
**Category:** Testing & Debugging
**The Prompt:**
> Create a testing strategy for [APP TYPE]. Include: unit test examples (3 tests for a service function), integration test examples (2 API endpoint tests), component test examples (2 React component tests with React Testing Library), E2E test examples (1 critical user flow with Playwright/Cypress), test file structure convention, mock strategies (when to mock, when to use real implementations), CI integration, and coverage targets per layer. Stack: [Vitest / Jest] + React Testing Library + [Playwright / Cypress].

**Expected Output:** A complete testing strategy with example tests for each layer.
**Pro Tip:** Test behavior, not implementation. Ask "what should happen when X?" not "does function Y get called?"

---

### 5.2 Debug System
**Category:** Testing & Debugging
**The Prompt:**
> Create a debugging toolkit for [APP]. Include: structured logging system (with request IDs, user IDs, timestamps), log levels (debug, info, warn, error) with environment-based filtering, error tracking integration (Sentry setup), performance monitoring (identify slow queries, slow renders), memory leak detection strategy, network request debugging (frontend), and a troubleshooting runbook for the top 5 common issues.

**Expected Output:** A debugging and observability toolkit.
**Pro Tip:** Request IDs that flow from frontend to backend to database make debugging distributed issues 10x easier.

---

### 5.3 API Testing Suite
**Category:** Testing & Debugging
**The Prompt:**
> Build a comprehensive API testing suite for [API]. Include: test setup (database seeding, authentication helper), tests for each endpoint (happy path + error cases), authentication/authorization tests, validation tests (invalid inputs), rate limiting tests, pagination tests, and a test data factory for generating realistic mock data. Stack: [Vitest / Jest] + [Supertest / built-in fetch]. Include: CI pipeline configuration for running tests.

**Expected Output:** A complete API test suite with setup helpers.
**Pro Tip:** Every bug that reaches production should get a regression test before it gets a fix.

---

### 5.4 Performance Testing
**Category:** Testing & Debugging
**The Prompt:**
> Design performance tests for [APP/API]. Include: load testing script (using k6 or Artillery), stress test scenario, spike test scenario, endurance test for memory leaks, frontend performance audit (Core Web Vitals), API response time benchmarks, database query performance baselines, and a performance budget. Define: acceptable response times per endpoint, maximum concurrent users, and degradation thresholds.

**Expected Output:** A performance testing suite with benchmarks.
**Pro Tip:** Performance testing in CI prevents slow code from ever reaching production.

---

### 5.5 Error Reproduction Template
**Category:** Testing & Debugging
**The Prompt:**
> I'm experiencing this bug: [DESCRIBE BUG]. Help me debug it systematically. Create: (1) a hypothesis list (5 possible causes ranked by likelihood), (2) investigation steps for each hypothesis (what to check, where to look), (3) diagnostic code snippets (console logs, breakpoints, network captures), (4) a minimal reproduction attempt, and (5) once found — a fix with an explanation of WHY it happened. Document the resolution for future reference.

**Expected Output:** A systematic debugging process for the specific bug.
**Pro Tip:** Write down your hypothesis BEFORE investigating. It prevents rabbit holes and random changes.

---

### 5.6 Security Testing Checklist
**Category:** Testing & Debugging
**The Prompt:**
> Create a security testing checklist for [APP]. Cover: (1) authentication bypass attempts, (2) authorization escalation tests, (3) SQL injection tests, (4) XSS vulnerability checks, (5) CSRF protection verification, (6) rate limiting validation, (7) sensitive data exposure checks, (8) dependency vulnerability scan (npm audit), (9) HTTP header security (CSP, HSTS, etc.), (10) API key/secret exposure scan. For each: what to test, how to test it, and how to fix if found. Include: automated security scanning setup.

**Expected Output:** A 10-point security testing checklist with remediation.
**Pro Tip:** Run `npm audit` before every deployment. Vulnerable dependencies are the #1 attack vector.

---

# 6. DEVOPS & DEPLOYMENT

---

### 6.1 Docker Setup
**Category:** DevOps & Deployment
**The Prompt:**
> Create a Docker setup for [APP] with: Dockerfile (multi-stage build for production — small final image), docker-compose.yml for development (app + database + Redis + any other services), .dockerignore, environment variable handling, volume mounts for hot reloading in development, health checks, and production deployment configuration. Include: a "Getting Started" guide for new team members to run the project with one command.

**Expected Output:** A complete Docker development and production setup.
**Pro Tip:** Multi-stage builds reduce image size by 80%+. Your production image should only contain what runs.

---

### 6.2 Vercel/Netlify Deployment
**Category:** DevOps & Deployment
**The Prompt:**
> Configure deployment for [APP] on [Vercel / Netlify]. Include: vercel.json or netlify.toml configuration, environment variables setup, custom domain configuration, redirect and rewrite rules, serverless functions (if backend needed), preview deployments for PRs, build optimization (caching, parallel builds), and a deployment checklist (what to verify after each deploy). Also set up: analytics, error tracking, and performance monitoring.

**Expected Output:** A complete deployment configuration with monitoring.
**Pro Tip:** Preview deployments on PRs let you test changes in a production-like environment before merging.

---

### 6.3 Monitoring & Alerting
**Category:** DevOps & Deployment
**The Prompt:**
> Set up monitoring and alerting for [APP] in production. Include: uptime monitoring (endpoint health checks), error rate monitoring (Sentry/LogRocket), performance monitoring (response times, Core Web Vitals), resource monitoring (CPU, memory, disk), database monitoring (connections, slow queries), alert rules (what triggers an alert), notification channels (Slack, email, PagerDuty), and an incident response runbook. Define: SLA targets and escalation procedures.

**Expected Output:** A complete monitoring and alerting system.
**Pro Tip:** Monitor from the user's perspective, not just the server's. Synthetic monitoring simulates real user actions.

---

### 6.4 Zero-Downtime Deployment
**Category:** DevOps & Deployment
**The Prompt:**
> Implement a zero-downtime deployment strategy for [APP]. Include: rolling deployment configuration, database migration strategy (backward-compatible migrations), health check endpoints, load balancer configuration, canary deployment setup (optional), feature flags for gradual rollouts, rollback procedure (one-command), and a deployment automation script. Ensure: no user experiences an error during deployment.

**Expected Output:** A zero-downtime deployment system.
**Pro Tip:** The key to zero-downtime: old code must work with new database schema, and new code must work with old data.

---

### 6.5 SSL/Security Hardening
**Category:** DevOps & Deployment
**The Prompt:**
> Harden the security of [APP] for production. Include: SSL/TLS configuration (Let's Encrypt auto-renewal), HTTP security headers (CSP, HSTS, X-Frame-Options, etc. — using Helmet.js for Express), CORS configuration (explicit origins, not wildcard), rate limiting setup, brute force protection, dependency scanning automation, secrets management (never in code), and a security headers audit (achieve A+ on securityheaders.com).

**Expected Output:** A security hardening checklist with implementations.
**Pro Tip:** Run your site through securityheaders.com and Mozilla Observatory. Fix everything until you get an A+.

---

### 6.6 Infrastructure as Code
**Category:** DevOps & Deployment
**The Prompt:**
> Set up Infrastructure as Code for [APP] using [Terraform / Pulumi / SST]. Resources: [LIST: database, storage, CDN, serverless functions, domain/DNS, etc.]. Include: main configuration file, variable definitions, output values, state management strategy, environment separation (dev/staging/prod), and a deployment workflow. Document: how to set up from scratch and how to make changes safely.

**Expected Output:** An IaC setup for reproducible infrastructure.
**Pro Tip:** If you can't recreate your infrastructure from code in 30 minutes, you have a bus factor of 1.

---

# 7. REFACTORING & OPTIMIZATION

---

### 7.1 Code Review Prompt
**Category:** Refactoring & Optimization
**The Prompt:**
> Review this code for: [PASTE CODE OR DESCRIBE FILE]. Check for: (1) bugs and logic errors, (2) security vulnerabilities, (3) performance issues, (4) TypeScript type safety improvements, (5) readability and naming, (6) error handling gaps, (7) DRY violations, (8) accessibility issues (if frontend), (9) test coverage gaps, and (10) adherence to [PROJECT STANDARDS]. For each issue: severity (critical/warning/suggestion), exact location, explanation, and fixed code. Be thorough but pragmatic.

**Expected Output:** A comprehensive code review with prioritized fixes.
**Pro Tip:** Review your own code 24 hours later. Fresh eyes catch what tired eyes miss.

---

### 7.2 Legacy Code Refactor
**Category:** Refactoring & Optimization
**The Prompt:**
> Refactor this legacy code: [PASTE CODE]. Current issues: [DESCRIBE]. Goals: improve readability, add TypeScript types, extract reusable functions, add error handling, and make it testable. Constraints: don't change the external API/interface (backward compatible), refactor in small steps (each step should be independently deployable), and add tests for the refactored code. Show: before/after for each refactoring step.

**Expected Output:** A step-by-step refactoring plan with code.
**Pro Tip:** Add tests BEFORE refactoring, not after. Tests ensure your refactoring doesn't break anything.

---

### 7.3 Performance Optimization
**Category:** Refactoring & Optimization
**The Prompt:**
> Optimize the performance of [APP/PAGE/COMPONENT]. Current issues: [DESCRIBE — slow load, re-renders, large bundle, slow API]. Analyze and fix: bundle size (code splitting, tree shaking, lazy loading), React re-renders (memo, useMemo, useCallback — only where justified), image optimization (WebP, lazy loading, responsive sizes), API call optimization (caching, batching, prefetching), and Core Web Vitals (LCP, FID, CLS). Show: before/after metrics for each optimization.

**Expected Output:** Targeted performance optimizations with measurable results.
**Pro Tip:** Measure before optimizing. Premature optimization is the root of all evil.

---

### 7.4 TypeScript Strict Mode Migration
**Category:** Refactoring & Optimization
**The Prompt:**
> Migrate [PROJECT/FILE] to TypeScript strict mode. Current: strict is off / partial. Fix all: implicit any types, nullable references, type assertions (eliminate `as` where possible), generic type improvements, union type narrowing, and strict null checks. Strategy: migrate file-by-file starting with utils, then services, then components. For each file: list the changes needed and provide the typed version. Do not use `any` — find the correct type.

**Expected Output:** A strict TypeScript migration plan with typed code.
**Pro Tip:** `any` is a code smell. Every `any` is a type error waiting to happen.

---

# 8. AI-POWERED FEATURES

---

### 8.1 AI Chatbot Integration
**Category:** AI-Powered Features
**The Prompt:**
> Build an AI chatbot for [APP/WEBSITE] using the [Anthropic Claude / OpenAI] API. Include: backend endpoint for chat (streaming response), conversation history management, system prompt design for [USE CASE], frontend chat UI component (message list, input, typing indicator, streaming text display), rate limiting per user, token usage tracking, error handling (API failures, rate limits), and content moderation. Stack: [YOUR STACK].

**Expected Output:** A complete AI chatbot from backend to frontend.
**Pro Tip:** System prompts are the most important part. Spend 80% of your time crafting and testing the system prompt.

---

### 8.2 AI Content Generation Pipeline
**Category:** AI-Powered Features
**The Prompt:**
> Build an AI content generation pipeline for [USE CASE: product descriptions, email drafts, social media posts, etc.]. Include: prompt template system (dynamic variables), API integration with [Claude / OpenAI], generation queue (for batch processing), output validation (check length, format, quality), human review interface, version tracking (keep all drafts), A/B testing framework for prompts, and cost tracking per generation.

**Expected Output:** A production content generation system.
**Pro Tip:** The quality of AI output is directly proportional to the quality of your prompt. Invest in prompt engineering.

---

### 8.3 Semantic Search / RAG System
**Category:** AI-Powered Features
**The Prompt:**
> Build a Retrieval-Augmented Generation (RAG) system for [USE CASE: documentation search, knowledge base, support]. Include: document ingestion pipeline (chunk, embed, store), vector database setup (Pinecone / pgvector / Supabase), semantic search endpoint, context retrieval and ranking, LLM generation with retrieved context, source attribution (cite which document answered), and a frontend search interface with AI-generated answers.

**Expected Output:** A complete RAG system from ingestion to interface.
**Pro Tip:** Chunk size and overlap are the most important RAG parameters. Experiment extensively.

---

### 8.4 AI-Powered Data Analysis
**Category:** AI-Powered Features
**The Prompt:**
> Build an AI-powered data analysis feature for [APP]. The user uploads data (CSV/JSON) and asks questions in natural language. Include: file upload and parsing, data preview/summary, natural language to analysis pipeline (using Claude/OpenAI), chart/visualization generation based on AI analysis, export results, conversation history (ask follow-up questions), and safety guardrails (don't expose raw data, validate AI outputs).

**Expected Output:** A natural language data analysis tool.
**Pro Tip:** Always validate AI-generated analysis against the actual data. AI can confidently produce wrong numbers.

---

# APPENDIX

## Developer Cheat Sheet

### Useful CLI Commands:
```bash
# Project setup
npx create-vite@latest my-app --template react-ts
npm create hono@latest my-api

# TypeScript
npx tsc --init --strict
npx tsc --noEmit  # Type check without building

# Testing
npx vitest --ui  # Visual test runner
npx playwright test --ui  # Visual E2E runner

# Performance
npx lighthouse https://your-site.com --view
npx bundle-buddy dist/assets/*.js  # Bundle analysis

# Security
npm audit --fix
npx snyk test  # Vulnerability scanning
```

### Architecture Decision Quick Guide:
- Under 10 pages → Static HTML + Tailwind
- 10-50 pages → React SPA + Vite
- 50+ pages with SEO → Next.js / Astro
- Real-time features → WebSockets / Supabase Realtime
- Heavy computation → Background jobs (BullMQ)
- Global audience → CDN + Edge functions

### Performance Budgets:
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1
- Total Bundle Size: < 200KB (gzipped)
- API Response Time: < 200ms (p95)

---

**Thank you for purchasing the Ultimate AI Bundle!**

Questions? Email: yassin@elfennir.com
Updates: Follow @yassinelfennir on X/Twitter
Website: elfennir.com

© 2026 InfluAI by elfennir.com — All rights reserved.
Exclusive bonus — not available for individual purchase.
