import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home/Home";
import SharedLayout from "./SharedLayout";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Cast from "./components/MovieDetails/Cast";
import Reviews from "./components/MovieDetails/Reviews";
import Movies from "./Movies/Movies";

function App() {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
