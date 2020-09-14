import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2020 </strong>*/}
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/foxy17"
        aria-label="My GitHub"
      >
        Arnav Chauhan
      </a>{" "}
      using <i className="fab fa-react"></i>
    </footer>
  );
};

export default Footer;
