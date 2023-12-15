<script>
  import { Link } from "svelte-routing";
  import Arrow from "../assets/iconos/arrow-right.svg";
  import Logo from "../assets/logo.png";
  import Menu from "../assets/iconos/menu2.svg";
  let targetDiv;
  let navActivado = false;
  const activeNav = () => {
    navActivado = !navActivado;
  };
  const scrollToDiv = () => {
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };
</script>

<header>
  <button class="menu" on:click={activeNav}>
    <img src={Menu} alt="menu burger" />
  </button>
  <div
    class="headcont"
    class:active={navActivado}
    class:desactive={!navActivado}
  >
    <button class="menu" on:click={activeNav}>
      <img src={Menu} alt="menu burger" class="but" />
    </button>
    <Link class="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <Link class="index-link op" to="#paquetes" on:click={scrollToDiv}
        >Paquetes</Link
      >
      <Link class="index-link" to="#nosotros" on:click={scrollToDiv}
        >Nosotros</Link
      >
      <Link class="index-link" to="#promos" on:click={scrollToDiv}>Promos</Link>
      <Link class="index-link" to="#programas" on:click={scrollToDiv}
        >Programas</Link
      >
      <Link class="index-link" to="/login">Login</Link>
      <Link class="index-link butrem" to="#foot" on:click={scrollToDiv}>
        <p>Contacto</p>
        <img src={Arrow} alt="" />
      </Link>
    </nav>
  </div>
</header>

<slot />

<style lang="scss">
  header {
    align-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 60px;
    justify-content: center;
    margin: 20px 0px -80px 0px;
    position: relative;
    transition-duration: 1000ms;
    width: 100%;
    z-index: 2;
    max-width: 100%;
    & > button {
      display: none;
    }

    .headcont {
      align-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0);
      display: flex;
      flex-direction: row;
      height: auto;
      justify-content: space-between;
      margin: 0px 50px 0px;
      width: 1280px;
      max-width: calc(100% - 100px);
      & > button {
        display: none;
      }

      .logo {
        width: 200px;
        height: auto;
        img {
          width: 100%;
          height: 150px;
        }
      }
      nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70%;
        justify-content: flex-end;
        font-size: 16px;
        font-weight: 700;
        & button {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 780px) {
    header {
      height: auto;
      width: auto;
      margin: 0;
      z-index: 200;
      
      & button {
        display: flex;
        position: absolute;
        top: 10px;
        border: none;
        background-color: transparent;
        width: 100vw;
        justify-content: center;
        box-shadow: 0 5px 10px #0005;
        padding: 1em;
        margin-bottom: 2em;
      }
      .headcont {
        position: absolute;
        height: 100vh;
        background-color: #17232e;
        top: 0;
        left: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
       
        & button {
          display: flex;
          background-color: transparent;
          border: none;
          width: 87vw;
        }
        & nav {
          flex-direction: column;
          gap: 2em;
        }
      }
      .active {
        opacity: 1;
        z-index: 200;
        animation: horizontal-in 1s ease-in-out;
  
      }
      .desactive {
        opacity: 0;
        z-index: -10;
     
      }
    }
  
  }
</style>
