import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
          response: response.data.response,
          isLoading: false,
        });
      })
      .catch((error) => {
        alert(error);
        setState({ ...state, isLoading: false, isError: true });
      });
  }, [slug]);

  return (
    <div className="details">
      <h1 className="details__title">Details of News</h1>
      <p className="details__authors">By Author 1, 2 , 3</p>
      <p className="details__date">Date: 1/1/2020</p>
      <p className="details__content">
        Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Details;
