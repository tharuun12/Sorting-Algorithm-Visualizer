import { AlgorithmKey, algorithms } from '../../utils/sortingAlgorithms';

interface AlgorithmSelectorProps {
  selected: AlgorithmKey;
  onChange: (algorithm: AlgorithmKey) => void;
  disabled: boolean;
}

export default function AlgorithmSelector({ selected, onChange, disabled }: AlgorithmSelectorProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">
        Algorithm
      </label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value as AlgorithmKey)}
        disabled={disabled}
        className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {Object.entries(algorithms).map(([key, { name }]) => (
          <option key={key} value={key}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}