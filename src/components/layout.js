import PropTypes from "prop-types";
import React from "react";

import Trianglify from "../components/trianglify";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      {/* <Header /> */}
      <Trianglify />

      <main className="flex-1 h-screen w-full max-w-4xl px-4 m-auto md:px-8 z-10">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
