import React from "react";
import { MdCalendarToday } from "react-icons/md";
import { Link } from "react-router-dom";
// TODO fix image link
function NewsListItem({
  id,
  title,
  media,
  published_date: date,
  byline: authors,
}) {
  // let imageUrl = media[0]["media-metadata"][0].url;
  // console.log("imageUrl", imageUrl);

  return (
    <Link to={`/article/${id}`}>
      <div className="news-item container">
        {/* {media ? (
          <img className="news-item__image" src={imageUrl} />
        ) : (
          <p>no media</p>
        )} */}

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
