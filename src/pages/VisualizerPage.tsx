import { useState, useCallback, useRef, useEffect } from 'react';
import { AlgorithmKey, SortingState, algorithms } from '../utils/sortingAlgorithms';
import { generateRandomArray } from '../utils/arrayUtils';
import ArrayControls from '../components/ArrayControls';
import VisualizerControls from '../components/VisualizerControls';
import ArrayVisualizer from '../components/ArrayVisualizer';
import ArrayInput from '../components/ArrayInput';
import CodeBlock from '../components/CodeBlock';
import InstructionsButton from '../components/InstructionsButton';
import PageHeader from '../components/layout/PageHeader';
import { algorithmCode } from '../utils/algorithmCode';

export default function VisualizerPage() {
  const [array, setArray] = useState(() => generateRandomArray(15));
  const [arraySize, setArraySize] = useState(15);
  const [speed, setSpeed] = useState(50);
  const [algorithm, setAlgorithm] = useState<AlgorithmKey>('bubble');
  const [isRunning, setIsRunning] = useState(false);
  const [comparing, setComparing] = useState<number[]>([]);
  const [swapping, setSwapping] = useState<number[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const sortingGenerator = useRef<Generator<SortingState> | null>(null);
  const animationFrame = useRef<number | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const handleGenerateArray = useCallback(() => {
    const newArray = generateRandomArray(arraySize);
    setArray(newArray);
    setComparing([]);
    setSwapping([]);
    setCurrentLine(0);
    sortingGenerator.current = null;
  }, [arraySize]);

  const handleArraySizeChange = useCallback((size: number) => {
    setArraySize(size);
    handleGenerateArray();
  }, [handleGenerateArray]);

  const handleCustomArray = useCallback((newArray: number[]) => {
    setArray(newArray);
    setArraySize(newArray.length);
    setComparing([]);
    setSwapping([]);
    setCurrentLine(0);
    sortingGenerator.current = null;
  }, []);

  const handleAlgorithmChange = useCallback((newAlgorithm: AlgorithmKey) => {
    setAlgorithm(newAlgorithm);
    setCurrentLine(0);
    sortingGenerator.current = null;
  }, []);

  const reset = useCallback(() => {
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    if (timeoutId.current) clearTimeout(timeoutId.current);

    setIsRunning(false);
    setCurrentLine(0);
    handleGenerateArray();
  }, [handleGenerateArray]);

  const step = useCallback(() => {
    if (!sortingGenerator.current) {
      sortingGenerator.current = algorithms[algorithm].fn([...array]);
    }

    const result = sortingGenerator.current.next();
    if (!result.done) {
      const { array: newArray, comparing: newComparing, swapping: newSwapping } = result.value;
      setArray(newArray);
      setComparing(newComparing);
      setSwapping(newSwapping);
      setCurrentLine((line) => (line + 1) % algorithmCode[algorithm].length);
      return true;
    }
    return false;
  }, [algorithm, array]);

  const animate = useCallback(() => {
    if (!isRunning) return;

    const hasMore = step();
    if (hasMore) {
      const delay = Math.max(1, 101 - speed);
      timeoutId.current = setTimeout(() => {
        animationFrame.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      setIsRunning(false);
      setCurrentLine(0);
    }
  }, [isRunning, speed, step]);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    if (timeoutId.current) clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => {
    if (isRunning) {
      animationFrame.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [isRunning, animate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8 ">
      <div className="max-w-8xl mx-3 space-y-12   pace-y pl-4">
        <div>
          <PageHeader/>
          <div> <InstructionsButton /></div>
         
        </div>
        
        

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Panel */}
          <div className="space-y-8 ">
            <ArrayControls
              onGenerateArray={handleGenerateArray}
              onArraySizeChange={handleArraySizeChange}
              onAlgorithmChange={handleAlgorithmChange}
              onSpeedChange={setSpeed}
              arraySize={arraySize}
              selectedAlgorithm={algorithm}
              speed={speed}
              isRunning={isRunning}
            />
            <ArrayInput onArraySubmit={handleCustomArray} isRunning={isRunning} />
            <CodeBlock algorithm={algorithm} currentLine={currentLine} />
          </div>

          {/* Right Panel */}
          <div className="space-y-8">
            <ArrayVisualizer
              array={array}
              comparing={comparing}
              swapping={swapping}
              maxValue={Math.max(...array)}
            />
            <VisualizerControls
              onStart={start}
              onPause={pause}
              onReset={reset}
              onStep={step}
              isRunning={isRunning}
              canStep={!isRunning}
            />
          </div>
        </main>
      </div>
    </div>
  );
}