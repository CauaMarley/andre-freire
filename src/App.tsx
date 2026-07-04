/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const KidsJiuJitsu = lazy(() => import('./pages/KidsJiuJitsu').then(module => ({ default: module.KidsJiuJitsu })));
const AdultsTeensJiuJitsu = lazy(() => import('./pages/AdultsTeensJiuJitsu').then(module => ({ default: module.AdultsTeensJiuJitsu })));
const CompetitionJiuJitsu = lazy(() => import('./pages/CompetitionJiuJitsu').then(module => ({ default: module.CompetitionJiuJitsu })));
const WomensOnlyJiuJitsu = lazy(() => import('./pages/WomensOnlyJiuJitsu').then(module => ({ default: module.WomensOnlyJiuJitsu })));
const Andre = lazy(() => import('./pages/Andre').then(module => ({ default: module.Andre })));
const CoachDan = lazy(() => import('./pages/CoachDan').then(module => ({ default: module.CoachDan })));
const NathanWright = lazy(() => import('./pages/NathanWright').then(module => ({ default: module.NathanWright })));
const EmeryFesler = lazy(() => import('./pages/EmeryFesler').then(module => ({ default: module.EmeryFesler })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Schedule = lazy(() => import('./pages/Schedule').then(module => ({ default: module.Schedule })));
const OurSchool = lazy(() => import('./pages/OurSchool').then(module => ({ default: module.OurSchool })));
const InstructorsPage = lazy(() => import('./pages/InstructorsPage').then(module => ({ default: module.InstructorsPage })));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage').then(module => ({ default: module.Programs })));
const SpecialOffers = lazy(() => import('./pages/SpecialOffers').then(module => ({ default: module.SpecialOffers })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(module => ({ default: module.BlogsPage })));
const SelfDefenseClassesTucsonJiuJitsu = lazy(() => import('./pages/SelfDefenseClassesTucsonJiuJitsu').then(module => ({ default: module.SelfDefenseClassesTucsonJiuJitsu })));
const BjjAdultsKidsTucsonFitnessDefense = lazy(() => import('./pages/BjjAdultsKidsTucsonFitnessDefense').then(module => ({ default: module.BjjAdultsKidsTucsonFitnessDefense })));
const JiuJitsuClassesAllAgesFitnessTucson = lazy(() => import('./pages/JiuJitsuClassesAllAgesFitnessTucson').then(module => ({ default: module.JiuJitsuClassesAllAgesFitnessTucson })));
const BestJiuJitsuTucsonFitnessSelfDefense = lazy(() => import('./pages/BestJiuJitsuTucsonFitnessSelfDefense').then(module => ({ default: module.BestJiuJitsuTucsonFitnessSelfDefense })));
const LearnBrazilianJiuJitsuTucsonAllLevels = lazy(() => import('./pages/LearnBrazilianJiuJitsuTucsonAllLevels').then(module => ({ default: module.LearnBrazilianJiuJitsuTucsonAllLevels })));
const CarlsonGracieTucsonSelfDefenseFitness = lazy(() => import('./pages/CarlsonGracieTucsonSelfDefenseFitness').then(module => ({ default: module.CarlsonGracieTucsonSelfDefenseFitness })));
const SelfDefenseTucsonJiuJitsu = lazy(() => import('./pages/SelfDefenseTucsonJiuJitsu').then(module => ({ default: module.SelfDefenseTucsonJiuJitsu })));
const StartJiuJitsuTucsonFitnessSelfDefense = lazy(() => import('./pages/StartJiuJitsuTucsonFitnessSelfDefense').then(module => ({ default: module.StartJiuJitsuTucsonFitnessSelfDefense })));
const HowToStartJiuJitsuInTucson = lazy(() => import('./pages/HowToStartJiuJitsuInTucson').then(module => ({ default: module.HowToStartJiuJitsuInTucson })));
const ExecutiveClass = lazy(() => import('./pages/ExecutiveClass').then(module => ({ default: module.ExecutiveClass })));
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(module => ({ default: module.TermsOfService })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-red-600/30 selection:text-white overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen bg-zinc-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kids-jiu-jitsu" element={<KidsJiuJitsu />} />
            <Route path="/adult-e-teens-jiu-jitsu" element={<AdultsTeensJiuJitsu />} />
            <Route path="/competition-jiu-jitsu" element={<CompetitionJiuJitsu />} />
            <Route path="/womens-only" element={<WomensOnlyJiuJitsu />} />
            <Route path="/executiveclass" element={<ExecutiveClass />} />
            <Route path="/andre" element={<Andre />} />
            <Route path="/coach-dan-modrzejewski" element={<CoachDan />} />
            <Route path="/nathan-wright" element={<NathanWright />} />
            <Route path="/emery-fesler" element={<EmeryFesler />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/our-school" element={<OurSchool />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/self-defense-classes-tucson-jiu-jitsu" element={<SelfDefenseClassesTucsonJiuJitsu />} />
            <Route path="/bjj-adults-kids-tucson-fitness-defense" element={<BjjAdultsKidsTucsonFitnessDefense />} />
            <Route path="/jiu-jitsu-classes-all-ages-fitness-tucson" element={<JiuJitsuClassesAllAgesFitnessTucson />} />
            <Route path="/best-jiu-jitsu-tucson-fitness-self-defense" element={<BestJiuJitsuTucsonFitnessSelfDefense />} />
            <Route path="/learn-brazilian-jiu-jitsu-tucson-all-levels" element={<LearnBrazilianJiuJitsuTucsonAllLevels />} />
            <Route path="/carlson-gracie-tucson-self-defense-fitness" element={<CarlsonGracieTucsonSelfDefenseFitness />} />
            <Route path="/self-defense-tucson-jiu-jitsu" element={<SelfDefenseTucsonJiuJitsu />} />
            <Route path="/start-jiu-jitsu-tucson-fitness-self-defense" element={<StartJiuJitsuTucsonFitnessSelfDefense />} />
            <Route path="/how-to-start-jiu-jitsu-in-tucson-a-complete-beginner-guide" element={<HowToStartJiuJitsuInTucson />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
