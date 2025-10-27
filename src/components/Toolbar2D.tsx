import React from "react";

interface Props {
    onZoomIn: () => void;
    onZoomOut: () => void;
    onFit: () => void;
    onReset: () => void;
    onFullscreen: () => void;
    onDownload: () => void;
}

export default function Toolbar2D({
    onZoomIn,
    onZoomOut,
    onFit,
    onReset,
    onFullscreen,
    onDownload,
}: Props) {
    return (
        <div className="toolbar2d">
            <button onClick={onZoomIn} title="Zoom In">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
            </button>
            <button onClick={onZoomOut} title="Zoom Out">
                <i className="fa-solid fa-magnifying-glass-minus"></i>
            </button>
            <button onClick={onFit} title="Fit to Screen">
                <i className="fa-solid fa-expand"></i>
            </button>
            <button onClick={onReset} title="Reset Zoom">
                <i className="fa-solid fa-rotate-right"></i>
            </button>
            <button onClick={onFullscreen} title="Fullscreen">
                <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
            <button onClick={onDownload} title="Download SVG">
                <i className="fa-solid fa-download"></i>
            </button>
        </div>
    );
}
