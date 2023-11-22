<script>
  import Banner from '../../../assets/banner.jpg'
  import Arrowr from '../../../assets/iconos/arrow-right.svg'
</script>

<div class="banner">
  <div class="banncont">
    <div class="banntext">
      <h1>Estación de gimnasio</h1>
      <p class="desc1">Cuida tu salud con nuestros planes de ejercicio.</p>
      <p class="desc2">Llevamos muchos años creando e implementando proyectos en la ciudad, tenemos cientos de clientes satisfechos.</p>
      <a class="botonr" href="/">
        <p>Read more</p>
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
    height: 100vh;
    display: flex;
    justify-content: center;

    .banncont{
      margin: 240px 50px 0px;
      position: absolute;
      color: #FFFFFF;
      width: 1280px;
      z-index: 3;

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
        }

        .desc2 {
          font-size: 16px;
          font-weight: 400;
          color: #ABA7C3;
          width: 70%;
          margin: 0px 0px 40px 0px;
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
      }

    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .grad {
      width: 100%;
      height: 100vh;
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
  }
</style>