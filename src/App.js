import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import CrowdMonitor from './components/CrowdMonitor';
import Accessibility from './components/Accessibility';
import ServiceAnimals from './pages/accessibility/ServiceAnimals';
import AccessibleTransportation from './pages/accessibility/AccessibleTransportation';
import EmergencyServices from './pages/accessibility/EmergencyServices';
import WeatherGuide from './pages/accessibility/WeatherGuide';
import TourismInformationCentre from './pages/accessibility/TourismInformationCentre';
import EmergencyNumbers from './pages/accessibility/EmergencyNumbers';
import PublicHolidays from './pages/accessibility/PublicHolidays';
import Navbar from './components/Navbar';
import EcoInitiativesDashboard from './components/eco';
import LocalExperiences from './components/local';
import SmartBookingSystem from './components/smartbook';
import TestimonialsContactFooter from './components/feedback';
import WasteManagement from './components/WasteManagement';
import Community from './components/Community';
import CarbonTracker from './components/CarbonTracker';
import ApplyHost from './components/ApplyHost';
import Flashcards from './components/Flashcards';
import EcoFriendlyTourism from './pages/EcoFriendlyTourism';
import BookingForm from './pages/BookingForm';
import ConfirmationPage from './pages/ConfirmationPage';
import Login from '../src/./components/login';
function App() {
  return (
    <Router>
      <div className="antialiased text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <Header />
        <main id="main-content" className="flex-1 relative">
          <Routes>
            <Route exact path="/" element={
              <>
                <Hero />
                
                <Destinations />
                <CrowdMonitor />
                <Accessibility />
                {/* <EcoInitiativesDashboard /> */}
                <LocalExperiences />
                {/* <Features /> */}
                <SmartBookingSystem />
                
                <TestimonialsContactFooter />
              </>
            } />
            <Route path="/features" element={<Features />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/crowd-monitor" element={<CrowdMonitor />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/service-animals" element={<ServiceAnimals />} />
            <Route path="/accessible-transportation" element={<AccessibleTransportation />} />
            <Route path="/emergency-services" element={<EmergencyServices />} />
            <Route path="/weather-guide" element={<WeatherGuide />} />
            <Route path="/tourism-information-centre" element={<TourismInformationCentre />} />
            <Route path="/emergency-numbers" element={<EmergencyNumbers />} />
            <Route path="/public-holidays" element={<PublicHolidays />} />
            <Route path="/eco" element={<EcoInitiativesDashboard />} />
            <Route path="/local" element={<LocalExperiences />} />
            <Route path="/smartbook" element={<SmartBookingSystem />} />
            <Route path="/feedback" element={<TestimonialsContactFooter />} />
            <Route path="/community" element={<Community />} />
            <Route path="/carbon-tracker" element={<CarbonTracker />} />
            <Route path="/waste-management" element={<WasteManagement />} />
            <Route path="/apply-host" element={<ApplyHost />} /> 
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/eco-friendly-tourism" element={<EcoFriendlyTourism />} />
            <Route path="/booking/:transportMode" element={<BookingForm />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/login" element={< Login />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;