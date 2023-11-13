<script>
  import { Link, navigate } from "svelte-routing";
  import logo from "../assets/logoDash.png";
  import perfil from "../assets/perfil.png";
  import home from "../assets/iconos/home.png";
  const logout = () => {
    navigate("/login");
  };
</script>

<div>
  <aside>
    <ul>
      <img src={logo} alt="logo-igm" class="logo" />
      <li>
        <Link to="/dashboard/home" class="link"
          ><img src={home} alt="logo-home" />Inicio</Link
        >
      </li>
      <li><Link to="/dashboard/clientes" class="link">Clientes</Link></li>
      <li><Link to="/dashboard/empleados" class="link">Empleados</Link></li>
    </ul>
    <section class="imgPerfil">
      <img alt="Perfil" src={perfil} />
      <p class="nombre">nombre</p>
      <p>rol</p>
      <button on:click={logout}>Logout</button>
    </section>
  </aside>
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  div {
    display: flex;
    height: 100vh;
  }
  aside {
    width: 240px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 5px 5px #0005;
    .logo {
      width: 170px;
      height: 120px;
    }
    ul {
      padding: 0;
      margin: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      justify-content: center;
      align-items: center;
    }
    li {
      text-align: center;
      list-style: none;
      width: 100%;
    }
    .imgPerfil {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      .nombre {
        color: #65b32e;
        font-weight: 600;
        letter-spacing: 0.5px;
        font-size: 0.9em;
      }
      & p {
        font-size: 0.8em;
      }
      & button {
        padding: 0.5em;
        width: 80%;
        background-color: #65b32e;
        color: #fff;
        border: none;
        cursor: pointer;
      }
    }
  }

  main {
    width: calc(100vw - 240px);
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* background-color: rgb(185, 185, 185); */
  }
  .link > :global(a) {
    text-decoration: none;
  }
</style>
