/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const KidsJiuJitsu = lazy(() => import('./pages/KidsJiuJitsu').then(module => ({ default: module.KidsJiuJitsu })));
const Andre = lazy(() => import('./pages/Andre').then(module => ({ default: module.Andre })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Schedule = lazy(() => import('./pages/Schedule').then(module => ({ default: module.Schedule })));
const OurSchool = lazy(() => import('./pages/OurSchool').then(module => ({ default: module.OurSchool })));
const InstructorsPage = lazy(() => import('./pages/InstructorsPage').then(module => ({ default: module.InstructorsPage })));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage').then(module => ({ default: module.Programs })));
const SpecialOffers = lazy(() => import('./pages/SpecialOffers').then(module => ({ default: module.SpecialOffers })));

export default function App() {
  return (
    <Router>
      <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-red-600/30 selection:text-white overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen bg-zinc-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kids-jiu-jitsu" element={<KidsJiuJitsu />} />
            <Route path="/andre" element={<Andre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/our-school" element={<OurSchool />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
          </Routes>
        </Suspense>
        <Footer />
        
        {/* Floating Try Class Button */}
        <Link 
          to="/contact" 
          className="fixed bottom-6 right-6 z-50 bg-red-700 hover:bg-red-600 text-white px-6 py-4 rounded-full font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
        >
          <span className="hidden sm:inline">Try Free Class</span>
          <span className="sm:hidden">Try Class</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </Router>
  );
}
