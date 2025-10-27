import { useState } from "react";
import Editor from "./components/Editor";
import Preview2D from "./components/Preview2D";

export default function App() {
  const [mermaidCode, setMermaidCode] = useState("");

  return (
    <div>
      {/* LEFT: Editor */}
      <div>
        <h1>Mermaid Editor</h1>
        <p>Type your Mermaid diagram code and render it in 2D.</p>
        <Editor onRender2D={setMermaidCode} />
      </div>

      {/* RIGHT: Preview */}
      <div>
        <h2>Preview</h2>
        <Preview2D code={mermaidCode} />
      </div>
    </div>
  );
}