<script>

</script>

<div id="programas" class="tiemsec">
  <div class="tiemcont">
    <div class="text">
      <h1>Flexibilidad</h1>
      <p class="title">Gestiona tu <br>tiempo</p>
      <p class="sub">Si estás buscando flexibilidad de acuerdo a tu disponibilidad de tiempo, te ofrecemos nuestros diferentes paquetes adaptados para ti.</p>
    </div>
    <div class="cubes">
      <div class="latizq">
        <div class="cub1">
          <h3>3 x Semana</h3>
          <h2>180 Bs</h2>
          <p>12 ingresos al mes</p>
        </div>
        <div class="cub2">
          <h3>1/2 Mes</h3>
          <h2>150 Bs</h2>
        </div>
      </div>
      <div class="latder">
        <div class="cub1">
          <h3>1 Semana</h3>
          <h2>150 Bs</h2>
        </div>
        <div class="cub2">
          <h3>3 Meses</h3>
          <h2>620 Bs</h2>
        </div>
      </div>
      <div class="extercub">
        <div class="cub3">
          <h3>6 Meses</h3>
          <h2>1140 Bs</h2>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .tiemsec{
    align-content: center;
    align-items: center;
    background: #1A2A6C;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    justify-content: center;
    padding: 70px 0px 0px 0px;
    width: 100%;
    z-index: 1;
    max-width: 100%;

    .tiemcont{
      align-content: flex-start;
      align-items: flex-start;
      background: rgba(0,0,0,0.0);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: auto;
      justify-content: flex-start;
      margin: 0px 50px -130px;
      transition-duration: 1000ms;
      width: 1280px;
      max-width: calc(100% - 100px);

      .text{
        align-content: flex-start;
        align-items: flex-start;
        background: rgba(0,0,0,0.0);
        flex: none;
        flex-direction: column;
        flex-wrap: nowrap;
        height: auto;
        justify-content: flex-start;
        margin: 0px 10px 0px 0px;
        width: calc(33% - 10px);
        max-width: calc(33% - 10px);

        h1{
          color: #00F260;
          font-size: 20px;
          font-weight: 600;
        }

        .title{
          color: #FFFFFF;
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -0.05em;
          line-height: 1;
          margin: 25px 0px 25px 0px;
          text-align: left;
          width: auto;
          max-width: 100%;
          justify-content: flex-start;

          @media screen and (max-width:1140px) {
            font-size: 38px;
          }
        }

        .sub{
          color: #ABA7C3;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          margin: 0px 0px 25px 0px;
          text-align: left;
          width: 70%;
          max-width: 70%;
          justify-content: flex-start;
        }

        @media screen and (max-width: 840px) {
          margin: 0px 0px 0px 0px;
          width: 100%;
          max-width: 100%;
        }
      }

      .cubes{
        align-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        padding: 0px;
        width: 67%;
        max-width: 67%;

        .latizq{
          align-content: center;
          align-items: center;
          flex: 1;
          flex-direction: column;
          flex-wrap: nowrap;
          height: auto;
          justify-content: center;
          margin: 0px 10px 0px;
          width: auto;
          max-width: calc(100% - 20px);

          .cub1{
            align-content: flex-start;
            align-items: flex-start;
            background: linear-gradient(135deg, #0575E6 20%, #00F260 100%);
            border-radius: 10px;
            flex: none;
            flex-direction: column;
            flex-wrap: nowrap;
            height: auto;
            justify-content: flex-start;
            padding: 50px 40px 50px;
            width: 100%;
            max-width: 100%;
            
            h3{
              color: #00F260;
              font-size: 16px;
              font-weight: 700;
              padding: 5px 20px 5px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 48px;
              width: fit-content;
            }

            h2{
              color: #FFFFFF;
              font-size: 32px;
              line-height: 1;
              margin: 30px 0px 40px 0px;
            }

            p{
              color: #FFFFFF;
              font-size: 16px;
              font-weight: 400;
              line-height: 1.5;

            }
          }

          .cub2{
            align-content: flex-start;
            align-items: flex-start;
            background: linear-gradient(45deg, #0575E6 20%, #00F260 100%);
            border-radius: 10px;
            flex: none;
            flex-direction: column;
            flex-wrap: nowrap;
            height: auto;
            justify-content: flex-start;
            margin: 20px 0px 0px 0px;
            padding: 50px 40px 50px;
            width: 100%;
            max-width: 100%;

            h3{
              color: #FFFFFF;
              font-size: 16px;
              font-weight: 700;
              padding: 5px 20px 5px;
              background: rgba(255, 255, 255, 0.1);
              width: fit-content;
              border-radius: 48px;
            }

            h2{
              color: #FFFFFF;
              font-size: 32px;
              line-height: 1;
              margin: 30px 0px 0px 0px;
            }
          }

          @media screen and (max-width: 840px) {
            margin: 0px 10px 0px 0px;
            max-width: calc(100% - 10px);
          }

          @media screen and (max-width: 540px) {
            display: flex;
            margin: 0px 0px 0px 0px;
            width: 100%;
            max-width: 100%;
          }

        }

        .latder{
          align-content: center;
          align-items: center;
          background: rgba(0,0,0,0.0);
          flex: 1;
          flex-direction: column;
          flex-wrap: nowrap;
          height: auto;
          justify-content: center;
          margin: 0px 0px 0px 10px;
          width: auto;
          max-width: calc(100% - 10px);

          .cub1{
            align-content: flex-start;
            align-items: flex-start;
            background: linear-gradient(45deg, #00F260 0%, #0575E6 100%);
            border-radius: 10px;
            flex: none;
            flex-direction: column;
            flex-wrap: nowrap;
            height: auto;
            justify-content: flex-start;
            padding: 50px 40px 50px;
            width: 100%;
            max-width: 100%;

            h3{
              color: #FFFFFF;
              font-size: 16px;
              font-weight: 700;
              padding: 5px 20px 5px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 48px;
              width: fit-content;
            }

            h2{
              color: #FFFFFF;
              font-size: 32px;
              line-height: 1;
              margin: 30px 0px 0px 0px;
            }  
          }

          .cub2{
            align-content: flex-start;
            align-items: flex-start;
            background: linear-gradient(135deg, #00F260 0%, #0575E6 80%);
            border-radius: 10px;
            flex: none;
            flex-direction: column;
            flex-wrap: nowrap;
            height: auto;
            justify-content: flex-start;
            margin: 20px 0px 0px 0px;
            padding: 50px 40px 50px;
            width: 100%;
            max-width: 100%;

            h3{
              color: #FFFFFF;
              font-size: 16px;
              font-weight: 700;
              padding: 5px 20px 5px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 48px;
              width: fit-content;
            }

            h2{
              color: #FFFFFF;
              font-size: 32px;
              line-height: 1;
              margin: 30px 0px 0px 0px;
            }


          }

          @media screen and (max-width: 540px) {
            margin: 20px 0px 0px 0px;
            max-width: 100%;
            width: 100%;
          }
      
        }

        .extercub{
          align-content: center;
          align-items: center;
          background: rgba(0,0,0,0.0);
          flex: 1;
          flex-direction: column;
          flex-wrap: nowrap;
          height: auto;
          justify-content: center;
          margin: 0px 0px 0px 20px;
          width: auto;
          max-width: calc(100% - 10px);

          .cub3{
            align-content: flex-start;
            align-items: flex-start;
            background: #125BA8;
            border-radius: 10px;
            flex: none;
            flex-direction: column;
            flex-wrap: nowrap;
            height: auto;
            justify-content: flex-start;
            padding: 50px 40px 50px;
            width: 100%;
            max-width: 100%;

            h3{
              color: #00F260;
              font-size: 16px;
              font-weight: 700;
              padding: 5px 20px 5px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 48px;
              width: fit-content;
            }

            h2{
              color: #FFFFFF;
              font-size: 32px;
              line-height: 1;
              margin: 30px 0px 0px 0px;
            }

            @media screen and (max-width: 840px) {
              background: #0575E6;
            }

            @media screen and (max-width: 540px) {
              background: #0575E6;
            }
          }

          @media screen and (max-width: 840px) {
            margin-top: 20px;
          }

          @media screen and (max-width: 540px) {
            margin: 20px 0px 0px 0px;
            max-width: 100%;
            width: 100%;
          }
        }

        @media screen and (max-width: 840px) {
          align-content: flex-start;
          align-items: flex-start;
          margin: 50px 0px 0px 0px;
          width: 100%;
          max-width: 100%;
          flex-wrap: wrap;
        }

        @media screen and (max-width: 540px) {
          flex-direction: column;
          flex-wrap: nowrap;
        }
      }

      @media screen and (max-width: 1140px) {
        margin: 0px 30px -130px;
        max-width: calc(100% - 60px);
      }

      @media screen and (max-width: 840px) {
        flex-direction: column;
        flex-wrap: nowrap;
      }

      @media screen and (max-width: 540px) {
        margin: 0px 20px -130px;
        max-width: calc(100% - 40px);
      }

    }
  }
</style>