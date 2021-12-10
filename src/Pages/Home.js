import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsListItem from "../Components/NewsListItem";
import Spinner from "../Components/Spinner";

function Home() {
  // number of articles: last 7 or 30 days
  let numberOfDays = 7;

  // Basic state
  const [state, setState] = useState({
    news: [],
    isLoading: false,
    isError: null,
  });

  useEffect(() => {
    const baseUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${numberOfDays}.json?api-key=`;

    setState({ ...state, isLoading: true });
    axios
      .get(`${baseUrl + process.env.REACT_APP_NYTIMES_KEY}`)
      .then((response) => {
        setState({
          ...state,
          news: response.data.results,
          isLoading: false,
        });
      })
      .catch((error) => {
        setState({ ...state, isError: error, isLoading: false });
      });
  }, [numberOfDays]);

  return (
    <div className="home">
      {state.isLoading ? (
        <Spinner />
      ) : (
        state?.news?.map((newsItem) => (
          <NewsListItem key={newsItem.id} {...newsItem} />
        ))
      )}
    </div>
  );
}

export default Home;
