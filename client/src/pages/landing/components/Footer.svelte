<script>
  import Logo from '../../../assets/logo.png'
</script>

<footer>
  <div class="linkcont">
    <div class="latiz">
      <!-- <p class="link1">Level Gym</p> -->
      <a href="/" class="logo"><img src={Logo} alt=""></a>
      <div class="link2">
        <p class="title">Comida saludable</p>
        <p class="sub">Una nutrición adecuada aporta al organismo el complejo de vitaminas que necesita y nos hace sentir mejor.</p>
      </div>
    </div>
    <div class="latder">
      <div class="link1">
        <h2>Navigation</h2>
        <a href="#paquetes">Paquetes</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#promos">Promos</a>
        <a href="#programas">Programas</a>
      </div>
      <div class="link2">
        <h2>Contacto</h2>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms and condition</a>
        <a href="/">Contact</a>
      </div>
    </div>
  </div>
  <div class="linea"></div>
  <div class="copy">
    <div class="nom">
      <p class="tit">Level Gym&nbsp; -</p>
      <p class="sub">Cochabamba</p>
    </div>
    <p class="cp">Copyright © 2023 Level Gym.</p>
  </div>
</footer>

<style lang="scss">
  footer{
    align-content: center;
    align-items: center;
    background: #1A2A6C;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    justify-content: center;
    width: 100%;
    max-width: 100%;

    .linkcont{
      align-content: flex-start;
      align-items: flex-start;
      background: rgba(0,0,0,0.0);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: auto;
      justify-content: flex-start;
      margin: 70px 50px 70px;
      width: 1280px;
      max-width: calc(100% - 100px);

      .latiz{
        align-content: flex-start;
        align-items: flex-start;
        background: rgba(0,0,0,0.0);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: auto;
        justify-content: flex-start;
        margin: 0px 60px 0px 0px;
        width: calc(50% - 60px);
        max-width: calc(50% - 60px);

        .logo{
          width: 200px;
          height: 150px;
          margin-top: -60px;
          margin-right: 32px;
          img{
            width: 100%;
            height: 100%;
          }
          
        }

        .link1{
          color: #00F260;
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          width: 50%;
        }

        .link2{
          color: #FFFFFF;
          width: 50%;

          .title{
            font-size: 32px;
            font-weight: 700;
            line-height: 1.2;
            margin: 0px 0px 30px 0px;
          }

          .sub{
            color: #ABA7C3;
          }
        }
      }

      .latder{
        align-content: flex-start;
        align-items: flex-start;
        background: rgba(0,0,0,0.0);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: auto;
        justify-content: flex-start;
        margin: 0px 0px 0px 60px;
        width: calc(50% - 60px);
        max-width: calc(50% - 60px);

        .link1{
          display: flex;
          flex-direction: column;
          width: 60%;
          max-width: 60%;

          h2{
            color: #FFFFFF;
            font-size: 24px;
            line-height: 1.4;
            margin: 0px 0px 30px 0px;
          }

          a{
            color: #ABA7C3;
            text-decoration: none;
          }
        }

        .link2{
          display: flex;
          flex-direction: column;
          width: 40%;
          max-width: 40%;

          h2{
            color: #FFFFFF;
            font-size: 24px;
            line-height: 1.4;
            margin: 0px 0px 30px 0px;
          }

          a{
            color: #ABA7C3;
            text-decoration: none;
          }
        }
      }
    }

    .linea{
      background: linear-gradient(90deg, #7a63d2 0%, rgba(27, 25, 36, 0) 100%);
      display: flex;
      height: 2px;
      margin: 0px 50px 0px;
      opacity: 0.2;
      width: calc(100% - 100px);
      max-width: calc(100% - 100px);
    }

    .copy{
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: auto;
      justify-content: space-between;
      margin: 0px 50px 0px;
      padding: 35px 0px 70px 0px;
      width: calc(100% - 100px);
      max-width: calc(100% - 100px);

      .nom{
        display: flex;
        align-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;

        .tit{
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 700;
          height: auto;
          line-height: 1.4;
          text-align: center;
          width: auto;
          max-width: 100%;
          justify-content: center;
        }

        .sub{
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 400;
          height: auto;
          line-height: 1.4;
          margin: 0px 0px 0px 10px;
          text-align: center;
          width: auto;
          max-width: calc(100% - 10px);
          justify-content: center;
        }

      }

      .cp{
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 400;
        height: auto;
        line-height: 1.4;
        text-align: right;
        width: auto;
        max-width: 100%;
        justify-content: flex-end;
      }
    }
  }
</style>