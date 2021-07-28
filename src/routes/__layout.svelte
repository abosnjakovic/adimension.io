<script>
  import "../normalise.css";
  import { onMount } from "svelte";

  import { noise } from "../components/noise";
  import Gradient from "../components/gradient.svelte";
  import Nav from "../components/navigation.svelte";
  import Cursor from "../components/cursor.svelte";
  import Perline from "../components/perline.svelte";

  onMount(() => {
    noise();
  });
</script>

<Gradient />
<Nav />
<Cursor />
<Perline />

<slot />
