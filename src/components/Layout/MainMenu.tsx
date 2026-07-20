type Props = {
  modePatrouille: boolean;
  modeTerrain: boolean;

  onCarte: () => void;
  onPatrouille: () => void;
  onTerrain: () => void;
};

export default function MainMenu({
  modePatrouille,
  modeTerrain,
  onCarte,
  onPatrouille,
  onTerrain,
}: Props) {
  const bouton =
    "rounded-2xl p-4 flex-1 font-bold transition";

  return (
    <div className="flex gap-3 mb-6">

      <button
        onClick={onCarte}
        className={`${bouton} ${
          !modePatrouille && !modeTerrain
            ? "bg-green-900 text-white"
            : "bg-white text-green-700"
        }`}
      >
        🗺️ Carte
      </button>

      <button
        onClick={onPatrouille}
        className={`${bouton} ${
          modePatrouille
            ? "bg-green-900 text-white"
            : "bg-white text-green-700"
        }`}
      >
        🚓 Patrouille
      </button>

      <button
        onClick={onTerrain}
        className={`${bouton} ${
          modeTerrain
            ? "bg-green-900 text-white"
            : "bg-white text-green-700"
        }`}
      >
        📱 Terrain
      </button>

    </div>
  );
}