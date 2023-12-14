<script>
  export let text;
  export let value;
</script>

<div>
  <label for={`select-${text}`}>{text}</label>
  <select id={`select-${text}`} bind:value>
    <slot />
  </select>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  label {
    font-size: 14px;
    margin-left: 8px;
  }
  select {
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, .3);
    outline: none;
    border-radius: 8px;
    background-color: white;
  }
  select:focus {
    border: 1px solid var(--primary);
  }
</style>
