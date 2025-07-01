"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Canvas from "./canvas";
import StylePanel from "./style-panel";

const skills: Record<
  string,
  { image: string; category: string; description: string; projects: string[] }
> = {
  React: {
    image: "/react-logo.png",
    category: "Frontend",
    description: "A JavaScript library for building user interfaces.",
    projects: ["Portfolio Site", "E-commerce Dashboard"],
  },
  "Next.js": {
    image: "/next-logo.png",
    category: "Frontend",
    description:
      "A React framework for server-side rendering and static websites.",
    projects: ["Marketing Landing Page", "Blog Platform"],
  },
  "Vue.js": {
    image: "/vue.png",
    category: "Frontend",
    description:
      "A progressive JavaScript framework for building user interfaces.",
    projects: ["E-commerce Website", "Social Media App"],
  },
  HTML: {
    image: "/html-logo.png",
    category: "Frontend",
    description:
      "A progressive JavaScript framework for building user interfaces.",
    projects: ["E-commerce Website", "Social Media App"],
  },
  "JavaScript/TypeScript": {
    image: "/ts-logo.png",
    category: "Frontend",
    description:
      "A progressive JavaScript framework for building user interfaces.",
    projects: ["E-commerce Website", "Social Media App"],
  },
  "CSS/SCSS/SASS": {
    image: "/css-logo.png",
    category: "Styling",
    description: "A utility-first CSS framework for rapid UI development.",
    projects: ["Design System", "Mobile-First Web App"],
  },
  TailwindCSS: {
    image: "/tailwindcss.png",
    category: "Styling",
    description: "A utility-first CSS framework for rapid UI development.",
    projects: ["Design System", "Mobile-First Web App"],
  },
  "Version Control (Git)": {
    image: "/git-logo.png",
    category: "Other Tools & Libraries",
    description:
      "A collaborative interface design tool used to design and prototype UI/UX.",
    projects: ["Design Prototypes", "UI Kits"],
  },
  "Animation (GSAP, Framer Motion)": {
    image: "/gsap.png",
    category: "Other Tools & Libraries",
    description:
      "A collaborative interface design tool used to design and prototype UI/UX.",
    projects: ["Design Prototypes", "UI Kits"],
  },
  "Component Libraries": {
    image: "/vuetify-logo.png",
    category: "Other Tools & Libraries",
    description:
      "A collaborative interface design tool used to design and prototype UI/UX.",
    projects: ["Design Prototypes", "UI Kits"],
  },
  "State Management (Redux, Zustand, Pinia)": {
    image: "/redux.png",
    category: "Other Tools & Libraries",
    description:
      "A collaborative interface design tool used to design and prototype UI/UX.",
    projects: ["Design Prototypes", "UI Kits"],
  },
  // Add more as needed
};

export default function EditorLayout() {
  const [selectedSkill, setSelectedSkill] = useState("Next.js");

  return (
    <div className="flex mx-auto max-w-[1200px] border rounded-xl overflow-hidden bg-[#141414] shadow-2xl">
      <Sidebar
        skills={skills}
        selectedSkill={selectedSkill}
        onSelect={setSelectedSkill}
      />
      <Canvas skill={skills[selectedSkill]} skillName={selectedSkill} />
      <StylePanel />
    </div>
  );
}
