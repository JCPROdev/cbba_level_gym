<script>
  import { Link, navigate } from "svelte-routing";
  import logo from "../assets/logoDash.png";
  import perfil from "../assets/perfil.png";
  import home from "../assets/iconos/home.png";
  import menu from "../assets/iconos/menu.png";

  const logout = () => {
    navigate("/login");
  };

  let navActivado = false;
  const activeNav = () => {
    navActivado = !navActivado;
  };
</script>

<div class="data">
  <button class="menu" on:click={activeNav}><img src={menu} alt="" /></button>
  <aside class:Navaside={navActivado} class:navres={!navActivado}>
    <button class="menu-fd" on:click={activeNav}
      ><img src={menu} alt="" /></button
    >

    <ul>
      <img src={logo} alt="logo-igm" class="logo" />
      <li>
        <Link to="/dashboard/home" class="link blue"
          ><img src={home} alt="logo-home" />Inicio</Link
        >
      </li>
      <li><Link to="/dashboard/inscripcion" class="link">Inscripciones</Link></li>
      <li><Link to="/dashboard/clientes" class="link">Clientes</Link></li>
      <li><Link to="/dashboard/empleados" class="link">Empleados</Link></li>
      <li><Link to="/dashboard/paquetes" class="link">Paquetes</Link></li>
      <li><Link to="/dashboard/productos" class="link orange">Productos</Link></li>
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
  .navres {
    @media only screen and (max-width: 600px) {
      transform: translateX(-100%);
      position: fixed;
    }
  }
  .data {
    display: flex;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
  .menu,
  .menu-fd {
    display: none;
    @media only screen and (max-width: 600px) {
      display: flex;
      background-color: #fff;
      width: 100%;
      display: flex;
      height: 8vh;
      justify-content: center;
      border: none;
      align-items: center;
    }
  }
  .menu-fd {
    background-color: transparent;
  }
  div {
    display: flex;
    height: 100vh;
    .Navaside {
      @media only screen and (max-width: 600px) {
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 100;
        background-color: #0008;
        justify-content: flex-start;
      }
    }
  }
  aside {
    width: 240px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-right: 2px solid var(--grayopacity);
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
    @media only screen and (max-width: 600px) {
      & .imgPerfil {
        display: none;
      }
      &.logo {
        display: none;
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
    background-color: var(--bg);
    /* background-color: rgb(185, 185, 185); */
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .link > :global(a) {
    text-decoration: none;
  }
</style>
