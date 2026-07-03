import { Hero } from '../components/Hero';
import { Programs } from '../components/Programs';
import { OurSchool } from '../components/OurSchool';
import { Instructors } from '../components/Instructors';
import { Schedule } from '../components/Schedule';
import { Testimonials } from '../components/Testimonials';
import { ImageCarousel } from '../components/ImageCarousel';
import { Blogs } from '../components/Blogs';
import { Booking } from '../components/Booking';
import { InstagramSection } from '../components/InstagramSection';

export function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      <OurSchool />
      <Instructors />
      <Schedule />
      <Testimonials />
      <Blogs />
      <ImageCarousel />
      <InstagramSection />
      <Booking />
    </main>
  );
}
