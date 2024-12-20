import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause, RotateCcw, Settings, Sliders, Binary, ChevronRight } from 'lucide-react';

export default function InstructionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center mb-12">
          <Link
            to="/"
            className="group flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Return to Visualizer</span>
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            How to Use the Sorting Visualizer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A step-by-step guide to help you explore and understand different sorting algorithms through our interactive visualization tool
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Quick Start Guide */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="border-b border-gray-100 p-6">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <Settings className="w-7 h-7 text-indigo-600" />
                Quick Start Guide
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Follow these simple steps to get started:
                </p>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">1</span>
                    <div>
                      <p className="font-medium text-gray-900">Choose Your Array Size</p>
                      <p className="text-gray-700">Use the slider to select how many numbers you want to sort (between 5-14 elements)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">2</span>
                    <div>
                      <p className="font-medium text-gray-900">Select a Sorting Algorithm</p>
                      <p className="text-gray-700">Pick from Bubble Sort, Selection Sort, or Insertion Sort to see how they work</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">3</span>
                    <div>
                      <p className="font-medium text-gray-900">Adjust Animation Speed</p>
                      <p className="text-gray-700">Set how fast you want to see the sorting process - slower speeds are better for learning</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">4</span>
                    <div>
                      <p className="font-medium text-gray-900">Start Visualizing!</p>
                      <p className="text-gray-700">Press the Play button and watch how the algorithm sorts your numbers</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Main Controls */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="border-b border-gray-100 p-6">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <Sliders className="w-7 h-7 text-indigo-600" />
                Main Controls Explained
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-600 rounded-lg">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">Start Button</h3>
                  </div>
                  <p className="text-gray-700">Press this to begin the sorting visualization. The algorithm will start arranging the numbers from smallest to largest.</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-600 rounded-lg">
                      <Pause className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">Pause Button</h3>
                  </div>
                  <p className="text-gray-700">Click this to pause the animation at any time. Great for studying how the algorithm makes its decisions.</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-600 rounded-lg">
                      <RotateCcw className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">Reset Button</h3>
                  </div>
                  <p className="text-gray-700">Use this to generate a new random array or start over. You can reset at any time, even mid-sort.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="border-b border-gray-100 p-6">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <Binary className="w-7 h-7 text-indigo-600" />
                Customization Options
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group p-6 bg-white rounded-xl border-2 border-indigo-100 hover:border-indigo-300 transition-colors">
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    Array Size Slider
                  </h3>
                  <p className="text-gray-700">
                    Move the slider left or right to change how many numbers you want to sort. Fewer numbers (5-8) are better for learning, while more numbers (9-14) show interesting patterns.
                  </p>
                </div>

                <div className="group p-6 bg-white rounded-xl border-2 border-green-100 hover:border-green-300 transition-colors">
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                    Speed Control (Coming Soon!!!)
                  </h3>
                  <p className="text-gray-700">
                    Choose your visualization speed:
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="font-medium">Slow:</span> Best for understanding each step (recommended for beginners)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="font-medium">Medium:</span> Good balance of speed and clarity
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="font-medium">Fast:</span> Quickly see the full sorting process
                    </li>
                  </ul>
                </div>

                <div className="group p-6 bg-white rounded-xl border-2 border-yellow-100 hover:border-yellow-300 transition-colors">
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-yellow-600 group-hover:translate-x-1 transition-transform" />
                    Custom Numbers
                  </h3>
                  <p className="text-gray-700">
                    Want to try specific numbers? Click "Custom Input" and type your numbers separated by commas (e.g., "5, 2, 8, 1"). Make sure to stay within the size limit (5-14 numbers).
                  </p>
                </div>

                <div className="group p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-colors">
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    Algorithm Types
                  </h3>
                  <p className="text-gray-700">
                    Available sorting methods:
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Bubble Sort:</span> Repeatedly steps through the list, compares adjacent elements and swaps them if needed
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Selection Sort:</span> Finds the smallest element and moves it to the beginning, then repeats
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium">Insertion Sort:</span> Builds the final sorted array one item at a time
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding the Colors */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="border-b border-gray-100 p-6">
              <h2 className="text-2xl font-semibold">Understanding the Colors</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg shadow-md mt-1"></div>
                  <div>
                    <span className="font-medium text-gray-900 block mb-1">Yellow Bars</span>
                    <span className="text-gray-700">Shows which numbers are being compared right now</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-lg shadow-md mt-1"></div>
                  <div>
                    <span className="font-medium text-gray-900 block mb-1">Green Bars</span>
                    <span className="text-gray-700">Indicates numbers that are being swapped to their new positions</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg shadow-md mt-1"></div>
                  <div>
                    <span className="font-medium text-gray-900 block mb-1">Blue Bars</span>
                    <span className="text-gray-700">Shows numbers that haven't been sorted yet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}