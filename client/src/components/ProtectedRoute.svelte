<script>
  import { navigate, useLocation } from "svelte-routing";
  import { estado, user } from "../store/user";
  import Index from "../pages/login/Index.svelte";
  import Header from "./Header.svelte";
  import Loader from "./Loader.svelte";
  import { onMount } from "svelte";
  import { sendRequest } from "../utilities/sendRequest";

  const location = useLocation();

  $: if($estado === "unlogged") {
    navigate("/login", {
      state: { from: $location.pathname },
      replace: true
    });
  }
  onMount(async () => {
    if($estado === "loading") {
      const res = await sendRequest("me", null, "GET");
      if(res) {
        $user = res.data;
        $estado = "logged";
        return;
      }
      $estado = "unlogged";
    }
  });
</script>

{#if $estado === "loading"} 
  <main class="fullscreen">
    <Loader text="Cargando datos de usuario..." />
  </main>
{:else if $estado !== "unlogged"}
  <slot />
{:else}
  <Header>
    <Index />
  </Header>
{/if}

<style>
  .fullscreen {
    width: 100vw;
    height: 100dvh;
  }
</style>