import logo from './logo.svg';
import './App.css';
import Subscription from './components/Subscription';
import Testimonial from './components/Testimonial';
import Assistance from './components/Assistance';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Work from './components/Work';

function App() {
  return (
    <>
    <Hero />
    <Work/>
    <Subscription/>
    <Testimonial/>
    <Faq/>
    <Assistance/>
    <Footer/>
    </>
  )
}

export default App;
