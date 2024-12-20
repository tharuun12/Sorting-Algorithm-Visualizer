import { Code2 } from 'lucide-react';
import { AlgorithmKey } from '../../utils/sortingAlgorithms';
import { algorithmCode } from '../../utils/algorithmCode';

interface CodeViewProps {
  algorithm: AlgorithmKey;
  currentLine: number;
}

export default function CodeView({ algorithm, currentLine }: CodeViewProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 p-4 border-b border-gray-100 bg-gray-50/50">
        <Code2 className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-800">Algorithm Code</h2>
      </div>
      
      <div className="flex-1 overflow-auto bg-gray-900 p-4">
        <pre className="text-sm font-mono">
          {algorithmCode[algorithm].map((line, index) => (
            <div
              key={index}
              className={`py-1 px-2 rounded transition-colors duration-200 ${
                currentLine === index
                  ? 'bg-indigo-500/20 border-l-2 border-indigo-500'
                  : 'hover:bg-gray-800'
              }`}
            >
              <span className="mr-4 text-gray-500">{index + 1}</span>
              <span className="text-gray-100">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}