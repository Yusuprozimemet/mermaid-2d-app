// src/utils/mermaidParser.ts
export interface Node {
    id: string;
    label: string;
    // 3D force graph adds these
    x?: number;
    y?: number;
    z?: number;
    fx?: number | null;
    fy?: number | null;
    fz?: number | null;
    vx?: number;
    vy?: number;
    vz?: number;
}

export interface Link {
    source: string | Node;
    target: string | Node;
}

export interface GraphData {
    nodes: Node[];
    links: Link[];
}

export function parseMermaid(code: string): GraphData {
    const nodes: Record<string, Node> = {};
    const links: Link[] = [];

    const lines = code
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l && !l.startsWith("%%"));

    for (const line of lines) {
        if (/^(flowchart|graph)\s/.test(line)) continue;
        if (/^(subgraph|end)/.test(line)) continue;

        // Nodes: A[Label] or A
        const nodeMatches = line.matchAll(/(\w+)(?:\[([^\]]*)\])?/g);
        for (const [, id, label] of nodeMatches) {
            if (id && !nodes[id]) {
                nodes[id] = { id, label: label || id };
            }
        }

        // Links: A --> B
        const linkMatch = line.match(/(\w+)\s*--?>+\s*(\w+)/);
        if (linkMatch) {
            const [, source, target] = linkMatch;
            links.push({ source, target });
        }
    }

    return { nodes: Object.values(nodes), links };
}