import "./styles.css";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}
