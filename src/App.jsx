import { useState } from "react";
import "./App.css";
import { CurrencyContext } from "./context/CurrencyContext.js";
import Home from "./pages/Home.jsx";
import Routing from "./components/Routing.jsx";
import Layout from "./pages/MainLayout.jsx";
import MainLayout from "./pages/MainLayout.jsx";

function App() {
  const [currency, setCurrency] = useState('inr');
  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <MainLayout />
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
