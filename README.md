# Mevlint

**Mevlint** is a collaboration-first platform being built for writers, artists, animators, filmmakers, and cinematic creators.

Creative talent is everywhere.  
Infrastructure isn’t.

Mevlint aims to provide a focused space where creators can discover each other, collaborate meaningfully, and build projects without fighting algorithmic noise.

---

## Status

🚧 **Under active development**

Currently, this repository contains the **landing experience and waitlist flow**.  
The core application will be introduced in phases.

Early development is intentionally limited to ensure:
- Clean architecture
- Creator-first design decisions
- Scalable foundations

---

## What This Repository Includes

- Marketing / landing pages
- Creator-focused messaging
- Waitlist onboarding flow
- Production-ready project structure
- App Router–based Next.js setup

The main application logic is scaffolded but not yet implemented.

---

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** (planned)
- **PostgreSQL** (planned)
- **Modern server-first architecture**

The stack is chosen for long-term maintainability and scalability.

---

## Project Structure (High Level)

app/
├─ (marketing)/ # Landing pages
├─ (app)/ # Main application (future)
├─ api/ # Server routes
components/ # UI components
lib/ # Utilities & services
prisma/ # Database schema (planned)


---

## Philosophy

Mevlint is being built with a few core principles:

- Collaboration over clout  
- Craft over trends  
- Signal over noise  
- Creators before algorithms  

This project is not focused on rapid feature shipping, but on building the right foundation.

---

## Running Locally

```bash
npm install
npm run dev

Then open:
http://localhost:3000

Roadmap (High Level)

Landing & waitlist

Creator identity system

Discovery & categorization

Collaboration tooling

Studio & hiring workflows

Details will evolve as development progresses.

License

This project is currently private and not licensed for redistribution.
