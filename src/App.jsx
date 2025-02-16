import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "Avengers: Infinity War", release_date: "2018" }} />
      <MovieCard movie={{ title: "Avengers: Endgame", release_date: "2019" }} />
    </>
  );
}

export default App;
