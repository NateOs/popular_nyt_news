import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Spinner from "../Components/Spinner";

function Details() {
  const { slug } = useParams();
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=headline:(${slug})&api-key=${process.env.REACT_APP_NYTIMES_KEY}`;

  const [state, setState] = useState({
    response: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    setState({ ...state, isLoading: true });
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setState({
          ...state,
          response: response.data.response.docs[0],
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        setState({ ...state, isLoading: false, isError: true });
      });
  }, []);

  const {
    snippet,
    headline: { main } = {},
    web_url,
    pub_date,
    multimedia,
    byline: { original } = {},
  } = state?.response;

  console.log(main);
  return (
    <div className="details">
      {state.isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="details__title">{main}</h1>
          <p className="details__authors">{original}</p>
          <p className="details__date">
            {new Date(`${pub_date}`).toLocaleDateString()}
          </p>
          <p className="details__content">{snippet}</p>
          <a href={web_url} className="details__read">
            Read more
          </a>
          <div>
            <Link to="/">Go back</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
