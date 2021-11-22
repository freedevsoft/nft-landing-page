import Front from './components/Front';
import Welcome from './components/Welcome';
import Features from './components/Features';
import Ranking from './components/Ranking';
import Ecosystem from './components/Ecosystem';
import Objectives from './components/Objectives';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import ContactUs from './components/ContactUs';

import './App.css';

function App() {
  return (
    <div className="App">
      <Front />
      <Welcome />
      <Features />
      <Ranking />
      <Ecosystem />
      <Objectives />
      <Roadmap />
      <Tokenomics />
      <Team />
      <ContactUs />
    </div>
  );
}

export default App;
