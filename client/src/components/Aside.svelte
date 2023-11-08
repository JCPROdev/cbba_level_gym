<script>
  import { Link, navigate } from "svelte-routing";

  const logout = () => {
    navigate("/login");
  }
</script>

<div>
  <aside>
    <ul>
      <li><Link to="/dashboard/clientes">Clientes</Link></li>
      <li><Link to="/dashboard/empleados">Empleados</Link></li>
      <li><button on:click={logout}>Logout</button></li>
    </ul>
  </aside>
  <main>
    <slot />
  </main>  
</div>

<style lang="scss">
  div {
    display: flex;
    height: 100dvh;
  }
  aside {
    width: 200px;
    background-color: #e9e9e9;
  }
  main {
    width: calc(100vw - 200px);
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>