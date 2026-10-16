import React from 'react';

interface LogoMRAqiqahProps {
  className?: string;
  size?: number | string;
}

export const LogoMRAqiqah: React.FC<LogoMRAqiqahProps> = ({ className = '', size = 52 }) => {
  return (
    <svg
      viewBox="0 0 280 230"
      width={size}
      height={typeof size === 'number' ? (size * 230) / 280 : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="Logo MR Aqiqah & Catering"
    >
      <defs>
        {/* Soft shadow for depth */}
        <filter id="mr-logo-shadow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#1b1c19" floodOpacity="0.18" />
        </filter>

        {/* Outer border gradient */}
        <linearGradient id="mr-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d5caa7" />
          <stop offset="50%" stopColor="#eee6cb" />
          <stop offset="100%" stopColor="#b4a378" />
        </linearGradient>

        {/* Vintage olive-brown background fill */}
        <linearGradient id="mr-bg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5d491f" />
          <stop offset="50%" stopColor="#524119" />
          <stop offset="100%" stopColor="#433413" />
        </linearGradient>
      </defs>

      {/* Main Ornate Crest Outline */}
      <g filter="url(#mr-logo-shadow)">
        {/* Outer scalloped path */}
        <path
          d="M 140 12
             C 152 32, 172 38, 194 36
             C 214 34, 230 46, 238 64
             C 246 82, 258 96, 274 104
             C 258 116, 246 130, 238 148
             C 230 166, 214 178, 194 176
             C 172 174, 152 180, 140 200
             C 128 180, 108 174, 86 176
             C 66 178, 50 166, 42 148
             C 34 130, 22 116, 6 104
             C 22 96, 34 82, 42 64
             C 50 46, 66 34, 86 36
             C 108 38, 128 32, 140 12 Z"
          fill="url(#mr-border-grad)"
        />

        {/* Inner scalloped background */}
        <path
          d="M 140 20
             C 150 38, 169 44, 190 42
             C 208 40, 223 51, 230 67
             C 237 83, 248 96, 263 104
             C 248 114, 237 127, 230 143
             C 223 159, 208 170, 190 168
             C 169 166, 150 172, 140 190
             C 130 172, 111 166, 90 168
             C 72 170, 57 159, 50 143
             C 43 127, 32 114, 17 104
             C 32 96, 43 83, 50 67
             C 57 51, 72 40, 90 42
             C 111 44, 130 38, 140 20 Z"
          fill="url(#mr-bg-grad)"
        />

        {/* Fine inner accent border */}
        <path
          d="M 140 26
             C 149 42, 167 48, 187 46
             C 204 44, 218 54, 224 69
             C 230 84, 240 96, 254 104
             C 240 112, 230 124, 224 139
             C 218 154, 204 164, 187 162
             C 167 160, 149 166, 140 182
             C 131 166, 113 160, 93 162
             C 76 164, 62 154, 56 139
             C 50 124, 40 112, 26 104
             C 40 96, 50 84, 56 69
             C 62 54, 76 44, 93 46
             C 113 48, 131 42, 140 26 Z"
          fill="none"
          stroke="#cfc3a0"
          strokeWidth="1.2"
          strokeDasharray="2 1"
          opacity="0.85"
        />
      </g>

      {/* Spoon & Fork Emblem (Left) */}
      <g transform="translate(68, 68) scale(0.72)">
        {/* Fork */}
        <path
          d="M 4 8 L 4 22 C 4 28 8 32 13 33 L 13 48 C 13 50 15 52 17 52 C 19 52 21 50 21 48 L 21 33 C 26 32 30 28 30 22 L 30 8 L 27 8 L 27 20 C 27 23 25 25 22 25 L 22 8 L 19 8 L 19 25 L 15 25 L 15 8 L 12 8 L 12 25 C 9 25 7 23 7 20 L 7 8 Z"
          fill="#ffffff"
        />
        {/* Spoon */}
        <path
          d="M 33 2 C 26 2 22 10 22 18 C 22 26 26 32 31 34 L 30 48 C 30 50 32 52 34 52 C 36 52 38 50 38 48 L 37 34 C 42 32 46 26 46 18 C 46 10 42 2 35 2 Z"
          fill="#ffffff"
        />
        {/* Ribbon banner wrapped below */}
        <path
          d="M -2 34 Q 16 38 34 32 Q 46 28 54 36 L 50 44 Q 40 38 30 42 Q 14 46 0 42 Z"
          fill="#ffffff"
        />
      </g>

      {/* Main Calligraphic "MR" */}
      <g fill="#ffffff">
        {/* Stylized M with flourish */}
        <path
          d="M 122 75
             C 120 70, 114 68, 108 72
             C 101 77, 98 86, 100 96
             C 103 110, 107 122, 109 130
             C 110 134, 114 135, 117 132
             C 119 130, 120 125, 118 118
             L 115 104
             C 120 92, 126 84, 134 81
             C 142 78, 148 83, 149 93
             C 151 106, 153 118, 154 128
             C 155 132, 159 133, 161 130
             L 160 114
             C 165 96, 172 82, 180 81
             C 187 80, 191 85, 192 94
             L 194 125
             C 195 132, 201 134, 205 130
             C 207 128, 206 123, 205 118
             L 204 98
             C 203 82, 196 72, 184 72
             C 174 72, 166 79, 160 90
             C 156 80, 148 74, 137 74
             C 129 74, 124 77, 122 81 Z"
          opacity="0.98"
        />

        {/* Elegant R with swash and leg */}
        <path
          d="M 198 75
             C 198 71, 203 68, 209 68
             C 219 68, 236 69, 246 76
             C 255 83, 258 92, 255 102
             C 252 112, 243 119, 233 121
             C 241 127, 248 135, 258 143
             C 263 147, 265 151, 263 153
             C 260 155, 254 154, 247 148
             C 238 140, 231 132, 225 125
             L 220 125
             L 218 146
             C 217 151, 214 153, 209 152
             C 205 151, 205 147, 206 142
             L 212 90
             C 213 82, 211 78, 203 78
             L 199 78 Z
             M 222 84
             L 218 112
             C 225 112, 233 110, 237 106
             C 242 101, 243 94, 241 89
             C 239 84, 232 83, 222 84 Z"
        />
      </g>

      {/* Subtitle Typography: "Aqiqah & Catering" */}
      <text
        x="140"
        y="166"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="'Playfair Display', 'Cinzel', serif"
        fontSize="17.5"
        fontWeight="600"
        letterSpacing="0.04em"
      >
        Aqiqah &amp; Catering
      </text>
    </svg>
  );
};
