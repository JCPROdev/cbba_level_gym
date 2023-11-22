<script>
  import Arrow from '../../../assets/iconos/arrow-right.svg'
</script>

<header>
  <div class="headcont">
  <!-- <img src="tu_logo.png" alt="Logo" /> -->
  <a href="/">Level Gym</a>
  <nav>
    <a href="/">Nosotros</a>
    <a href="/">Precios</a>
    <a href="/">Servicios</a>
    <a href="/">Blog</a>
    <a class="butrem" href="/">
      <p>Contacto</p>
      <img src={Arrow} alt="" />
    </a>
  </nav>
</div>
</header>

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

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 32px;
  }

  img {
    height: 40px; /* Ajusta la altura según tu necesidad */
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

    a {
      color: #fff;
      text-decoration: none;
      margin-right: 30px;
      font-size: 1rem;
    }

    a:last-child {
      margin-right: 0; /* Elimina el margen derecho del último enlace */
    }

    .butrem {
      border-radius: 16px;
      background: linear-gradient(90deg, #0575E6 0%, #00F260 100%);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: 60px;
      justify-content: space-between;
      padding: 0px 30px 0px 40px;
      align-items: center;

      p {
        font-size: 16px;
        margin: 0px 50px 0px 0px;
      }
    }
  }
}
</style>