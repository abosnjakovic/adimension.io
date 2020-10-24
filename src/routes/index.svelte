<script>
  import {onMount} from "svelte"
  import Twisted from "../components/twisted/Twisted.svelte"
</script>

<style>
  p {
    font-size: 1.4em;
    line-height: 1.5;
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
                                                             You can find out more my digital life and code on <a href="https://github.com/abosnjakovic" target="_blank"> Github </a>.
                                                             Or see my professional experience and history on <a href="https://www.linkedin.com/in/adimension/" target="_blank">LinkedIn</a>. <br/> Thanks for stopping by!
    </p>
  </div>

  <Twisted />
</div>


