import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StartJourneyPage } from './pages/StartJourneyPage';
import { TreatmentOptionsPage } from './pages/TreatmentOptionsPage';
import { OurProgramPage } from './pages/OurProgramPage';
import { OurTeamPage } from './pages/OurTeamPage';
import { CostsPage } from './pages/CostsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/start-journey" element={<StartJourneyPage />} />
            <Route path="/treatment-options" element={<TreatmentOptionsPage />} />
            <Route path="/our-program" element={<OurProgramPage />} />
            <Route path="/our-team" element={<OurTeamPage />} />
            <Route path="/costs" element={<CostsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
