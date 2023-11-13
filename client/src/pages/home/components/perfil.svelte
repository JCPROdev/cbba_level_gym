<script>
  import img from "../../../assets/perfil.png";
</script>

<div class="perfil">
  <div class="cliente">
    <img src={img} alt="" />
    <strong> nombre</strong> rol(Cliente)
  </div>
  <div class="info">
    <strong> paquete:</strong>
    <p>Grupo2</p>
    <strong>Fecha: </strong>
    <div>
      <p>10/11/23</p>
      -
      <p>10/10/22</p>
    </div>
    <strong>Dias restantes :</strong>
    <p>20 restantes</p>
  </div>
</div>

<style>
  .perfil {
    width: 50%;
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      background-color: #0003;
      width: 1px;
      height: 80%;
      right: 0;
    }
    @media only screen and (max-width: 980px) {
      &::after {
        width: 0;
      }
    }
  }
  .cliente {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    color: #0009;
  }
  strong {
    width: 40%;
    color: #65b32e;
    text-align: right;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;

    & > div {
      display: flex;
      gap: 1em;
      width: 25%;
    }
  }
  p {
    color: #0009;
    width: 50%;
  }
</style>
