<script>
  import Star from '../../../assets/iconos/round-star.svg'
  import Person from '../../../assets/iconos/round-person.svg'
  import Drink from '../../../assets/iconos/drink.svg'
  import Task from '../../../assets/iconos/task.svg'
  import Banner2 from '../../../assets/banner2.jpeg'
</script>

<div class="about2">
  <div class="lefttext">
    <img class="bord" src={Task} alt="">
    <p class="p1">1400+</p>
    <h2>Clientes satisfechos</h2>
    <p class="p2">Mucha gente ya ha confiado en nosotros. Este número crece constantemente gracias a los comentarios positivos de nuestros clientes.</p>
  </div>
  <div class="rightside">
    <div class="image">
      <img src={Banner2} alt="">
    </div>
    <div class="text">
      <p class="title">Ponte en forma y entrena en el gimnasio o en casa.</p>
      <p class="sub">En nuestro gimnasio, somos más que un lugar para entrenar, somos un equipo que te apoya en tu transformación.</p>
    </div>
  </div>
</div>
<!-- <div id="about" class="aboutcont">
  <div class="slot1">
    <div class="cu1">
      <img class="bord" src={Star} alt="">
      <h2>Experiencia</h2>
      <p>Nuestros especialistas se ocupan de tu forma, te comprobarán y hablarán contigo si tienes alguna duda durante la ejecución de los planes de ejercicios.</p>
      <div class="but">
        <p>Read more</p>
      </div>
    </div>
    <div class="cu2">
      <img class="fon" src={Person} alt="">
      <h2>Entrenador</h2>
      <p>Nuestros entrenadores personales están disponibles para usted, puede llamar a su entrenador. Utilice la lista de precios y elija el plan adecuado para usted.</p>
      <div class="but">
        <p>Read more</p> 
      </div>
    </div>
  </div>
  <div class="slot2">
    <img class="bord" src={Drink} alt="">
      <h2>Dieta</h2>
      <p>También obtendrás acceso a una cuenta premium, gracias a la cual tendrás acceso a artículos con consejos y trucos para cocinar.</p>
      <div class="but">
        <p>Read more</p>
      </div>
  </div>
</div> -->


<style lang="scss">
  .aboutcont {
    width: 1280px;
    height: auto;
    margin: 0px 50px 0px;
    z-index: 2;
    display: flex;
    flex-direction: row;
    padding: 30px 0px 0px 0px;

    .slot1 {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      width: 67%;
      color: #FFFFFF;

      p {
        color: #ABA7C3;
      }

      img {
        width: 56px;
        height: 56px;
      }

      .cu1,.cu2{
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 60px 40px 60px;

        h2 {
          font-size: 32px;
        }

        .but {
          font-size: 16px;
          font-weight: 700;
          
          p{
            color: #FFFFFF;
          }
        }

        .fon {
          background: linear-gradient(90deg, #0575E6 0%, #00F260 100%);
          border-radius: 50%;
          padding: 14px;
        }

        .bord {
          border: 2px solid #ABA7C3;
          border-radius: 50%;
          padding: 14px;
        }
      }

      .cu1 {
        background: #2F2B44;
        border-radius: 10px;
        margin: 0px 10px 0px 0px;
      }

      .cu2 {
        border-radius: 10px;
        border: 2px solid #00F260;
        margin: 0px 10px 0px;
      }
    }

    .slot2 {
      border-radius: 10px;
      border: 2px solid #00F260;
      color: #FFFFFF;
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 60px 40px 60px;
      width: calc(33% - 10px);
      margin: 0px 0px 0px 10px;

      img{
        width: 56px;
        height: 56px;
        border: 2px solid #ABA7C3;
        border-radius: 50%;
        padding: 14px;
      }

      h2 {
        font-size: 32px;
      }

      p {
        color: #ABA7C3;

      }

      .but {
        font-size: 16px;
        font-weight: 700;
        
        p{
          color: #FFFFFF;
        }
      }
    }
  }

  .about2{
    width: 1280px;
    height: auto;
    border-radius: 10px;
    margin: 70px 50px 70px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    max-width: calc(100% - 100px);


    .lefttext{
      display: flex;
      flex-direction: column;
      color: #FFFFFF;
      width: 33%;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: nowrap;

      img {
        width: 56px;
        height: 56px;
      }

      .p1 { 
        font-size: 120px;
        font-weight: 600;
        color: #00F260;
        margin: 40px 0px 30px 0px;
        line-height: 1;
        letter-spacing: -0.05em;
        height: auto;

        @media screen and (max-width: 1140px) {
          font-size: 90px;
        }
      }

      h2 {
        font-size: 32px;
        margin: 20px 0px 0px 0px;
      }

      .bord{
        background: #2F2B44;
        border-radius: 50%;
        padding: 14px;
      }

      .p2{
        font-size: 16px;
        color: #ABA7C3;
        font-weight: 400;
        margin: 30px 0px 30px 0px;
        width: 80%;

        @media screen and (max-width: 540px) {
          width: 100%;
          max-width: 100%;
        }
      }

      @media screen and (max-width: 840px) {
        width: 100%;
        max-width: 100%;
      }
      
    }

    .rightside{
      display: flex;
      flex-direction: column;
      width: 60%;

      .image {
       display: flex;
       flex-direction: column;
       align-items: flex-end;
       height: auto;
       width: 100%;
       max-width: 100%;
       justify-content: center;


        img {
          height: 460px;
          width: 80%;
          max-width: 80%;
          border-radius: 0px 90px 0px 0px;

          @media screen and (max-width: 540px) {
            display: flex;
            height: 330px;
            width: 100%;
            max-width: 100%;
          }
        }
      }

      .text{
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: -120px 0px 0px 0px; 

        .title {
          font-size: 64px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 25px 0px;
          letter-spacing: -0.05em;
          line-height: 1;
          width: auto;
          max-width: 100%;
          text-align: left;
          justify-content: flex-start;
          height: auto;
          
          @media screen and (max-width: 1140px) {
            font-size: 56px;
          }

          @media screen and (max-width: 540px) {
            font-size: 45px;
          }

        }

        .sub{
          font-size: 16px;
          color: #ABA7C3;
          font-weight: 400;
          width: 70%;
          max-width: 70%;

          @media screen and (max-width: 540px) {
            width: 100%;
            max-width: 100%;
          }
        }

        @media screen and (max-width: 540px) {
            padding: 0px 20px 0px;
            width: 100%;
            max-width: 100%;
        }
      }

      @media screen and (max-width: 840px) {
        margin: 45px 0px 0px 0px;
        width: 100%;
        max-width: 100%;
      }
    }
    @media screen and (max-width: 1140px) {
      margin: 70px 30px 70px;
      max-width: calc(100% - 60px);
    }

    @media screen and (max-width: 840px) {
      flex-direction: column;
      flex-wrap: nowrap;
    }

    @media screen and (max-width: 540px) {
      margin: 70px 20px 35px;
      max-width: calc(100% - 40px);
    }

  }
</style>