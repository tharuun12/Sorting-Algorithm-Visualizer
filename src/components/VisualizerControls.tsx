import React from 'react';
import { Play, Pause, RotateCcw, StepForward } from 'lucide-react';

interface VisualizerControlsProps {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onStep: () => void;
  isRunning: boolean;
  canStep: boolean;
}

export default function VisualizerControls({
  onStart,
  onPause,
  onReset,
  onStep,
  isRunning,
  canStep,
}: VisualizerControlsProps) {
  return (
    <div className="flex justify-center gap-4 p-4">
      {!isRunning ? (
        <button
          onClick={onStart}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <Play className="w-5 h-5" />
          Start
        </button>
      ) : (
        <button
          onClick={onPause}
          className="flex items-center gap-2 px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          <Pause className="w-5 h-5" />
          Pause
        </button>
      )}

      <button
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        <RotateCcw className="w-5 h-5" />
        Reset
      </button>

      <button
        onClick={onStep}
        disabled={!canStep || isRunning}
        className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <StepForward className="w-5 h-5" />
        Step
      </button>
    </div>
  );
}