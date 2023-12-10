<script>
  export let handleClick;
  export let text;
  export let color = "primary";
</script>

<button 
  style={`--icon-color: var(--${color})`}
  on:click={handleClick}
>
  <slot />
  {text}
</button>

<style>
  button {
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
    border: none;
    color: var(--icon-color);
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
    
    & > svg {
      width: 20px;
      height: 20px;
      filter: invert(57%) sepia(61%) saturate(495%) hue-rotate(52deg) brightness(95%) contrast(92%);
    }
  }

  button:hover {
    opacity: 0.8;
  }
</style>