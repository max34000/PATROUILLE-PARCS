type MenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onCarte: () => void;
  onPatrouille: () => void;
  onTerrain: () => void;
  onNouvelleTournee: () => void;
  onSuperviseur: () => void;
  onAbout: () => void;
};

export default function MenuDrawer({
  isOpen,
  onClose,
  onCarte,
  onPatrouille,
  onTerrain,
  onNouvelleTournee,
  onSuperviseur,
  onAbout,
}: MenuDrawerProps) {
  if (!isOpen) return null;

  const itemClass =
    "w-full text-left px-4 py-3 rounded-xl hover:bg-green-700 transition";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      <aside className="fixed top-0 left-0 h-full w-72 bg-green-800 text-white shadow-2xl z-50 p-5">

        <h2 className="text-2xl font-bold mb-6">
          ☰ Menu
        </h2>

        <button className={itemClass} onClick={onCarte}>
          🗺️ Carte
        </button>

        <button className={itemClass} onClick={onPatrouille}>
          🚓 Patrouille
        </button>

        <button className={itemClass} onClick={onTerrain}>
          📱 Terrain
        </button>

        <hr className="my-4 border-green-600" />

        <button className={itemClass} onClick={onNouvelleTournee}>
          🔄 Nouvelle tournée
        </button>

        <hr className="my-4 border-green-600" />

        <button className={itemClass} onClick={onSuperviseur}>
          🔒 Superviseur
        </button>

        <button className={itemClass} onClick={onAbout}>
          ℹ️ À propos
        </button>

        <div className="absolute bottom-6 left-5 text-xs text-green-200">
          Version 3.0.0 FINAL
        </div>
      </aside>
    </>
  );
}