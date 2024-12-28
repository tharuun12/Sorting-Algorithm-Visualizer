# Sorting Algorithm Visualizer ✨

## 🚀 Live Site

Experience the Sorting Algorithm Visualizer here: [https://sort-watch.vercel.app/](https://sort-watch.vercel.app/)

---

## 🛠️ Contribution Guide

We welcome your contributions! Here are some ways you can help:

🎯 **Add More Sorting Algorithms**
   - Merge Sort
   - Quick Sort
   - Heap Sort

🎨 **Improve Animation**
   - Use GSAP for smoother transitions.
   - Add progress bars or metrics for comparisons and swaps.

💡 **UI Enhancements**
   - Dark mode toggle.
   - Add tooltips explaining each sorting algorithm.

✨ **Feature Additions**
   - Export animations as GIFs.
   - Add a "Step-by-Step" button for manual navigation.

### 🤝 How to Contribute

1. **Fork the repository**.
2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add feature description"
   ```
4. **Push your branch**:
   ```bash
   git push origin feature-name
   ```
5. **Open a pull request** on GitHub.

---

## 🔍 Overview

The **Sorting Algorithm Visualizer** is an interactive web app designed to help users explore and understand sorting algorithms through visual demos. Watch as numbers are sorted in real time with clear animations and controls!

---

## 🌟 Features

1. 🎲 **Array Input**
   - Enter custom numbers or generate a random array.
   - Choose array sizes between 5 to 14 elements.

2. 📊 **Sorting Algorithms**
   - Visualize Bubble Sort, Selection Sort, and Insertion Sort.
   - See comparisons, swaps, and sorted sections in vibrant colors.

3. 🎥 **Animation Controls**
   - Play and Pause buttons for real-time control.
   - Reset to start fresh anytime.

4. 🎛️ **Customization**
   - Adjust animation speed (Slow, Medium, Fast).
   - Input specific numbers for tailored sorting.

5. 📱 **Responsive Design**
   - Optimized for desktops, tablets, and smartphones.

---

## 🚦 Quick Start Guide

1️⃣ **Choose Your Array Size**
   - Use the slider to select between 5 and 14 numbers.

2️⃣ **Pick a Sorting Algorithm**
   - Choose Bubble Sort, Selection Sort, or Insertion Sort.

3️⃣ **Set Animation Speed**
   - Slow (detailed), Medium (balanced), or Fast (quick).

4️⃣ **Start Visualizing!**
   - Hit Play and watch the magic. Pause to study each step.

---

## 🕹️ Main Controls Explained

▶️ **Start Button**: Begin the sorting visualization.
⏸️ **Pause Button**: Pause the animation to examine the steps.
🔄 **Reset Button**: Generate a new array or restart anytime.

---

## ⚙️ Customization Options

📏 **Array Size Slider**
   - Adjust the array size (5–14 elements). Smaller sizes are great for learning; larger sizes show complex patterns.

✏️ **Custom Numbers**
   - Input your numbers (e.g., `5, 2, 8, 1`). Ensure 5–14 elements.

⏱️ **Speed Control** *(Coming Soon!)*
   - Choose Slow, Medium, or Fast visualization speeds.

---

## 📚 Algorithm Types

🔵 **Bubble Sort**
   - Repeatedly compares and swaps adjacent elements as needed.

🟢 **Selection Sort**
   - Finds the smallest element and moves it to the beginning, repeating for the rest.

🟡 **Insertion Sort**
   - Builds a sorted array one item at a time, inserting elements into their correct position.

---

## 🎨 Understanding the Colors

- 🟡 **Yellow Bars**: Numbers being compared right now.
- 🟢 **Green Bars**: Numbers being swapped to new positions.
- 🔵 **Blue Bars**: Numbers not yet sorted.

---

## 🖥️ Tech Stack

- **Frontend**: React.js (TypeScript)
- **Styling**: TailwindCSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Animation**: CSS transitions and JavaScript
- **Build Tool**: Vite

---

## 📦 Installation

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

## 📂 Folder Structure

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

