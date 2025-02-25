import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/requests";

function RowList() {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTfending} />
      <Row
        title="fetchTopRatedMovies"
        fetchUrl={requests.fetchTopRatedMovies}
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Tv Show" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default RowList;

