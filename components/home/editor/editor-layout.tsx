import Sidebar from "./sidebar";
import Canvas from "./canvas";
import StylePanel from "./style-panel";

export default function EditorLayout() {
  return (
    <div className="flex mx-auto max-w-[1200px] border rounded-xl overflow-hidden bg-[#141414] shadow-2xl">
      <Sidebar />
      <Canvas />
      <StylePanel />
    </div>
  );
}
