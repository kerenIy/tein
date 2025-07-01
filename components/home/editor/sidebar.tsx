import Image from "next/image";

interface SidebarProps {
  skills: Record<string, { category: string; image: string }>;
  selectedSkill: string;
  onSelect: (name: string) => void;
}

export default function Sidebar({
  skills,
  selectedSkill,
  onSelect,
}: SidebarProps) {
  const categories = Array.from(
    new Set(Object.values(skills).map((s) => s.category))
  );

  return (
    <div className="w-64 bg-[#1a1a1a] border-r border-[#2b2b2b] p-4 text-sm">
      <div className="mb-4 text-white font-semibold">Skills</div>
      {categories.map((category) => (
        <div key={category} className="mb-2">
          <div className="text-gray-400 mb-1">{category}</div>
          <ul className="space-y-1 text-gray-400">
            {Object.entries(skills)
              .filter(([_, skill]) => skill.category === category)
              .map(([name]) => (
                <li
                  key={name}
                  onClick={() => onSelect(name)}
                  className={`cursor-pointer pl-4 py-1 rounded ${
                    selectedSkill === name ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <Image
                      src={skills[name].image}
                      width={16}
                      height={16}
                      alt={name}
                      className="mr-1.5"
                    />
                    {name}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
