function PatrolMode() {
  return (
    <div className="fixed inset-0 bg-green-700 text-white flex flex-col items-center justify-center p-6">

      <h1 className="text-4xl font-bold mb-8">
        🚓 Mode Patrouille
      </h1>

      <button className="w-full max-w-md bg-white text-green-700 text-2xl font-bold py-6 rounded-2xl shadow-xl mb-6">
        🚗 Y ALLER
      </button>

      <button className="w-full max-w-md bg-green-500 text-white text-2xl font-bold py-6 rounded-2xl shadow-xl">
        ✅ PARC FERMÉ
      </button>

    </div>
  );
}

export default PatrolMode;