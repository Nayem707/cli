import React from 'react';
import HeroSection from './components/homeComponents/HeroSection';
import Brand from './components/homeComponents/BrandSection';
import FeaturesSection from './components/homeComponents/FeatureSection';
import HeaderSection from './components/homeComponents/HeaderSection';
import TimerSection from './components/homeComponents/TimerSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TimerSection />
      <HeaderSection />
      <FeaturesSection />
      <Brand />
    </>
  );
};

export default Home;
