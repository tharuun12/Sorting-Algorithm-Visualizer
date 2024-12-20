import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisualizerPage from './pages/VisualizerPage';
import InstructionsPage from './pages/InstructionsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<VisualizerPage />} />
            <Route path="/instructions" element={<InstructionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}