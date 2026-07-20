import { APP } from "../../config/appConfig";

type AboutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutModal({
  isOpen,
  onClose,
}: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-gray-800 rounded-2xl shadow-xl w-[90%] max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center text-green-700">
          🌳 {APP.name}
        </h2>

        <p className="text-center mt-2">
          Version {APP.version}
        </p>

        <p className="text-center font-semibold mt-2">
          {APP.author}
        </p>

        <p className="text-center text-sm text-gray-600 mt-4">
          {APP.description}
        </p>

        <div className="mt-6 space-y-2 text-sm">
  {APP.technologies.map((tech) => (
    <p key={tech}>✓ {tech}</p>
  ))}
</div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 font-bold"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}