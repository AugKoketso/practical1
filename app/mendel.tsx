/** @jsxImportSource react */ 
/** @client */

import React, { useRef, useEffect } from 'react';

interface MandelbrotSetProps {
    width: number;
    height: number;
}

const MandelbrotSet: React.FC<MandelbrotSetProps> = ({ width, height }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                drawMandelbrot(ctx, width, height);
            }
        }
    }, [width, height]);

    return <canvas ref={canvasRef} width={width} height={height} />;
};




const drawMandelbrot = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const maxIter = 1000;
    const zoom = 150;
    const moveX = 0.5;
    const moveY = 0;

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let zx = 1.5 * (x - width / 2) / (0.5 * zoom * width) + moveX;
            let zy = (y - height / 2) / (0.5 * zoom * height) + moveY;
            let i = maxIter;
            while (zx * zx + zy * zy < 4 && i > 0) {
                let tmp = zx * zx - zy * zy + 1.5 * (x - width / 2) / (0.5 * zoom * width) + moveX;
                zy = 2.0 * zx * zy + (y - height / 2) / (0.5 * zoom * height) + moveY;
                zx = tmp;
                i--;
            }
            
            const color = (i / maxIter) * 255;
            ctx.fillStyle = `rgb(${color}, 0, ${255 - color})`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
};

export default MandelbrotSet;
