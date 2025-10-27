import { useState } from "react";
import Editor from "./components/Editor";
import Preview2D from "./components/Preview2D";
import "./index.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
  const [mermaidCode, setMermaidCode] = useState("");

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h1>Mermaid Studio</h1>
        <p>Type your Mermaid diagram below:</p>
        <Editor onRender2D={setMermaidCode} />
      </aside>

      <main className="main-preview">
        <Preview2D code={mermaidCode} />
      </main>
    </div>
  );
}
