<script>
  import Check from '../../../assets/iconos/check.svg'
</script>

<div id="paquetes" class="pricecont">
  <div class="card1">
    <h3>Paquete completo</h3>
    <div class="price">
      <p class="t1">250 Bs</p>
      <p class="t2">/ Mes</p>
    </div>
    <p class="t3">Package for beginners and less
      demanding customers. You can
      upgrade to a higher package at any
      time.</p>
    <div class="op1">
      <img src={Check} alt="">
      <h4>Personal trainer</h4>
    </div>
    <div class="op2">
      <img src={Check} alt="">
      <h4>Dedicated Training plan</h4>
    </div>
  </div>
  <div class="card2">
    <h3>Aeróbicos</h3>
    <div class="price">
      <p class="t1">150 Bs</p>
      <p class="t2">/ Mes</p>
    </div>
    <p class="t3">Advanced package for demanding 
      customers. You can switch to a lower 
      package at any time.
    </p>
    <div class="op">
      <img src={Check} alt="">
      <h4>Personal trainer</h4>
    </div>
    <div class="op">
      <img src={Check} alt="">
      <h4>Dedicated Training plan</h4>
    </div>
    <div class="op">
      <img src={Check} alt="">
      <h4>Premium support for Diets</h4>
    </div>
    <div class="op">
      <img src={Check} alt="">
      <h4>Access to nutrients</h4>
    </div>
  </div>
  <div class="card3">
    <h3>Aparatos + Cardio</h3>
    <div class="price">
      <p class="t1">200 Bs</p>
      <p class="t2">/ Mes</p>
    </div>
    <p class="t3">Package for beginners and less 
      demanding customers. You can 
      upgrade to a higher package at any 
      time.</p>
    <div class="op">
      <img src={Check} alt="">
      <h4>Personal trainer</h4>
    </div>
    <div class="op">
      <img src={Check} alt="">
      <h4>Dedicated Training plan</h4>
    </div>
    <div class="op">
      <img src={Check} alt="">
      <h4>Premium support for Diets</h4>
    </div>
  </div>
</div>


<style lang="scss">
  .pricecont{
    display: flex;
    flex-direction: row;
    width: 1280px;
    // margin: 0px 50px 80px;
    margin: -130px 50px 80px;
    padding: 30px 0px 0px 0px;
    align-items: center;
    justify-content: center;
    z-index: 2;
    
    .card1{
      display: flex;
      flex-direction: column;
      height: auto;
      flex-wrap: nowrap;
      margin: 0px 10px 0px 0px;
      padding: 60px 40px 60px;
      border: 2px solid #00F260;
      border-radius: 10px;
      width: calc(33% - 10px);

      h3{
        color: #00F260;
        font-size: 16px;
        background: #2F2B44;
        padding: 5px 20px;
        border-radius: 48px;
        width: fit-content;
        max-width: 100%;
      }

      .price{
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        align-items: center;
        margin: 25px 0px 0px 0px;

        .t1{
          font-size: 48px;
          font-weight: 700;
        }

        .t2 {
          margin: 0px 0px 0px 15px;
          font-family: 'Lato';
          font-size: 20px;
          font-weight: 400;
        }
      }

      .t3{
        color: #ABA7C3;
        height: auto;
        margin: 30px 0px 30px 0px;
        text-align: left;
        width: 100%;
      }

      .op1,.op2{
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 14px 0px 14px 0px;

        img {
          width: 24px;
          height: 24px;
        }

        h4{
          margin: 0px 0px 0px 15px;
        }
      }
    }

    .card2{
      width: calc(33% - 20px);
      border-radius: 10px;
      background: linear-gradient(27deg, #0575E6 0%, #00F260 100%);
      display: flex;
      flex-direction: column;
      margin: 0px 10px 0px;
      padding: 60px 40px 60px;

      h3{
        color: #00F260;
        background: #2F2B44;
        padding: 5px 20px;
        width: fit-content;
        border-radius: 48px;
        font-size: 16px;
      }

      .price{
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        align-items: center;
        margin: 25px 0px 0px 0px;
        width: 100%;
        max-width: 100%;
        justify-content: flex-start;
        .t1{
          font-size: 48px;
          font-weight: 700;
        }

        .t2{
          margin: 0px 0px 0px 15px;
          font-family: 'Lato';
          font-size: 20px;
          font-weight: 400;
        }
      }

      .t3{
        color: #FFFFFF;
        margin: 30px 0px 30px 0px;
      }

      .op{
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 14px 0px 14px 0px;

        img{
          width: 24px;
          height: 24px;
        }

        h4{
          margin: 0px 0px 0px 15px;
        }
      }

    }

    .card3{
      display: flex;
      flex-direction: column;
      height: auto;
      flex-wrap: nowrap;
      margin: 0px 0px 0px 10px;
      padding: 60px 40px 60px;
      border: 2px solid #00F260;
      border-radius: 10px;
      width: calc(33% - 10px);

      h3{
        color: #00F260;
        font-size: 16px;
        background: #2F2B44;
        padding: 5px 20px;
        border-radius: 48px;
        width: fit-content;
      }

      .price{
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        align-items: center;
        margin: 25px 0px 0px 0px;

        .t1{
          font-size: 48px;
          font-weight: 700;
        }

        .t2{
          margin: 0px 0px 0px 15px;
          font-family: 'Lato';
          font-size: 20px;
          font-weight: 400;
        }
      }

      .t3{
        color: #ABA7C3;
        height: auto;
        margin: 30px 0px 30px 0px;
        text-align: left;
        width: 100%;
      }

      .op{
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 14px 0px 14px 0px;

        img {
          width: 24px;
          height: 24px;
        }

        h4{
          margin: 0px 0px 0px 15px;
        }
      }
    }
  }
</style>