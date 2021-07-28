<script>
  import { onMount } from "svelte";

  onMount(() => {
    // Ported from Stefan Gustavson's java implementation
    // http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf
    // Read Stefan's excellent paper for details on how this code works.
    //
    // Sean McCullough banksean@gmail.com

    /**
     * You can pass in a random number generator object if you like.
     * It is assumed to have a random() method.
     */
    var ClassicalNoise = function (r) {
      // Classic Perlin noise in 3D, for comparison
      if (r == undefined) r = Math;
      this.grad3 = [
        [1, 1, 0],
        [-1, 1, 0],
        [1, -1, 0],
        [-1, -1, 0],
        [1, 0, 1],
        [-1, 0, 1],
        [1, 0, -1],
        [-1, 0, -1],
        [0, 1, 1],
        [0, -1, 1],
        [0, 1, -1],
        [0, -1, -1],
      ];
      this.p = [];
      for (var i = 0; i < 256; i++) {
        this.p[i] = Math.floor(r.random() * 256);
      }
      // To remove the need for index wrapping, double the permutation table length
      this.perm = [];
      for (var i = 0; i < 512; i++) {
        this.perm[i] = this.p[i & 255];
      }
    };

    ClassicalNoise.prototype.dot = function (g, x, y, z) {
      return g[0] * x + g[1] * y + g[2] * z;
    };

    ClassicalNoise.prototype.mix = function (a, b, t) {
      return (1.0 - t) * a + t * b;
    };

    ClassicalNoise.prototype.fade = function (t) {
      return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
    };

    // Classic Perlin noise, 3D version
    ClassicalNoise.prototype.noise = function (x, y, z) {
      // Find unit grid cell containing point
      var X = Math.floor(x);
      var Y = Math.floor(y);
      var Z = Math.floor(z);

      // Get relative xyz coordinates of point within that cell
      x = x - X;
      y = y - Y;
      z = z - Z;

      // Wrap the integer cells at 255 (smaller integer period can be introduced here)
      X = X & 255;
      Y = Y & 255;
      Z = Z & 255;

      // Calculate a set of eight hashed gradient indices
      var gi000 = this.perm[X + this.perm[Y + this.perm[Z]]] % 12;
      var gi001 = this.perm[X + this.perm[Y + this.perm[Z + 1]]] % 12;
      var gi010 = this.perm[X + this.perm[Y + 1 + this.perm[Z]]] % 12;
      var gi011 = this.perm[X + this.perm[Y + 1 + this.perm[Z + 1]]] % 12;
      var gi100 = this.perm[X + 1 + this.perm[Y + this.perm[Z]]] % 12;
      var gi101 = this.perm[X + 1 + this.perm[Y + this.perm[Z + 1]]] % 12;
      var gi110 = this.perm[X + 1 + this.perm[Y + 1 + this.perm[Z]]] % 12;
      var gi111 = this.perm[X + 1 + this.perm[Y + 1 + this.perm[Z + 1]]] % 12;

      // The gradients of each corner are now:
      // g000 = grad3[gi000];
      // g001 = grad3[gi001];
      // g010 = grad3[gi010];
      // g011 = grad3[gi011];
      // g100 = grad3[gi100];
      // g101 = grad3[gi101];
      // g110 = grad3[gi110];
      // g111 = grad3[gi111];
      // Calculate noise contributions from each of the eight corners
      var n000 = this.dot(this.grad3[gi000], x, y, z);
      var n100 = this.dot(this.grad3[gi100], x - 1, y, z);
      var n010 = this.dot(this.grad3[gi010], x, y - 1, z);
      var n110 = this.dot(this.grad3[gi110], x - 1, y - 1, z);
      var n001 = this.dot(this.grad3[gi001], x, y, z - 1);
      var n101 = this.dot(this.grad3[gi101], x - 1, y, z - 1);
      var n011 = this.dot(this.grad3[gi011], x, y - 1, z - 1);
      var n111 = this.dot(this.grad3[gi111], x - 1, y - 1, z - 1);
      // Compute the fade curve value for each of x, y, z
      var u = this.fade(x);
      var v = this.fade(y);
      var w = this.fade(z);
      // Interpolate along x the contributions from each of the corners
      var nx00 = this.mix(n000, n100, u);
      var nx01 = this.mix(n001, n101, u);
      var nx10 = this.mix(n010, n110, u);
      var nx11 = this.mix(n011, n111, u);
      // Interpolate the four results along y
      var nxy0 = this.mix(nx00, nx10, v);
      var nxy1 = this.mix(nx01, nx11, v);
      // Interpolate the two last results along z
      var nxyz = this.mix(nxy0, nxy1, w);

      return nxyz;
    };
    var Utils = {
      setCanvasSize: function () {
        (canvas.width = document.documentElement.clientWidth),
          (canvas.height = document.documentElement.clientHeight);

        canvas.setAttribute("width", canvas.width);
        canvas.setAttribute("height", canvas.height);
      },

      addEvents: function () {
        window.addEventListener("resize", function () {
          Utils.setCanvasSize();
          refresh();
        });
      },

      degToRad: function (deg) {
        return (deg * Math.PI) / 180;
      },

      randInt: function (min, max) {
        return Math.floor(Math.random() * max) + min;
      },

      reload: function () {
        window.location.reload();
      },
    };

    function Generator(params) {
      this.x = params.x;
      this.y = params.y;
      this.particleCount = 1500;
      this.initialDistance = 100;
      this.distanceThreshold = 10;
      this.thresholdVariation = 100;

      this.seed_1 = 1;
      this.seed_2 = 0;
      this.particleSize = 1;
      this.particleRotationSpeed = 0.05;
      this.particleDistanceSpeed = 3;
      this.perlinAmp = this.newPerlinAmp = 1;
      this.perlinAmpIncrease = true;
      this.perlinIncreaseSpeed = 0.2;

      this.particles = [];
      this.populate();
    }

    var G = Generator.prototype;

    G.populate = function () {
      for (var i = 0; i < this.particleCount; i++) {
        this.particles.push(
          new Particle({
            x: this.x,
            y: this.y,
            angle: Utils.randInt(1, 360),
            distance: this.initialDistance,
            distanceThreshold: this.distanceThreshold,
            thresholdVariation: this.thresholdVariation,
            color:
              Math.random() < 0.5
                ? "rgba(51, 204, 255,.02)"
                : "rgba(255, 50, 50,.02)",
            size: this.particleSize,
          })
        );
      }
    };

    G.draw = function () {
      if (this.perlinAmpIncrease) this.newPerlinAmp -= this.perlinIncreaseSpeed;
      this.particles.forEach(function (particle) {
        particle.move();
      });
    };

    function Particle(params) {
      this.initX = this.x = params.x || canvas.width / 2;
      this.initY = this.y = params.y || canvas.height / 2;
      this.angle = Utils.degToRad(params.angle || Utils.randInt(1, 360));
      this.distance = params.distance;
      this.x = this.initX + Math.cos(this.angle) * this.distance;
      this.y = this.initY + Math.sin(this.angle) * this.distance;
      this.distanceThreshold =
        params.distanceThreshold + Utils.randInt(0, params.thresholdVariation);
      this.color = params.color;
      this.size = params.size || 1;
    }

    var P = Particle.prototype;

    P.move = function () {
      if (this.distance < this.distanceThreshold) {
        this.distance +=
          generator.particleDistanceSpeed +
          generator.newPerlinAmp *
            perlin.noise(
              this.x * generator.seed_1,
              this.y * generator.seed_2,
              1
            );
      } else {
        this.distance +=
          generator.newPerlinAmp *
          perlin.noise(this.x * generator.seed_1, this.y * generator.seed_2, 1);
      }
      this.angle += Utils.degToRad(generator.particleRotationSpeed);
      this.x = this.initX + Math.cos(this.angle) * this.distance;
      this.y = this.initY + Math.sin(this.angle) * this.distance;
      this.draw();
    };

    P.draw = function () {
      ctx.fillStyle = this.color;

      ctx.fillRect(this.x, this.y, this.size, this.size);
    };

    var perlin = new ClassicalNoise(),
      canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      generator,
      gui,
      globalParams = {
        compositeOperation: true,
      };

    (function init() {
      Utils.setCanvasSize();
      Utils.addEvents();

      generator = new Generator({
        x: canvas.width / 2,
        y: canvas.height / 2,
      });

      gui = new dat.GUI();
      var folder_0 = gui.addFolder("Global");
      folder_0.open();
      folder_0.add(globalParams, "compositeOperation").onFinishChange(refresh);

      var folder_1 = gui.addFolder("Generator");
      folder_1.open();
      folder_1
        .add(generator, "particleCount", 1, 5000)
        .step(10)
        .onFinishChange(refresh);
      folder_1
        .add(generator, "initialDistance", -100, 100)
        .step(10)
        .onFinishChange(refresh);
      folder_1
        .add(generator, "distanceThreshold", 0, 1000)
        .step(10)
        .onFinishChange(refresh);
      folder_1.add(generator, "seed_1", 0, 5).onFinishChange(refresh);
      folder_1.add(generator, "seed_2", 0, 5).onFinishChange(refresh);
      folder_1
        .add(generator, "perlinAmp", 0, 100)
        .step(1)
        .onFinishChange(refresh);
      folder_1.add(generator, "perlinAmpIncrease").onFinishChange(refresh);
      folder_1
        .add(generator, "perlinIncreaseSpeed", 0, 10)
        .onFinishChange(refresh);

      var folder_2 = gui.addFolder("Particles");
      folder_2.open();
      folder_2
        .add(generator, "thresholdVariation", 0, 500)
        .step(1)
        .onFinishChange(refresh);
      folder_2
        .add(generator, "particleSize", 1, 3)
        .step(1)
        .onFinishChange(refresh);
      folder_2
        .add(generator, "particleRotationSpeed", 0, 3)
        .onFinishChange(refresh);
      folder_2
        .add(generator, "particleDistanceSpeed", 0, 3)
        .onFinishChange(refresh);

      generator.populate();

      animate();
    })();

    function refresh() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      generator.particles = [];
      generator.newPerlinAmp = generator.perlinAmp;
      generator.populate();
    }

    function animate() {
      if (globalParams.compositeOperation) {
        ctx.fillStyle = "rgba(0,0,0,.9)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "lighter";
      } else {
        ctx.fillStyle = "rgba(0,0,0,1)";
        //ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
      }
      generator.draw();
      requestAnimationFrame(animate);
    }
  });
</script>

<canvas id="canvas" />

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.0/dat.gui.min.js"></script>
</svelte:head>

<style>
  #canvas {
    margin: 0;
    overflow: hidden;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    /* background-color: black; */
  }
</style>
