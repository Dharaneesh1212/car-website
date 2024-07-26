import "./App.css";
import Home from "./components/home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default App;
