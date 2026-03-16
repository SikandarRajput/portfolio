import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <TechStack />
            <Projects />
            <ContactSection />
        </>
    );
}

export default Home;
