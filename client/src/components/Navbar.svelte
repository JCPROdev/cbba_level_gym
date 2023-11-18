<script>
  import { Link } from "svelte-routing";
</script>

<nav>
  <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
</nav>
<main>
  <slot />
</main>

<style lang="scss">
  nav {
    width: 100vw;
    position: fixed;
    height: 100px;
    z-index: 5;
  }
</style>
