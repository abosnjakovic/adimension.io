import React, { useEffect } from "react";
import trianglify from "trianglify/dist/trianglify.bundle.js";

let defaultOptions = {
  width: window.innerWidth,
  height: window.innerHeight,
  cellSize: 45,
  variance: 0.75,
  seed: "YlGnBu",
  xColors: "random",
  yColors: "match",
  fill: true,
  /* palette: trianglify.colorbrewer, */
  colorSpace: "lab",
  colorFunction: trianglify.colorFunctions.interpolateLinear(0.5),
  strokeWidth: 5,
  points: null,
};

const svgOpts = {
  includeNamespace: true,
  coordinateDecimals: 1,
};

const pattern = trianglify(defaultOptions);

export default function Trianglify() {
  useEffect(() => {
    document.getElementById("trianglify").appendChild(pattern.toSVG(svgOpts));

    window.onresize = () => {
      defaultOptions.width = window.innerWidth;
      defaultOptions.height = document.body.clientHeight;
      const pattern = trianglify(defaultOptions);
      let t = document.getElementById("trianglify");
      t.removeChild(t.childNodes[0]);
      document.getElementById("trianglify").appendChild(pattern.toSVG(svgOpts));
    };
    window.dispatchEvent(new Event("resize"));
  });
  return <div id="trianglify" className="trianglify absolute z-0"></div>;
}
