interface ArraySizeControlProps {
  size: number ;
  onChange: (size: number) => void;
  disabled: boolean;
}

export default function ArraySizeControl({ size, onChange, disabled }: ArraySizeControlProps) {
  return (
    <div className="flex flex-col">
      <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
        <span>Array Size</span>
        <span className="text-indigo-600">{size}</span>
      </label>
      <input
        type="range"
        min="5"
        max="14"
        value={size}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
}