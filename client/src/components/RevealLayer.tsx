import { useEffect, useRef } from "react";

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
  spotlightRadius?: number;
}

const SPOTLIGHT_R = 260;

export default function RevealLayer({ image, cursorX, cursorY, spotlightRadius = SPOTLIGHT_R }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create radial gradient for spotlight
    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, spotlightRadius);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.4, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.75)");
    gradient.addColorStop(0.75, "rgba(255, 255, 255, 0.4)");
    gradient.addColorStop(0.88, "rgba(255, 255, 255, 0.12)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    // Fill circle with gradient
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, spotlightRadius, 0, Math.PI * 2);
    ctx.fill();

    // Apply canvas as mask to reveal div
    const maskUrl = canvas.toDataURL();
    if (revealDivRef.current) {
      revealDivRef.current.style.maskImage = `url(${maskUrl})`;
      revealDivRef.current.style.webkitMaskImage = `url(${maskUrl})`;
      revealDivRef.current.style.maskSize = "100% 100%";
      revealDivRef.current.style.webkitMaskSize = "100% 100%";
    }
  }, [cursorX, cursorY, spotlightRadius]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: "none" }}
      />
      <div
        ref={revealDivRef}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </>
  );
}
