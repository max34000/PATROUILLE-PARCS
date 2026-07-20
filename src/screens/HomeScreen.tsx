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
    "w-full bg-white text-green-700 rounded-2xl p-5 font-bold text-lg shadow hover:scale-[1.02] transition";

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] max-w-md mx-auto">

      <h1 className="text-6xl mb-4">🌳</h1>

      <h2 className="text-3xl font-bold mb-10 text-center">
        PATROUILLE-PARCS
      </h2>

      <div className="flex flex-col gap-4 w-full">

        <button className={button} onClick={onStart}>
          🚓 Commencer une tournée
        </button>

        <button className={button} onClick={onResume}>
          📋 Reprendre la tournée
        </button>

        <button className={button} onClick={onSettings}>
          ⚙️ Paramètres
        </button>

        <button className={button} onClick={onAbout}>
          ℹ️ À propos
        </button>

      </div>

    </div>
  );
}