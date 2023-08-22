// src/components/Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; 2023 Bookstore</footer>
    </div>
  );
};

export default Layout;
