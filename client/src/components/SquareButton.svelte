<script>
  export let color = "primary";
  export let disabled = false;
</script>

<button
  style={`
    background-color: var(--${color});
  `}
  on:click
  disabled={disabled}
>
  <slot />  
</button>

<style lang="scss">
  button {
    background-color: var(--primary);
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    padding: 6px;
    border-radius: 6px;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      filter: grayscale(1);
    }
  }
</style>