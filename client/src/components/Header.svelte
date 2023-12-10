<script>
  import { Link } from 'svelte-routing';
  import Arrow from '../assets/iconos/arrow-right.svg'
  import Logo from '../assets/logo.png'

  let targetDiv;

  const scrollToDiv = () => {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  };
</script>

<header>
  <div class="headcont">
    <!-- <img src="tu_logo.png" alt="Logo" /> -->
    <Link class="index-logo" to="/" >
      <img src={Logo} alt="">
    </Link>
    <nav>
      <Link class="index-link op" to="#paquetes" on:click={scrollToDiv}>Paquetes</Link>
      <Link class="index-link" to="#nosotros" on:click={scrollToDiv}>Nosotros</Link>
      <Link class="index-link" to="#promos" on:click={scrollToDiv}>Promos</Link>
      <Link class="index-link" to="#programas" on:click={scrollToDiv}>Programas</Link>
      <Link class="index-link" to="/login">Login</Link>
      <Link class="index-link butrem" to="/">
        <p>Contacto</p>
        <img src={Arrow} alt="" />
      </Link>
    </nav>
  </div>
</header>
<slot/>

<style lang="scss">
  header {
    background-color: transparent;
    color: #fff;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 80px;
    margin: 20px 0px -80px 0px;
    z-index: 2;
    position: relative;
    font-family: "Poppins";
    display: flex;
    flex-wrap: nowrap;
    width: 100%;

    .headcont {
      align-content: center;
      align-items: center;
      background: rgba(0,0,0,0.0);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: 60px;
      justify-content: space-between;
      margin: 0px 50px 0px;
      width: 1280px;
      max-width: calc(100% - 100px);

      .index-logo{
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
      }
    }
  } 

</style>