import type { Route } from "./+types/home";
import LRBCLanding from "../components/LRBCLanding";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LRBC - Lalit Raj Business Consultancy" },
    { name: "description", content: "Expert business consultancy for manufacturing, automation, and management." },
  ];
}

export default function Home() {
  return <LRBCLanding />;
}
