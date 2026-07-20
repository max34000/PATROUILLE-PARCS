type ConfirmDialogProps = {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmLabel = "Confirmer",
  cancelLabel = "Annuler",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-green-700">
          {title}
        </h2>

        <p className="mt-4 text-gray-700">
          {message}
        </p>

        <div className="flex gap-3 mt-8">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-gray-300 py-3"
          >
            {cancelLabel}
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-green-700 text-white py-3"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}