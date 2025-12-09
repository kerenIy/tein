interface CanvasProps {
  skill: { description: string };
  skillName: string;
}

export default function Canvas({ skill, skillName }: CanvasProps) {
  return (
    <div className="hidden flex-1 lg:flex flex-col items-center justify-center p-8">
      <div className="bg-[#101010] w-full h-[400px] flex items-center justify-center border border-gray-700 rounded-lg text-center">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{skillName}</h2>
          <p className="text-gray-300 mb-4 max-w-md">{skill.description}</p>
          <div>
            {/* <h4 className="text-gray-400 mb-2 font-medium">Projects:</h4> */}
            {/* <ul className="text-sm text-gray-300 space-y-1">
              {skill.projects.map((project, i) => (
                <li key={i}>
                  <a href="#" className="text-blue-400 hover:underline">
                    {project}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
