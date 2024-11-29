import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SocialProof from './Components/SocialProof';
import Features from './Components/Features'
import { dividerClasses } from '@mui/material';
import Testimonial from './Components/Testimonial';
import CuttingEdgeFeatures from './Components/CuttingEdgeFeatures';
import Faq from './Components/Faq';
import Blogposts from './Components/Blogposts';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SectionSeparator from './Components/SectionSeparator';

function App() {
  return (
  <div className='App'>
  <Header/>
  <SocialProof/>
  <SectionSeparator/>
  <Features/>
  <Testimonial/>
  <CuttingEdgeFeatures/>
  <SectionSeparator/>
  <Faq/>
  <SectionSeparator/>
  <Blogposts/>
  <Contact/>
  <Footer/>
  </div>



  );
}

export default App;
