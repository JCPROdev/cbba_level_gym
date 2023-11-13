<script>
  import { Link, navigate } from "svelte-routing";
  import logo from "../assets/logoDash.png";
  import perfil from "../assets/perfil.png";
  const logout = () => {
    navigate("/login");
  };
</script>

<div>
  <aside>
    <ul>
      <li><img src={logo} alt="logo-igm" /></li>

      <li><Link to="/dashboard/clientes" class="link">Clientes</Link></li>
      <li><Link to="/dashboard/empleados" class="link">Empleados</Link></li>
    </ul>
    <section class="imgPerfil">
      <img alt="Perfil" src={perfil} />
      <p>nombre</p>
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
    img {
      width: 170px;
      height: 120px;
    }
    img {
      width: 100;
      height: 100;
    }
    ul {
      padding: 0;
      margin: 0;
      width: 100%;
    }

    li {
      margin: 1em;
      list-style: none;
      width: 100%;
    }
    .imgPerfil {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      & p {
        font-size: 900;
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
    .link {
      text-decoration: none;
      color: #333;
      padding: 8px 16px;
      display: block;
    }

    .link:hover {
      background-color: #eee;
    }
  }
  button {
  }
  main {
    width: calc(100vw - 240px);
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
