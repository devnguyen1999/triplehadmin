import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  );
}

export default App;
