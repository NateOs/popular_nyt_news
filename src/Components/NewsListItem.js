import React from "react";
import { MdCalendarToday } from "react-icons/md";
import { Link } from "react-router-dom";

function NewsListItem({ id }) {
  return (
    <Link to={`/article/${id}`}>
      <div className="news-item container">
        <img
          className="news-item__image"
          src="https://images.unsplash.com/photo-1639054536854-85b04c8af21e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        />
        <div className="news-item__title">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat et quo tenetur modi sequi.</h2>
          <p className="news-item__author">Lorem ipsum dolor sit.</p>
          <span className="icon">
            <MdCalendarToday /> 12/12/2020
          </span>
        </div>
      </div>
    </Link>
  );
}

export default NewsListItem;
