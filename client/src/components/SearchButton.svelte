<script>
  import buscar from "../assets/iconos/buscar.png";
  let verInput = false;
  export let value;
</script>

<button 
  class="buscar" 
>
  <input
    type="text"
    style="width: {verInput ? '100%' : '0'}; transition: width 1s ease;"
    bind:value
  />
  <button on:click={() => (verInput = !verInput)}>
    <img src={buscar} alt="buscar" />
  </button>
</button>

<style> 
  .buscar {
    content: "";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 2em;
    right: 2em;
    width: 200px;
  }
  input {
    border: none;
    border-bottom: solid 1px var(--primary);
    outline: none;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
</style>