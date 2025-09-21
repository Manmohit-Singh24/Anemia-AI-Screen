import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SystemDesign = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const prevScaleRef = useRef(1);

    const [scale, setScale] = useState(1);
    const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [start, setStart] = useState({ x: 0, y: 0 });
    const [scrollPos, setScrollPos] = useState({ left: 0, top: 0 });

    // When image loads, compute initial "fit to viewport" scale
    const onImgLoad = () => {
        const img = imgRef.current;
        const c = containerRef.current;
        if (!img || !c) return;

        const w = img.naturalWidth;
        const h = img.naturalHeight;
        setNaturalSize({ w, h });

        // fit-to-screen scale
        const fitScale = Math.min(c.clientWidth / w, c.clientHeight / h);

        setScale(fitScale);
        prevScaleRef.current = fitScale;

        requestAnimationFrame(() => {
            c.scrollLeft = (w * fitScale - c.clientWidth) / 2;
            c.scrollTop = (h * fitScale - c.clientHeight) / 2;
        });
    };

    // Keep viewport center stable when scale changes
    useEffect(() => {
        const c = containerRef.current;
        const { w, h } = naturalSize;
        if (!c || w === 0 || h === 0) return;

        const prevScale = prevScaleRef.current;
        const centerXNorm = (c.scrollLeft + c.clientWidth / 2) / (w * prevScale);
        const centerYNorm = (c.scrollTop + c.clientHeight / 2) / (h * prevScale);

        const newScrollLeft = centerXNorm * (w * scale) - c.clientWidth / 2;
        const newScrollTop = centerYNorm * (h * scale) - c.clientHeight / 2;

        c.scrollLeft = Math.max(0, newScrollLeft);
        c.scrollTop = Math.max(0, newScrollTop);

        prevScaleRef.current = scale;
    }, [scale, naturalSize.w, naturalSize.h]);

    // Zoom handlers
    const zoomIn = () => setScale((s) => Math.min(6, +(s * 1.25).toFixed(2)));
    const zoomOut = () => setScale((s) => Math.max(0.1, +(s / 1.25).toFixed(2)));

    // Drag handlers
    const handlePointerDown = (e) => {
        const c = containerRef.current;
        if (!c) return;
        try {
            c.setPointerCapture(e.pointerId);
        } catch {}
        setIsDragging(true);
        setStart({ x: e.clientX, y: e.clientY });
        setScrollPos({ left: c.scrollLeft, top: c.scrollTop });
        e.preventDefault();
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;
        const c = containerRef.current;
        if (!c) return;
        const dx = e.clientX - start.x;
        const dy = e.clientY - start.y;
        c.scrollLeft = scrollPos.left - dx;
        c.scrollTop = scrollPos.top - dy;
        e.preventDefault();
    };

    const stopDragging = (e) => {
        const c = containerRef.current;
        if (c) {
            try {
                c.releasePointerCapture && c.releasePointerCapture(e?.pointerId);
            } catch {}
        }
        setIsDragging(false);
    };

    return (
        <div className="p-6 bg-[#111] h-screen w-screen flex flex-col relative">
            <div className=" text-[#ccc] w-full text-center flex items-center justify-between gap-10 border-b pb-4">
                {/* Zoom controls */}
                <div className="flex flex-row items-center gap-2 bg-white/10 p-3 rounded-xl">
                    <button
                        onClick={zoomOut}
                        className="bg-[#ccc] text-[#111] px-3 h-8 flex items-center py-2 rounded-md hover:bg-slate-300"
                        title="Zoom out"
                    >
                        −
                    </button>
                    <div className="text-xs text-[#ccc] text-center p-1 rounded">
                        {scale.toFixed(2)}x
                    </div>
                    <button
                        onClick={zoomIn}
                        className="bg-[#ccc] text-[#111] px-3 py-2 rounded-md hover:bg-slate-300 h-8 flex items-center"
                        title="Zoom in"
                    >
                        +
                    </button>
                </div>

                <h1 className="text-4xl font-bold">System Design</h1>

                <button
                    onClick={() => navigate("/")}
                    className="text-sm bg-[#ccc] text-[#111] px-4 py-2 rounded-xl font-bold hover:bg-slate-300 transition"
                >
                    Back To HomePage
                </button>

            </div>

            {/* Scrollable container */}
            <div
                ref={containerRef}
                className="flex-1 m-6 overflow-auto rounded-xl bg-[#111] border border-[#ccc] relative"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={stopDragging}
                onPointerCancel={stopDragging}
                onPointerLeave={stopDragging}
                style={{
                    cursor: isDragging ? "grabbing" : "grab",
                    touchAction: "none",
                    userSelect: "none",
                }}
            >
                {/* Scaled wrapper */}
                <div
                    style={{
                        width: naturalSize.w ? naturalSize.w * scale : "100%",
                        height: naturalSize.h ? naturalSize.h * scale : "100%",
                        display: "inline-block",
                    }}
                >
                    <img
                        ref={imgRef}
                        src="./assets/SystemDesign.svg"
                        alt="System Design"
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                        onLoad={onImgLoad}
                        style={{
                            display: "block",
                            width: naturalSize.w ? naturalSize.w * scale : "100%",
                            height: "auto",
                            pointerEvents: "none",
                            userSelect: "none",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SystemDesign;
