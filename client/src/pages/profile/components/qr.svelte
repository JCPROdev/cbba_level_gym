<script>
  import QRCode from "qrcode"; 
  import DownloadQr from "../../asistencia/DownloadQR.svelte";
  export let id;
  
  const handleQR = (nodo) => {
    const link = window.location.origin + "/dashboard/asistencia/" + id;
    QRCode.toDataURL(link)
      .then(url => nodo.src = url);
  }
</script>

<div class="qr">
  <img use:handleQR alt="Qr" />
  <p>Escanea este QR para marcar asistencia</p>
  <DownloadQr id={id} />
</div>

<style lang="scss">
  .qr {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    & > p {
      opacity: 0.8;
      font-size: .9rem;
      text-align: center;
    }
    & > img {
      width: 250px;
      height: 250px;
    }
    @media only screen and (max-width: 980px) {
      height: auto;
      gap: 2em;
    }
  }
</style>
