import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBarColor, getBarWidth } from '../utils/visualizerUtils';

interface ArrayVisualizerProps {
  array: number[];
  comparing: number[];
  swapping: number[];
  maxValue: number;
}

export default function ArrayVisualizer({
  array,
  comparing,
  swapping,
  maxValue,
}: ArrayVisualizerProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  //relative flex flex-col h-[700px] w-[1000px] p-12 rounded-3xl shadow-2xl border-4 border-slate-300 bg-gradient-to-br
  return (
    <div className="relative flex flex-col w-[700px] h-[550px] p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-2xl border-2 border-slate-200">
      <div className="flex-1 flex items-end justify-center space-x-4">
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
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  scale: 0.8 
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  height: `${height}%`,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.5
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 50,
                  scale: 0.8,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
                style={{ 
                  width: barWidth,
                  minWidth: '30px'
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Bar with Improved Value Display */}
                <motion.div
                  className={`
                    ${barColor}
                    rounded-t-xl 
                    transition-all 
                    duration-300 
                    h-full 
                    flex 
                    items-end 
                    justify-center 
                    relative 
                    overflow-hidden
                    shadow-md
                    ${isComparing ? 'ring-4 ring-blue-400/50' : ''}
                    ${isSwapping ? 'ring-4 ring-red-400/50' : ''}
                  `}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Value Overlay */}
                  <div className="absolute inset-0 flex items-end justify-center pb-2">
                    <span className="text-white font-bold text-sm bg-black/30 px-2 py-1 rounded-full">
                      {value}
                    </span>
                  </div>
                </motion.div>

                {/* Hover Tooltip */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-14 left-1/2 transform -translate-x-1/2 
                        bg-slate-800 text-white px-4 py-2 rounded-lg 
                        text-sm font-medium shadow-xl z-10 
                        border border-slate-700"
                    >
                      <div className="flex space-x-2">
                        <span>Value: {value}</span>
                        <span className="opacity-70">| Index: {index}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Index Label */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                  text-xs text-slate-600 font-medium bg-slate-100 
                  px-3 py-1 rounded-full shadow-sm">
                  {index}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-full border-b border-slate-200 opacity-40" 
              style={{ bottom: `${(i + 1) * 10}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}