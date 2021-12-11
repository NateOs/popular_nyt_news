import React from "react";
import { MdCalendarToday } from "react-icons/md";
import { Link } from "react-router-dom";
function NewsListItem({
  id,
  title,
  media: images,
  published_date: date,
  byline: authors,
  title: headline,
}) {
  return (
    <Link to={`/details/${headline}`}>
      <div className="news-item container">
        {images.length > 0 ? (
          <img
            className="news-item__image"
            src={images[0]["media-metadata"][0]["url"]}
          />
        ) : (
          <p>no media</p>
        )}

        <div className="news-item__title">
          <h2>{title}</h2>
          <p className="news-item__author">{authors}</p>
          <span className="icon">
            <MdCalendarToday /> {date}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default NewsListItem;
