type Props = {
  onStart: () => void;
  onResume: () => void;
  onSettings: () => void;
  onAbout: () => void;
};

export default function HomeScreen({
  onStart,
  onResume,
  onSettings,
  onAbout,
}: Props) {
  const button =
    "w-full bg-white text-green-700 rounded-2xl p-5 font-bold text-lg shadow-lg hover:scale-105 transition";

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] max-w-md mx-auto">

      <div className="text-center mb-12">

        <div className="text-7xl mb-4">
          🌳
        </div>

        <h1 className="text-4xl font-bold">
          PATROUILLE-PARCS
        </h1>

        <p className="text-green-100 mt-2">
          CCFF - Maxime B.
        </p>

      </div>

      <div className="flex flex-col gap-4 w-full">

        <button className={button} onClick={onStart}>
          🚓 Nouvelle tournée
        </button>

        <button className={button} onClick={onResume}>
          ▶️ Reprendre la tournée
        </button>

        <button className={button} onClick={onSettings}>
          ⚙️ Paramètres
        </button>

        <button className={button} onClick={onAbout}>
          ℹ️ À propos
        </button>

      </div>

      <p className="text-xs text-green-100 mt-10 text-center">
        Version 1.0 • CCFF
      </p>

    </div>
  );
}