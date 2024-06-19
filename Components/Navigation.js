import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../css/navbar.scss";

const Navigation = ({ links }) => {
  const location = useLocation();

  return (
    <nav className="main">
      <ul>
        {links.map((link, index) => {
          const isSelected = link.external
            ? false
            : link.url === location.pathname;

          return (
            <li key={index} className={isSelected ? 'selected' : ''}>
              {link.external ? (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ) : (
                <Link to={link.url}>{link.name}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
