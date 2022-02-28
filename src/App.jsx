import React from "react";
import PokemonList from "./components/PokemonList";
import "@material-tailwind/react/tailwind.css";
import "./App.css";

export default function App() {
  return (
    <div className="px-20 bg-gray-100">
        <PokemonList />
    </div>
  );
}
