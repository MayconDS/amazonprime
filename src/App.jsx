import "./App.css";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./Home";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Home.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  console.log(movieList);
  return (
    <div className="page">
      <Navbar />

      <FeaturedMovie />
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
