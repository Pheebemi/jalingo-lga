"use client";

import { useState } from "react";
import { TARABA_LGAS, MAP_WIDTH, MAP_HEIGHT } from "@/lib/taraba-map";

const JALINGO_KEY = "jalingo";

/**
 * Full map of Taraba State with Jalingo LGA — the state capital — highlighted;
 * the other 15 LGAs are dimmed as geographic context. Colors adapt to light and
 * dark themes via CSS variables set in globals.css.
 * Geometry: geoBoundaries gbOpen NGA ADM2 (CC BY 4.0) — see lib/taraba-map.ts.
 */
export function JalingoMap() {
  const [hover, setHover] = useState(false);
  const jalingo = TARABA_LGAS.find((s) => s.key === JALINGO_KEY);

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="mx-auto h-auto w-full max-h-[480px]"
        role="img"
        aria-label="Map of Taraba State highlighting Jalingo Local Government Area, the state capital"
      >
        <defs>
          <linearGradient id="jalingoFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
        </defs>

        {/* context LGAs */}
        {TARABA_LGAS.filter((s) => s.key !== JALINGO_KEY).map((s) => (
          <path
            key={s.key}
            d={s.d}
            strokeWidth={1.25}
            style={{
              fill: "var(--map-context-fill)",
              stroke: "var(--map-context-stroke)",
            }}
          />
        ))}

        {/* highlighted Jalingo */}
        {jalingo && (
          <path
            d={jalingo.d}
            fill="url(#jalingoFill)"
            stroke="#ffffff"
            strokeWidth={2.5}
            className="cursor-pointer transition-[filter] duration-200"
            style={{ filter: hover ? "brightness(1.12)" : "none" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        )}

        {/* capital star marker + label */}
        {jalingo && (
          <g pointerEvents="none">
            <circle cx={jalingo.cx} cy={jalingo.cy} r={9} fill="#ffffff" />
            <path
              d="M0,-6 L1.8,-1.9 L6,-1.9 L2.6,0.8 L3.9,5 L0,2.5 L-3.9,5 L-2.6,0.8 L-6,-1.9 L-1.8,-1.9 Z"
              transform={`translate(${jalingo.cx}, ${jalingo.cy})`}
              fill="#f59e0b"
            />
            <text
              x={jalingo.cx}
              y={jalingo.cy - 18}
              textAnchor="middle"
              fontSize={26}
              fontWeight={800}
              style={{
                fill: "var(--map-label-fill)",
                paintOrder: "stroke",
                stroke: "var(--map-label-halo)",
                strokeWidth: 5,
              }}
            >
              Jalingo
            </text>
          </g>
        )}
      </svg>

      <p className="mt-3 text-center text-xs font-medium text-gray-400 dark:text-gray-500">
        Jalingo Local Government Area · Capital of Taraba State
      </p>
    </div>
  );
}
