import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import svgPanZoom from "svg-pan-zoom";
import {
    ArrowsPointingOutIcon,
    ArrowDownIcon,
    ArrowUpIcon,
    ArrowPathIcon,
    ArrowTopRightOnSquareIcon,
    ArrowDownOnSquareIcon,
} from "@heroicons/react/24/solid";

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
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            container.current.requestFullscreen();
        }
    };

    useEffect(() => {
        if (!container.current || !code) return;

        mermaid.initialize({
            startOnLoad: false,
            theme: document.documentElement.classList.contains("dark")
                ? "dark"
                : "default",
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

                        // initialize pan & zoom
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
                    container.current.innerHTML = `<p>Error: ${err.message}</p>`;
                }
            });
    }, [code]);

    return (
        <div>
            {/* Floating Toolbar (unstyled) */}
            <div>
                <button onClick={() => panZoom?.zoomIn()} title="Zoom In">
                    <ArrowUpIcon />
                </button>
                <button onClick={() => panZoom?.zoomOut()} title="Zoom Out">
                    <ArrowDownIcon />
                </button>
                <button onClick={() => panZoom?.fit()} title="Fit to Screen">
                    <ArrowsPointingOutIcon />
                </button>
                <button onClick={() => panZoom?.resetZoom()} title="Reset Zoom">
                    <ArrowPathIcon />
                </button>
                <button onClick={fullscreen} title="Fullscreen">
                    <ArrowTopRightOnSquareIcon />
                </button>
                <button onClick={downloadSVG} title="Save SVG">
                    <ArrowDownOnSquareIcon />
                </button>
            </div>

            {/* Diagram Container (unstyled) */}
            <div ref={container} />
        </div>
    );
}