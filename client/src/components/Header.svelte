<script>
  import { Link } from 'svelte-routing';
  import Arrow from '../assets/iconos/arrow-right.svg'
</script>

<header>
  <div class="headcont">
  <!-- <img src="tu_logo.png" alt="Logo" /> -->
  <Link class="index-logo" to="/">Level Gym</Link>
  <nav>
    <Link class="index-link" to="/">Nosotros</Link>
    <Link class="index-link" to="/">Precios</Link>
    <Link class="index-link" to="/">Servicios</Link>
    <Link class="index-link" to="/">Blog</Link>
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
  }

  img {
    height: 40px;
  }

  nav {
    display: flex;
    align-content: center;
    align-items: center;
    background: rgba(0,0,0,0.0);
    flex-direction: row;
    flex-wrap: nowrap;
    height: 60px;
    justify-content: flex-end;
    width: 70%;
    max-width: 70%;
  }
}
</style>