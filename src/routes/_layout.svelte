<script>
  import Header from "../components/Header.svelte";
  import Twisted from "../components/twisted/Twisted.svelte"

  export let segment;
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    /* background-color: white; */
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  footer {
    color: #aaa;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 1em auto;
    max-width: 1400px;
    padding: 1em 2em;
    text-align: center;
    width: 100%;
  }
</style>

<div class="layout">
  <Twisted />
  <Header {segment} />

  <main>
    <slot />
  </main>

  <footer>
    <span>
      &copy; {new Date().getFullYear()} adimension. Powered by <a
                                                                 href="https://sapper.svelte.dev"
                                                                 target="_blank">Sapper</a>. Template by <a
                                                                 href="https://www.twitter.com/Charca"
                                                                 target="_blank">Adam Bosnjakovic</a>.
    </span>
  </footer>
</div>
