import type { Route } from "./+types/home";
import LRBCLanding from "../components/LRBCLanding";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LRBC — Creating systems that scale" },
    { name: "title", content: "LRBC — Creating systems that scale" },
    { name: "description", content: "Lalit Raj Business Consulting (LRBC) builds foundational systems for businesses. We transform manual operations into system-driven profit centers using Work Pilot Intelligence." },
    { name: "keywords", content: "Lalit Raj Business Consulting, MSME automation India, Factory systems, Work Pilot Intelligence, Manufacturing process engineering, Hyderabad management consultancy, System Implementation, FMS Creation, IMS, Checklist Task, Delegation Task" },
  ];
}

export default function Home() {
  return <LRBCLanding />;
}
