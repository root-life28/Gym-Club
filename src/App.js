import './App.css';
import Testimonials from './assets/Testimonials/Testimonials';
import Footer from './component/Footer/Footer';
import Hero  from './component/Hero/Hero';
import Join from './component/Join/Join';
import Plans from './component/Plans/Plans';
import Programs from './component/programs/Programs';
import Reason from './component/Reasons/Reason';

function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reason/>
        <Plans/>
        <Testimonials/>
        <Join/>
        <Footer/>
    </div>
  );
}

export default App;
