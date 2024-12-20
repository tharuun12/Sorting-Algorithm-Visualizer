import { AlgorithmKey } from '../utils/sortingAlgorithms';
import { algorithmCode } from '../utils/algorithmCode';

interface CodeBlockProps {
  algorithm: AlgorithmKey;
  currentLine: number;
}

export default function CodeBlock({ algorithm, currentLine }: CodeBlockProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
      <pre className="text-sm font-mono">
        {algorithmCode[algorithm].map((line, index) => (
          <div
            key={index}
            className={`py-1 px-2 rounded ${
              currentLine === index
                ? 'bg-blue-500/20 border-l-2 border-blue-500'
                : ''
            }`}
          >
            <span className="mr-4 text-gray-500">{index + 1}</span>
            <span className="text-gray-100">{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}