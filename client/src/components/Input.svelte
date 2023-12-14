<script>
  // @ts-nocheck
  export let text;
  export let value;
  export let type = "text";

  const typeWorkaround = (node) => (node.type = type);
</script>

<div>
  <label for={`txt-${text}`}>{text}:</label>
  <input id={`txt-${text}`} bind:value use:typeWorkaround />
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
  input {
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, .3);
    outline: none;
    border-radius: 8px;
  }
  input:focus {
    border: 1px solid var(--primary);
  }
</style>
