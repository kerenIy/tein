export default function StylePanel() {
  return (
    <div className="hidden lg:inline w-64 bg-[#1a1a1a] border-l border-[#2b2b2b] p-4 text-sm text-gray-300">
      <h3 className="mb-2 text-white font-semibold">Styles</h3>
      <div className="space-y-2">
        <div>
          <label className="block mb-1">Width</label>
          <input
            type="text"
            className="bg-black border border-gray-600 w-full p-1 rounded"
            defaultValue="1fr"
          />
        </div>
        <div>
          <label className="block mb-1">Height</label>
          <input
            type="text"
            className="bg-black border border-gray-600 w-full p-1 rounded"
            defaultValue="Auto"
          />
        </div>
        <div>
          <label className="block mb-1">Opacity</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue="1"
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Visible</label>
          <select className="bg-black border border-gray-600 w-full p-1 rounded">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
    </div>
  );
}
