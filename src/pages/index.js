import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Twisted from "../components/twisted";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <div
        className="flex flex-1 sm:flex-col md:flex-row lg:flex-row items-center
  justify-center z-10 items-center justify-center h-screen"
      >
        <div className="sm:flex-none sm:pb-2 sm:text-center md:flex-1 md:text-left">
          <h1 className="mb-0">Hello, welcome to my dimension .</h1>
          <p>
            I&apos;m Adam Bosnjakovic, a software engineer from the{" "}
            <span>♥</span>ly city of Sydney working for{" "}
            <a
              href="https://experience.digital"
              rel="noreferrer"
              target="_blank"
            >
              Experience Digital
            </a>
            , a rocket powered digital agency. You can find out more my digital
            life and code on{" "}
            <a
              href="https://github.com/abosnjakovic"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Github{" "}
            </a>
            . Or see my professional experience and history on{" "}
            <a
              href="https://www.linkedin.com/in/adimension/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            . <br /> Thanks for stopping by!
          </p>
        </div>
        <Twisted />
      </div>
    </Layout>
  );
}

export default IndexPage;
