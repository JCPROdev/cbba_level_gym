<script>

</script>

<div class="sessec">
  <div class="sescont">
    <p>Descubre nuestro programa de sesiones</p>
    <div class="optcont">
      <div class="group1">
        <div class="opt">
          <h3>Sesión completa</h3>
          <p>45 Bs</p>
        </div>
        <div class="opt">
          <h3>Sesión Musculación</h3>
          <p>30 Bs</p>
        </div>
      </div>
      <div class="group2">
        <div class="opt">
          <h3>Sesión Aeróbicos (1)</h3>
          <p>15 Bs</p>
        </div>
        <div class="opt">
          <h3>Sesión Aeróbicos (2)</h3>
          <p>25 Bs</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .sessec{
    align-content: center;
    align-items: center;
    background: rgba(0,0,0,0.0);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;

    .sescont{
      align-content: center;
      align-items: center;
      background: rgba(0,0,0,0.0);
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      height: auto;
      justify-content: flex-start;
      margin: 0px 50px 60px;
      padding: 220px 0px 0px 0px;
      width: 1280px;
      z-index: 2;
      max-width: calc(100% - 100px);

      p{
        color: #FFFFFF;
        font-size: 36px;
        font-weight: 700;
        letter-spacing: -0.05em;
        line-height: 1;
        margin: 25px 0px 25px 0px;
        text-align: center;
        justify-content: center;
      }

      .optcont{
        display: flex;
        flex-direction: row;
        gap: 24px;
        width: 100%;
        max-width: 100%;
        margin: 64px 0px 0px 0px;

        .group1{
          display: flex;
          flex-direction: row;
          width: 50%;
          gap: 20px;

          .opt{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            border: 1px solid #00F260;
            border-radius: 12px;
            padding: 40px 24px;
            margin-top: 24px;
  
            h3{
              color: #00F260;
              font-size: 16px;
              font-weight: 600;
              padding: 5px 20px 5px;
              background: #2F2B44;
              border-radius: 48px;
              width: fit-content;
            }
  
            p{
              color: #ABA7C3;
            }

            @media screen and (max-width: 540px) {
              margin-top: 0;
            }
          }
          
          .opt:nth-of-type(2){
            background: #2F2B44;
            border: none;
            margin-top: 0;
            height: fit-content;

            h3{
              background: rgba(255, 255, 255, 0.1);
            }

            p{
              color: #FFFFFF;
            }
          }

          @media screen and (max-width: 1140px) {
            width: 100%;
          }

          @media screen and (max-width: 540px) {
            flex-wrap: wrap;
          }
        }

        .group2{
          display: flex;
          flex-direction: row;
          width: 50%;
          gap: 20px;

          .opt{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: fit-content;
            border-radius: 12px;
            padding: 40px 24px;
            background: #2F2B44;
  
            h3{
              color: #00F260;
              font-size: 16px;
              font-weight: 600;
              padding: 5px 20px 5px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 48px;
              width: fit-content;
            }
  
            p{
              color: #FFFFFF;
            }
          }
          
          .opt:nth-of-type(2){
            border: 1px solid #00F260;
            border-radius: 12px;
            background: none;
            margin-top: 24px;
            height: fit-content;

            h3{
              background: #2F2B44;
            }

            p{
              color: #ABA7C3;
            }

            @media screen and (max-width: 540px) {
              margin-top: 0;
            }
          }

          @media screen and (max-width: 1140px) {
            width: 100%;
          }

          @media screen and (max-width: 540px) {
            flex-wrap: wrap;
          }
        }
        

        @media screen and (max-width: 1140px) {
          flex-direction: column;
          align-items: center;
        }
      }

    }
  }
</style>