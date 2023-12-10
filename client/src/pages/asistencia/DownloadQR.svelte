
<script>
  import QRCode from "qrcode"; 
  export let id;
  
  const handleDownloadQR = (nodo) => {
    const link = window.location.origin + "/dashboard/asistencia/" + id;
    QRCode.toDataURL(link)
      .then(url => nodo.href = url);
  }
</script>

<a use:handleDownloadQR href="/#" download >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="arrow-down-2--down-move-arrow-arrows"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m3.7142857142857144 6.035714285714286 2.7857142857142856 2.7857142857142856 2.7857142857142856 -2.7857142857142856" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 0.4642857142857143v8.357142857142858" stroke-width="1"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3.25 12.535714285714286h6.5" stroke-width="1"></path></g></svg>
  Descargar
</a>

<style lang="scss">
  a {
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
    border: none;
    color: var(--primary);
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
    & > svg {
      width: 20px;
      height: 20px;
      filter: invert(57%) sepia(61%) saturate(495%) hue-rotate(52deg) brightness(95%) contrast(92%);
    }
    &:hover {
      opacity: 0.8;
    }
  }
</style>