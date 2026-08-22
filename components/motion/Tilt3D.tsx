"use client";

/* Inclinacion 3D real que sigue el mouse (efecto "tilt card" premium).
   Usa cloneElement para inyectar la logica DIRECTO en el elemento hijo
   (el <Link> de la card) en vez de envolverlo en un div extra — un
   wrapper extra ya rompio el layout de .hub-card una vez (perdia el
   display:block implicito de ser hijo directo del grid), asi que esta
   vez no se repite el mismo error. */

import { cloneElement, useRef, type ReactElement } from "react";

export default function Tilt3D({
  children,
  max = 10,
}: {
  children: ReactElement<{
    style?: React.CSSProperties;
    onMouseMove?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
  }>;
  max?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(
      2
    )}deg) scale3d(1.03, 1.03, 1.03)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- cloneElement + ref + handlers merge no tipa bien de forma genérica
  return cloneElement(children as ReactElement<any>, {
    ref,
    onMouseMove: (e: React.MouseEvent) => {
      handleMouseMove(e);
      children.props.onMouseMove?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouseLeave();
      children.props.onMouseLeave?.(e);
    },
    style: {
      ...children.props.style,
      transition: "transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease",
      willChange: "transform",
    },
  });
}
