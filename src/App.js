import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import { Sidebar } from './Sidebar'
import Home from './Components/Home'
import Shop from './Components/Shop'
import About from './Components/About'
import PrivacyPolicy from './Components/PrivacyPolicy'
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
