import React from "react";
import { MdCalendarViewDay, MdSearch, MdNotes } from "react-icons/md";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="nav">
        <span className="nav-toggle icon">
          <MdCalendarViewDay />
        </span>
        <Link to="/">
          <h1>New York Times Most Popular</h1>
        </Link>
        <div className="toggles">
          <span className="icon">
            <MdSearch />
          </span>
          <span className="icon">
            <MdNotes />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
