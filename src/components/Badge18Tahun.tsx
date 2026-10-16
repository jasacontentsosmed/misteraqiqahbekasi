import React from 'react';

interface Badge18TahunProps {
  className?: string;
  size?: number | string;
}

export const Badge18Tahun: React.FC<Badge18TahunProps> = ({ className = '', size = 56 }) => {
  // Generate 48 pleated rosette petals for the realistic ruffled ribbon edge
  const pleatCount = 48;
  const pleats = Array.from({ length: pleatCount }, (_, i) => {
    const angle = (i * 360) / pleatCount;
    return angle;
  });

  return (
    <svg
      viewBox="0 0 240 300"
      width={size}
      height={typeof size === 'number' ? (size * 300) / 240 : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="Medali 18 Tahun MR Aqiqah Catering Melayani Keluarga Jabodetabek 2008 - 2026"
    >
      <defs>
        {/* Shadow for medal and ribbon */}
        <filter id="badge-shadow" x="-20%" y="-10%" width="140%" height="130%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.22" />
        </filter>

        {/* Gold medallion gradients */}
        <linearGradient id="gold-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="25%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#fef08a" />
          <stop offset="75%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>

        <linearGradient id="gold-face" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef7dc" />
          <stop offset="35%" stopColor="#f3dd91" />
          <stop offset="70%" stopColor="#dfbd59" />
          <stop offset="100%" stopColor="#eed585" />
        </linearGradient>

        {/* Red ribbon gradients */}
        <linearGradient id="ribbon-red-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a0c14" />
          <stop offset="40%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#73070e" />
        </linearGradient>

        <linearGradient id="ribbon-red-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#991b1b" />
          <stop offset="50%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>

        <linearGradient id="gold-trim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#fff3b0" />
          <stop offset="100%" stopColor="#aa7c11" />
        </linearGradient>

        {/* Text Paths for circular curved text */}
        {/* Top curved path (clockwise for readable text on top) */}
        <path
          id="top-text-arc"
          d="M 45 106 A 65 65 0 0 1 195 106"
          fill="none"
        />

        {/* Bottom curved path */}
        <path
          id="bottom-text-arc"
          d="M 45 106 A 65 65 0 0 0 195 106"
          fill="none"
        />
      </defs>

      <g filter="url(#badge-shadow)">
        {/* --- HANGING RED SATIN RIBBONS (Behind Rosette) --- */}
        {/* Left Ribbon */}
        <g>
          <path
            d="M 94 135 L 42 270 L 68 250 L 116 270 L 118 135 Z"
            fill="url(#ribbon-red-left)"
          />
          {/* Gold stripes on left ribbon */}
          <path
            d="M 91 138 L 47 262 L 52 258 L 94 138 Z"
            fill="url(#gold-trim)"
            opacity="0.9"
          />
          <path
            d="M 112 138 L 109 262 L 104 258 L 107 138 Z"
            fill="url(#gold-trim)"
            opacity="0.9"
          />
        </g>

        {/* Right Ribbon */}
        <g>
          <path
            d="M 122 135 L 124 270 L 172 250 L 198 270 L 146 135 Z"
            fill="url(#ribbon-red-right)"
          />
          {/* Gold stripes on right ribbon */}
          <path
            d="M 128 138 L 131 258 L 136 262 L 133 138 Z"
            fill="url(#gold-trim)"
            opacity="0.9"
          />
          <path
            d="M 149 138 L 188 258 L 193 262 L 154 138 Z"
            fill="url(#gold-trim)"
            opacity="0.9"
          />
        </g>

        {/* --- PLEATED RUFFLED RED ROSETTE --- */}
        <g transform="translate(120, 106)">
          {pleats.map((angle, idx) => (
            <polygon
              key={idx}
              points="0,-86 7,-78 0,-72 -7,-78"
              transform={`rotate(${angle})`}
              fill={idx % 2 === 0 ? '#b91c1c' : '#e11d48'}
            />
          ))}
          {/* Inner ring behind medal */}
          <circle r="76" fill="#991b1b" />
        </g>

        {/* --- SHINY GOLD MEDAL DISC --- */}
        {/* Outer Gold Bevel */}
        <circle cx="120" cy="106" r="72" fill="url(#gold-bevel)" />
        <circle cx="120" cy="106" r="69" fill="#8c5f0a" opacity="0.4" />
        {/* Main Brushed Gold Surface */}
        <circle cx="120" cy="106" r="67" fill="url(#gold-face)" />

        {/* Concentric Inner Ring */}
        <circle
          cx="120"
          cy="106"
          r="54"
          fill="none"
          stroke="#b8860b"
          strokeWidth="1.2"
        />

        {/* --- CURVED TYPOGRAPHY --- */}
        {/* Top Arc: "MR Aqiqah Catering" */}
        <text
          fill="#1b1c19"
          fontSize="10"
          fontWeight="800"
          letterSpacing="0.08em"
          fontFamily="'Manrope', 'Inter', sans-serif"
        >
          <textPath href="#top-text-arc" startOffset="50%" textAnchor="middle">
            MR Aqiqah Catering
          </textPath>
        </text>

        {/* Bottom Arc: "Melayani Keluarga Jabodetabek" */}
        <text
          fill="#1b1c19"
          fontSize="7.5"
          fontWeight="700"
          letterSpacing="0.04em"
          fontFamily="'Manrope', 'Inter', sans-serif"
        >
          <textPath href="#bottom-text-arc" startOffset="50%" textAnchor="middle">
            Melayani Keluarga Jabodetabek
          </textPath>
        </text>

        {/* --- CENTER METRIC: "18 Tahun" --- */}
        <g transform="translate(120, 106)">
          {/* 18 */}
          <text
            x="0"
            y="-2"
            textAnchor="middle"
            fill="#991b1b"
            fontSize="38"
            fontWeight="900"
            fontFamily="'Playfair Display', 'Cinzel', serif"
            letterSpacing="-0.02em"
          >
            18
          </text>

          {/* Tahun */}
          <text
            x="0"
            y="17"
            textAnchor="middle"
            fill="#991b1b"
            fontSize="14.5"
            fontWeight="800"
            fontFamily="'Manrope', 'Inter', sans-serif"
            letterSpacing="0.01em"
          >
            Tahun
          </text>

          {/* 2008 - 2026 */}
          <text
            x="0"
            y="29"
            textAnchor="middle"
            fill="#1b1c19"
            fontSize="7.5"
            fontWeight="800"
            fontFamily="'Inter', monospace"
            letterSpacing="0.05em"
          >
            2008 - 2026
          </text>
        </g>
      </g>
    </svg>
  );
};
