import React from "react";
import ReactFontLoader from 'react-font-loader'

export const Footer = () => {
  return (
    <footer className="mb-5 pt-1 text-muted text-center text-small">
      <p className="mb-1">
        © 2021 Checkout at {" "}
        <a href="https://github.com/bhuvanbalasubramanian/utmbuilder" target='_blank' rel="noreferrer">Github</a>
      </p>
    </footer>
  );
};