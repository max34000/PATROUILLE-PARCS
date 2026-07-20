import { APP } from "../../config/appConfig";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCarte: () => void;
  onPatrouille: () => void;
  onTerrain: () => void;
  onNouvelleTournee: () => void;
  onAbout: () => void;
};

export default function MenuDrawer({
  isOpen,
  onClose,
  onCarte,
  onPatrouille,
  onTerrain,
  onNouvelleTournee,
  onAbout,
}: Props) {
  if (!isOpen) return null;

  const item =
    "w-full text-left px-4 py-3 rounded-xl hover:bg-green-700";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      <aside className="fixed left-0 top-0 h-full w-72 bg-green-800 text-white z-50 p-5">

        <h2 className="text-2xl font-bold mb-6">
          ☰ {APP.name}
        </h2>

        <button className={item} onClick={onCarte}>🗺️ Carte</button>

        <button className={item} onClick={onPatrouille}>🚓 Patrouille</button>

        <button className={item} onClick={onTerrain}>📱 Terrain</button>

        <hr className="my-4 border-green-600"/>

        <button className={item} onClick={onNouvelleTournee}>
          🔄 Nouvelle tournée
        </button>

        <hr className="my-4 border-green-600"/>

        <button className={item} onClick={onAbout}>
          ℹ️ À propos
        </button>

        <div className="absolute bottom-5 left-5 text-xs">
          {APP.version}
        </div>
      </aside>
    </>
  );
}