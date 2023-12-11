<script>
  import { Link } from 'svelte-routing';
  import Arrow from '../assets/iconos/arrow-right.svg'
  import Logo from '../assets/logo.png'
  import Menu from '../assets/iconos/menu2.svg'

  let targetDiv;

  const scrollToDiv = () => {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  };
</script>

<header>
  <div class="headcont">
    
    <Link class="logo" to="/" >
      <img src={Logo} alt="logo">
    </Link>
    <div class="menu">
      <button class="but"><img src={Menu} alt="menu"></button>
    </div>
    <nav>
      <Link class="index-link op" to="#paquetes" on:click={scrollToDiv}>Paquetes</Link>
      <Link class="index-link" to="#nosotros" on:click={scrollToDiv}>Nosotros</Link>
      <Link class="index-link" to="#promos" on:click={scrollToDiv}>Promos</Link>
      <Link class="index-link" to="#programas" on:click={scrollToDiv}>Programas</Link>
      <Link class="index-link" to="/login">Login</Link>
      <Link class="index-link butrem" to="#foot" on:click={scrollToDiv}>
        <p>Contacto</p>
        <img src={Arrow} alt="" />
      </Link>
    </nav>
  </div>
</header>
<slot/>

<style lang="scss">
  header {
    align-content: center;
    align-items: center;
    background: rgba(0,0,0,0.0);
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

    .headcont {
      align-content: center;
      align-items: center;
      background: rgba(0,0,0,0.0);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: auto;
      justify-content: space-between;
      margin: 0px 50px 0px;
      width: 1280px;
      max-width: calc(100% - 100px);

      .menu{
        display: none;

        .but{
          background: transparent;
          border: none;
          cursor: pointer;
        }

        @media screen and (max-width: 1024px) {
          display: flex;
        }
      }

      .logo{
        width: 200px;
        height: auto;
        img{
          width: 100%;
          height: 150px;
        }
      }
      nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70%;
        justify-content: flex-end;
        font-size: 16px;
        font-weight: 700;

        @media screen and (max-width: 1024px) {
          display: none;
        }

        @media screen and (max-width: 320px) {
          display: none;
        }

      }

      @media screen and (max-width: 1140px) {
        margin: 0px 30px 0px;
        max-width: calc(100% - 60px);
      }

      @media screen and (max-width: 540px) {
        margin: 0px 20px 0px;
        max-width: calc(100% - 40px);
      }
    }
  } 

</style>