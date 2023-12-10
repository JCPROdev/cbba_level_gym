<script>
  import Head from "../../components/Head.svelte";
  import Banner from "./components/Banner.svelte";
  import About from './components/Aboutus.svelte';
  import Pricing from './components/Pricing.svelte';
  import Difference from "./components/Difference.svelte";
  import Tiempos from "./components/Tiempos.svelte";
  import Sesiones from "./components/Sesiones.svelte";
  import Promos from "./components/Promos.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Head title="Inicio" />
<div class="back">
  <Banner />
  <Pricing></Pricing>
  <Difference></Difference>
  <About></About>
  <Promos></Promos>
  <Tiempos></Tiempos>
  <Sesiones></Sesiones>
</div>
<Footer></Footer>

<style lang="scss">
  .back {
    background: #125BA8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }
</style>