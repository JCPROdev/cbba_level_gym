<script>
  import Qr from "./components/qr.svelte";
  import Perfil from "./components/perfil.svelte";
</script>

<section>
  <Perfil />
  <Qr />
</section>

<style>
  section {
    width: 80%;
    height: auto;
    box-shadow: 0 2px 2px #0005;
    border: solid 1px #0002;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--white);
    border-radius: 16px;
  }
  @media only screen and (max-width: 980px){
    section{
        flex-direction: column;
    }
  
  }
</style>
