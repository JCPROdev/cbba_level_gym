<script>
  export let onClick;
  export let disabled = false;
</script>

<button on:click={onClick} {disabled}>
  <slot />
</button>

<style>
  button {
    padding: 10px;
    background-color: var(--blue);
    border: none;
    color: var(--white);
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    transition: opacity 0.3s;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
  button:disabled {
    filter: grayscale(1);
    pointer-events: none;
  }
</style>