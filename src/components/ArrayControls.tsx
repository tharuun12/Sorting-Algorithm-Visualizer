import { Settings, Zap, ZapOff } from 'lucide-react';
import { AlgorithmKey, algorithms } from '../utils/sortingAlgorithms';
import { SPEED_CATEGORIES } from '../utils/arrayUtils';
import InstructionsButton from './InstructionsButton.tsx';


interface ArrayControlsProps {
  onGenerateArray: () => void;
  onArraySizeChange: (size: number) => void;
  onAlgorithmChange: (algorithm: AlgorithmKey) => void;
  onSpeedChange: (speed: number) => void;
  arraySize: number;
  selectedAlgorithm: AlgorithmKey;
  speed: number;
  isRunning: boolean;
}

export default function ArrayControls({
  onGenerateArray,
  onArraySizeChange,
  onAlgorithmChange,
  onSpeedChange,
  arraySize,
  selectedAlgorithm,
  speed,
  isRunning,
}: ArrayControlsProps) {
  const getSpeedLabel = (speedValue: number) => {
    if (speedValue <= SPEED_CATEGORIES.SLOW) return 'Slow';
    if (speedValue <= SPEED_CATEGORIES.MEDIUM) return 'Medium';
    if (speedValue <= SPEED_CATEGORIES.FAST) return 'Fast';
    return 'Very Fast';
  };

  const SpeedIcon = speed > SPEED_CATEGORIES.MEDIUM ? Zap : ZapOff;

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md ">
      <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
        <Settings className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-800">Controls</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex justify-between text-sm font-medium text-gray-700">
            <span>Array Size</span>
            <span className="text-indigo-600">{arraySize}</span>
          </label>
          <input
            type="range"
            min="5"
            max="15"  // Updated to match max array size
            value={arraySize}
            onChange={(e) => onArraySizeChange(Number(e.target.value))}
            disabled={isRunning}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center justify-between text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <SpeedIcon className="w-4 h-4 text-indigo-600" />
              <span>Animation Speed</span>
            </div>
            <span className="text-indigo-600">{getSpeedLabel(speed)}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Algorithm
          </label>
          <select
            value={selectedAlgorithm}
            onChange={(e) => onAlgorithmChange(e.target.value as AlgorithmKey)}
            disabled={isRunning}
            className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {Object.entries(algorithms).map(([key, { name }]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={onGenerateArray}
            disabled={isRunning}
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Generate New Array
          </button>
          <InstructionsButton />
        </div>
      </div>
    </div>
  );
}