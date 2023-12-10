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

<div class="container">
  <div class="img-container">
    <img alt="QR" use:handleQR />
  </div>
  <p>Escanea este QR para marcar asistencia</p>
  <DownloadQr id={id} />
</div>

<style lang="scss">
  .container {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .img-container {
    height: 250px;
    width: 250px;
    & > img {
      height: 100%;
      width: 100%;
    }
  }
  p {
    opacity: 0.8;
    font-size: .9rem;
    text-align: center;
  }
</style>