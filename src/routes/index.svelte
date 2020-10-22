<script>
  import {onMount} from "svelte"
  import Twisted from "../components/twisted/Twisted.svelte"
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
    /* width: 100%; */
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
      I'm Adam Bosnjakovic, a software engineer from the <span style="color: #fd6378;">♥</span>ly city of Sydney working for <a
                                                               href="https://experience.digital"
                                                               target="_blank">Experience Digital</a>, a rocket powered digital agency.
    </p>
  </div>

  <figure class="text-xs text-center">
    <Twisted />
  </figure>

</div>

<p><a href="/about" class="italic">works</a></p>

<div class="flex-row sm:flex mb-4">
  <div class="w-1/4  ">
    <img class="h-16 m-4 sm:h-10" src="images/wwf-logo.svg" alt="WWF Australia logo">
  </div>
  <div class="w-1/4  ">
    <img class="h-16 m-4 sm:h-10" src="images/webby-logo.svg" alt="Webby Awards logo">
  </div>
  <div class="w-1/4  ">
    <img class="h-16 m-4 sm:h-10" src="images/nsw-logo.png" alt="NSW Government logo">
  </div>
  <div class="w-1/4  ">
    <img class="h-16 m-4 sm:h-10" src="images/bng.png" alt="Black Nova Group Logo">
  </div>
</div>

