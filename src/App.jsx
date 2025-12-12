import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./page/HomePage/HomePage";
import MoviesPage from "./page/MoviesPage/MoviesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
      </Route>
    </Routes>
  );
}

export default App;