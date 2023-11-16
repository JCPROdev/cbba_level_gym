<script>
  import { afterUpdate } from "svelte";

  export let open;
  
  let dialog;
  afterUpdate(() => {
    if(open) {
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>