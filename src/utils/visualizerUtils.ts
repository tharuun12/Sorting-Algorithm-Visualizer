interface BarColorProps {
  index: number;
  comparing: number[];
  swapping: number[];
}

export function getBarColor({ index, comparing, swapping }: BarColorProps): string {
  if (swapping.includes(index)) {
    return 'bg-green-500 from-green-400 to-green-600';
  }
  if (comparing.includes(index)) {
    return 'bg-yellow-500 from-yellow-400 to-yellow-600';
  }
  return 'bg-indigo-500 from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700';
}

export function getBarWidth(arrayLength: number): string {
  if (arrayLength <= 10) {
    return '2rem';
  } else if (arrayLength <= 20) {
    return '1.5rem';
  } else if (arrayLength <= 30) {
    return '1rem';
  }
  return '0.75rem';
}