import { Children, type JSX, useLayoutEffect, useRef, useState } from "react";

function Collection({collectionName, children, offsetPx = 30}: {collectionName: string, children : JSX.Element[], offsetPx?: number}) {
    const childCount = Children.count(children);
    const [isHovered, setIsHovered] = useState(false);
    const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [yOffsets, setYOffsets] = useState<number[]>([]);

    useLayoutEffect(() => {
        const computeOffsets = () => {
            const heights = itemRefs.current.map(el => el?.offsetHeight ?? 0);
            const offsets: number[] = [];
            let acc = 0;
            for (let i = 0; i < heights.length; i++) {
                offsets.push(acc);
                acc += heights[i];
            }
            setYOffsets(offsets);
        };

        const observer = new ResizeObserver(() => {
            computeOffsets();
        });

        itemRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        // initial measurement
        computeOffsets();

        return () => observer.disconnect();
    }, [childCount, children]);

    return <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{
                writingMode: "vertical-rl", 
                textOrientation: "sideways", 
                textAlign: "center", 
                padding: "0.2em", 
                backgroundColor: "green", 
                color: "white", 
                margin: "0 0.5em 0 0.5em", 
                borderRadius: "25px", 
                transform: "rotate(180deg)", 
                border: "2px solid darkgreen"}}>
                <p>{collectionName}</p>
            </div>
            <div
            style={{
                position: "relative",
                display: "grid"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {Children.map(children, (child, index) => {
                return (
                    <div
                        ref={(el) => { itemRefs.current[index] = el; }}
                        style={{
                            position: index == 0 ? "relative" : "absolute",
                            transform: isHovered
                                ? `translate(0px, ${(yOffsets[index] ?? 0)}px)`
                                : `translate(${index * offsetPx}px, ${index * 5}px)`,
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        {child}
                    </div>
                );
            })}
        </div>
    </div>
}

export default Collection;