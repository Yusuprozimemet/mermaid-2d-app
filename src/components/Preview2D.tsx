import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import svgPanZoom from "svg-pan-zoom";
import Toolbar2D from "./Toolbar2D";

interface Props {
    code: string;
}

export default function Preview2D({ code }: Props) {
    const container = useRef<HTMLDivElement>(null);
    const [panZoom, setPanZoom] = useState<any>(null);

    const downloadSVG = () => {
        const svgEl = container.current?.querySelector("svg");
        if (!svgEl) return;
        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(svgEl);
        const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "diagram.svg";
        link.click();
        URL.revokeObjectURL(url);
    };

    const fullscreen = () => {
        if (!container.current) return;
        if (document.fullscreenElement) document.exitFullscreen();
        else container.current.requestFullscreen();
    };

    useEffect(() => {
        if (!container.current || !code) return;

        mermaid.initialize({
            startOnLoad: false,
            theme:
                document.documentElement.classList.contains("dark") ? "dark" : "default",
        });

        container.current.innerHTML = "";
        mermaid
            .render("mermaid-svg", code)
            .then(({ svg }) => {
                if (container.current) {
                    container.current.innerHTML = svg;
                    const svgEl = container.current.querySelector("svg");
                    if (svgEl) {
                        svgEl.style.width = "100%";
                        svgEl.style.height = "100%";
                        svgEl.style.objectFit = "contain";

                        panZoom?.destroy();
                        const zoomInstance = svgPanZoom(svgEl, {
                            zoomEnabled: true,
                            controlIconsEnabled: false,
                            fit: true,
                            center: true,
                            minZoom: 0.1,
                            maxZoom: 10,
                        });
                        setPanZoom(zoomInstance);
                    }
                }
            })
            .catch((err) => {
                if (container.current) {
                    container.current.innerHTML = `<p style="color:red">Error: ${err.message}</p>`;
                }
            });
    }, [code]);

    return (
        <div className="preview-wrapper">
            <Toolbar2D
                onZoomIn={() => panZoom?.zoomIn()}
                onZoomOut={() => panZoom?.zoomOut()}
                onFit={() => panZoom?.fit()}
                onReset={() => panZoom?.resetZoom()}
                onFullscreen={fullscreen}
                onDownload={downloadSVG}
            />
            <div className="diagram-container" ref={container}></div>
        </div>
    );
}
