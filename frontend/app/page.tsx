'use client';

import Menu from '@/components/lp/Menu';
import styles from './Page.module.scss';
import DotBG from '@/components/lp/DotBG';
import Hero from '@/components/lp/Hero';
import { useIsLoading } from '@/context/IsLoadingContext';
import LoadingModal from '@/components/globals/LoadingModal';
import Benefits from '@/components/lp/Benefits';
import Difference from '@/components/lp/Diferences';
import Foryou from '@/components/lp/Foryou';
import SocialProof from '@/components/lp/SocialProof';
import Features from '@/components/lp/Features';
import Plan from '@/components/lp/Plan';
import Security from '@/components/lp/Security';


export default function Home() {
  const { setIsLoading, isLoading } = useIsLoading();


  return (
    <>
      <LoadingModal open={isLoading} />
      <DotBG />
      <Menu />
      <Hero setLoading={setIsLoading} />
      <Benefits />
      <Difference />
      <Foryou />
      <SocialProof />
      <Features />
      <Plan />
      <Security />
    </>
  );
}


