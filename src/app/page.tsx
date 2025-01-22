import Hero from '@/components/home/hero';
import HowItWorks from '@/components/home/how-it-works';
import Landing from '@/components/home/landing';
import NGO_Spotlight from '@/components/home/ngo-spotlight';
import OurMission from '@/components/home/our-mission';
import RegisterAsNGO from '@/components/home/register-as-ngo';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-dark text-white">
      {/* Hero Section */}
      <Landing/>
      <Hero />
      {/* How It Works Section */}
      <HowItWorks />
      {/* NGO Spotlight */}
      <NGO_Spotlight />
      {/* Register As NGO */}
      <RegisterAsNGO/>
      <OurMission/>
      {/* Mission Section */}
    </main>
  );
}