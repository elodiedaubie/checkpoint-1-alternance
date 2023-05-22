import React from "react";
import "./App.css";
import Continents from "./components/Continents";
import { Routes, Route } from "react-router-dom";
import Continent from "./components/Continent";
import Country from "./components/Country";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Une page qui affiche la liste des liens vers chaque continent: */}
        <Route path="/continents" element={<Continents />}></Route>
        {/* Une page qui affiche, pour un continent donné, la liste des liens vers chaque pays */}
        <Route
          path="/continents/:continentName"
          element={<Continent />}
        ></Route>
        {/* Une page qui affiche les détails d'un pays donné */}
        <Route
          path="/continents/:continentName/:countryName"
          element={<Country />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
