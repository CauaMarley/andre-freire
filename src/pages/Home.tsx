import { Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';
import { IntroSection } from '../components/IntroSection';
import { Programs } from '../components/Programs';

// Below-the-fold sections lazy-loaded to reduce initial JS execution time (TBT) and speed up LCP
const OurSchool = lazy(() => import('../components/OurSchool').then(m => ({ default: m.OurSchool })));
const TeamCommunity = lazy(() => import('../components/TeamCommunity').then(m => ({ default: m.TeamCommunity })));
const Instructors = lazy(() => import('../components/Instructors').then(m => ({ default: m.Instructors })));
const Schedule = lazy(() => import('../components/Schedule').then(m => ({ default: m.Schedule })));
const ImageCarousel = lazy(() => import('../components/ImageCarousel').then(m => ({ default: m.ImageCarousel })));
const InstagramSection = lazy(() => import('../components/InstagramSection').then(m => ({ default: m.InstagramSection })));
const Booking = lazy(() => import('../components/Booking').then(m => ({ default: m.Booking })));
const Blogs = lazy(() => import('../components/Blogs').then(m => ({ default: m.Blogs })));

export function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <IntroSection />
      <Programs />
      <Suspense fallback={<div className="py-16 bg-zinc-950" />}>
        <OurSchool />
        <TeamCommunity />
        <Instructors />
        <Schedule />
        <ImageCarousel />
        <InstagramSection />
        <Booking />
        <Blogs />
      </Suspense>
    </main>
  );
}
