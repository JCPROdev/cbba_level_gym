<script>
  import Banner3 from '../../../assets/banner3.jpeg'
</script>

<div id="nosotros" class="difcont">
  <div class="image">
    <img src={Banner3} alt="">
  </div>
  <div class="text">
    <h2>Nuestra diferencia</h2>
    <p class="title">Entrena con un entrenador experimentado en cada sesión.</p>
    <p class="sub">Ofrecemos sesiones de entrenamiento personal con capacitación de alta calidad en un entorno impulsado por la comunidad. Le enseñaremos los fundamentos del levantamiento de pesas, te volverás más fuerte, más resistente y tomarás el control de tu salud y estado físico.</p>
  </div>
</div>

<style lang="scss">
  .difcont{
    width: 1280px;
    height: 630px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 50px 0px;
    align-items: center;
    max-width: calc(100% - 100px);

    .image{
      width: 40%;
      height: 80%;
      align-items: center;
      justify-content: center;

      img{
        width: 100%;
        height: 100%;
        border-radius: 32px;
        object-fit: cover;
      }

      @media screen and (max-width: 840px) {
        width: 80%;
        height: 100%;
      }
    }


    .text{
      display: flex;
      flex-direction: column;
      width: 50%;
      color: #FFFFFF;
      gap: 32px;

      h2{
        @media screen and (max-width: 540px) {
          font-size: 16px;
        }
      }
      .title{
        font-size: 64px;
        font-weight: 700;
        width: 100%;
        letter-spacing: -0.05em;
        line-height: 1;

        @media screen and (max-width: 1140px) {
          font-size: 48px;
        }
        
        @media screen and (max-width: 540px) {
          font-size: 32px;
        }
      }

      .sub{
        font-size: 16px;
        font-weight: 400;
        color: #ABA7C3;
        width: 80%;

        @media screen and (max-width: 540px) {
          width: 70%;
        }
      }

      @media screen and (max-width: 840px) {
        width: 100%;
        margin-top: 32px;
      }

    }

    @media screen and (max-width: 1140px) {
      margin: 0px 30px 50px;
      max-width: calc(100% - 60px);
      justify-content: space-between;
    }

    @media screen and (max-width: 840px) {
      flex-direction: column;
      flex-wrap: nowrap;
      margin: 100px 30px 50px;
      height: auto;
    }

  }
</style>