import { useState } from "react";

const defaultCode = `flowchart TD
    A[Home] --> B[Dashboard]
    B --> C[Data]
    B --> D[Settings]
    A --> E[Login]
    E --> F[NextAuth]`;

interface Props {
    onRender2D: (code: string) => void;
}

export default function Editor({ onRender2D }: Props) {
    const [code, setCode] = useState(defaultCode);

    return (
        <div>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                placeholder="Type Mermaid code here..."
            />

            <button onClick={() => onRender2D(code)}>
                Render Diagram
            </button>
        </div>
    );
}
