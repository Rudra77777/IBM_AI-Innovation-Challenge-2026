const AnimatedCityBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[hsl(210,60%,85%)] to-[hsl(210,50%,95%)]">
      {/* Sky with clouds */}
      <div className="absolute inset-0">
        {/* Cloud 1 */}
        <div className="animate-clouds absolute top-12">
          <svg width="120" height="50" viewBox="0 0 120 50" className="fill-white/80">
            <ellipse cx="40" cy="30" rx="30" ry="15" />
            <ellipse cx="60" cy="25" rx="25" ry="18" />
            <ellipse cx="85" cy="30" rx="28" ry="14" />
            <ellipse cx="50" cy="35" rx="35" ry="12" />
          </svg>
        </div>
        {/* Cloud 2 */}
        <div className="animate-clouds-2 absolute top-24">
          <svg width="100" height="40" viewBox="0 0 100 40" className="fill-white/70">
            <ellipse cx="30" cy="22" rx="22" ry="12" />
            <ellipse cx="50" cy="18" rx="20" ry="14" />
            <ellipse cx="70" cy="22" rx="22" ry="12" />
          </svg>
        </div>
      </div>

      {/* Sun */}
      <div className="absolute right-16 top-16">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 shadow-lg shadow-yellow-200/50" />
      </div>

      {/* Buildings Skyline */}
      <div className="absolute bottom-20 left-0 right-0 flex items-end justify-center gap-1">
        {/* Building 1 - Tall office */}
        <div className="flex flex-col items-center">
          <div className="h-48 w-16 bg-[hsl(215,40%,35%)] relative">
            <div className="absolute inset-2 grid grid-cols-3 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-yellow-200/60 h-3" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Building 2 - Short wide */}
        <div className="h-28 w-24 bg-[hsl(215,35%,45%)] relative">
          <div className="absolute inset-2 grid grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-yellow-100/50 h-3" />
            ))}
          </div>
        </div>

        {/* Building 3 - Government building with dome */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-8 bg-[hsl(215,30%,50%)] rounded-t-full" />
          <div className="h-32 w-28 bg-[hsl(215,30%,55%)] relative">
            <div className="absolute inset-3 grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white/40 h-4 rounded-sm" />
              ))}
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-10 bg-[hsl(215,40%,40%)]" />
          </div>
        </div>

        {/* Building 4 - Tall modern */}
        <div className="h-56 w-14 bg-[hsl(215,50%,40%)] relative">
          <div className="absolute inset-1 grid grid-cols-2 gap-0.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="bg-cyan-200/40 h-3" />
            ))}
          </div>
        </div>

        {/* Building 5 - Medium */}
        <div className="h-36 w-20 bg-[hsl(215,45%,38%)] relative">
          <div className="absolute inset-2 grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-yellow-100/50 h-3" />
            ))}
          </div>
        </div>

        {/* Building 6 - Short */}
        <div className="h-24 w-18 bg-[hsl(215,38%,48%)] relative">
          <div className="absolute inset-2 grid grid-cols-3 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white/30 h-3" />
            ))}
          </div>
        </div>

        {/* Building 7 - Tall */}
        <div className="h-44 w-12 bg-[hsl(215,42%,42%)] relative">
          <div className="absolute inset-1 grid grid-cols-2 gap-0.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-yellow-200/50 h-2.5" />
            ))}
          </div>
        </div>
      </div>

      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[hsl(0,0%,25%)]">
        {/* Road markings */}
        <div className="absolute top-1/2 left-0 right-0 h-1 flex gap-8 -translate-y-1/2 px-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-12 h-full bg-yellow-400 flex-shrink-0" />
          ))}
        </div>
        {/* Sidewalk */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-[hsl(30,10%,60%)]" />
      </div>

      {/* Car 1 - Moving right */}
      <div className="animate-car absolute bottom-5">
        <svg width="80" height="35" viewBox="0 0 80 35" className="drop-shadow-md">
          {/* Car body */}
          <rect x="5" y="15" width="70" height="15" rx="3" fill="hsl(215, 70%, 45%)" />
          <path d="M20 15 Q25 5 40 5 Q55 5 60 15" fill="hsl(215, 70%, 45%)" />
          {/* Windows */}
          <path d="M24 14 Q28 7 40 7 Q52 7 56 14" fill="hsl(200, 80%, 85%)" />
          {/* Wheels */}
          <circle cx="22" cy="30" r="6" fill="hsl(0, 0%, 20%)" />
          <circle cx="22" cy="30" r="3" fill="hsl(0, 0%, 40%)" />
          <circle cx="58" cy="30" r="6" fill="hsl(0, 0%, 20%)" />
          <circle cx="58" cy="30" r="3" fill="hsl(0, 0%, 40%)" />
          {/* Headlight */}
          <rect x="72" y="18" width="4" height="4" rx="1" fill="hsl(50, 100%, 70%)" />
        </svg>
      </div>

      {/* Car 2 - Moving right (different speed) */}
      <div className="animate-car-2 absolute bottom-6">
        <svg width="70" height="30" viewBox="0 0 70 30" className="drop-shadow-md">
          {/* Car body */}
          <rect x="5" y="12" width="60" height="13" rx="3" fill="hsl(0, 65%, 50%)" />
          <path d="M18 12 Q22 4 35 4 Q48 4 52 12" fill="hsl(0, 65%, 50%)" />
          {/* Windows */}
          <path d="M21 11 Q24 6 35 6 Q46 6 49 11" fill="hsl(200, 80%, 85%)" />
          {/* Wheels */}
          <circle cx="18" cy="25" r="5" fill="hsl(0, 0%, 20%)" />
          <circle cx="18" cy="25" r="2.5" fill="hsl(0, 0%, 40%)" />
          <circle cx="52" cy="25" r="5" fill="hsl(0, 0%, 20%)" />
          <circle cx="52" cy="25" r="2.5" fill="hsl(0, 0%, 40%)" />
          {/* Headlight */}
          <rect x="62" y="15" width="3" height="3" rx="1" fill="hsl(50, 100%, 70%)" />
        </svg>
      </div>

      {/* Trees */}
      <div className="absolute bottom-20 left-8 flex gap-6">
        <TreeSVG />
        <TreeSVG />
      </div>
      <div className="absolute bottom-20 right-12 flex gap-4">
        <TreeSVG />
      </div>
    </div>
  );
};

const TreeSVG = () => (
  <svg width="30" height="50" viewBox="0 0 30 50">
    <rect x="12" y="35" width="6" height="15" fill="hsl(30, 40%, 35%)" />
    <ellipse cx="15" cy="25" rx="14" ry="18" fill="hsl(120, 40%, 35%)" />
    <ellipse cx="15" cy="20" rx="10" ry="12" fill="hsl(120, 45%, 40%)" />
  </svg>
);

export default AnimatedCityBackground;
