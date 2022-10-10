import './App.css';
import Testimonials from './assets/Testimonials/Testimonials';
import Hero  from './component/Hero/Hero';
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
    </div>
  );
}

export default App;
