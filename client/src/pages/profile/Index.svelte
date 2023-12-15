<script>
  import Qr from "./components/qr.svelte";
  import Perfil from "./components/perfil.svelte";
  import Head from "../../components/Head.svelte";
  import { getRequest } from "../../utilities/getRequest";
  import Loader from "../../components/Loader.svelte";
  import fondo from "../../assets/logo-fondo.png";

  export let id;
  
  const inscripcion = getRequest(`inscripcion/${id}`);
</script>

<Head title="Asistencia" />
<section>
  <img src={fondo} alt="" class="backgraund-a" />
  {#await inscripcion}
    <Loader />
  {:then { data }} 
    <Perfil data={data} />
    <Qr id={id} />
  {/await}
</section>

<style lang="scss">
  section {
    width: 80%;
    height: 65vh;
    box-shadow: 0 2px 2px #0005;
    border: solid 1px #0002;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border-radius: 16px;
    padding: 40px 0;
    overflow: auto;
    position: relative;
    isolation: isolate;

    @media screen and (max-width: 1092px) {
      flex-direction: column;
      justify-content: flex-start;
      gap: 24px;
    }

    .backgraund-a {
      width: 100%;
      height: 80%;
      position: absolute;
      object-fit: cover;
      z-index: -1;
    }
  }
</style>
