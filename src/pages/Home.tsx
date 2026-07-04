import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';
import { IntroSection } from '../components/IntroSection';
import { Programs } from '../components/Programs';
import { OurSchool } from '../components/OurSchool';
import { Instructors } from '../components/Instructors';
import { ImageCarousel } from '../components/ImageCarousel';
import { Schedule } from '../components/Schedule';
import { InstagramSection } from '../components/InstagramSection';
import { Booking } from '../components/Booking';
import { Blogs } from '../components/Blogs';

export function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <IntroSection />
      <Programs />
      <OurSchool />
      <Instructors />
      <Schedule />
      <ImageCarousel />
      <InstagramSection />
      <Booking />
      <Blogs />
    </main>
  );
}
