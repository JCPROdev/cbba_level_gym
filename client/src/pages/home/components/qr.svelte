<script>
  import qrImg from "../../../assets/qrImg.png";
  import store from "../../../assets/iconos/store.png";
</script>

<div class="qr">
  <img src={qrImg} alt="Qr" />
  <button> <img src={store} alt="" />Actualizar</button>
</div>

<style>
  .qr {
    width: 50%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5em;
    & > img {
      width: 250px;
      height: 250px;
    }
    @media only screen and (max-width: 980px) {
      height: auto;
      gap: 2em;
    }
  }
  button {
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
    border: none;
    color: var(--primary);
    font-weight: 600;
    & > img {
      width: 20px;
      height: 20px;
    }
  }
</style>
