'use client';

import FooterComplete from '@/components/globals/FooterComplete';
import LoadingModal from '@/components/globals/LoadingModal';
import Benefits from '@/components/lp/Benefits';
import ClosingCta from '@/components/lp/ClosingCta';
import Contact from '@/components/lp/Contact';
import Difference from '@/components/lp/Diferences';
import DotBG from '@/components/lp/DotBG';
import FaqLp from '@/components/lp/FaqLp';
import Features from '@/components/lp/Features';
import Foryou from '@/components/lp/Foryou';
import Hero from '@/components/lp/Hero';
import Menu from '@/components/lp/Menu';
import Plan from '@/components/lp/Plan';
import Security from '@/components/lp/Security';
import SocialProof from '@/components/lp/SocialProof';
import { useIsLoading } from '@/context/IsLoadingContext';
import { UserContext } from '@/context/UserContext';
import { useContext, useEffect } from 'react';

export default function Home() {
  const { isLoading } = useIsLoading();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user.id === '') {
      setUser({
        id: '',
        name: '',
        email: '',
        selectedPlan: '',
      });
      return;
    }
  }, []);

  return (
    <>
      <LoadingModal open={isLoading} />
      <DotBG />
      <Menu />
      <Hero />
      <Benefits />
      <Difference />
      <Foryou />
      <SocialProof />
      <Features />
      <Plan />
      <Security />
      <Contact />
      <FaqLp />
      <ClosingCta />
      <FooterComplete />
    </>
  );
}
