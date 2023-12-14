<button on:click>
  <slot />  
</button>

<style>
  button {
    margin-top: 26px;
    height: 39px;
    padding: 0 10px;
    border: none;
    color: var(--white);
    background-color: var(--primary);
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    transition: opacity 0.3s;
    cursor: pointer;
    width: max-content;
  }
  button:hover {
    opacity: 0.8;
  }
  button:disabled {
    filter: grayscale(1);
    pointer-events: none;
  }
</style>