import BackgroundOrbs from '@/components/BackgroundOrbs';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <BackgroundOrbs />
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
