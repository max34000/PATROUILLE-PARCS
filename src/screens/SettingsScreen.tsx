export default function SettingsScreen() {
  return (
    <div className="max-w-xl mx-auto">

      <h2 className="text-3xl font-bold mb-6">
        ⚙️ Paramètres
      </h2>

      <div className="bg-white text-black rounded-2xl p-6 shadow">

        <p className="font-semibold mb-4">
          Les paramètres arriveront progressivement.
        </p>

        <ul className="space-y-3">
          <li>☐ Mode sombre</li>
          <li>☐ Notifications</li>
          <li>☐ Distance (km / m)</li>
          <li>☐ Navigation par défaut</li>
          <li>☐ Export PDF</li>
          <li>☐ Réinitialiser l'application</li>
        </ul>

      </div>

    </div>
  );
}