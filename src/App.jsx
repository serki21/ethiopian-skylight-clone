import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { WelcomeSection } from './components/home/welcomeSection';
import {FeaturesSection} from "./components/home/FeaturesSection";
import { RoomsSection } from './components/home/RoomsSection';
import {DiningSection}  from "./components/home/DiningSection";
import {EventSection}  from "./components/home/EventSection";
import {RecreationSection} from "./components/home/RecreationSection";
import {SightSeeingSection} from "./components/home/SightSeeingSection";
import {MapSection} from "./components/home/MapSection";
import {SubscribtionSection} from "./components/home/SubscribtionSection";
import { Footer } from './components/layout/Footer';


import {NotPageFound} from "./Pages/NotPageFound"

function App() {
  return (
    <Routes>

       <Route
        path="/" 
        element={
       
         <div className="min-h-screen flex flex-col bg-gray-50">
         <Navbar />

      <main className="flex-grow">
        <Hero />

        <div className="pt-24">
          <WelcomeSection />
          <FeaturesSection/>
          <RoomsSection />
          <DiningSection/>
          <EventSection/>
          <RecreationSection/>
          <SightSeeingSection/>
          <MapSection/>
          <SubscribtionSection/>
        
      </div>
      
      </main>

      <Footer />
    </div>
        }
        />
        <Route
         path="*"
         element={<NotPageFound/>}/>
         </Routes>
  );
}

export default App;