const IconBase = ({ children, size = 24, className = "", fill = "none", strokeWidth = 2, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={fill} 
    stroke="currentColor" 
    strokeWidth={strokeWidth}
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export const Home = (props) => (
  <IconBase {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </IconBase>
);

export const Volume2 = (props) => (
  <IconBase {...props}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  </IconBase>
);

export const Star = (props) => (
  <IconBase {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </IconBase>
);

export const ShoppingBag = (props) => (
  <IconBase {...props}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </IconBase>
);

export const Smile = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </IconBase>
);

export const ChevronRight = (props) => (
  <IconBase {...props}>
    <path d="m9 18 6-6-6-6"/>
  </IconBase>
);

export const CheckCircle2 = (props) => (
  <IconBase {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </IconBase>
);

export const XCircle = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10"/>
    <path d="m15 9-6 6"/>
    <path d="m9 9 6 6"/>
  </IconBase>
);

export const Cloud = (props) => (
  <IconBase {...props}>
    <path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"/>
    <path d="M17.5 19a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 17.5 8"/>
    <path d="M6.5 19c0-3.037 2.463-5.5 5.5-5.5S17.5 15.963 17.5 19"/>
    <path d="M6.5 19a5.5 5.5 0 0 1-5.5-5.5A5.5 5.5 0 0 1 6.5 8"/>
    <path d="M12 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
  </IconBase>
);

export const Heart = (props) => (
  <IconBase {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </IconBase>
);

export const Music = (props) => (
  <IconBase {...props}>
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </IconBase>
);

export const Moon = (props) => (
  <IconBase {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </IconBase>
);

export const Sparkles = (props) => (
  <IconBase {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M9 5H5"/>
    <path d="M19 3v4"/>
    <path d="M15 5h4"/>
    <path d="M15 19h4"/>
    <path d="M19 21v-4"/>
    <path d="M5 21v-4"/>
    <path d="M9 19H5"/>
  </IconBase>
);

export const Trophy = (props) => (
  <IconBase {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </IconBase>
);

export const ArrowRight = (props) => (
  <IconBase {...props}>
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </IconBase>
);

export const ArrowLeft = (props) => (
  <IconBase {...props}>
    <path d="M19 12H5"/>
    <path d="m12 19-7-7 7-7"/>
  </IconBase>
);

export const Balloon = (props) => (
  <IconBase {...props}>
    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
    <path d="M12 22v-3" />
  </IconBase>
);