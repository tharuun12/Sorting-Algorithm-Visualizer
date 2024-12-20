// Generator functions for sorting algorithms that yield states for visualization
export type SortingState = {
  array: number[];
  comparing: number[];
  swapping: number[];
};

export function* bubbleSort(array: number[]): Generator<SortingState> {
  const arr = [...array];
  const n = arr.length;
  let swapped: boolean;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      yield { array: [...arr], comparing: [j, j + 1], swapping: [] };
      
      if (arr[j] > arr[j + 1]) {
        yield { array: [...arr], comparing: [], swapping: [j, j + 1] };
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  // Final state to show completion
  yield { array: [...arr], comparing: [], swapping: [] };
  return { array: arr, comparing: [], swapping: [] };
}

export function* selectionSort(array: number[]): Generator<SortingState> {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      yield { array: [...arr], comparing: [minIdx, j], swapping: [] };
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      yield { array: [...arr], comparing: [], swapping: [i, minIdx] };
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  // Final state to show completion
  yield { array: [...arr], comparing: [], swapping: [] };
  return { array: arr, comparing: [], swapping: [] };
}

export function* insertionSort(array: number[]): Generator<SortingState> {
  const arr = [...array];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    
    while (j >= 0) {
      yield { array: [...arr], comparing: [j, j + 1], swapping: [] };
      if (arr[j] > key) {
        yield { array: [...arr], comparing: [], swapping: [j, j + 1] };
        arr[j + 1] = arr[j];
        j--;
      } else {
        break;
      }
    }
    arr[j + 1] = key;
    yield { array: [...arr], comparing: [], swapping: [] };
  }
  // Final state to show completion
  yield { array: [...arr], comparing: [], swapping: [] };
  return { array: arr, comparing: [], swapping: [] };
}

export function* mergeSort(array: number[]): Generator<SortingState> {
  const arr = [...array];
  const n = arr.length;
  
  function* mergeSortHelper(start: number, end: number): Generator<SortingState> {
    if (end - start <= 1) return;

    const mid = Math.floor((start + end) / 2);
    yield* mergeSortHelper(start, mid);
    yield* mergeSortHelper(mid, end);
    yield* merge(start, mid, end);
  }

  function* merge(start: number, mid: number, end: number): Generator<SortingState> {
    const left = arr.slice(start, mid);
    const right = arr.slice(mid, end);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      yield { array: [...arr], comparing: [start + i, mid + j], swapping: [] };
      
      if (left[i] <= right[j]) {
        yield { array: [...arr], comparing: [], swapping: [k] };
        arr[k++] = left[i++];
      } else {
        yield { array: [...arr], comparing: [], swapping: [k] };
        arr[k++] = right[j++];
      }
    }

    while (i < left.length) {
      yield { array: [...arr], comparing: [], swapping: [k] };
      arr[k++] = left[i++];
    }

    while (j < right.length) {
      yield { array: [...arr], comparing: [], swapping: [k] };
      arr[k++] = right[j++];
    }
    
    yield { array: [...arr], comparing: [], swapping: [] };
  }

  yield* mergeSortHelper(0, n);
  // Final state to show completion
  yield { array: arr, comparing: [], swapping: [] };
  return { array: arr, comparing: [], swapping: [] };
}

// export function* quickSort(array: number[]): Generator<SortingState> {
//   const arr = [...array];

//   function* quickSortHelper(low: number, high: number): Generator<SortingState> {
//     if (low >= high) return;

//     const pivotIndex = yield* partition(low, high);
//     yield* quickSortHelper(low, pivotIndex - 1);
//     yield* quickSortHelper(pivotIndex + 1, high);
//   }

//   function* partition(low: number, high: number): Generator<number> {
//     const pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//       yield { array: [...arr], comparing: [j, high], swapping: [] };
      
//       if (arr[j] < pivot) {
//         i++;
//         yield { array: [...arr], comparing: [], swapping: [i, j] };
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }

//     yield { array: [...arr], comparing: [], swapping: [i + 1, high] };
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     return i + 1;
//   }

//   yield* quickSortHelper(0, arr.length - 1);
//   // Final state to show completion
//   yield { array: arr, comparing: [], swapping: [] };
//   return { array: arr, comparing: [], swapping: [] };
// }

export function* heapSort(array: number[]): Generator<SortingState> {
  const arr = [...array];
  const n = arr.length;

  function* heapify(size: number, root: number): Generator<SortingState> {
    let largest = root;
    const left = 2 * root + 1;
    const right = 2 * root + 2;

    if (left < size) {
      yield { array: [...arr], comparing: [largest, left], swapping: [] };
      if (arr[left] > arr[largest]) {
        largest = left;
      }
    }

    if (right < size) {
      yield { array: [...arr], comparing: [largest, right], swapping: [] };
      if (arr[right] > arr[largest]) {
        largest = right;
      }
    }

    if (largest !== root) {
      yield { array: [...arr], comparing: [], swapping: [root, largest] };
      [arr[root], arr[largest]] = [arr[largest], arr[root]];
      yield* heapify(size, largest);
    }
  }

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    yield* heapify(n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    yield { array: [...arr], comparing: [], swapping: [0, i] };
    [arr[0], arr[i]] = [arr[i], arr[0]];
    yield* heapify(i, 0);
  }

  // Final state to show completion
  yield { array: arr, comparing: [], swapping: [] };
  return { array: arr, comparing: [], swapping: [] };
}

export const algorithms = {
  'bubble': { name: 'Bubble Sort', fn: bubbleSort },
  'selection': { name: 'Selection Sort', fn: selectionSort },
  'insertion': { name: 'Insertion Sort', fn: insertionSort },
  //'merge': { name: 'Merge Sort', fn: mergeSort },
  //'quick': { name: 'Quick Sort', fn: quickSort },
  //'heap': { name: 'Heap Sort', fn: heapSort },
} as const;

export type AlgorithmKey = keyof typeof algorithms;