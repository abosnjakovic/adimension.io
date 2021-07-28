<div class="svg-wrapper">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 1500 800"
    width="100%"
    height="100%"
    class="intro-svg-txt"
    id="svg"
  >
    <defs>
      <mask id="intro-svg-mask-1">
        <polygon
          points="7789.600537078858, -6167.60048828125
										3310.4001953430184, -2016.6781857754322
										1389.6000487976073, 232.40000000000003
										896.2419565588029, 5640.053536434915
										7789.600537078858, -6167.60048828125"
          fill="white"
        />
      </mask>
      <mask id="intro-svg-mask-2">
        <polygon
          points="7789.600537078858, 6632.40048828125
										896.2419565588029, 5640.053536434915
										1389.6000487976073, 232.40000000000003
										-4142.163729329963, 2731.1286574004985
										7789.600537078858, 6632.40048828125"
          fill="white"
        />
      </mask>
      <mask id="intro-svg-mask-3">
        <polygon
          points="-5010.400439483643, 6632.400488281251
										-4142.163729329963, 2731.1286574004985
										1389.6000487976073, 232.40000000000003
										-3991.0812068728105, -729.2300154237058
										-5010.400439483643, 6632.400488281251"
          fill="white"
        />
      </mask>
      <mask id="intro-svg-mask-4">
        <polygon
          points="-5010.400439483646, -6167.60048828125
										-3991.0812068728105, -729.2300154237058
										1389.6000487976073, 232.40000000000003
										3310.4001953430175, -2016.6781857754336
										-5010.400439483646, -6167.60048828125"
          fill="white"
        />
      </mask>
    </defs>
    <text
      x="0"
      y="0"
      text-anchor="middle"
      class="svg-txt-filled"
      mask="url( #intro-svg-mask-1 )"
    >
      <tspan x="672" y="473" dx="0" dy="0">adam</tspan>
      <tspan x="750" y="550" dx="0" dy="0">bosnjakovic</tspan>
    </text>
    <text
      x="0"
      y="0"
      text-anchor="middle"
      class="svg-txt-stroked"
      mask="url( #intro-svg-mask-2 )"
    >
      <tspan x="672" y="473" dx="0" dy="0">adam</tspan>
      <tspan x="750" y="550" dx="0" dy="0">bosnjakovic</tspan>
    </text>
    <text
      x="0"
      y="0"
      text-anchor="middle"
      class="svg-txt-filled"
      mask="url( #intro-svg-mask-3 )"
    >
      <tspan x="672" y="473" dx="0" dy="0">adam</tspan>
      <tspan x="750" y="550" dx="0" dy="0">bosnjakovic</tspan>
    </text>
    <text
      x="0"
      y="0"
      text-anchor="middle"
      class="svg-txt-stroked"
      mask="url( #intro-svg-mask-4 )"
    >
      <tspan x="672" y="473" dx="0" dy="0">adam</tspan>
      <tspan x="750" y="550" dx="0" dy="0">bosnjakovic</tspan>
    </text>
  </svg>
</div>

<style lang="scss">
  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font: 700 100px/200px Catamaran, sans-serif;
    overflow: hidden;
  }
  .svg-txt-filled {
    fill: #000;
    stroke: #000;
    stroke-width: 2px;
  }

  .svg-txt-stroked {
    fill: none;
    stroke: #000;
    stroke-width: 2px;
  }
  .svg-wrapper {
    display: block;
    position: fixed;
    top: -20%;
    // left: 50%;
    margin-top: -36px;
    margin-left: -10%;
    width: 100%;
    height: 100%;
  }
</style>
