import React from 'react';
import { Header } from "./components";
import {Features} from './components';
import {Platform} from './components';
import {DownloadApp, VideoSection, Pricing, AboutStats, FaqSection, Testinomials} from './components';

function App() {
  return (
    <div className='scrollbar-hide'>
      <Header />
      <Features />
      <Platform />
      <DownloadApp />
      <VideoSection />
      <Pricing />
      <AboutStats />
      <FaqSection />
      <Testinomials />
    </div>
  );
}

export default App;
