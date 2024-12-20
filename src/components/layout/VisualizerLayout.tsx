import React from 'react';
import { Brain } from 'lucide-react';

interface VisualizerLayoutProps {
  controls: React.ReactNode;
  arrayInput: React.ReactNode;
  codeView: React.ReactNode;
  graphView: React.ReactNode;
}

export default function VisualizerLayout({
  controls,
  arrayInput,
  codeView,
  graphView,
}: VisualizerLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3">
            <Brain className="w-12 h-12 text-indigo-600" />
            <h1 className="text-4xl font-extrabold text-gray-900">
              Sorting Algorithm Visualizer
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Watch and learn how different sorting algorithms work through interactive visualization
          </p>
        </header>

        {/* Controls Section */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          {controls}
        </section>

        {/* Array Input Section */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          {arrayInput}
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Code View - Takes up 1/3 of the space */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg overflow-hidden">
            {codeView}
          </div>

          {/* Graph View - Takes up 2/3 of the space */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg">
            {graphView}
          </div>
        </div>
      </div>
    </div>
  );
}