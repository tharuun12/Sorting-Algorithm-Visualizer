import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface ArrayInputProps {
  onArraySubmit: (arr: number[]) => void;
  isRunning: boolean;
}

export default function ArrayInput({ onArraySubmit, isRunning }: ArrayInputProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const arr = input
        .split(',')
        .map(num => {
          const parsed = parseInt(num.trim(), 10);
          if (isNaN(parsed)) throw new Error('Invalid number');
          return parsed;
        });

      if (arr.length < 2) {
        setError('Please enter at least 2 numbers');
        return;
      }

      if (arr.length > 100) {
        setError('Maximum array size is 100');
        return;
      }

      onArraySubmit(arr);
      setInput('');
    } catch (err) {
      setError('Please enter valid numbers separated by commas');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="array-input" className="text-sm font-medium text-gray-700">
          Custom Array Input
        </label>
        <div className="flex gap-2">
          <input
            id="array-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isRunning}
            placeholder="Enter numbers separated by commas (e.g., 4,2,7,1)"
            className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isRunning}
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            Set Array
          </button>
        </div>
        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}
      </div>
    </form>
  );
}