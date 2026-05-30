import React, { useState, useEffect } from "react";
import styles from "./DisplayRow.module.css";
import SlidShow from "../SlidShow/SlidShow";

import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries),
      ]);

      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <SlidShow title="Netflix trending" movies={movies.trending} />
      <SlidShow title="Popular on Netflix" movies={movies.netflixOriginals} />
      <SlidShow title="Action" movies={movies.action} />
      <SlidShow title="Top Rated" movies={movies.topRated} />
      <SlidShow title="Comedy" movies={movies.comedy} />
      <SlidShow title="Horror" movies={movies.horror} />
      <SlidShow title="Romance" movies={movies.romance} />
      <SlidShow title="Documentaries" movies={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;
