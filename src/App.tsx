import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import SEO from './components/SEO';
import Section from './components/Section';
import Hero from './components/Hero';
import WelcomeMessage from './components/WelcomeMessage';
import Countdown from './components/Countdown';
import PhotoCarousel from './components/PhotoCarousel';
import Locations from './components/Locations';
import GuestSearch from './components/GuestSearch';
import MusicPlayer from './components/MusicPlayer';

const SectionLoader: React.FC = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <SEO />
      <div className="min-h-screen">
        <Section>
          <Hero />
        </Section>

        <Section className="bg-white py-16">
          <WelcomeMessage />
        </Section>

        <Section className="bg-white">
          <Countdown />
        </Section>

        <Section className="bg-gray-50">
          <PhotoCarousel />
        </Section>

        <Section className="bg-white">
          <Locations />
        </Section>

        <Section className="bg-gray-50">
          <GuestSearch />
        </Section>

        <MusicPlayer />
      </div>
    </ErrorBoundary>
  );
}

export default App;