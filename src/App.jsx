import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import FirstBody from './components/FirstBody';
import YellowButton from './components/YellowButton';
import CounselingForm from './components/CounselingForm';
import Clat from './components/Clat';
import CoursesOffered from './components/CoursesOffered';
import Eligibility from './components/Eligibility';
import ImportantDates from './components/ImportantDates';
import PaperPattern from './components/PaperPattern';
import CrackingSections from './components/CrackingSections';
import OfficialRelease from './components/OfficialRelease';
import TopTen from './components/TopTen';
import WhyPratham from './components/WhyPratham';
import FAQ from './components/FAQ';
import PrathamAdvantage from './components/PrathamAdvantage';
import StudentTestimonial from './components/StudentTestimonial';
import PopularUniversities from './components/PopularUniversities';
import PrepModules from './components/ PrepModules';
import Footer from './components/Footer';
import FooterTwo from './components/FooterTwo'

const App = () => {
  const [isPrathamVisible, setIsPrathamVisible] = useState(false);
  const prathamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPrathamVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (prathamRef.current) {
      observer.observe(prathamRef.current);
    }

    return () => {
      if (prathamRef.current) {
        observer.unobserve(prathamRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      <Header />
      <FirstBody />
      <YellowButton />
      {!isPrathamVisible && (
        <div className="absolute right-6 top-28 z-50">
          <CounselingForm />
        </div>
      )}
      
      <Clat />
      <CoursesOffered />
      <Eligibility />
      <ImportantDates />
      <PaperPattern />
      <CrackingSections />
      <OfficialRelease />
      <TopTen />
      <WhyPratham />
      <FAQ />

      <div ref={prathamRef}>
        <PrathamAdvantage />
        
      </div>
      <div ref={prathamRef}>
        <PopularUniversities/>
      </div>
      <div ref={prathamRef}>
      <PrepModules/>
      </div>
      <div ref={prathamRef}>
     <Footer/>
      </div>
      <div ref={prathamRef}>
     <FooterTwo/>
      </div>
    </div>
  );
};

export default App;
