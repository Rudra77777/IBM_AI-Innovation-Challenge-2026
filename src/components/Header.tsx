import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-[hsl(var(--govt-navy))] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">
                Municipal Corporation
              </h1>
              <p className="text-xs text-white/70">
                Infrastructure Management System
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              to="/contractors"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === "/contractors"
                  ? "bg-white/20 rounded"
                  : "hover:text-white/80"
              }`}
            >
              Contractor Selection
            </Link>
            <Link
              to="/report"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === "/report"
                  ? "bg-white/20 rounded"
                  : "hover:text-white/80"
              }`}
            >
              Report Damage
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
