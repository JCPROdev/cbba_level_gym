<script>
    import SquareButton from "./SquareButton.svelte";
    import IconX from "../icons/IconX.svelte";
    import { fade, fly } from "svelte/transition";
  
    export let open;
    export let closeModal;
  </script>
  
  {#if open}
  <div class="modal">
    <button transition:fade={{ duration: 300 }} on:click={closeModal} />
    <div class="container" transition:fly={{ y: 400, duration: 300 }}>
      <div class="top">
        <SquareButton
          on:click={closeModal}
        ><IconX /></SquareButton>
      </div>
      <div class="bottom">
        <slot />
      </div>
    </div>
  </div>
  {/if}
  
  <style lang="scss">
    .modal {
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      position: fixed;
      display: flex;
      align-items:center;
      justify-content: center;
      bottom: 0;
      left: 0;
      z-index: 100;
    }
    .top {
      padding: 0 1rem;
    }
    button {
      position: fixed;
      width: 100vw;
      height: 100dvh;
      background-color: rgba(0, 0, 0, 0.2);
      border: none;
      z-index: -1;
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      height:500px;
      background-color: var(--white);
      width: 71vw;
      box-shadow: 0 5px 5px #0005;
      padding: 1em 0;
      border-radius: 16px ;
    }
    .bottom {
      height: calc(500px - 65px);
      overflow: auto;
      padding: 0 1rem 1rem;
      }
  </style>
  