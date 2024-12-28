## Live Site

Experience the Sorting Algorithm Visualizer at [https://sort-watch.vercel.app/](https://sort-watch.vercel.app/).

# Sorting Algorithm Visualizer

## Contribution Guide

We welcome contributions to improve this project! Here are some ideas for enhancements:

1. **Add More Sorting Algorithms**

   - Merge Sort
   - Quick Sort
   - Heap Sort

2. **Improve Animation**

   - Use GSAP for smoother transitions.
   - Add progress bars or metrics for comparisons and swaps.

3. **UI Enhancements**

   - Dark mode toggle.
   - Add tooltips explaining each sorting algorithm.

4. **Feature Additions**

   - Export animations as GIFs for learning.
   - Add a "Step-by-Step" button for manual navigation.

### How to Contribute

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.
---

## Overview

The **Sorting Algorithm Visualizer** is an interactive web application designed to help users explore and understand various sorting algorithms through visual demonstrations. Users can input arrays, select algorithms, adjust animation speeds, and watch as the sorting process unfolds in real time.

---

## Features

1. **Array Input**

   - Choose between entering custom numbers or generating a random array.
   - Control the size of the array (5 to 14 elements).

2. **Sorting Algorithms**

   - Visualize algorithms like Bubble Sort, Selection Sort, and Insertion Sort.
   - Highlight comparisons, swaps, and sorted sections with distinct colors.

3. **Animation Controls**

   - Play and Pause buttons to control the animation.
   - Reset button to start fresh with a new array.

4. **Customization**

   - Slider to adjust animation speed (Slow, Medium, Fast).
   - Option to input specific numbers for sorting.

5. **Responsive Design**

   - Optimized for all devices, including desktops, tablets, and smartphones.

---

## Quick Start Guide

### 1. Choose Your Array Size

Use the slider to select how many numbers you want to sort (between 5 and 14 elements).

### 2. Select a Sorting Algorithm

Pick from:

- Bubble Sort
- Selection Sort
- Insertion Sort

### 3. Adjust Animation Speed

Set how fast you want to see the sorting process:

- **Slow**: Best for understanding each step.
- **Medium**: Good balance of speed and clarity.
- **Fast**: Quickly see the full sorting process.

### 4. Start Visualizing!

Press the **Play** button and watch how the algorithm sorts your numbers. Pause anytime to study the current step.

---

## Main Controls Explained

### **Start Button**

Press this to begin the sorting visualization. The algorithm will start arranging the numbers from smallest to largest.

### **Pause Button**

Click this to pause the animation at any time. Great for studying how the algorithm makes its decisions.

### **Reset Button**

Use this to generate a new random array or start over. You can reset at any time, even mid-sort.

---

## Customization Options

### **Array Size Slider**

Move the slider to change the number of elements in the array. Fewer numbers (5-8) are better for learning, while more numbers (9-14) show interesting patterns.

### **Custom Numbers**

Want to try specific numbers? Click "Custom Input" and type your numbers separated by commas (e.g., `5, 2, 8, 1`). Ensure the input size is within the 5-14 range.

### **Speed Control (Coming Soon!)**

Choose your visualization speed:

- **Slow**: Best for beginners to follow every step.
- **Medium**: Balanced speed for clarity.
- **Fast**: For quick visualizations.

---

## Algorithm Types

### **Bubble Sort**

Repeatedly steps through the list, compares adjacent elements, and swaps them if needed.

### **Selection Sort**

Finds the smallest element and moves it to the beginning, repeating this process for the rest of the list.

### **Insertion Sort**

Builds the final sorted array one item at a time by inserting elements into their correct position.

---

## Understanding the Colors

- **Yellow Bars**: Numbers being compared right now.
- **Green Bars**: Numbers being swapped to their new positions.
- **Blue Bars**: Numbers that haven't been sorted yet.

---

## Tech Stack

- **Frontend**: React.js (TypeScript)
- **Styling**: TailwindCSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Animation**: CSS transitions and JavaScript
- **Build Tool**: Vite

---

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/sorting-visualizer.git
   cd sorting-visualizer
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

4. **Build for Production**

   ```bash
   npm run build
   ```

5. **Preview Production Build**

   ```bash
   npm run preview
   ```

---

## Folder Structure

```plaintext
■ Sorting Algorithm Visualizer
  ├── src
  │   ├── App.tsx
  │   ├── components
  │   │   ├── ArrayControls.tsx
  │   │   ├── ArrayVisualizer.tsx
  │   │   ├── Footer.tsx
  │   │   ├── Header.tsx
  │   │   ├── layout
  │   │   │   ├── MainLayout.tsx
  │   │   │   └── PageHeader.tsx
  │   │   ├── visualization
  │   │   │   ├── CodeView.tsx
  │   │   │   └── GraphView.tsx
  │   ├── pages
  │   │   ├── InstructionsPage.tsx
  │   │   └── VisualizerPage.tsx
  │   ├── utils
  │   │   ├── sortingAlgorithms.ts
  │   │   ├── arrayUtils.ts
  │   │   └── visualizerUtils.ts
  │   ├── index.css
  │   ├── main.tsx
  │   ├── vite-env.d.ts
  ├── tailwind.config.js
  ├── vite.config.ts
  └── package.json
```

