type Props = {
  onStart: () => void;
};

export default function HomeScreen({ onStart }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">

      <h1 className="text-5xl font-bold mb-4">
        🌳
      </h1>

      <h2 className="text-3xl font-bold mb-10">
        PATROUILLE-PARCS
      </h2>

      <button
        onClick={onStart}
        className="bg-white text-green-700 rounded-2xl px-10 py-5 font-bold text-xl shadow-lg"
      >
        🚓 Commencer la tournée
      </button>

    </div>
  );
}