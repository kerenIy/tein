export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1a1a1a] border-r border-[#2b2b2b] p-4 text-sm">
      <div className="mb-4 text-white font-semibold">Layers</div>
      <ul className="space-y-1 text-gray-400">
        <li className="pl-2">▸ Desktop</li>
        <li className="pl-4">▸ Header</li>
        <li className="pl-6 text-white bg-blue-600 rounded px-2 py-1">
          T Header
        </li>
        <li className="pl-6">T Paragraph</li>
        <li className="pl-6">Button</li>
        <li className="pl-6">Visual</li>
      </ul>
    </div>
  );
}
