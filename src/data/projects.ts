export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  short: string;
  description: string;
  stack: string[];
  image: string;
  live: string;
  clientRepo: string;
  backendRepo?: string;
  backendApi?: string;
  role: string;
  challenges: string[];
  improvements: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "parcelrelay",
    name: "ParcelRelay",
    eyebrow: "FLAGSHIP PROJECT",
    featured: true,
    short:
      "A multi-role courier and logistics platform built around real shipment operations.",
    description:
      "ParcelRelay connects customer shipment creation and tracking with courier operations and administrative management. It includes role-specific workflows and a separately deployed Next.js frontend and Express API.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Cloudinary",
      "TanStack Query",
      "TanStack Form",
      "Zod",
      "Stripe",
    ],
    image: "/images/parcelrelay.svg",
    live: "https://parcel-relay-frontend.vercel.app",
    clientRepo: "https://github.com/mahmudulhaque13/parcel-relay-frontend",
    backendRepo: "https://github.com/mahmudulhaque13/parcel-relay-backend",
    role: "Full-stack development",
    challenges: [
      "Modeling shipment lifecycle operations across customer, courier and admin roles.",
      "Keeping frontend API workflows aligned with a separately deployed backend.",
      "Applying consistent validation, authorization and error handling across modular API features.",
    ],
    improvements: [
      "Expand automated integration and end-to-end test coverage.",
      "Improve operational observability and API documentation.",
      "Continue refining admin detail views, courier profile workflows and invoice delivery based on test findings.",
    ],
  },

  {
    slug: "rentnest",
    name: "RentNest",
    eyebrow: "FULL-STACK PROJECT",
    featured: false,
    short:
      "A rental marketplace connecting tenants, landlords and admin workflows.",
    description:
      "RentNest is a full-stack rental property marketplace designed to support property discovery, landlord property management and rental request workflows. It separates tenant, landlord and administrator capabilities and provides a dedicated frontend and backend API.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
    ],
    image: "/images/rentnest.svg",
    live: "https://rentnest-frontend-lyart.vercel.app",
    clientRepo: "https://github.com/mahmudulhaque13/rentnest-frontend",
    backendApi: "https://rentnest-backend-83pn.onrender.com",
    role: "Full-stack development",
    challenges: [
      "Separating tenant, landlord and admin capabilities.",
      "Connecting property discovery UI with backend data and rental request workflows.",
      "Keeping loading, empty and error states understandable.",
    ],
    improvements: [
      "Expand automated tests for authentication and rental workflows.",
      "Improve production API monitoring and error visibility.",
      "Refine property discovery, search and filtering as needed.",
    ],
  },
];
