export const SPEED_CATEGORIES = {
  SLOW: 25,    // 1.5 seconds
  MEDIUM: 50,  // 0.75 seconds
  FAST: 75,    // 0.3 seconds
  INSTANT: 100 // Immediate
} as const;

export function generateRandomArray(size: number): number[] {
  // Ensure the size is between 5 and 14
  const constrainedSize = Math.max(5, Math.min(size, 14));
  return Array.from({ length: constrainedSize }, () => Math.floor(Math.random() * 100) + 1);
}

export function mapSpeedToDelay(speed: number): number {
  // Convert speed percentage to delay in milliseconds
  // Speed: 1-100, where 1 is slowest and 100 is fastest
  const maxDelay = 1500; // 1.5 seconds for slowest
  const minDelay = 50;   // 0.05 seconds for fastest
  
  // Use an exponential curve for more natural speed progression
  const normalizedSpeed = speed / 100;
  const delay = maxDelay * Math.pow(1 - normalizedSpeed, 2);
  
  return Math.max(minDelay, Math.min(maxDelay, delay));
}

export function validateCustomArray(input: string): number[] | Error {
  try {
    const numbers = input.split(',').map(num => {
      const parsed = parseInt(num.trim(), 10);
      if (isNaN(parsed)) throw new Error('Invalid number');
      return parsed;
    });

    if (numbers.length < 2) {
      throw new Error('Please enter at least 2 numbers');
    }

    if (numbers.length > 14) {
      throw new Error('Maximum array size is 14');
    }

    if (numbers.some(n => n < 0 || n > 100)) {
      throw new Error('Numbers must be between 0 and 100');
    }

    return numbers;
  } catch (err) {
    return err instanceof Error ? err : new Error('Invalid input');
  }
}