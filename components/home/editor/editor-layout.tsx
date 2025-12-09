"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Canvas from "./canvas";
import StylePanel from "./style-panel";

const skills: Record<
  string,
  { image: string; category: string; description: string }
> = {
  React: {
    image: "/react-logo.png",
    category: "Frontend",
    description: "A JavaScript library for building user interfaces.",
  },
  "Next.js": {
    image: "/next-logo.png",
    category: "Frontend",
    description:
      "A React framework for server-side rendering and static websites.",
  },
  "Vue.js": {
    image: "/vue.png",
    category: "Frontend",
    description:
      "A progressive JavaScript framework for building user interfaces.",
  },
  HTML: {
    image: "/html-logo.png",
    category: "Frontend",
    description:
      "A progressive JavaScript framework for building user interfaces.",
  },
  "JavaScript/TypeScript": {
    image: "/ts-logo.png",
    category: "Frontend",
    description:
      "A progressive JavaScript framework for building user interfaces.",
  },
  "CSS/SCSS/SASS": {
    image: "/css-logo.png",
    category: "Styling",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  TailwindCSS: {
    image: "/tailwindcss.png",
    category: "Styling",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  "Version Control (Git)": {
    image: "/git-logo.png",
    category: "Other Tools & Libraries",
    description:
      "A collaborative interface design tool used to design and prototype UI/UX.",
  },
  "Animation (GSAP, Framer Motion)": {
    image: "/gsap.png",
    category: "Other Tools & Libraries",
    description:
      "A collaborative interface design tool used to design and prototype UI/UX.",
  },
  "Component Libraries": {
    image: "/vuetify-logo.png",
    category: "Other Tools & Libraries",
    description:
      "A collaborative interface design tool used to design and prototype UI/UX.",
  },
  "State Management (Redux, Zustand, Pinia)": {
    image: "/redux.png",
    category: "Other Tools & Libraries",
    description:
      "A collaborative interface design tool used to design and prototype UI/UX.",
  },
  // Add more as needed
};

export default function EditorLayout() {
  const [selectedSkill, setSelectedSkill] = useState("Next.js");

  return (
    <div className="flex mx-auto max-w-[800px] border rounded-xl overflow-hidden bg-[#141414] shadow-2xl">
      <Sidebar
        skills={skills}
        selectedSkill={selectedSkill}
        onSelect={setSelectedSkill}
      />
      <Canvas skill={skills[selectedSkill]} skillName={selectedSkill} />
      {/* <StylePanel /> */}
    </div>
  );
}
