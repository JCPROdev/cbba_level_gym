<script>
  import IconSearch from "../icons/IconSearch.svelte";
  import SquareButton from "./SquareButton.svelte";
  let verInput = false;
  export let value;
</script>

<div 
  class="buscar" 
>
  <input
    placeholder="Buscar..."
    type="text"
    style="width: {verInput ? '120px' : '0'}; transition: width 0.3s ease;"
    bind:value
  />
  <SquareButton
    on:click={() => (verInput = !verInput)}
  ><IconSearch /></SquareButton>
</div>

<style> 
  .buscar {
    content: "";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 2em;
    right: 2em;
    gap: 20px;
  }
  input {
    border: none;
    border-bottom: solid 1px var(--primary);
    outline: none;
  }
</style>