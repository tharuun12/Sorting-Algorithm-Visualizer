import { Zap, ZapOff } from 'lucide-react';

interface SpeedControlProps {
  speed: number;
  onChange: (speed: number) => void;
}

export default function SpeedControl({ speed, onChange }: SpeedControlProps) {
  const getSpeedLabel = (value: number) => {
    if (value <= 25) return 'Slow';
    if (value <= 50) return 'Medium';
    if (value <= 75) return 'Fast';
    return 'Very Fast';
  };

  const SpeedIcon = speed > 50 ? Zap : ZapOff;

  return (
    <div className="flex flex-col">
      <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
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
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
}