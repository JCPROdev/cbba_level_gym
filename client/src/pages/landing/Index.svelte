<script>
  import Banner from "./components/Banner.svelte";
  import Header from './components/Header.svelte'
  import About from './components/Aboutus.svelte'
  import Pricing from './components/Pricing.svelte'
</script>

<div class="back">
  <Header></Header>
  <Banner />
  <About></About>
  <Pricing></Pricing>
</div>

<style lang="scss">
  .back {
    background: #125BA8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>