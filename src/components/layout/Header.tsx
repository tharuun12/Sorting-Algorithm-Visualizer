import { Brain } from 'lucide-react';
//import InstructionsButton from './InstructionsButton.tsx'; - <InstructionsButton />
//import InstructionsButton from './InstructionsButton';

export default function Header() {
  return (
    <header className="text-center py-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Brain className="w-12 h-12 text-indigo-600" />
        <h1 className="text-4xl font-bold text-gray-900">Sorting Algorithm Visualizer</h1>
        
      </div>
      <p className="text-xl text-gray-600">
        Watch and learn how different sorting algorithms work through interactive visualization
      </p>
      
    </header>
  );
}