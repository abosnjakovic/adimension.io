<script>
</script>

<style>
  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

    img {
      max-width: 300px;
    }
  }
</style>

<svelte:head>
  <title>Adam Bosnjakovic - adimension</title>
</svelte:head>

<div
  class="flex flex-1 sm:flex-col md:flex-row lg:flex-row items-center
  justify-center m-1 z-10">
  <div class="sm:flex-none sm:pb-2 sm:text-center md:flex-1 md:text-left">
    <h1 class="mb-0">Hello, welcome to my dimension .</h1>
    <p>
      I'm Adam Bosnjakovic <a
                             href="https://www.github.com/Charca/sapper-blog-template"
                             target="_blank">GitHub</a> to get started.
    </p>
  </div>

  <figure class="text-xs text-center">
    <img alt="Person typing on laptop" src="undraw_counting_stars_rrnl.svg" />
    <figcaption class="italic">
      Illustration thanks to <a href="https://undraw.co" target="_blank">Undraw</a>
    </figcaption>
  </figure>
</div>
