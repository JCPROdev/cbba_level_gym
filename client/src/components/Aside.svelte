<script>
  import { Link, navigate } from "svelte-routing";
  import logo from "../assets/logoDash.png";
  import home from "../assets/iconos/home.png";
  import menu from "../assets/iconos/menu.png";
  import { sendRequest } from "../utilities/sendRequest";
  import { successAlert } from "../utilities/alerts";
  import { user } from "../store/user";
  import { productMessage } from "../store/productMessage";

  const logout = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    await sendRequest(
      "logout",
      {
        token: refresh_token,
      },
      "DELETE"
    );
    successAlert("Cerrado sesión correctamente");
    localStorage.removeItem("access_token");
    localStorage.removeItem(`refresh_token`);
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
      <!-- <li>
        <Link to="/dashboard/home" class="link blue"
          ><img src={home} alt="logo-home" />Inicio</Link
        >
      </li> -->
      <li>
        <Link to="/dashboard/inscripcion" class="link">Inscripciones</Link>
      </li>
      <li><Link to="/dashboard/clientes" class="link">Clientes</Link></li>
      {#if $user.usuario === "admin"}
        <li><Link to="/dashboard/empleados" class="link">Empleados</Link></li>
      {/if}
      <li><Link to="/dashboard/paquetes" class="link">Paquetes</Link></li>
      <li>
        <Link to="/dashboard/productos" class="link orange">
          Productos
          {#if $productMessage}
            {#key $productMessage}
              <p class="animation">{$productMessage}</p>
            {/key}
          {/if}
        </Link>
      </li>

      <li><Link to="/dashboard/almacen" class="link orange">Almacen</Link></li>
      <li><Link to="/dashboard/venta" class="link orange">Venta</Link></li>
      {#if $user.usuario === "admin"}
        <li>
          <Link to="/dashboard/promocion" class="link blue">Promoción</Link>
        </li>
      {/if}
    </ul>
    <section class="imgPerfil">
      <!-- <img alt="Perfil" src={perfil} /> -->
      <p class="nombre">Bienvenido {$user.nombre}</p>
      <p>Turno: {$user.turno}</p>
      <button class="link blue" on:click={logout}>Logout</button>
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
    z-index: 1;
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
      display: flex;
      align-items: center;
      isolation: isolate;
    }
    .imgPerfil {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
      & img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      .nombre {
        color: var(--primary);
        font-weight: 600;
        letter-spacing: 0.5px;
        font-size: 0.9em;
        align-self: center;
      }
      & p {
        font-size: 0.8em;
        align-self: center;
      }
      & button {
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
      height: 100dvh;
    }
  }
</style>
