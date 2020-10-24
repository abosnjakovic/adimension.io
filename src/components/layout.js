import PropTypes from "prop-types";
import React from "react";

import Trianglify from "../components/trianglify";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      {/* <Header /> */}
      <Trianglify />

      <main className="flex-1 h-screen w-full max-w-4xl px-4 py-8 m-auto md:px-8 md:py-16 z-10 align-items align-self content-center justify-center">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
