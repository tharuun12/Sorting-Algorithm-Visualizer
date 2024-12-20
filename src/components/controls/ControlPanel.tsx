import { Settings } from 'lucide-react';
import ArraySizeControl from './ArraySizeControl';
import SpeedControl from './SpeedControl';
import AlgorithmSelector from './AlgorithmSelector';
import { AlgorithmKey } from '../../utils/sortingAlgorithms';

interface ControlPanelProps {
  arraySize: number;
  speed: number;
  algorithm: AlgorithmKey;
  isRunning: boolean;
  onArraySizeChange: (size: number) => void;
  onSpeedChange: (speed: number) => void;
  onAlgorithmChange: (algorithm: AlgorithmKey) => void;
  onGenerateArray: () => void;
}

export default function ControlPanel({
  arraySize,
  speed,
  algorithm,
  isRunning,
  onArraySizeChange,
  onSpeedChange,
  onAlgorithmChange,
  onGenerateArray,
}: ControlPanelProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-6">
        <Settings className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-800">Controls</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ArraySizeControl
          size={arraySize}
          onChange={onArraySizeChange}
          disabled={isRunning}
        />
        <SpeedControl
          speed={speed}
          onChange={onSpeedChange}
        />
        <AlgorithmSelector
          selected={algorithm}
          onChange={onAlgorithmChange}
          disabled={isRunning}
        />
      </div>
      
      <div className="mt-6">
        <button
          onClick={onGenerateArray}
          disabled={isRunning}
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md
            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500
            focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors duration-200"
        >
          Generate New Array
        </button>
      </div>
    </div>
  );
}