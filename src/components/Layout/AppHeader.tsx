type AppHeaderProps = {
  gpsConnected: boolean;
  onMenuClick: () => void;
};

export default function AppHeader({
  gpsConnected,
  onMenuClick,
}: AppHeaderProps) {
  return (
    <header className="bg-green-800 rounded-2xl p-4 mb-6 shadow-lg">
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-white">
            🌳 PATROUILLE-PARCS
          </h1>

          <p className="text-green-100 text-sm">
            CCFF
          </p>
        </div>

        <div className="flex items-center gap-4">

          <div className="flex items-center gap-2 text-sm">

            <span>
              {gpsConnected ? "🟢" : "🔴"}
            </span>

            <span>
              {gpsConnected ? "GPS connecté" : "GPS indisponible"}
            </span>

          </div>

          <button
            onClick={onMenuClick}
            className="text-3xl"
            aria-label="Menu"
          >
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}