import { motion, AnimatePresence } from 'framer-motion';
import { BarChart } from 'lucide-react';
import { getBarColor, getBarWidth } from '../../utils/visualizerUtils';

interface GraphViewProps {
  array: number[];
  comparing: number[];
  swapping: number[];
  maxValue: number;
}

export default function GraphView({
  array,
  comparing,
  swapping,
  maxValue,
}: GraphViewProps) {

  return (
    <div className=" flex flex-col">
      <div className="flex items-center gap-10 p-4 border-b border-gray-100 bg-gray-50/50">
        <BarChart className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-800">Visualization</h2>
      </div>

      <div className="relative flex-1 flex flex-col p-8">
        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full border-b border-gray-100"
              style={{ bottom: `${(i + 1) * 10}%` }}
            >
              <span className="absolute -left-6 text-xs text-gray-400">
                {Math.round((maxValue * (i + 1)) / 10)}
              </span>
            </div>
          ))}
        </div>

        {/* Bars Container */}
        <div className="relative flex-1 flex items-end justify-center gap-2">
          <AnimatePresence mode="popLayout">
            {array.map((value, index) => {
              const height = (value / maxValue) * 100;
              const barColor = getBarColor({ index, comparing, swapping });
              const barWidth = getBarWidth(array.length);
              const isComparing = comparing.includes(index);
              const isSwapping = swapping.includes(index);

              return (
                <motion.div
                  key={`${index}-${value}`}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    height: `${height}%`,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  exit={{
                    opacity: 0,
                    y: 50,
                    scale: 0.8,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                  style={{ width: barWidth }}
                >
                  <motion.div
                    className={`
                      ${barColor}
                      rounded-t-lg
                      shadow-lg
                      h-full
                      flex
                      items-end
                      justify-center
                      relative
                      ${isComparing ? 'ring-2 ring-yellow-400' : ''}
                      ${isSwapping ? 'ring-2 ring-green-400' : ''}
                    `}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 
                      bg-gray-800 text-white px-2 py-1 rounded text-sm font-medium
                      opacity-0 group-hover:opacity-100 transition-opacity">
                      {value}
                    </span>
                  </motion.div>

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 
                    text-xs text-gray-500 font-medium">
                    {index}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Status Bar */}
        <div className="mt-8 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Comparing: {comparing.join(', ') || 'None'}</span>
            <span>Swapping: {swapping.join(', ') || 'None'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}