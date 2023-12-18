<script>
  import store from "../assets/iconos/store.png";
    import IconAdd from "../icons/IconAdd.svelte";
  import IconButton from "./IconButton.svelte";
</script>

<div>
  <IconButton 
    text="Agregar"
    on:click
  ><IconAdd /></IconButton>
</div>

<style>
  div {
    align-self: flex-end;
    padding-top: 20px;
    justify-self: flex-end;
  }
</style>