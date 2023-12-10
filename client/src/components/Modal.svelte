<script>
  import { afterUpdate } from "svelte";

  export let open;

  let dialog;
  afterUpdate(() => {
    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  });
</script>

<dialog bind:this={dialog}>
  <slot />
</dialog>

<style lang="scss">
  dialog {
    position: fixed;
    top: 60%;
    padding: 1em;
    border: none;
    width: 100vw;
    height: 40%;
    margin: 0 auto;
    animation: vertical-in 1s ease-in-out;
    background-color:#fff;
    gap: 1em;
    box-shadow: 0 5px 5px #0005;
   
  }
</style>
