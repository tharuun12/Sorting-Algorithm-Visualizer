import React from 'react';
import Header from './Header';

interface MainLayoutProps {
  controls: React.ReactNode;
  arrayInput: React.ReactNode;
  codeView: React.ReactNode;
  graphView: React.ReactNode;


}

export default function MainLayout({
  controls,
  arrayInput,
  codeView,
  graphView,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Header />
        
        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel - Controls */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            {/* Controls Section */}
            <section className="bg-white rounded-xl shadow-lg">{controls}</section>
            
            {/* Array Input Section */}
            <section className="bg-white rounded-xl shadow-lg">{arrayInput}</section>
          </div>

          {/* Center Panel - Visualization */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-white rounded-xl shadow-lg h-full">
              {graphView}
            </div>  
          </div>

          {/* Right Panel - Code View */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden">
              {codeView}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}