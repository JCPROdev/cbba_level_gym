<script>
  import Promo1 from '../../../assets/promo1.png'
  import { useGet } from '../../../hooks/useGet';

  let { data } = useGet("promocion");
</script>

{#if $data}
  <div id="promos" class="promocont">
    <div class="latiz">
      <img src={$data.foto} alt="">
    </div>
    <div class="latder">
      <h1>Promociones</h1>
      <p class="title">{$data.titulo}</p>
      <p class="sub">{$data.descripcion}</p>
    </div>
  </div>
{/if}

<style lang="scss">
  .promocont{
    align-content: flex-end;
    align-items: flex-end;
    background: rgba(0,0,0,0.0);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: auto;
    justify-content: flex-start;
    margin: 70px 50px 80px;
    padding: 30px 0px 0px 0px;
    width: 1280px;
    max-width: calc(100% - 100px);

    .latiz{
      position: relative;
      align-content: flex-start;
      align-items: flex-start;
      background: rgba(0,0,0,0.0);
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      height: auto;
      justify-content: flex-start;
      margin: 0px 0px 50px 0px;
      transition-duration: 1000ms;
      width: 50%;
      max-width: 50%;

      img{
        align-content: flex-start;
        align-items: flex-start;
        border-radius: 12px;
        flex: none;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 420px;
        justify-content: flex-end;
        margin: 0px 0px 15px 15px;
        width: calc(100% - 15px);
        max-width: calc(100% - 15px);

        @media screen and (max-width: 540px) {
          display: flex;
          height: 330px;
          width: calc(100% - 15px);
          max-width: calc(100% - 15px);
        }
      }

      @media screen and (max-width: 840px) {
        width: 100%;
        max-width: 100%;
      }
    }

    .latiz::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(47,43,68,0.5) 100%;
      z-index: 1;
      margin: 0px 0px 15px 15px;
      border-radius: 12px;
    }

    .latder{
      align-content: flex-start;
      align-items: flex-start;
      background: rgba(0,0,0,0.0);
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      height: auto;
      justify-content: flex-end;
      margin: 0px 0px 0px 100px;
      transition-duration: 1000ms;
      width: calc(50% - 100px);
      max-width: calc(50% - 100px);

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

        @media screen and (max-width: 540px) {
          font-size: 32px;
        }
      }

      .sub{
        color: #ABA7C3;
        font-size: 16px;
        font-weight: 400;
        height: auto;
        line-height: 1.5;
        margin: 0px 0px 25px 0px;
        text-align: left;
        width: 70%;
        max-width: 70%;
        justify-content: flex-start;
      }

      @media screen and (max-width: 1140px) {
        margin: 0px 0px 0px 60px;
        width: calc(50% - 60px);
        max-width: calc(50% - 60px);
      }

      @media screen and (max-width: 840px) {
        margin: 0px 0px 0px 0px;
        width: 100%;
        max-width: 100%;
      }
    }

    @media screen and (max-width: 1140px) {
      margin: 0px 30px 50px;
      max-width: calc(100% - 60px);
    }

    @media screen and (max-width: 840px) {
      flex-direction: column;
      flex-wrap: nowrap;
    }

    @media screen and (max-width: 540px) {
      margin: 0px 20px 50px;
      max-width: calc(100% - 40px);
    }
  }
</style>