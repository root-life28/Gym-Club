import './App.css';
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
    </div>
  );
}

export default App;
