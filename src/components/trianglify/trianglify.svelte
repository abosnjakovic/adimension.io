<script>
   import {onMount} from "svelte"
   import trianglify from 'trianglify/dist/trianglify.bundle.js'

   onMount(()=>{
      let defaultOptions = {
         width: window.innerWidth,
         height: window.innerHeight,
         cellSize: 55,
         variance: 0.75,
         seed: 'YlGnBu',
         xColors: 'random',
         yColors: 'match',
         fill: true,
         /* palette: trianglify.colorbrewer, */
         colorSpace: 'lab',
         colorFunction: trianglify.colorFunctions.interpolateLinear(0.5),
         strokeWidth: 5,
         points: null
      }

      const svgOpts = {
         includeNamespace: true,
         coordinateDecimals: 1
      }

      const pattern = trianglify(defaultOptions)
      document.getElementById('trianglify').appendChild(pattern.toSVG(svgOpts))
      window.onresize = () => {
         defaultOptions.width = window.innerWidth
         defaultOptions.height = window.innerHeight
         const pattern = trianglify(defaultOptions)
         let t = document.getElementById('trianglify')
         t.removeChild(t.childNodes[0]);
         document.getElementById('trianglify').appendChild(pattern.toSVG(svgOpts))
      }
   })
</script>

<style type="text/scss">
   .trianglify {
      height: 100%;
      background: linear-gradient(white, #4e4e4e, white);
      background-size: .1rem 400%;
      animation: bg 8s infinite;
   }

   @keyframes bg {
      0% {
         background-position: 0 0;
      }

      50% {
         background-position: 0 200%;
      }

      100% {
         background-position: 0 400%;
      }
   }
</style>
<div id="trianglify" class="trianglify absolute"></div>
