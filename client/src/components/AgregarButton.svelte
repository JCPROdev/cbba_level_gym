<script>
  import store from "../assets/iconos/store.png";
</script>

<button on:click>
  <img src={store} alt="icon-store" />
  Agregar
</button>

<style>
  button {
    color: var(--primary);
    border: none;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    overflow: hidden;
    padding: 0.5em 1em;
    align-self: flex-end;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    gap: 1em;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    &:hover {
      opacity: 0.8;
    }
  }
</style>