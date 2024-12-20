import { Brain } from 'lucide-react';

export default function PageHeader() {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-3">
        <Brain className="w-10 h-10 text-indigo-600" />
        <h1 className="text-4xl font-extrabold text-gray-900">Sorting Algorithm Visualizer</h1>
      </div>
      <p className="text-lg text-gray-700 mt-4">
        Watch and learn how different sorting algorithms work through interactive visualization.
      </p>
    </header>
  );
}