<script>
  import Banner from '../../../assets/banner.jpg'
  import Arrowr from '../../../assets/iconos/arrow-right.svg'

  let targetDiv;

  const scrollToDiv = () => {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  };
</script>

<div class="banner">
  <div class="banncont">
    <div class="banntext">
      <h1>Estación de gimnasio</h1>
      <p class="desc1">Cuida tu salud con nuestros planes de ejercicio.</p>
      <p class="desc2">Llevamos muchos años creando e implementando nuevos caminos en la ciudad, somos un gimnasio de campeones. ¡Súmate a nuestra familia!</p>
      <a class="botonr" href="#paquetes" on:click={scrollToDiv}>
        <p>Más</p>
        <img src={Arrowr} alt="">
      </a>
    </div>
  </div>
  <img class="image" src={Banner} alt="">
  <div class="grad"></div>
</div>

<style lang="scss">
  .banner {
    width: 100%;
    height: 990px;
    display: flex;
    justify-content: center;

    .banncont{
      margin: 240px 50px 0px;
      position: absolute;
      color: #FFFFFF;
      width: 1280px;
      z-index: 3;
      max-width: calc(100% - 100px);

      .banntext {
        display: flex;
        flex-direction: column;
        width: 50%;


        h1 {
          font-size: 16px;
          font-weight: 600;
        }
  
        .desc1 {
          font-size: 64px;
          font-weight: 700;
          line-height: 64px;
          letter-spacing: -0.05em;
          margin: 25px 0px 25px 0px;

          @media screen and (max-width:1140px) {
            font-size: 56px;
          }

          @media screen and (max-width: 540px) {
            font-size: 45px;
          }
        }

        .desc2 {
          font-size: 16px;
          font-weight: 400;
          color: #ABA7C3;
          width: 70%;
          margin: 0px 0px 40px 0px;

          @media screen and (max-width: 540px) {
            width: 100%;
            max-width: 100%;
          }
        }

        .botonr {
          border-radius: 16px;
          background: linear-gradient(90deg, #0575E6 0%, #00F260 100%);
          padding: 0px 30px 0px 40px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          height: 60px;
          width: fit-content;
          text-decoration: none;
          justify-content: space-between;

          p {
            font-size: 16px;
            font-weight: 700;
            color: #FFFFFF;
            margin: 0px 50px 0px 0px;

            height: auto;
            line-height: 1.4;
            text-align: center;
            width: auto;
            max-width: calc(100% - 50px);
            justify-content: center;
          }

          img {
            width: 32px;
            height: 32px;
          }
        }

        @media screen and (max-width:840px) {
          width: 100%;
          max-width: 100%;
        }
      }

      @media screen and (max-width: 1140px) {
        margin: 180px 30px 0px;
        max-width: calc(100% - 60px);
      }

      @media  screen and (max-width: 540px) {
        margin: 180px 20px 0px;
        max-width: calc(100% - 40px);
      }

    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
      @media screen and (max-width: 540px) {
        object-position: left;
        height: inherit;
      }
    }
    
    .grad {
      width: 100%;
      height: 990px;
      background: linear-gradient(0deg, #125BA8 1.78%, rgba(36, 32, 59, 0.00) 100%);
      align-content: center;
      align-items: center;
      flex: none;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-end;
      left: 0;
      margin: 0 0 0 0;
      position: absolute;
      top: 0px;
      width: 100%;
      max-width: 100%;
    }

    @media screen and (max-width: 540px) {
      padding: 0px 0px 198px 0px;
    }
  }
</style>